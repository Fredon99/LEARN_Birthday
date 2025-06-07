Commands:

docker network create application

cd <application-frontend>

docker build -t frontend .

docker run -d --network application --name frontend -p 3000:3000 frontend:latest

cd <application-backend>

docker build -t backend .

docker run -d --network application --name backend -p 8000:8000 backend:latest

Or execute:

docker compose build

docker compose up -d

If you need to debug

# Build and start in detached mode
docker-compose up -d

# Check running containers
docker-compose ps

# View logs from all services
docker-compose logs

# Follow logs from one service (e.g., frontend)
docker-compose logs -f frontend

To stop
# Stop containers
docker-compose down