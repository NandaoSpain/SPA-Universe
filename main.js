function route(event) {
    event = event || window.event
    event.preventDefault()
    
    window.history.pushState({}, '', event.target.href)

    handle()
}

const routes = {
    '/' : '/pages/home.html',
    '/universo' : '/pages/universo.html',
    '/exploracao' : '/pages/exploracao.html',
    404 : '/pages/404.html'
}

function handle() {
    const { pathname } = window.location
    const route = routes[pathname] || routes[404]

    fetch(route)
    .then(data => data.text())
    .then(html => {
        document.querySelector('#app').innerHTML = html
    })

}