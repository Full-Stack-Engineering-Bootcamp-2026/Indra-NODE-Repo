import { Request,Response } from "express"

export function getPosts (req:Request,res:Response){
    res.json({
        posts :[{title:'first Post',content:'This is the first post'}]
    } )
};


export function createPost (req:Request,res:Response){
    res.json({
        posts :[{title:'first Post',content:'This is the first post'}]
    })
};