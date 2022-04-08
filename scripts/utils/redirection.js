const url = window.location.search
const notFoundPage = 'http://127.0.0.1:5500/not_found.html'

function redirectionURL() {
    document.location.href = notFoundPage;
}

if (!url) {
    redirectionURL()
}

