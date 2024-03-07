import decodeToken from '../util/decodeToken'

const storeReducer = (state, action) => {

    const { type, payload } = action

    if (type === 'login_success') {
        // console.log(state) // this is called twice in React.StrictMode
        // console.log(type)
        // console.log(payload)
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
