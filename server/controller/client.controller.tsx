import { IQuerys } from "../interface/common.interface";
import { clients, eatingtime } from "../interface/client.interface";
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
      CT1: args.T1,
      CT2: args.T2,
      CT3: args.T3,
      CT4: args.T4,
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
  eating: async (args: eatingtime) => {
    const user = await Clients.findOne({
      where: {
        client_name: args.client_name,
      },
    });

    if (!user) {
      throw new Error("ไม่พบชื่อผู้ป่วยในระบบ");
    }

    if (args.timeeating === user.T1) {
      user.update({ T1: null });
    }
    // if (args.timeeating !== user.T1 || args.timeeating < user.T2) {
    //   await user.update({ T1: null });
    // }

    if (args.timeeating === user.T2) {
      user.update({ T2: null });
    }
    // if (args.timeeating !== user.T2 || args.timeeating < user.T3) {
    //   await user.update({ T2: null });
    // }

    if (args.timeeating === user.T3) {
      user.update({ T3: null });
    }
    // if (args.timeeating !== user.T3 || args.timeeating < user.T4) {
    //   await user.update({ T3: null });
    // }

    if (args.timeeating === user.T4) {
      user.update({ T4: null });
    }
    // if (args.timeeating !== user.T4 || args.timeeating > user.T4) {
    //   await user.update({ T4: null });
    // }

    return user;
  },
  autoreset: async (args: eatingtime) => {
    try {
      const allClient = await Clients.findAll();

      allClient.forEach(async (client) => {
        await Clients.update(
          {
            T1: client.CT1,
            T2: client.CT2,
            T3: client.CT3,
            T4: client.CT4,
          },
          {
            where: {
              client_id: client.client_id,
            },
          }
        );
      });

      return "Updated";
    } catch (error) {
      console.error("Error occurred while resetting:", error);
      throw error
    }

    // let Reset = await Clients.update(
    //   {
    //       T1: args.CT1,
    //       T2: args.CT2,
    //       T3: args.CT3,
    //       T4: args.CT4,
    //   },
    //   {
    //       where: {
    //           T1: args.CT1,
    //           T2: args.CT2,
    //           T3: args.CT3,
    //           T4: args.CT4,
    //       },
    //   }
    // );

    // return "Updated";
  },
};

export default clientController;
