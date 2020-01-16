"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const admin = require("firebase-admin");
const db = admin.firestore();
const userCollection = db.collection("Users");
let LogoutController = class LogoutController {
    signOut(req, res) {
        if (req.body.password == "") {
            let reqId = req.params.id;
            let passReq = { "password": req.body.password };
            let logOut = userCollection.doc(String(reqId)).get();
            res.json({
                "message": "Cannot log out"
            });
        }
        else {
            res.json({
                "message": "Log out success"
            });
        }
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], LogoutController.prototype, "signOut", null);
LogoutController = __decorate([
    common_1.Controller('logout')
], LogoutController);
exports.LogoutController = LogoutController;
//# sourceMappingURL=logout.controller.js.map