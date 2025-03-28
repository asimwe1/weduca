#!/bin/bash

SERVER="landry@139.84.240.44"
PASSWORD="Impamopee.870"

echo "Switching to branch master"
git checkout master

echo "Building app..."
npm run build

echo "Copying files to server..."
scp -r dist/* $SERVER:/var/www/weducaapplyltd.com/

echo "Done!"
echo "======================================= >>>>>>>>>>>>>>>>>>>>>> \n"
echo "\n"

echo "Restarting Nginx on the server..."
ssh "$SERVER" "echo '$PASSWORD' | sudo -S systemctl restart nginx"

# Check if the restart was successful
if [ $? -eq 0 ]; then
    echo "Nginx restarted successfully on $SERVER"
else
    echo "Failed to restart Nginx on $SERVER"
fi
