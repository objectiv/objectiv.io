#!/bin/bash


TARGET=/extract

for e in $OBJECTIV_ENVIRONMENT
do

  echo "Extracting $e"
  rm -rf /services/build-${e}/
  cp -r /services/build-${e}/ ${TARGET}/${e}
  cp -r /services/docs/build-${e}/ ${TARGET}/${e}/docs

done
