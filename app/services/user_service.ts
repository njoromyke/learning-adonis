import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'

@inject()
export default class UserService {
  constructor(protected ctx: HttpContext) {}
  async all() {
    return await db
      .from('users')
      .select('id', 'email as userEmail')
      .paginate(this.ctx.request.input('page', 1), 1)
  }
  index(id: string) {
    return db.from('users').select('id', 'email as userEmail').where('id', id)
  }
}
