from pydantic_settings import BaseSettings, SettingsConfigDict
from pathlib import Path

class Settings(BaseSettings):
    CMC_API_KEY: str

    model_config = SettingsConfigDict(env_file=Path(__file__).resolve().parent / ".env")

    
settings = Settings()
