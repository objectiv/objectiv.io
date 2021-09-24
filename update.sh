#!/bin/bash

generated=src/generated/buhtuh

rm -rf $generated
mkdir -p $generated
cp -r ../objectiv-analytics/buhtuh/docs/build/html/* $generated
cp -r $generated/_images docs/buhtuh

cd docs/buhtuh && python generate.py

