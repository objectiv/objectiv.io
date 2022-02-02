FROM node:16


ARG OBJECTIV_ENVIRONMENT=staging
ARG SERVICES=/services/
RUN mkdir $SERVICES


# copy sourcecode into image

COPY . $SERVICES

RUN cd  $SERVICES && \
    make -j 2 clean && \
    make -j 1 build-all
