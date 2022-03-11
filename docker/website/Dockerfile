
# we use the apache httpd as web server, so .htaccess works
FROM httpd

ENV WEBROOT=/usr/local/apache2/htdocs/
ENV SERVICES=/services

# copy our own addition to the apache config into the image
COPY docker/website/objectiv.conf /usr/local/apache2/conf/

# get apache to include our config
RUN echo "Include conf/objectiv.conf" >> /usr/local/apache2/conf/httpd.conf

# copy website from the local filesystem
# we rely on the local build, to use the exact same build for both amd64 and arm64 images
# this saves time in the build process, but also guarantees we're using the exact same build.
COPY output/docker/ $WEBROOT


RUN rm $WEBROOT/docs/.htaccess

