const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

const Itunes = require('../models/itunes');

// Get Tweets
router.get('/', async (req, res) => {
  const itunes = await loadCollection();


  let collection = await itunes.find({}).toArray()
  let annotations = await itunes.find({ annotations: { $exists: true } }).count()

  const meta = {
    'annotated': annotations,
    'total': collection.length,
  };
  const data = {
    'data': collection,
    'meta': meta,
  }

  res.send(data);

});


//Get Next Tweet

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const tweets = await loadCollection();
  await tweets.find({ _id: { $gt: new mongodb.ObjectID(id) } }).limit(1).toArray()

  res.send(tweets);
});



//Update Post
router.patch("/:id", async (req, res, next) => {

  const id = req.params.id;
  const tweets = await loadCollection();
  let tweet = await tweets.findOneAndUpdate({ _id: new mongodb.ObjectID(id) },
    { $set: { annotations: req.body } }, { new: true },
  )
  res.send(tweet);

});





async function loadCollection() {
  // iAmNotInTheSchema is now saved to the db!!
  const client = await mongodb.MongoClient.connect('mongodb://localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  return client.db('CrudDB').collection('itunes');
}



module.exports = router;
