import {
  Collection,
  Entity,
  Index,
  OneToMany,
  Property,
} from '@mikro-orm/postgresql';
import { BaseEntity } from './base-entity';
import { ProfileEntity } from './profile.entity';

@Entity({ tableName: 'roles' })
export class RoleEntity extends BaseEntity {
  @Property()
  name!: string;

  @Index()
  @OneToMany(() => ProfileEntity, (user) => user.role)
  users = new Collection<ProfileEntity>(this);
}
