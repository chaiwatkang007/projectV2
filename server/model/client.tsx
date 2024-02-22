import {
    Table,
    Column,
    DataType,
    Model,
    PrimaryKey,
  } from "sequelize-typescript";
  
  @Table({ timestamps: false, tableName: "clients", underscored: true })
  class Clients extends Model {
    @PrimaryKey
    @Column({ type: DataType.UUID})
    client_id: string;
  
    @Column({ type: DataType.TEXT })
    user_id: string;
  
    @Column({ type: DataType.TEXT })
    client_name: string;
  }
  
  export default Clients;
  