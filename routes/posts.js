import express from 'express'
import post from '../models/post.js'
import { authMiddleware } from "../utils/auth.js"

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const posts = await post.find().populate('user', 'username')
    res.json(posts)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

router.post('/', authMiddleware, async (req, res) => {
  try {
    const newPost = await post.create({
      ...req.body,
      user: req.user._id
    })
    res.status(201).json(newPost)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

export default router;
