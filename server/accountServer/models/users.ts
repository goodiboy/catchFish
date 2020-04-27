import {
    Table,
    Column,
    Model,
    DataType,
    Unique,
    AutoIncrement,
    Default,
    AllowNull, PrimaryKey, CreatedAt, UpdatedAt
} from "sequelize-typescript";

@Table
export default class Users extends Model<Users> {

    @AutoIncrement
    @Column(DataType.INTEGER)
    id: number;

    @Unique
    @AllowNull
    @PrimaryKey
    @Column(DataType.STRING)
    username: string;

    @AllowNull
    @Column(DataType.STRING)
    password: string;

    @AllowNull
    @Column(DataType.STRING)
    nickname: string;


    @Default(1000)
    @Column(DataType.INTEGER)
    money: number;

    @Default(1)
    @Column(DataType.INTEGER)
    level: number;

    @Default(0)
    @Column(DataType.INTEGER)
    sex: number;

    @CreatedAt
    createdAt: number;

    @UpdatedAt
    updatedAt: number;
}