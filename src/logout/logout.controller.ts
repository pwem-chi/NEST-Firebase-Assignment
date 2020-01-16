import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

const { admin } = require('../db init');

const db = admin.firestore();

const userCollection = db.collection("Users");

@Controller('logout')
export class LogoutController {
    @Get()
    signOut(@Req() req: Request, @Res() res: Response){
        if(req.body.password == null){
            let passReq = { "password": req.body.password }

            userCollection.doc(String(passReq)).get()

            res.json({
                "message": "Cannot log out"
            })

        }else{
            res.json({
                "message": "Log out Success"
            })
        }
    }
}
