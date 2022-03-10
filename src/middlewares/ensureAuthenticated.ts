import {  Response, Request, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated (request: Request, response: Response, next: NextFunction) {
  // Receive token
  const authToken = request.headers.authorization;
  
  
  // Validate if token is filled
  if(!authToken){
    return response.status(401).end();
  }
  
  
  // Validate if token is valid
  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(token, "4f9b820ade1517d0ec50f0db4c9793e0") as IPayload;

    //Recover user information
    request.user_id = sub; 

    return next();
  }catch (err) {
    return response.status(401).end(); 
  }
}