import { Exception } from '@adonisjs/core/exceptions'

export default class AppException extends Exception {
  private static readonly lookup = {
    500: 500,
    503: 503,
  }

  public innerException
  public appCode

  private constructor(code: number, _args?: any, innerException?: Error) {
    // @ts-ignore
    const status = AppException.lookup[code] ?? 417
    super(status)

    this.appCode = code
    this.innerException = innerException
  }

  public static fromCode(code: number, args?: any, innerException?: any) {
    return new AppException(code, args, innerException)
  }
}
