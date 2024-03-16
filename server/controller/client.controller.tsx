import { IQuerys } from "../interface/common.interface";
import { clients } from "../interface/client.interface";
import { v4 } from "uuid";
import Clients from "../model/client";
const genQuery = (args: IQuerys) => {
  let body: any = {};
  if (args?.query) {
    body = {
      ...body,
    };
  }
  return body;
};

const clientController = {
  client: async (args: IQuerys) => {
    return Clients.findAndCountAll({
      where: genQuery(args),
      limit: args?.limit,
      offset: args?.skip,
    }).then(({ rows, count }) => {
      return { count, rows: rows };
    });
  },
  addclient: async (args: clients) => {
    let user = await Clients.findOne({
      where: { client_name: args?.client_name, user_id: args?.user_id },
    });
    if (user) throw Error("ชื่อนี้อยู่ในระบบแล้ว");

    let newUser = await Clients.create({
      client_id: v4(),
      user_id: args.user_id,
      client_name: args.client_name,
      congenital_disease: args.congenital_disease,
      medicine_name: args.medicine_name,
      age: args.age,
      gender: args.gender,
      times: args.times,
      T1: args.T1,
      T2: args.T2,
      T3: args.T3,
      T4: args.T4,
    });
    return newUser;
  },
  removeclient: async (args: clients) => {
    let user = await Clients.findOne({
      where: {
        client_name: args?.client_name,
        user_id: args?.user_id,
      },
    });

    if (!user) {
      throw new Error("ไม่พบผู้ใช้งานนี้มีอยู่ในระบบ");
    }

    await user.destroy();
    return "ลบผู้ใช้งานสำเร็จ";
  },
};

export default clientController;
