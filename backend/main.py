from fastapi import FastAPI
import openai
import uuid

from dotenv import load_dotenv
import os

from models.userInput import Email
from models.reply import Reply

from mangum import Mangum

from fastapi.middleware.cors import CORSMiddleware

load_dotenv()

os.environ["OPENAI_API_KEY"] = os.getenv("OPENAI_API_KEY")

openai.api_key = os.environ["OPENAI_API_KEY"]

app:FastAPI = FastAPI()

# Must for local development
app.add_middleware(
    CORSMiddleware, allow_origins=['*'], allow_methods=['*'], allow_headers=['*'],
)

@app.get("/")
async def read_root():
    return {"message": "Status: OK"}


@app.post("/get_reply/")
async def get_reply(email: Email) -> Reply:
    
    # DaVinci is easy to use, cheap but legacy model. Great for texts.
    email_reply = openai.Completion.create(model="text-davinci-003", prompt= f'Write a personalized email in English to a person named {email.name}. Please ensure that the response is written in English, unless otherwise specified. Purpose of the email is {email.purpose}. The tone of the response should be Professional. Please use additional context given as follows {email.context}.',
      temperature= 0.2,
      max_tokens= 2000
    )
    
    reply: Reply = Reply(status="success", email=email, id=uuid.uuid4().hex, text = email_reply.choices[0].text)
    return reply

# Used for deploying on AWS Lambda
handler = Mangum(app)