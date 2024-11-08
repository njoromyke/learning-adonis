import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'

@inject()
export default class UserService {
  constructor(private ctx: HttpContext) {}

  all() {
    console.log(this.ctx.auth.user)
    // return users from db
  }

  index() {
    console.log('I am a middleware')
    return 'Hello world'
  }
}
