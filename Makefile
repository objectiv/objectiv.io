.PHONY: build-all build-website build-docs build-docker-website


OBJECTIV_ENVIRONMENT := "staging production"

# default tag is current date
TAG ?= $(shell date +%Y%M%d)

all: build-docker-website-image

build-website-yarn:
	yarn install --network-timeout 100000 && yarn build && mv build build-$(OBJECTIV_ENVIRONMENT)

# clean up existing builds, this is not needed for dockerized builds ofc
clean: clean-website clean-docs
clean-website:
	rm -rf build
	rm -rf node_modules
clean-docs:
	rm -rf docs/build
	rm -rf docs/node_modules

build-docs-yarn:
	cd docs && yarn install --network-timeout 100000 && yarn build && mv build build-$(OBJECTIV_ENVIRONMENT)

build-docker-build-image:
	$(info building for ${OBJECTIV_ENVIRONMENT})
	docker build --build-arg OBJECTIV_ENVIRONMENT=$(OBJECTIV_ENVIRONMENT) --no-cache -t objectiv/website-build:${TAG} -f docker/build/Dockerfile .


# build docker container for full website, including docs
# set environment to docker, to make sure the right config/env is loaded
build-docker-website-image: OBJECTIV_ENVIRONMENT="docker"
build-docker-website-image: build-docker-build-image build-docker-deploy-image
	docker run -e OBJECTIV_ENVIRONMENT=docker -v ${PWD}/output:/extract -t objectiv/website-deploy:${TAG} extract.sh
	docker buildx build --output type=image,push=true --platform linux/amd64,linux/arm64 \
  		--no-cache -t objectiv/website:${TAG} -f docker/website/Dockerfile .

build-docker-deploy-image:
	docker build --build-arg TAG=${TAG} --no-cache -t objectiv/website-deploy:${TAG} -f docker/deploy/Dockerfile .


check-broken-links-staging:
	docker run --rm --name broken-link-checker-staging -i node:16 bash -c \
		"yarn add broken-link-checker; ./node_modules/.bin/blc --recursive --exclude-external --ordered --host-requests 10 https://staging.objectiv.io"

# spin up the website container, and check all _internal_ links for broken ones
# external links are skipped
check-broken-links: build-docker-website-image
	# spin up website
	docker run --rm -d -p 127.0.0.1:8080:80 --name objectiv_website_broken_link_check objectiv/website:$TAG
	./node_modules/.bin/blc --recursive --exclude-external --ordered --host-requests 10 http://localhost:8080
	docker stop objectiv_website_broken_link_check
