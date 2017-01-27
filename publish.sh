#!/usr/bin/env sh
mkdir -p dist/app
cp -r app/images dist/app/
cp app/style.css dist/app/
surge dist ${1}.surge.sh
rm -rf dist/app
