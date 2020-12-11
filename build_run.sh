#!/bin/bash

docker build -t honeypot-frontend .

docker run \
    --rm \
    --name honeypot-frontend-run \
    -p 8200:8200 \
    honeypot-frontend
