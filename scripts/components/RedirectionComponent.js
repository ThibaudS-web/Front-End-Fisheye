class RedirectionComponent {
    
    redirectOnPageNotFound() {
        const notFoundPagePath = '/not_found.html'
        document.location.href = notFoundPagePath;
    }
}

export default RedirectionComponent