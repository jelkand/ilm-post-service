import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  PrimaryKey,
  DataType,
} from 'sequelize-typescript'

@Table
class Post extends Model<Post> {
  @PrimaryKey
  @Column(DataType.UUIDV4)
  id!: string

  @Column(DataType.UUIDV4)
  userId!: string

  @Column
  body!: Text

  @CreatedAt
  @Column
  createdAt!: Date

  @UpdatedAt
  @Column
  updatedAt!: Date
}
