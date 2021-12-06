.PHONY: build-all build-website build-docs build-docker-website


# clean up existing builds
clean: clean-website clean-docs
clean-website:
	rm -rf build
clean-docs:
	rm -rf docs/build

# build website + docs
build-all: build-website build-docs
	$(info building for ${OBJECTIV_ENVIRONMENT})

# build the website. we use 'index.html' to determine if there already is a valid build
build/index.html:
	yarn install && yarn build

# build the docs, we check for index.html to determine if we need to do anything
docs/build/index.html:
	cd docs && yarn install && yarn build

build-website: | clean-website build/index.html
build-docs: | clean-docs docs/build/index.html

# build docker container for full website, including docs
# set environment to docker, to make sure the right config/env is loaded
build-docker-website: OBJECTIV_ENVIRONMENT=docker
build-docker-website: build/index.html docs/build/index.html
	docker build -t objectiv/website -f docker/Dockerfile .

