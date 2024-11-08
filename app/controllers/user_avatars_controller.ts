import { Application } from '@adonisjs/core/app'
import { cuid } from '@adonisjs/core/helpers'
import type { HttpContext } from '@adonisjs/core/http'
import app from '@adonisjs/core/services/app'

export default class UserAvatarsController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {}

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {}

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, auth }: HttpContext) {
    const avatar = request.file('avatar')

    await avatar?.move(app.makePath('storage/uploads'), {
      name: `${cuid()}.${avatar.extname}`,
    })

    // @ts-ignore
    auth!.user!.avatar = avatar!.fileName

    await auth!.user!.save()
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}
