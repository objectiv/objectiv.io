FROM objectiv/website-build AS build
# we use the apache httpd as web server, so .htaccess works
FROM httpd

ENV WEBROOT=/usr/local/apache2/htdocs/
ENV SERVICES=/services

# copy our own addition to the apache config into the image
COPY docker/website/objectiv.conf /usr/local/apache2/conf/

# get apache to include our config
RUN echo "Include conf/objectiv.conf" >> /usr/local/apache2/conf/httpd.conf

# copy website
COPY --from=build $SERVICES/build/ $WEBROOT

# COPY docs
COPY --from=build $SERVICES/docs/build/ $WEBROOT/docs/

RUN rm $WEBROOT/docs/.htaccess

