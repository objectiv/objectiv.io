FROM objectiv/website-build


COPY docker/deploy/deploy.sh /usr/local/bin
RUN apt-get -q update &&  \
    apt-get -q -y install lftp && \
    chmod +x /usr/local/bin/deploy.sh
