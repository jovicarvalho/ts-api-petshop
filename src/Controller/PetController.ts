import { Request, Response } from "express";

let listdePets = [];

export default class PetController {
  crisPet(req: Request, res: Response) {
    const novoPet = req.body;

    listdePets.push(novoPet);

    return res.status(201).json(novoPet);
  }
}
