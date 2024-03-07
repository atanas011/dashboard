import jwt from 'jsonwebtoken'

export const authToken = (req, res, next) => {

    const { authorization } = req.headers
    if (!authorization) return res.sendStatus(401)

    const token = authorization.split('Bearer ')[1]
    if (!token) return res.sendStatus(401)

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET)
        req.user = user
        next()

    } catch (err) {
        res.status(401).json({ message: 'Session has expired' })
    }
}

export const authRole = (req, res, next) => {
    const { user } = req
    user.role === 'Admin' ? next() : res.status(403).json({ message: 'API Restricted' })
}
