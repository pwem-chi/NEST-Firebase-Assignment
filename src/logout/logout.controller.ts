import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import * as admin from 'firebase-admin';
import { finished } from 'stream';


const db = admin.firestore();

const userCollection = db.collection("Users");

@Controller('logout')
export class LogoutController {
    @Get()
    signOut(@Req() req: Request, @Res() res: Response){
        if(req.body.password == ""){
            let reqId = req.params.id
            let passReq = { "password": req.body.password }

           let logOut = userCollection.doc(String(reqId)).get()

            res.json({
                "message": "Cannot log out"
            })

        }else{
            res.json({
                "message": "Log out success"
            })
        }
    }
}
