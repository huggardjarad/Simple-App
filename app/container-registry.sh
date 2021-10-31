#!/bin/bash

echo "What is your AWS Region? "
read aws_region
echo "You entered: $aws_region"

echo "What is your Account Number?"
read account_num
echo "You entered: $account_num"

sudo docker-compose build
sudo docker login -u AWS -p $(aws ecr get-login-password --region ${aws_region}) ${account_num}.dkr.ecr.${aws_region}.amazonaws.com
image_id=$$(docker images jhuggard/simpleapp:latest --format \"{{.ID}}\")
sudo docker tag ${image_id} ${account_num}.dkr.ecr.${aws_region}.amazonaws.com/golden_pipeline_repository:latest
sudo docker push ${account_num}.dkr.ecr.${aws_region}.amazonaws.com/golden_pipeline_repository:latest