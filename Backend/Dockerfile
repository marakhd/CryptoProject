FROM python:3.12.2-slim

COPY src/requirements.txt requirements.txt
RUN pip install -r requirements.txt

COPY ./src .

CMD [ "python3", "main.py" ]
