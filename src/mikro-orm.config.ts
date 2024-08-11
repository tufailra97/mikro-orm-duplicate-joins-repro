import { Migrator } from '@mikro-orm/migrations';
import { defineConfig, LoadStrategy } from '@mikro-orm/postgresql';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { ProfileEntity } from './entites/profile.entity';
import { RoleEntity } from './entites/role.entity';
import { UserEntity } from './entites/user-entity';

export default defineConfig({
  allowGlobalContext: true,
  clientUrl: process.env.MIKRO_ORM_DATABASE_URL,
  entities: [UserEntity, RoleEntity, ProfileEntity],
  entitiesTs: [UserEntity, RoleEntity, ProfileEntity],
  debug: true,
  loadStrategy: LoadStrategy.JOINED,
  baseDir: process.cwd(),
  logger: console.log,
  highlighter: new SqlHighlighter(),
  metadataProvider: TsMorphMetadataProvider,
  // @ts-expect-error nestjs adapter option
  registerRequestContext: false,
  migrations: {
    snapshot: false,
    path: './src/migrations',
    tableName: 'migrations',
  },

  extensions: [Migrator],
});
