import { Controller, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';


const { admin } = require('../db init');

const db = admin.firestore();

const userCollection = db.collection("Users");




@Controller('register')
export class RegisterController {
    @Post()
    create(@Req() req: Request, @Res() res: Response){
      if(req.body.name !== null || req.body.surname !== null || req.body.email !== null || req.body.password !== null || req.body.company !== null){
      let docId = Math.floor(Math.random() * (99999 - 0));
      let newUser = {
        "name": req.body.name,
        "surname": req.body.surname,
        "email": req.body.email,
        "password": req.body.password,
        "company": req.body.company
      }

      let setNewUser = userCollection.doc(String(docId)).set(newUser);

      res.json({
        "message": "User was successfully created!"
      });
    } else{
      res.json({
          "message": "req.body params are undefined"
      })
    }

  }
}
