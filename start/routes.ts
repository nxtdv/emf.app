/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const LoginController = () => import('#controllers/login_controller')
const LogoutController = () => import('#controllers/logout_controller')
const RegisterController = () => import('#controllers/register_controller')
import router from '@adonisjs/core/services/router'

router.on('/').renderInertia('home').as('home')

router.get('/login', [LoginController, 'render']).as('auth.login.render')
router.post('/login', [LoginController, 'execute']).as('auth.login.execute')

router.post('/logout', [LogoutController, 'execute']).as('auth.logout.execute')

router.get('/register', [RegisterController, 'render']).as('auth.register.render')
router.post('/register', [RegisterController, 'execute']).as('auth.register.execute')
