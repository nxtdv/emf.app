import { type UUID, WithPrimaryUUID } from '#models/mixins/with_primary_uuid'
import { WithTimestamps } from '#models/mixins/with_timestamps'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class UserProfile extends compose(BaseModel, WithPrimaryUUID, WithTimestamps) {
  @column()
  declare userId: UUID

  @column()
  declare bio: string | null

  @column({
    prepare: (value) => JSON.stringify(value),
    consume: (value) => (value ? JSON.parse(value) : {}),
  })
  declare socialMedias: {
    facebook?: string
    instagram?: string
    x?: string
    twitch?: string
    discord?: string
    spotify?: string
    steam?: string
    youtube?: string
    tiktok?: string
    linkedin?: string
  }
}
