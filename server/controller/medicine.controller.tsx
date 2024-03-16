import { IQuerys } from "../interface/common.interface";
import { Medicines } from "../interface/medicine.interface";
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
    return medicine.findAndCountAll({
      where: genQuery(args),
      limit: args?.limit,
      offset: args?.skip,
    }).then(({ rows, count }) => {
      return { count, rows: rows };
    });
  },
  addmedicine: async (args: Medicines) => {
    try {
      let newUser = await medicine.create({
        md_name: args.md_name,
        md_set: args.md_set,
        md_input: args.md_input,
        md_output: args.md_output !== null ? args.md_output: 0 ,
        md_total: args.md_input,
      });
      return newUser;
    } catch (error) {
      throw new Error(`Failed to create medicine: ${error}`);
    }
  },
};

export default MedicineController;
