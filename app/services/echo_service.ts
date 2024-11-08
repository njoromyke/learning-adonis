import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'

@inject()
export default class EchoService {
  /**
   *
   */
  constructor(protected ctx: HttpContext) {}
  respond() {
    return 'Hello'
  }
}
