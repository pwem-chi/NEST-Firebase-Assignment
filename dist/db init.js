"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const admin = require("firebase-admin");
admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: "https://nest-js-firebase-project.firebaseio.com"
});
module.exports.admin = admin;
//# sourceMappingURL=db init.js.map