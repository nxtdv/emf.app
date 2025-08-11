import { type UUIDTypes, v7 as randomUUID } from 'uuid'
import { type BaseModel, beforeCreate, column } from '@adonisjs/lucid/orm'
import type { NormalizeConstructor } from '@adonisjs/core/types/helpers'

export type UUID = UUIDTypes

export const WithPrimaryUUID = <Model extends NormalizeConstructor<typeof BaseModel>>(
  superclass: Model
) => {
  class WithPrimaryUUIDClass extends superclass {
    static selfAssignPrimaryKey = true

    @column({ isPrimary: true })
    declare id: UUID

    @beforeCreate()
    static generateUUID(model: any) {
      model.id = randomUUID()
    }
  }

  return WithPrimaryUUIDClass
}
