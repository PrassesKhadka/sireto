import os
from dotenv import load_dotenv

from pathlib import Path
env_path=Path('.')/'.env'
load_dotenv(dotenv_path=env_path)

class Settings:
    PROJECT_NAME:str = "Github Authentication"
    PROJECT_VERSION: str = "1.0.0"
    DATABASE_URL = "sqlite:///./sql_app.db"
    GITHUB_CLIENT_ID = os.getenv('GITHUB_CLIENT_ID')
    GITHUB_CLIENT_SECRET = os.getenv('GITHUB_CLIENT_SECRET')
    GITHUB_REDIRECT_URI = os.getenv('GITHUB_REDIRECT_URI')
    JWT_SECRET_KEY = os.getenv('JWT_SECRET_KEY')
    ALGORITHM = os.getenv('ALGORITHM')

settings=Settings()