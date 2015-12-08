var express = require('express');
var router = express.Router();

router.get('/express', function(req, res, next) {
  res.render('index', { title: 'React' });
});

router.get('/ip', function (req, res, next){
  var ip = req.connection.remoteAddress;
  res.send(ip);
})

var links = [];

router.get('/api/links', function (req, res, next) {
   res.json({ links: links });
});

router.post('/api/links/like', function (req, res, next){
  console.log(req.body);
  var ip = req.connection.remoteAddress;
  links.forEach(function (link){
    if (link.id ===Number(req.body.id)){
      console.log('matched', link.like);
      if (link.like){
        if (link.like[ip]){
          delete link.like[ip];
        }else{
          link.like[ip] = true;
        }
      }else{
        console.log('cmon');
        link.like ={};
        link.like[ip] = true;
      }
    }
  });
  console.log(links);
  res.json({links:links});
})

router.post('/api/links', function (req, res, next) {
  var newLink = req.body;
  newLink.id = Date.now();
  links.push(newLink);
  res.json(newLink);
});

router.post('/api/delete', function (req, res, next){
  links = links.filter(function (link){
    return link.id !== Number(req.body.id);
  });
  console.log(links);
  res.json({links: links});
})


module.exports = router;
