import { Entity, ManyToOne, Property, Rel } from '@mikro-orm/postgresql';
import { RoleEntity } from './role.entity';
import { UserEntity } from './user-entity';
import { BaseEntity } from './base-entity';

@Entity({ tableName: 'profiles' })
export class ProfileEntity extends BaseEntity {
  @Property({ nullable: true })
  username!: string;

  @Property({ nullable: true })
  imageUrl!: string;

  @Property({ default: true, name: 'is_active' })
  isActive!: boolean;

  @ManyToOne()
  user!: Rel<UserEntity>;

  @ManyToOne()
  role!: Rel<RoleEntity>;
}
