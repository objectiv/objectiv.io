#!/bin/bash


CURRENT_DATE=$(date +%Y%m%d)
ENVIRONMENT=production

for i in "$@"; 
do

  case $i in
    -e=*|--environment=*)
      ENVIRONMENT="${i#*=}"
      shift # past argument=value
      ;;
    -u=*|--urls_file=*)
      URLSFILE="${i#*=}"
      shift # past argument=value
      ;;
    -*|--*)
      echo "Unknown option $i"
      exit 1
      ;;
    *)
      ;;
  esac

done

mkdir -p ./tmp
curl https://objectiv.io/sitemap.xml > ./tmp/$CURRENT_DATE-sitemap-website.xml
docker run --rm --entrypoint cat objectiv/website-deploy:$CURRENT_DATE \
  /services/build-$ENVIRONMENT/sitemap.xml > ./tmp/$CURRENT_DATE-build-sitemap-website.xml
curl https://objectiv.io/docs/sitemap.xml > ./tmp/$CURRENT_DATE-sitemap-docs.xml
docker run --rm --entrypoint cat objectiv/website-deploy:$CURRENT_DATE \
  /services/docs/build-$ENVIRONMENT/sitemap.xml > ./tmp/$CURRENT_DATE-build-sitemap-docs.xml

python3 ./docker/build/xdiff.py ./tmp/$CURRENT_DATE-sitemap-docs.xml ./tmp/$CURRENT_DATE-build-sitemap-docs.xml
python3 ./docker/build/xdiff.py ./tmp/$CURRENT_DATE-sitemap-website.xml ./tmp/$CURRENT_DATE-build-sitemap-website.xml

# check if any URLs that are removed appear in the objectiv-analytics repo
./docker/build/scan-urls-repo.sh -d=../objectiv-analytics -u=./tmp/removed_urls.csv
# check if any URLs that are removed appear in the objectiv.io repo
./docker/build/scan-urls-repo.sh -d=./ -u=./tmp/removed_urls.csv

rm -rf ./tmp/ 