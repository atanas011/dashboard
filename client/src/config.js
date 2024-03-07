const mode = 'dev'
let baseUrl = ''

baseUrl = mode === 'prod' ? '' : 'http://localhost:4000'

export default baseUrl
