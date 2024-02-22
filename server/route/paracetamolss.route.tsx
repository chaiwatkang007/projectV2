import { Router, Request, Response } from "express";
import { IQuerys } from "../interface/common.interface";
import clientController from "../controller/client.controller";
import paracetamolssController from "../controller/paracetamols.controller";


const ParacetamolssRoute = Router();

ParacetamolssRoute
  .get("/", async (req: Request, res: Response) => {
    try {
      const result = await paracetamolssController.paracetamolss(req?.params as unknown as IQuerys);
      res.status(200).json({ result });
    } catch (err: any) {
      res.status(400).json({ message: err?.message });
    }
  })
  .post("/addclient", async (req: Request, res: Response) => {
    try {
        const result = await clientController.addclient(req?.body);
        res.status(200).json({ result });
    } catch (err: any) {
        res.status(400).json({ message: err?.message });
    }
  })
  .post("/removeclient", async (req: Request, res: Response) => {
    try {
      const result = await clientController.removeclient(req?.body);
      res.status(200).json({ result });
  } catch (err: any) {
      res.status(400).json({ message: err?.message });
  }
  })


export default ParacetamolssRoute;
