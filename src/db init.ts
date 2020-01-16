import * as admin from 'firebase-admin';

//initialization of the Database

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: "https://nest-js-firebase-project.firebaseio.com"
  });
  
  module.exports.admin = admin


