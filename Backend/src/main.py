from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from router import router as router_crypto

app = FastAPI()

app.include_router(router_crypto)


origins = [
    "http://localhost:5173",
    "http://localhost:5500",
    "http://localhost:4000",
    "http://127.0.0.1:5173",
    "http://127.0.0.1:5500",
    "http://127.0.0.1:4000",
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=["*"]
)
