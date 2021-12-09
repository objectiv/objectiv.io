.PHONY: build-all build-website build-docs build-docker-website



all: build-docker-website

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


# spin up the website container, and check all _internal_ links for broken ones
# external links are skipped
check-broken-links: build-docker-website
	# spin up website
	docker run --rm -d -p 127.0.0.1:8080:80 --name objectiv_website_broken_link_check objectiv/website
	./node_modules/.bin/blc --recursive --exclude-external --ordererd --host-requests 10 http://localhost:8080
	docker stop objectiv_website_broken_link_check
