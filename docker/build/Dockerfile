FROM node:16


ARG OBJECTIV_ENVIRONMENT=staging
ARG SERVICES=/services/

RUN mkdir $SERVICES


# copy sourcecode into image

COPY . $SERVICES

RUN cd  $SERVICES && \
    rm -rf node_modules docs/node_modules && \
    rm -rf build docs/build && \
    make build-website-yarn build-docs-yarn
