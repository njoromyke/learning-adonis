import UserService from '#services/user_service'
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'

@inject()
export default class UsersController {
  constructor(
    private ctx: HttpContext,
    private userService: UserService
  ) {}

  all() {
    return this.userService.all()
  }

  index() {
    return this.userService.index(this.ctx.params.id)
  }

  create() {
    // email, fullName
    const { email, fullName } = this.ctx.request.all()

    return this.userService.create({ email, fullName })
  }
}
