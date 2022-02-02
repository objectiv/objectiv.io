.PHONY: build-all build-website build-docs build-docker-website



OBJECTIV_ENVIRONMENT ?= docker

all: build-docker-website-image

build-website-yarn:
	yarn install && yarn build

build-docs-yarn:
	cd docs && yarn install && yarn build

build-docker-build-image:
	$(info building for ${OBJECTIV_ENVIRONMENT})
	docker build --build-arg OBJECTIV_ENVIRONMENT=$(OBJECTIV_ENVIRONMENT) --no-cache -t objectiv/website-build -f docker/build/Dockerfile .


# build docker container for full website, including docs
# set environment to docker, to make sure the right config/env is loaded
build-docker-website-image: build-docker-build-image
	docker build --no-cache -t objectiv/website -f docker/website/Dockerfile .

build-docker-deployment-image:
	docker build --no-cache -t objectiv/website-deploy -f docker/deploy/Dockerfile .

# spin up the website container, and check all _internal_ links for broken ones
# external links are skipped
check-broken-links: build-docker-website-image
	# spin up website
	docker run --rm -d -p 127.0.0.1:8080:80 --name objectiv_website_broken_link_check objectiv/website
	./node_modules/.bin/blc --recursive --exclude-external --ordered --host-requests 10 http://localhost:8080
	docker stop objectiv_website_broken_link_check
