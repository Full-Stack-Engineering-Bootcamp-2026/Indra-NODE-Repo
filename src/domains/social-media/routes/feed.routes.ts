import express, { Router } from 'express'
import { getPosts } from '../controllers/feed.controller.js';

const router:Router = express.Router()


router.get('/posts',getPosts);

export default router;


