import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column } from '@adonisjs/lucid/orm'
import encryption from '@adonisjs/core/services/encryption'
import { randomUUID } from 'node:crypto'

export default class User extends BaseModel {
  static selfAssignPrimaryKey = true

  @column({ isPrimary: true })
  declare id: string

  @column()
  declare username: string

  @column()
  declare email: string

  @column({
    serializeAs: null,
    prepare: (value: string | null) => {
      return value ? encryption.encrypt(value) : value
    },
  })
  declare password: string
  @column()
  declare avatar: string | null

  @column.dateTime({ autoCreate: true })
  @column()
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @beforeCreate()
  static assignUuid(user: User) {
    user.id = randomUUID()
  }
}
