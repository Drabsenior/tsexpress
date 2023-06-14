import express from 'express'
import { register } from 'ts-node'

export default (router:express.Router)=>{
    router.post('/auth/register',register)
}