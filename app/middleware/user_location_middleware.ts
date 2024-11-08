import GeoIpService from '#services/geoip_service'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

@inject()
export default class UserLocationMiddleware {
  /**
   *
   */
  constructor(protected geoIpService: GeoIpService) {}
  async handle(ctx: HttpContext, next: NextFn) {
    const ip = ctx.request.ip()

    const output = await next()
    return output
  }
}
