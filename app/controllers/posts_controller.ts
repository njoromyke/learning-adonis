import { createPostValidator, updatePostValidator } from '#validators/post'
import type { HttpContext } from '@adonisjs/core/http'

export default class PostsController {
  /**
   * Display a list of resource
   */
  async index({ request }: HttpContext) {
    const credential = request.only(['username', 'password'])
    const except = request.except(['password'])
    const all = request.all()
    const body = request.body()
    const param = request.params()
    const query = request.qs()
    const headers = request.headers()
    const url = request.url()
    const method = request.method()

    console.log(credential)
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    const data = request.all()

    const payload = await createPostValidator.validate(data)

    return payload
  }

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
  async update({ params, request }: HttpContext) {
    const data = request.all()

    // const payload = await updatePostValidator.validate(data)
    const payload = request.validateUsing(updatePostValidator)

    return payload
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}
