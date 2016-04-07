"use strict";

var config = require('./config');

var pg = require('pg');
var conString = config.DATABASE_CONNECTION_URL;

module.exports = function() {
  return {
    executeQuery: function(query, callback){
      pg.connect(conString, function(err, client, done) {
        if(err) {
          return console.log('error fetching client from pool', err);
        }
        client.query(query, function(err, result) {
          //call `done()` to release the client back to the pool
          done();

          if(err) {
            return console.log('error running query', err);
          }

          if(callback){
            callback(result.rows);
          }
          return;
        });
      });
    }
  }
}();
