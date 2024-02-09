#!/bin/bash

# Run Docker Compose
docker compose -f "docker-compose.yaml" up -d --build

# Check the exit code of the previous command
if [ $? -eq 0 ]; then
    echo "Container started successfully."
    exit 0  # Exit with success code
else
    echo "Error starting container."
    exit 1  # Exit with error code
fi
