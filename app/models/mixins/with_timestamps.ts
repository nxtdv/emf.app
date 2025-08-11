import { type BaseModel, column } from '@adonisjs/lucid/orm'
import type { NormalizeConstructor } from '@adonisjs/core/types/helpers'
import type { DateTime } from 'luxon'

export const WithTimestamps = <Model extends NormalizeConstructor<typeof BaseModel>>(
  superclass: Model
) => {
  class WithTimestampsClass extends superclass {
    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    declare updatedAt: DateTime
  }

  return WithTimestampsClass
}
