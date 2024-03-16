import { Router, Request, Response } from "express";
import { IQuerys } from "../interface/common.interface";
import MedicineController from "../controller/medicine.controller";

const medicineRoute = Router();

medicineRoute
  .get("/", async (req: Request, res: Response) => {
    try {
      const result = await MedicineController.medicine(req?.params as unknown as IQuerys);
      res.status(200).json({ result });
    } catch (err: any) {
      res.status(400).json({ message: err?.message });
    }
  })
  .post("/addmedicine", async (req: Request, res: Response) => {
    try {
        const result = await MedicineController.addmedicine(req?.body);
        res.status(200).json({ result });
    } catch (err: any) {
        res.status(400).json({ message: err?.message });
    }
  })


export default medicineRoute;
