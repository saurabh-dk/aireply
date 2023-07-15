from pydantic import BaseModel
from typing import Optional

class Reply(BaseModel):
    id: str
    text: Optional[str]
    status: str
    text: str