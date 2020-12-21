#!/bin/bash

echo docker tag?
read TAG
echo $TAG

docker build -t japiirainen/oluet-api:$TAG .
docker push japiirainen/oluet-api:$TAG

ssh personal "docker pull japiirainen/oluet-api:$TAG && docker tag japiirainen/oluet-api:$TAG dokku/oluet-api:$TAG && dekku deploy oluet-api $TAG"