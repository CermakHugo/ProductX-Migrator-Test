

FROM python:3.9-slim AS build

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

RUN pip install --no-cache-dir -r requirements.txt

CMD ["python", "app.py"]

HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
  CMD curl --fail http://localhost:8000/health || exit 1

EXPOSE 8000

LABEL maintainer="Your Name <your.email@example.com>"

LABEL com.docker.version="20.10.7"

LABEL io.kubernetes.version="1.21.2"

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

RUN mkdir -p /var/log/app
RUN chown -R app:app /var/log/app

VOLUME ["/var/log/app"]

USER app

WORKDIR /app

CMD ["python", "app.py"]