.PHONY: build-all build-website build-docs build-docker-website


OBJECTIV_ENVIRONMENT := "staging production"

all: build-docker-website-image


build-website-yarn:
	yarn install && yarn build && mv build build-$(OBJECTIV_ENVIRONMENT)

build-docs-yarn:
	cd docs && yarn install && yarn build && mv build build-$(OBJECTIV_ENVIRONMENT)

build-docker-build-image:
	$(info building for ${OBJECTIV_ENVIRONMENT})
	docker build --build-arg OBJECTIV_ENVIRONMENT=$(OBJECTIV_ENVIRONMENT) --no-cache -t objectiv/website-build -f docker/build/Dockerfile .


# build docker container for full website, including docs
# set environment to docker, to make sure the right config/env is loaded
build-docker-website-image: OBJECTIV_ENVIRONMENT = "docker"
build-docker-website-image: build-docker-build-image
	docker build --no-cache -t objectiv/website -f docker/website/Dockerfile docker

build-docker-deploy-image:
	docker build --no-cache -t objectiv/website-deploy -f docker/deploy/Dockerfile .


check-broken-links-staging:
	docker run --rm --name broken-link-checker-staging -i node:16 bash -c \
		"yarn add broken-link-checker; ./node_modules/.bin/blc --recursive --exclude-external --ordered --host-requests 10 https://staging.objectiv.io"

# spin up the website container, and check all _internal_ links for broken ones
# external links are skipped
check-broken-links: build-docker-website-image
	# spin up website
	docker run --rm -d -p 127.0.0.1:8080:80 --name objectiv_website_broken_link_check objectiv/website
	./node_modules/.bin/blc --recursive --exclude-external --ordered --host-requests 10 http://localhost:8080
	docker stop objectiv_website_broken_link_check
