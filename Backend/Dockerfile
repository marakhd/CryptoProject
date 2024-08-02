FROM python:3.12.2-slim

COPY src/requirements.txt requirements.txt
RUN pip install -r requirements.txt

COPY ./src .

EXPOSE 8000

CMD [ "python3", "run.py" ]
