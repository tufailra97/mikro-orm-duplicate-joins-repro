import {
  Collection,
  Entity,
  Formula,
  Index,
  OneToMany,
  Property,
  Unique,
} from '@mikro-orm/postgresql';

import { BaseEntity } from './base-entity';
import { ProfileEntity } from './profile.entity';

@Entity({ tableName: 'users' })
export class UserEntity extends BaseEntity {
  @Property({ name: 'first_name' })
  firstName!: string;

  @Property({ name: 'last_name' })
  lastName!: string;

  @Formula(`CONCAT(first_name, ' ', last_name)`)
  fullName!: string;

  @Property()
  @Unique()
  @Index()
  email!: string;

  @Property({ hidden: true })
  password!: string;

  @Index()
  @OneToMany(() => ProfileEntity, (userProfile) => userProfile.user)
  userProfiles = new Collection<ProfileEntity>(this);
}
