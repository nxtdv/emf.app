import User from '#models/user'
import UserProfile from '#models/user_profile'
import UserSettings from '#models/user_settings'
import db from '@adonisjs/lucid/services/db'
import { DateTime } from 'luxon'

interface RegisterUserActionParams {
  nickname: string
  firstName: string
  lastName: string
  email: string
  password: string
  dateOfBirth: DateTime
  country: string
  timezone: string
}

export class RegisterUserAction {
  async execute(
    params: RegisterUserActionParams
  ): Promise<{ user: User; userSettings: UserSettings; userProfile: UserProfile }> {
    return db.transaction(async (trx) => {
      const user = await User.create(
        {
          ...params,
        },
        { client: trx }
      )

      const userSettings = await user.related('settings').create({}, { client: trx })

      const userProfile = await user.related('profile').create({}, { client: trx })

      return { user, userSettings, userProfile }
    })
  }
}
