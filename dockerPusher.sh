DOCKER_IMAGE_NAME=harbor.project-geek.cc/library/learn-japanese

docker buildx create --use --name jp-builder || true

docker buildx build \
        --push \
        --platform linux/amd64,linux/arm64 \
        -t $DOCKER_IMAGE_NAME:latest \
        .