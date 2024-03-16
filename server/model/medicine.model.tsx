import {
    Table,
    Column,
    DataType,
    Model,
    PrimaryKey,
    AutoIncrement,
  } from "sequelize-typescript";
  
  @Table({ timestamps: false, tableName: "medicine", underscored: true })
  class Medicine extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({ type: DataType.INTEGER})
    id: number;
  
    @Column({ type: DataType.TEXT })
    md_name: string;
    
    @Column({ type: DataType.TEXT })
    md_set: string;

    @Column({ type: DataType.INTEGER })
    md_input: number;

    @Column({ type: DataType.INTEGER })
    md_output: number;

    @Column({ type: DataType.INTEGER })
    md_total: number;
  }
  
  export default Medicine;
  