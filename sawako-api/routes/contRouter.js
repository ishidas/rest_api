'use strict';

module.exports = (ContRouter, Continent, User, auth)=>{
  
  ContRouter.get('/continents' , auth, (req, res)=>{

    Continent.find({}, (err, continent)=>{
      console.log('Here is /continent : ' + continent);
      res.json({id: continent});
      res.end();
    });
  });

  ContRouter.get('/continents/:id', (req, res)=>{
    var query = {_id: req.params.id};
    Continent.find(query, (err, continent)=>{
      console.log('Here is /continent : ' + continent);
      res.json({id: continent});
      res.end();
    });
  });

  //*****************************************
  //populating gem data inside of continent
  //*****************************************
  ContRouter.get('/populate/:id', (req, res)=>{
    var query = {_id: req.params.id};
    Continent.find(query).populate('gems').exec((err, continent)=>{
      console.log('Here is continent populated : ' + continent);
      res.end();
    });
  });

  ContRouter.post('/continents', (req, res)=>{
    var newContinent = new Continent(req.body);
    newContinent.save((err, continent)=>{
      res.json(continent);
      res.end();
    });
  });

  ContRouter.put('/continents/:id', (req, res)=>{
    var query = { _id: req.params.id};
    Continent.update(query, req.body, (err, continent)=>{
      res.json({_id: continent});
      res.end();
    });
  });

  ContRouter.delete('/continents/:id', (req, res)=>{
    var query = {_id: req.params.id};
    Continent.remove(query, (err)=>{
      console.log('This is hit : ' + err);
      res.end();
    });
  });

};
// module.exports = ContRouter;
