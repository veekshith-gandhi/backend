## show dbs

## creating db

use db_name

## use a database

use db

## show collections

show collection

## query all documents in collection

where user is a collection name
db.user.find({})

## count of results

db.users.find().count()

## query by a field name

db.users.find({fiels_name:value})

## inser one

db.users.insertOne({fiels_name:value})

## update many

db.user.updateMany({name:value},{$inc:{name:value}})
db.user.updateMany({name:value},{$set:{name:value}}) ---{u can add new variable}

## Data types

## temp collections it will create temp db

db.temp.insert({name:value})
db.temp.insertOne({name:value})

show collections
db.temp.find()
db.temp.deleteMany({}) - - {delet everthing}

## comparision

db.user.find({rating:{gte:80}}).count()
$ne
$lt,lte,gt,gte,eg,in.nin.neq

## projections {only things u needed }

db.users.find({rating:{$in:[8,9]}},{name:value})
db.users.find({rating:{$in:[8,9]}},{name:value,\_id:0}) --- {cleaner code}
ex : db.users.find({rating:{$in:[8,9]}},{comp:1,\_id:0,country:1}).limit(5).sort({rating:-1/+1}) --- {cleaner code}

## delete

db.users.deleteMany({age:{$gte:20}})
db.users.deleteOne({name:value})

## delet database

db.dropDatabase()

## nested find search

db.users.find({'addres.country_code':"US","review.reviews_score":{$gte:40}},{name:1,id:0})

## import

{ come out of the mango shell }
mongoimport --db airbnb --collection data --file /home/veekshith/Desktop/backend/mangodb/airbnb/airbnb.json --port 27017 --jsonArray

## problems 

## projection {2nd object}
{projecting the info based on the input that u have }
---db.data.find({'address.country_code':"US"},{"address.country_code":1,_id:0,name:1}).pretty()

## {limits gretater then}
 db.data.find({$and:[{"address.country_code":"BR"},{"review_scores.review_scores_ratings":{$gte:70}}]},{"review_scores":1,\_id:0,})

## {multiple checks on diff loc using {or ,and ,not}}
airbnb> db.data.find({$and:[{$or:[{"address.country_code":"BR"},{"address.country_code":"CA"}]},{"review_scores.review_scores_rating":{$eq:99}}]},{"address.country_code":1,\_id:0,"review_scores.review_scores_rating":1})

{$and:[{condition},{$or:[{condition},{condition}]}]}

airbnb> db.data.find({$and:[{$or:[{"address.country_code":"US"},{"review_scores.review_scores_rating":{$eq:95}}]},{$or:[{"address.country_code":"IN"},{"review_scores.review_scores_rating":{$eq:99}}]}]},{"address.country_code":1,\_id:0,"review_scores.review_scores_rating":1})

## --array of values
airbnb> db.data.find({"address.country_code":{$eq:"US"},"amenities.0":"wifi"},{amenities:1}).count()

or

airbnb> db.data.find({"address.country_code":{$eq:"US"},"amenities":{$all:["Wifi","Shampoo"]}},{amenities:1}).count()
