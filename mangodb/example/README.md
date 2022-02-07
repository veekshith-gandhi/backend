## show dbs

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

## delet

db.users.deleteOne({name:value})

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
