## db masai post is collections
db.post.insertMany([{
    "title":"masai_01",
    "author":"1",
    "author_name":"veeks", 
    "comments":[{
        "body":"hello",
        "author":"sid",
        "author_id":"2"
    }]
},{
    "title":"masai_02",
    "author":"2",
    "author_name":"gan", 
    "comments":[{
        "body":"hello",
        "author":"rid",
        "author_id":"3"
    }]
}])
## update 
>db.post.updateOne({_id:ObjectId("620b6ea34f4c82ea0061a3c0")},{$push:{tags:"programing"}})

--{top 3 value and got filtered and inserted}
>db.user.updateOne({name:"veek"},{$push:{score:{$each[3,4,5]},$sort:-1,$slice:3}})

--pull{delt/remove element}
> db.post.updateOne({"title":"masai_01"},{$pull:{tags:"programing"}})

--{match multiple ones and remove}
> db.post.updateOne({"title":"masai_01"},{$pull:{tags:{$in:["101","202"]}}})

--{pop -1 removes first elemtn and 1 last element}
> db.post.updateOne({"title":"masai_01"},{$pop:{scores:1}}) 

--{addtoset stores unique element}
>db.user.updateOne({name:"veek"},{$addToSet:{score:{$each[3,4,5]}})
# Aggregation

db.data.aggregate([
    {aggregate},
    {aggregate}
    {aggregate}
])
It collects values from various documents and groups them together and then performs different types of operations on that grouped data like sum, average, minimum, maximum, etc to return a computed result.
> db.data.aggregate([{$match:{ratings:{$gte:90}}}]).pretty()
# group
count every time incremnt by 1
grouping assing new field and value
match is simmilar to find()

>db.data.aggregtae([{$match:{rating:{$gte:90}}},
{$limit:7},{$sort:{rating:-1}},
{$group:{_id:"$origin_country",count:{$sum:1},average:{$avg:{"$rating"}}})