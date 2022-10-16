const router = require("express").Router();

import { Request, response, Response } from "express";
import prisma from "../prismaClient";

router.get("/all", (req: Request, res: Response) => {
  prisma.post
    .findMany({
      include: {
        book: true,
      },
    })
    .then((posts) => res.send(posts));
});

router.get("/:id", (req: Request, res: Response) => {
  prisma.post
    .findUnique({
      where: {
        id: parseInt(req.params.id),
      },
      include: {
        book: true,
      },
    })
    .then((post) => res.send(post));
});

router.post("/create", (req: Request, res: Response) => {
  console.log(req.body);
});

module.exports = router;
