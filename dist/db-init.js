"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const admin = require("firebase-admin");
admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: "https://nest-js-firebase-project.firebaseio.com"
});
//# sourceMappingURL=db-init.js.map