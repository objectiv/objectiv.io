# we use the apache httpd as web server, so .htaccess works
FROM httpd


ENV WEBROOT=/usr/local/apache2/htdocs/

# copy apache config
COPY docker/httpd.conf /usr/local/apache2/conf/httpd.conf


# copy website
COPY build/ $WEBROOT/

# COPY docs
COPY docs/build/ $WEBROOT/docs/


