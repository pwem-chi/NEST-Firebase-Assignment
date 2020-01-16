import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';


const { admin } = require('../db init');

const db = admin.firestore();

const userCollection = db.collection("Users");





@Controller('login')
export class LoginController {
  @Get()
   async findUser(@Req() req: Request, @Res() res: Response){
    if(req.body.email == null || req.body.password == null){
      
     let reqlogin = {
       "email": req.body.email,
       "password": req.body.password
    }

    

     userCollection.doc(String(reqlogin)).get()
     
     res.json({
      "message": "Please ensure you enter the correct details"
     })

    }else{
      res.json({
        "message": "Welcome back!"
      })
    }
  }

}
     
    

  


