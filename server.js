var express = require('express');
var app = express();
const http = require('http');
var port = process.env.PORT || 3000;

var path = require('path');
var bodyParser = require('body-parser');

var db = require('./db.js');

var expressSession = require('express-session');
var cookieParser = require('cookie-parser');

var secret = 'say_friend_and_come_in';
var MemoryStore = expressSession.MemoryStore;
var sessionStore = new MemoryStore();

app.use(express.static(__dirname + '/public'));

app.use(expressSession({
  secret: secret,
  store: sessionStore,
  cookie: {
    maxAge: 10 * 60 * 1000
  },
  saveUninitialized: true,
  resave: true,
  rolling: true
}));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.get('/api/document/:id', function(req, res) {
  var doc = {};
  if (req.session.user) {
    db.getDocument(req.params.id, function(err, result) {
      if (err)
        onError(err, res);
      else {
        doc.Document_ID = result[0].Document_ID;
        doc.Name = result[0].Name;
        doc.Status = result[0].Status;
        db.getDocumentSections(req.params.id, function(err, result) {
          if (err)
            onError(err, res);
          else {
            doc.sections = result;
            db.getDocumentItems(req.params.id, function(err, result) {
              if (err)
                onError(err, res);
              else {
                doc.items = result;
                res.status(200).send(JSON.stringify(doc));
              }
            }); //getDocumentItems
          }
        }); //getDocumentSections
      }
    });
  } else {
    res.status(401).send('Access or action denied, please log in');
  }
});

app.get('/api/documents', function(req, res) {
  if (req.session.user) {
    db.getDocuments(function(err, result) {
      if (err)
        onError(err, res);
      else
        res.status(200).send(JSON.stringify(result));
    });
  } else {
    res.status(401).send('Access or action denied, please log in');
  }
});

app.post('/api/login', function(req, res) {
  db.isUser(req.body.login, req.body.password, function(err, result) {
    if (err)
      onError(err, res);
    else
    if (result) {
      req.session.user = req.body.login;
      res.status(200).send(JSON.stringify('user log in'));
    } else {
      res.status(401).send('Access or action denied, please log in');
    }
  });

});

app.post('/api/logout', function(req, res) {
  req.session.user = null;
  req.session.destroy();
  res.clearCookie("connect.sid").status(200).send(JSON.stringify('user log out'));
  //  res.status(200).send(JSON.stringify('user log out'));
});

app.get('/api/isUserLogin', function(req, res) {
  if (req.session.user) {
    res.status(200).send(JSON.stringify(req.session.user));
  } else {
    res.status(200).send(null);
  }
});

var server = http.createServer(app).listen(port, () => {
  console.log('server running at ' + port)
})


var onError = function(err, res) {
  console.error('Error', err.message, err.stack);
  res.writeHead(500, {
    'content-type': 'text/plain'
  });
  res.end('An error occurred ' + err.message);
};
