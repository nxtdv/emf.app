import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().notNullable()
      table.string('nickname').notNullable()
      table.string('first_name').notNullable()
      table.string('last_name').notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('password').notNullable()
      table.dateTime('date_of_birth').nullable()
      table.string('country').notNullable()
      table.string('timezone').notNullable()
      table.string('avatar_url').nullable()
      table.string('banner_url').nullable()
      table.string('last_ip_address').nullable()
      table.boolean('is_email_verified').defaultTo(false)
      table.boolean('is_globally_banned').defaultTo(false)
      table.dateTime('global_banned_until').nullable()
      table.string('global_ban_reason').nullable()
      table.boolean('is_admin').defaultTo(false)

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
