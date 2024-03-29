import { MissingParamError } from "../errors/missing-param-error"
import { HttpRequest, HttpResponse } from "../protocols/http"
import { badRequest } from '../helpers/http-helper'

export class SignUpController {
  handle(httpRequest: HttpRequest): any {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
  }

}
