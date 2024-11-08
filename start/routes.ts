/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import app from '@adonisjs/core/services/app'
import router from '@adonisjs/core/services/router'
import { normalize, sep } from 'node:path'

const HomeController = () => import('#controllers/home_controller')
const UsersController = () => import('#controllers/users_controller')
const PostsController = () => import('#controllers/posts_controller')
const UserAvatarsController = () => import('#controllers/user_avatars_controller')

// router
//   .group(() => {
//     router
//       .group(() => {
//         router.group(() => {
//           router.get('echo', [HomeController, 'handle']).use((_, next) => {
//             console.log('I am a middleware')
//             return next()
//           })

//           router.get('hello', [HomeController, 'hello']).as('echo.hello')

//           router
//             .group(() => {
//               router.get('/', [UsersController, 'index'])
//             })
//             .prefix('users')
//             .use(middleware.userLocation())
//         })
//       })
//       .prefix('v1')
//   })
//   .prefix('api')

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.resource('posts', PostsController)
router.resource('avatar', UserAvatarsController)
router.get('users', [UsersController, 'all'])
router.get('users/:id', [UsersController, 'index'])

const PATH_TRAVERSAL_REGEX = /(?:^|[\\/])\.\.(?:[\\/]|$)/

router.get('/uploads/*', async ({ request, response }) => {
  const filePath = request.param('*').join(sep)
  const normalizedPath = normalize(filePath)

  if (PATH_TRAVERSAL_REGEX.test(normalizedPath)) {
    return response.badRequest('Malfomed path')
  }

  const absolutePath = app.makePath('uploads', normalizedPath)

  return response.download(absolutePath)
})
