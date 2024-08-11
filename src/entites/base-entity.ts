import {
  BaseEntity as MikroOrmBaseEntity,
  PrimaryKey,
  Property,
  Unique,
} from '@mikro-orm/postgresql';
import { v4 } from 'uuid';

export class BaseEntity extends MikroOrmBaseEntity {
  @PrimaryKey()
  @Unique()
  id: string = v4();

  @Property()
  createdAt: Date = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();

  @Property({ nullable: true })
  deletedAt?: Date;
}
