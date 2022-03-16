CURRENT_DATE=$(date +%Y%m%d)
mkdir -p ./tmp
curl https://objectiv.io/sitemap.xml > ./tmp/$CURRENT_DATE-sitemap-website.xml
docker run --rm --entrypoint cat objectiv/website-deploy:$CURRENT_DATE \
  /services/build-production/sitemap.xml > ./tmp/$CURRENT_DATE-build-sitemap-website.xml
curl https://objectiv.io/docs/sitemap.xml > ./tmp/$CURRENT_DATE-sitemap-docs.xml
docker run --rm --entrypoint cat objectiv/website-deploy:$CURRENT_DATE \
  /services/docs/build-production/sitemap.xml > ./tmp/$CURRENT_DATE-build-sitemap-docs.xml

xdiff --compare-files ./tmp/$CURRENT_DATE-sitemap-docs.xml ./tmp/$CURRENT_DATE-build-sitemap-docs.xml
xdiff --compare-files ./tmp/$CURRENT_DATE-sitemap-website.xml ./tmp/$CURRENT_DATE-build-sitemap-website.xml

rm -rf ./tmp/