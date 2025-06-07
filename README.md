# Birthday Application
This application mains to show the remaining days for the user.

## Project structure
```
├── application_backend
│   ├── app.js
│   ├── Dockerfile
│   ├── package.json
│   └── package-lock.json
├── application_frontend
│   ├── Dockerfile
│   ├── nginx.conf
│   └── src
│       ├── favicon.ico
│       ├── images
│       │   └── bardei.jpeg
│       ├── index.html
│       ├── js
│       │   └── script.js
│       └── styles
│           └── style.css
├── docker-compose.yaml
└── README.md

```
## Application architecture
![Architecture image](https://github.com/Fredon99/LEARN_Birthday/blob/main/architecture.png)

## Requirements
<p align="center">
  <img src="https://github.com/Fredon99/LEARN_Birthday/blob/main/architecture.png?raw=true" alt="Architecture image">
</p>

## How to run using docker compose
### Start
```
docker compose build
docker compose up -d
```
### Stop
```sh
docker compose down
```


## How to run with each container separately
```sh
docker network create application
cd <application-frontend>
docker build -t frontend .
docker run -d --network application --name frontend -p 3000:3000 frontend:latest
cd <application-backend>
docker build -t backend .
docker run -d --network application --name backend -p 8000:8000 backend:latest
```

## If you need to debug
### Check running containers
```sh
docker compose ps
```
### View logs from all services
```sh
docker compose logs
```
# Follow logs from one service
```sh
docker compose logs -f frontend
```