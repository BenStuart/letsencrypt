'use strict';

require('letsencrypt-express').create({

  server: 'staging'

, email: 'john.doe@example.com'

, agreeTos: true

, approveDomains: [ 'benjaminthomasstuart.com' ]

, app: require('express')().use('/', function (req, res) {
    res.end('Hello, World!');
  })

}).listen(80, 443);