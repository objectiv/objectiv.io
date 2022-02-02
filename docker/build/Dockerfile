FROM node:16


ARG SERVICES=/services/

RUN mkdir $SERVICES


# copy sourcecode into image

COPY . $SERVICES

RUN cd  $SERVICES && \
    rm -rf node_modules docs/node_modules && \
    rm -rf build docs/build && \
    make OBJECTIV_ENVIRONMENT=staging build-website-yarn build-docs-yarn && \
    make OBJECTIV_ENVIRONMENT=production build-website-yarn build-docs-yarn
