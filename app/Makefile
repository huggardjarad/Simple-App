VERSION := $(shell git describe --abbrev=0)
LAST_COMMIT := $(shell git rev-parse --short HEAD)

start:
	VERSION=$(VERSION) \
	LAST_COMMIT=$(LAST_COMMIT) \
	npm start

install:
	npm install

test-app:
	npm test

build:
	GIT_VERSION=$(VERSION) \
	GIT_COMMIT=$(LAST_COMMIT) \
	docker-compose build

run:
	docker run -p 8000:8000 mcallinan/simpleapp:latest