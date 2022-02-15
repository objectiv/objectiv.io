#!/bin/bash


TARGET=/extract



cp -r /services/build-production/ ${TARGET}/production
cp -r /services/docs/build-production/ ${TARGET}/production/docs

cp -r /services/build-staging/ ${TARGET}/staging
cp -r /services/docs/build-staging/ ${TARGET}/staging/docs
