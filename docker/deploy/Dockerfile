ARG TAG=latest
FROM objectiv/website-build:$TAG


COPY docker/deploy/deploy.sh /usr/local/bin
COPY docker/deploy/deploytesting.sh /usr/local/bin
COPY docker/deploy/extract.sh /usr/local/bin

RUN apt-get -q update &&  \
    apt-get -q -y install lftp && \
    chmod +x /usr/local/bin/deploy.sh && \
    chmod +x /usr/local/bin/deploytesting.sh && \
    chmod +x /usr/local/bin/extract.sh
