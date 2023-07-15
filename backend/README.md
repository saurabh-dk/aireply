# AiReply backend API

This directory contains the backend API app. It is built with [FastAPI](https://fastapi.tiangolo.com/).

## Requirements

- python-dotenv
- openai
- fastapi
- uvicorn
- pydantic

## 1. Installation of dependencies

I used the most common way of installing dependencies, which is using `pip install` with a requirements.txt.

Tutorial was created using `Python 3.9`.

```bash
pip install -r requirements.txt
```

It is advised to at the very least install these requirements in a virtual environment. To create a virtual environment and install the requirements there, use the following:

```bash
python3 -m venv venv
. venv/bin/activate
pip install -r requirements.txt
```

Ideally, `poetry` should be used for a smoother experience. I ignored this additional complexity for now.

### 3. OpenAI API key

Add your OpenAI API key to .env

Done.

## 2. Running the server

Run this command to start a development server :

```console
uvicorn main:app --reload
```

This will start a server running on `http://127.0.0.1:8000`. The API will be available on the API's base prefix, which is `/`.

Navigate to `http://localhost:8000/` to access the root API path.
Navigate to `http://localhost:8000/docs` to access the API's documentation.
Navigate to `http://localhost:8000/redoc` to access the API's alternative doc built with ReDoc.
