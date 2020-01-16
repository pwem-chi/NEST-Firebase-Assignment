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
let RegisterController = class RegisterController {
    create(req, res) {
        if (req.body.name !== null || req.body.surname !== null || req.body.email !== null || req.body.password !== null || req.body.company !== null) {
            let docId = Math.floor(Math.random() * (99999 - 0));
            let newUser = {
                "name": req.body.name,
                "surname": req.body.surname,
                "email": req.body.email,
                "password": req.body.password,
                "company": req.body.company
            };
            let setNewUser = userCollection.doc(String(docId)).set(newUser);
            res.json({
                "message": "User was successfully created!"
            });
        }
        else {
            res.json({
                "message": "req.body params are undefined"
            });
        }
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], RegisterController.prototype, "create", null);
RegisterController = __decorate([
    common_1.Controller('register')
], RegisterController);
exports.RegisterController = RegisterController;
//# sourceMappingURL=register.controller.js.map