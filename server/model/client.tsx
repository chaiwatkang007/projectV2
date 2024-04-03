import {
  Table,
  Column,
  DataType,
  Model,
  PrimaryKey,
} from "sequelize-typescript";

@Table({ timestamps: false, tableName: "clients", underscored: false })
class Clients extends Model {
  @PrimaryKey
  @Column({ type: DataType.UUID })
  client_id: string;

  @Column({ type: DataType.TEXT })
  user_id: string;

  @Column({ type: DataType.TEXT })
  client_name: string;

  @Column({ type: DataType.TEXT })
  age: string;

  @Column({ type: DataType.TEXT })
  gender: string;

  @Column({ type: DataType.TEXT })
  congenital_disease: string;

  @Column({ type: DataType.TEXT })
  medicine_name: string;

  @Column({ type: DataType.TEXT })
  times: string;

  @Column({ type: DataType.TEXT })
  T1: string;

  @Column({ type: DataType.TEXT })
  T2: string;

  @Column({ type: DataType.TEXT })
  T3: string;

  @Column({ type: DataType.TEXT })
  T4: string;

  @Column({ type: DataType.TEXT })
  CT1: string;

  @Column({ type: DataType.TEXT })
  CT2: string;

  @Column({ type: DataType.TEXT })
  CT3: string;

  @Column({ type: DataType.TEXT })
  CT4: string;


}

export default Clients;
