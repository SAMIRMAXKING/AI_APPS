#!/bin/bash
# Simple script to run both server and client

# install deps if missing
if [ ! -d server/node_modules ]; then
  echo "Installing server dependencies..."
  (cd server && npm install)
fi
if [ ! -d client/node_modules ]; then
  echo "Installing client dependencies..."
  (cd client && npm install)
fi

# run backend and frontend concurrently
npm run start --prefix server &
SERVER_PID=$!
npm run dev --prefix client
kill $SERVER_PID
