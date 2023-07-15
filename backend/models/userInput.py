from pydantic import BaseModel

class Email(BaseModel):
    id: str
    name: str
    email: str
    context: str
    purpose: str