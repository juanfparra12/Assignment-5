//This file holds any configuration variables we may need
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb://juanfparra12:examplepassword@ds121464.mlab.com:21464/assignment_3', //place the URI of your mongo database here.
  },
  googleMaps: {
    key: 'AIzaSyAF3jl5UgQSjmRuSTJ_lDx7cutIp-fA0Tk'
  },
  port: 8080
};
