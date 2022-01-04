# we use the apache httpd as web server, so .htaccess works
FROM httpd

ENV WEBROOT=/usr/local/apache2/htdocs/

# copy our own addition to the apache config into the image
COPY docker/objectiv.conf /usr/local/apache2/conf/

# get apache to include our config
RUN echo "Include conf/objectiv.conf" >> /usr/local/apache2/conf/httpd.conf

# copy website
COPY build/ $WEBROOT/

# COPY docs
COPY docs/build/ $WEBROOT/docs/

RUN rm $WEBROOT/docs/.htaccess

