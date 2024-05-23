import { where } from "sequelize";
import { IQuerys } from "../interface/common.interface";
import { Balance, Medicines } from "../interface/medicine.interface";
import medicine from "../model/medicine.model";
const genQuery = (args: IQuerys) => {
  let body: any = {};
  if (args?.query) {
    body = {
      ...body,
    };
  }
  return body;
};

const MedicineController = {
  medicine: async (args: IQuerys) => {
    return medicine
      .findAndCountAll({
        where: genQuery(args),
        limit: args?.limit,
        offset: args?.skip,
      })
      .then(({ rows, count }) => {
        return { count, rows: rows };
      });
  },
  addmedicine: async (args: Medicines) => {
    try {
      let newUser = await medicine.update({
        md_name: args.md_name,
        md_set: args.md_set,
        md_input: args.md_input,
        md_output: 0,
        md_total: args.md_input,
      },
      {
        where : {md_set : args.md_set}
      });
      return newUser;
    } catch (error) {
      throw new Error(`Failed to create medicine: ${error}`);
    }
  },
  balance: async (args: Balance) => {
    try {
      let set = await medicine.findOne({ where: { md_set: args.md_set } });
      if (!set) throw Error("ไม่พบข้อมูล");

      if (set.md_total === 0) {
        return "Please Add Medicine";
      } else {
        let update = await medicine.update(
          {
            md_output: args.md_output + set.md_output,
            md_total: set.md_input - (set.md_output + args.md_output),
          },
          { where: { md_set: args.md_set } }
        );
      }

      return "Successfully";
    } catch (error) {
      throw new Error(`Failed Balance`);
    }
  },
};

export default MedicineController;
