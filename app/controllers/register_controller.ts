import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import vine from '@vinejs/vine'
import { DateTime } from 'luxon'
import { RegisterUserAction } from '../actions/register_user_action.js'

@inject()
export default class RegisterController {
  static request = vine.compile(
    vine.object({
      nickname: vine.string(),
      firstName: vine.string(),
      lastName: vine.string(),
      email: vine.string().email(),
      password: vine.string().minLength(8).confirmed(),
      dateOfBirth: vine.string().transform((value: string) => {
        return DateTime.fromISO(value)
      }),
      country: vine.string(),
      timezone: vine.string(),
    })
  )

  constructor(private readonly action: RegisterUserAction) {}

  render({ inertia }: HttpContext) {
    return inertia.render('auth/register')
  }

  async execute({ auth, request, response }: HttpContext) {
    const payload = await request.validateUsing(RegisterController.request)

    const { user } = await this.action.execute(payload)
    await auth.use('web').login(user)

    return response.redirect().toRoute('home')
  }
}
