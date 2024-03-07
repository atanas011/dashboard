import { jwtDecode } from 'jwt-decode'

const decodeToken = token => {

    if (!token) return ''

    try {
        const decodedToken = jwtDecode(token)
        const exp = new Date(decodedToken.exp * 1000)

        if (new Date() > exp) {
            localStorage.removeItem('token')
            return ''
        }

        return decodedToken

    } catch (error) {
        return ''
    }
}

export default decodeToken
