## mongo db
sudo apt update
sudo apt install mongodb
sudo service mongodb start
sudo service mongodb status
sudo service mongodb stop
---mongo
show dbs

## import file ---
mongoimport --db airbnb --collection data --file /home/veekshith/Documents/backend/mangodb/airbnb/airbnb.json --port 27017

