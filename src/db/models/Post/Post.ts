import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  PrimaryKey,
  DataType,
  Default,
} from 'sequelize-typescript'

@Table
export class Post extends Model<Post> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id!: string

  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  userId!: string

  @Column(DataType.TEXT)
  body!: string

  @CreatedAt
  @Column(DataType.DATE)
  createdAt!: Date

  @UpdatedAt
  @Column(DataType.DATE)
  updatedAt!: Date
}
