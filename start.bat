@echo off

rem Install Python dependencies
if exist requirements.txt (
    pip install -r requirements.txt
)

rem Install Node dependencies for the backend
if exist server\package.json (
    pushd server
    npm install
    popd
)

rem Install Node dependencies for the frontend
if exist frontend\package.json (
    pushd frontend
    npm install
    popd
)

rem Launch backend and frontend
if exist server\package.json (
    start cmd /k "cd server && npm start"
)
if exist frontend\package.json (
    start cmd /k "cd frontend && npm start"
)
