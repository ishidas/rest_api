'use strict';

module.exports = (GemRouter ,Gem ,User ,auth)=>{

  GemRouter.use((err, req, res, next)=>{
    console.error(err.stack);
    res.status(500).send('Somthing broke');
    next();
  });

  GemRouter.use((req, res, next)=>{
    console.log('Time : ' + new Date());
    // res.json(new Date());
    next();
  });

  GemRouter.get('/gems',auth , (req, res)=>{
    Gem.find({}, (err,gem)=>{
      if(err){
        res.json({msg: 'Oops, there is an error.' + err});
      }
      console.log('Here is gem in get : ' + gem);
      res.json({data: gem});
    });
  });

  GemRouter.get('/gems/:id',auth, (req, res)=>{
    Gem.findById(req.params.id, (err, gem)=>{
      res.json(gem);
    });
  });

  //**************************
  //querying density Number
  //**************************
  GemRouter.get('/density/', auth,(req, res)=>{
    var num = JSON.parse(req.query.density);
    console.log(num);
    Gem.find({'density': {$lte: num }}, (err, gem)=>{
      res.json(gem);
      res.end();
    });
  });

  GemRouter.post('/gems', auth,(req, res)=>{
    console.log('This is req.body : ' + req.body);
    var newGem = new Gem(req.body);
    newGem.save((err, gem)=>{
      console.log('It\'s hitting post route' + gem);
      res.json(gem);
      res.end();
    });
  });


  GemRouter.put('/gems/:id',auth, (req, res)=>{
    var query = {_id: req.params.id };
    Gem.update(query, req.body, (err, gem)=>{
      res.json({_id: gem});
      res.end();
    });
  });


  GemRouter.delete('/gems/:id',auth ,(req, res)=>{
    var query = {_id: req.params.id };
    Gem.remove(query, ()=>{
      console.log('id : ' + req.params.id + ' is removed.');
      res.end();
    });
  });

};
