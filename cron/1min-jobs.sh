#!/bin/sh

echo "this is from jobs"
curl -X GET http://localhost:1027/timestone/label/expiry/v1/processor/trigger/status
