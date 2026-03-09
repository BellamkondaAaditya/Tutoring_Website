from database import get_session, AppUsage

def inspect_data():
    session = get_session()
    try:
        results = session.query(AppUsage).all()
        print(f"Found {len(results)} records:")
        for record in results:
            print(f"ID: {record.id}, Device: {record.device_name}, App: {record.app_name}, Duration: {record.duration_seconds}s, Time: {record.timestamp}")
    except Exception as e:
        print(f"Error querying database: {e}")
    finally:
        session.close()

if __name__ == "__main__":
    inspect_data()
