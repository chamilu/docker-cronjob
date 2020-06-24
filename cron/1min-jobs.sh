#!/bin/sh

echo "this is from jobs"
curl -X GET http://server:3000/api/get-users
