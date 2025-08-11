import { WithPrimaryUUID } from '#models/mixins/with_primary_uuid'
import { WithTimestamps } from '#models/mixins/with_timestamps'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import type { DateTime } from 'luxon'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder, WithPrimaryUUID, WithTimestamps) {
  @column()
  declare firstName: string

  @column()
  declare lastName: string

  @column()
  declare email: string

  @column({ serializeAs: null })
  declare password: string

  @column.dateTime()
  declare dateOfBirth: DateTime

  @column()
  declare country: string

  @column()
  declare timezone: string

  @column()
  declare isEmailVerified: boolean

  @column()
  declare lastIpAddress: string | null

  @column()
  declare isGloballyBanned: boolean

  @column.dateTime()
  declare globalBannedUntil: DateTime | null

  @column()
  declare globalBanReason: string | null

  @column()
  declare isAdmin: boolean
}
