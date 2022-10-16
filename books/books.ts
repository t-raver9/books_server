const router = require('express').Router()

import { Request, Response } from "express"

router.get('/', (req: Request, res: Response) => {
    res.send([
        {
            bookName: 'Climbing',
            rating: 5
        },
        {
            bookName: 'A Gentleman in Moscow',
            rating: 5
        }
    ])
})

module.exports = router