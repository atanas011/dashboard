import decodeToken from '../util/decodeToken'

const storeReducer = (state, action) => {

    const { type, payload } = action

    if (type === 'login_success') {
        state.token = payload.token
        state.user = decodeToken(payload.token)
    }

    if (type === 'logout') {
        state.token = ''
        state.user = ''
    }

    return state
}

export default storeReducer
