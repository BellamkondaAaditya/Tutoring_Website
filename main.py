from database import init_db, get_db, AppUsage
from sqlalchemy.orm import Session
from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from datetime import datetime
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from typing import List

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

@app.on_event("startup")
def startup_event():
    init_db()

class UsageData(BaseModel):
    app_name: str
    device_name: str
    duration_seconds: float

class UsageResponse(UsageData):
    id: int
    timestamp: datetime

    class Config:
        from_attributes = True

@app.post("/log-usage")
def log_usage(data: UsageData, db: Session = Depends(get_db)):
    """
    Log app usage data into the database
    """
    usage = AppUsage(
        app_name = data.app_name,
        device_name = data.device_name,
        duration_seconds = data.duration_seconds
    ) # default data time is now

    db.add(usage)
    db.commit()
    db.refresh(usage)

    return {
        "status": "success",
        "id": usage.id,
        "timestamp": usage.timestamp
    }

@app.get("/usage", response_model=List[UsageResponse])
def get_usage(db: Session = Depends(get_db)):
    print("FRONTEND REQUEST: Fetching data from screentime.db...")
    return db.query(AppUsage).all()

# Mount static files (HTML, CSS, JS) from the 'static' directory
app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/")
def read_root():
    return FileResponse('static/index.html')