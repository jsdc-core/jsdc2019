#!/bin/bash
# set -e # stop on error

npm run build
git add .
git commit -m 'deploy to gh-pages'
git subtree push --prefix dist origin gh-pages
