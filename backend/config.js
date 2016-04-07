'use strict';

const local = {
  DATABASE_CONNECTION_URL : "postgres://nodeuser:13149700@localhost/trainrequest"
};

const heroku = {
  DATABASE_CONNECTION_URL : "postgres://wdbzxuwbsxzbvm:i5cB6XGbkkm-hQY-7R681Q_mZk@ec2-54-204-41-175.compute-1.amazonaws.com:5432/d6hnllrkarjoau?ssl=true",
};

module.exports = local;
