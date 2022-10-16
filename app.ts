const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const books = require('./books/books.ts')
const posts = require('./posts/posts.ts')

import { Request, Response } from "express"

app.use(express.json()) // Parse incoming JSON data
app.use(express.urlencoded({extended: true})) // Parse incoming URL-encoded data

app.use('/books', books)
app.use('/posts', posts)

app.get('/', (req: Request, res: Response) => {
    res.send('What am I reading?')
})

app.listen(port, () => {
    console.log(`I am listening on port ${port}`)
})