import {
    Table,
    Column,
    DataType,
    Model,
    PrimaryKey,
  } from "sequelize-typescript";
  
  @Table({ timestamps: false, tableName: "paracetamol", underscored: true })
  class Paracetamolss extends Model {
    @PrimaryKey
    @Column({ type: DataType.INTEGER})
    id: number;
  
    @Column({ type: DataType.TEXT })
    md_name: string;
  
    @Column({ type: DataType.TEXT })
    md_type: string;

    @Column({ type: DataType.INTEGER })
    md_number: number;

    @Column({ type: DataType.INTEGER })
    md_remaining: number;
  }
  
  export default Paracetamolss;
  