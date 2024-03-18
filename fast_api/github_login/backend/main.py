from typing import Union,Optional,Annotated
from fastapi import FastAPI,Response
from fastapi.responses import RedirectResponse,JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from config import settings
import httpx

client_id=settings.GITHUB_CLIENT_ID
client_secret=settings.GITHUB_CLIENT_SECRET
redirect_uri=settings.GITHUB_REDIRECT_URI

app=FastAPI()
origins = [
    "http://localhost:3000",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"], # include additional methods as per the application demand
    allow_headers=["Content-Type","Set-Cookie" , "Cookie"],    
)

class user_code(BaseModel):
    code:str
class token_model(BaseModel):
    token:str

@app.get("/api/login")
def redirect_login():
    print("Login request incoming to github for oauth")
    return RedirectResponse(f'https://github.com/login/oauth/authorize?client_id={client_id}&redirect_uri={redirect_uri}', status_code=302)

@app.post("/api/token")   
async def get_token(user_code:user_code):
    response=await get_access_token(user_code.code)

    # if 'access_token' in response:
         



async def get_access_token(code:str):
    params={
        'client_id':client_id,
        'client_secret':client_secret,
        'code':code
    }
    headers={'Accept':'application/json'}
    async with httpx.AsyncClient() as client:
        response=await client.post(url="https://github.com/login/oauth/access_token" , params = params , headers = headers)
        return response.json()

async def get_user_information(access_token):
    headers={
        'Accept' : 'application/json',
        'Authorization': f'Bearer {access_token}'
    }
    async with httpx.AsyncClient() as client:
        response=await client.get('https://api.github.com/user' , headers=headers)
        return response.json()
