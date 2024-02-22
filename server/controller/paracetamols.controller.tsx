import { IQuerys } from "../interface/common.interface";
import Paracetamolss from "../model/paracetamolss";
const genQuery = (args: IQuerys) => {
  let body: any = {};
  if (args?.query) {
    body = {
      ...body,
    };
  }
  return body;
};

const paracetamolssController = {
  paracetamolss: async (args: IQuerys) => {
    return Paracetamolss.findAndCountAll({
      where: genQuery(args),
      limit: args?.limit,
      offset: args?.skip,
    }).then(({ rows, count }) => {
      return { count, rows: rows };
    });
  },
};

export default paracetamolssController;
