const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

const Tweet = require('../../models/tweet');

// Get Tweets
router.get('/', async (req, res) => {
  const tweets = await loadTweetsCollection();
  res.send(await tweets.find({}).toArray());
});


//Get Next Tweet

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const tweets = await loadTweetsCollection();
  await tweets.find({_id: {$gt: new mongodb.ObjectID(id) }}).limit(1).toArray()

  res.send(tweets);
});



//Update Post
router.patch("/:id", async (req, res, next) => {

  const id = req.params.id;
   const tweets = await loadTweetsCollection();
   let tweet = await tweets.findOneAndUpdate({_id: new mongodb.ObjectID(id)},
    {$set:{annotations:req.body}},{new: true},
    )
  res.send(tweet);

});





async function loadTweetsCollection(){





// iAmNotInTheSchema is now saved to the db!!


  const client  = await mongodb.MongoClient.connect('mongodb://localhost:27017',  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  return client.db('CrudDB').collection('tweets');
}



module.exports = router;
