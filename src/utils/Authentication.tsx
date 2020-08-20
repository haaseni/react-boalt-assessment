const Authentication = {
    isAuthenticated: localStorage.getItem('user') ? true : false,
    authenticate(email:string, cb:any) {
        const data = localStorage.getItem('users') || '[]'
        const users = data ? JSON.parse(data) : []
        const user = users.find(user => user.email === email)

        if (user) {
            Authentication.isAuthenticated = true
        }
    
        setTimeout(cb, 100)
        return user
    },
    signout(cb:any) {
        localStorage.removeItem('user')
        Authentication.isAuthenticated = false
        setTimeout(cb, 100)
    }
}

export default Authentication