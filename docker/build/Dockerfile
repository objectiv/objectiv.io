FROM node:16

ARG SERVICES=/services/
RUN mkdir $SERVICES

# default we build both staging and production
ARG OBJECTIV_ENVIRONMENT="staging production"

# copy sourcecode into image
COPY . $SERVICES

RUN cd  $SERVICES && \
    rm -rf node_modules docs/node_modules && \
    rm -rf build docs/build && \
    for e in $OBJECTIV_ENVIRONMENT; \
    do \
      echo "Building for $e"; \
      make OBJECTIV_ENVIRONMENT=$e build-website-yarn build-docs-yarn; \
    done
