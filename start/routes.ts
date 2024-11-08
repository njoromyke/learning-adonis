/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

const HomeController = () => import('#controllers/home_controller')
const UsersController = () => import('#controllers/users_controller')
const PostsController = () => import('#controllers/posts_controller')

router
  .group(() => {
    router
      .group(() => {
        router.group(() => {
          router.get('echo', [HomeController, 'handle']).use((_, next) => {
            console.log('I am a middleware')
            return next()
          })

          router.get('hello', [HomeController, 'hello']).as('echo.hello')

          router
            .group(() => {
              router.get('/', [UsersController, 'index'])
            })
            .prefix('users')
            .use(middleware.userLocation())
        })
      })
      .prefix('v1')
  })
  .prefix('api')

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.resource('posts', PostsController)
