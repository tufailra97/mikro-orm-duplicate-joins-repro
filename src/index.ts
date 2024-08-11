import { MikroORM } from '@mikro-orm/postgresql';
import { UserEntity } from './entites/user-entity';
import { RoleEntity } from './entites/role.entity';
import { ProfileEntity } from './entites/profile.entity';

const init = async () => {
  const orm = await MikroORM.init();

  const [users, total] = await orm.em.findAndCount(
    UserEntity,
    {
      fullName: {
        $ilike: '%john%',
      },
      userProfiles: {
        isActive: true,
        role: {
          name: {
            $ilike: '%admin%',
          },
        },
      },
    },
    {
      populate: ['userProfiles.role'],
    }
  );
};

init();
