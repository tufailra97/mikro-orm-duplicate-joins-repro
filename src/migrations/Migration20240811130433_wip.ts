import { Migration } from '@mikro-orm/migrations';

export class Migration20240811130433_wip extends Migration {

  override async up(): Promise<void> {
    this.addSql('alter table "profiles" add column "username" varchar(255) null, add column "image_url" varchar(255) null, add column "is_active" boolean not null default true;');
  }

  override async down(): Promise<void> {
    this.addSql('alter table "profiles" drop column "username", drop column "image_url", drop column "is_active";');
  }

}
