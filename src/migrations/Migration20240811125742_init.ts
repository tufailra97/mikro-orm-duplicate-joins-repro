import { Migration } from '@mikro-orm/migrations';

export class Migration20240811125742_init extends Migration {

  override async up(): Promise<void> {
    this.addSql('create table "roles" ("id" varchar(255) not null, "created_at" timestamptz not null, "updated_at" timestamptz not null, "deleted_at" timestamptz null, "name" varchar(255) not null, constraint "roles_pkey" primary key ("id"));');

    this.addSql('create table "users" ("id" varchar(255) not null, "created_at" timestamptz not null, "updated_at" timestamptz not null, "deleted_at" timestamptz null, "first_name" varchar(255) not null, "last_name" varchar(255) not null, "email" varchar(255) not null, "password" varchar(255) not null, constraint "users_pkey" primary key ("id"));');
    this.addSql('create index "users_email_index" on "users" ("email");');
    this.addSql('alter table "users" add constraint "users_email_unique" unique ("email");');

    this.addSql('create table "profiles" ("id" varchar(255) not null, "created_at" timestamptz not null, "updated_at" timestamptz not null, "deleted_at" timestamptz null, "user_id" varchar(255) not null, "role_id" varchar(255) not null, constraint "profiles_pkey" primary key ("id"));');

    this.addSql('alter table "profiles" add constraint "profiles_user_id_foreign" foreign key ("user_id") references "users" ("id") on update cascade;');
    this.addSql('alter table "profiles" add constraint "profiles_role_id_foreign" foreign key ("role_id") references "roles" ("id") on update cascade;');
  }

  override async down(): Promise<void> {
    this.addSql('alter table "profiles" drop constraint "profiles_role_id_foreign";');

    this.addSql('alter table "profiles" drop constraint "profiles_user_id_foreign";');

    this.addSql('drop table if exists "roles" cascade;');

    this.addSql('drop table if exists "users" cascade;');

    this.addSql('drop table if exists "profiles" cascade;');
  }

}
