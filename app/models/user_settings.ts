import { type UUID, WithPrimaryUUID } from '#models/mixins/with_primary_uuid'
import { WithTimestamps } from '#models/mixins/with_timestamps'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class UserSettings extends compose(BaseModel, WithPrimaryUUID, WithTimestamps) {
  @column()
  declare userId: UUID
}
