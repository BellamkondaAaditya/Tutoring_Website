# database.py
from sqlalchemy import create_engine, Column, Integer, String, DateTime, Float
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from datetime import datetime
import os

# Database URL - you can change this to switch between SQLite and PostgreSQL
DATABASE_URL = "sqlite:///./screentime.db"

# For PostgreSQL, you would use:
# DATABASE_URL = "postgresql://username:password@localhost:5432/screentime"

# Create engine
# echo=True prints all SQL queries (useful for debugging, turn off in production)
engine = create_engine(
    DATABASE_URL,
    connect_args={"check_same_thread": False}  # Only needed for SQLite
)

# Create SessionLocal class
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Create Base class for models
Base = declarative_base()

class AppUsage(Base):
    """
    Stores app usage data from various devices
    """
    __tablename__ = "app_usage"
    
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    device_name = Column(String(100), nullable=False, index=True)
    app_name = Column(String(200), nullable=False, index=True)
    duration_seconds = Column(Float, nullable=False)
    timestamp = Column(DateTime, default=datetime.utcnow, nullable=False, index=True)
    
    def __repr__(self):
        return f"<AppUsage(device='{self.device_name}', app='{self.app_name}', duration={self.duration_seconds})>"

def init_db():
    """
    Creates all tables in the database.
    Call this once when setting up your app.
    """
    Base.metadata.create_all(bind=engine)
    print("Database tables created successfully!")

def get_db():
    """
    Dependency function to get database session.
    Use this with FastAPI's Depends() to automatically manage sessions.
    
    Usage in FastAPI:
        @app.post("/usage")
        def create_usage(data: UsageData, db: Session = Depends(get_db)):
            # db is automatically provided and cleaned up
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def get_session():
    """
    Alternative: Get a database session manually.
    Remember to close it when done!
    
    Usage:
        session = get_session()
        try:
            # do database work
            session.commit()
        except:
            session.rollback()
        finally:
            session.close()
    """
    return SessionLocal()