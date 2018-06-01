#!/bin/bash
set -e

appname=$(cat ./smart-carrier-app/package.json | head -n5 | grep name | awk '{print $2}')
appname=${appname:1:-2}
version=$(cat ./smart-carrier-app/package.json | head -n5 | grep version | awk '{print $2}')
version=${version:1:-2}
echo "$appname:$version"
cd ./smart-carrier-app/

npm run build

 cd ..
docker build -t docker.dev.redbee.io/$appname:$version -f Dockerfile .
docker push docker.dev.redbee.io/$appname:$version
