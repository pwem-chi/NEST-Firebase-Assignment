import * as admin from 'firebase-admin';

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: "https://nest-js-firebase-project.firebaseio.com"
  });
  
  module.exports.admin = admin