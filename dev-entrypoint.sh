#!/bin/sh

cp -rfu /cache/node_modules/. /app/node_modules/
exec yarn dev