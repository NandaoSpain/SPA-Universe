import { route } from './router.js'


const router = new Router()
route.add('/' , '/pages/home.html')
route.add('/universo' , '/pages/universo.html')
route.add('/exploracao' , '/pages/exploracao.html')
route.add(404 , '/pages/404.html')


handle()

window.onpopstate = () => this.handle()
window.route = () => this.route()