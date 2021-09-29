#!/bin/bash

generated=src/generated/buhtuh
target=static/buhtuh

rm -rf $generated
mkdir -p $generated
cp -r ../objectiv-analytics/buhtuh/docs/build/html/* $generated
cp -r $generated/_images docs/buhtuh

mkdir -p $target

cd $generated 
for f in $(find . -type f -name '*.html' -print);
do
    if [[ $f =~ ./index.html$ ]] || [[ $f =~ buhtuh.*? ]] || [[ $f =~ sql_models.*? ]];
    then
        echo "Match: $f"
        mkdir -p ../../../${target}/`dirname ${f}`
        cp "$f" "../../../${target}/${f}"
    else
        echo "$f did not match"
    fi
done
cd -


cd docs/buhtuh && python generate.py

