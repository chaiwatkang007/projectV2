import { IQuerys } from "../interface/common.interface";
import Temp from "../model/temp.model";
import { CreateTemp, Daytemps, UpdateTemp } from "../interface/temp.interface";
import moment from "moment";

const genQuery = (args: IQuerys) => {
  let body: any = {};
  if (args?.query) {
    body = {
      ...body,
    };
  }
  return body;
};

const tempController = {
  temp: async (args: IQuerys) => {
    return Temp.findAndCountAll({
      where: genQuery(args),
      limit: args?.limit,
      offset: args?.skip,
    }).then(({ rows, count }) => {
      return { count, rows: rows };
    });
  },
  create: async (args: CreateTemp) => {
    const currenttime = new Date();
    let newData = await Temp.create({
      id: null,
      day: currenttime.toISOString().slice(0,10),
      time: moment(currenttime).utcOffset(7).format("HH:mm"),
      temp: args.temp,
      humidity: args.humidity
    });
    return newData;
  },
  update: async (args: UpdateTemp) => {
    let user = await Temp.findOne({ where: { day: args.day } });
    if (!user) throw Error("ไม่พบผู้ใช้งานนี้มีอยู่ในระบบ");

    let newUser = await user.update({
      args,
    });
    return newUser;
  },
  daytemp: async (args: Daytemps) => {
    if (args.day && args.time) {
      const user = await Temp.findOne({
        where: {
          day: args.day,
          // time: args.time,
        },
      });
      if (!user) {
        throw new Error(`ไม่พบข้อมูลสำหรับวัน ${args.day} เวลา ${args.time}`);
      }
  
      // คืนข้อมูลสำหรับวันและเวลาที่ระบุ
      return {
        day: user.day,
        time: user.time,
        temp: user.temp,
        humidity: user.humidity,
      };
    }
    // ถ้าไม่มีการระบุวันและเวลาในอาร์กิวเมนต์ args
    // ให้คืนข้อมูลทั้งหมดที่มีวันตรงกับ args.day
    const users = await Temp.findAll({
      where: {
        day: args?.day,
      },
    });
  
    if (!users || users.length === 0) {
      throw new Error(`ไม่มีข้อมูลสำหรับวัน ${args.day}`);
    }
  
    // คืนข้อมูลทั้งหมดที่มีวันตรงกับ args.day
    return users.map((user) =>  ({
      day: user.day,
      time: user.time,
      temp: user.temp,
      humidity: user.humidity,
    }));
  },
};

export default tempController;
