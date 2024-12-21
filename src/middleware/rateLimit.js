const rateLimit = require('express-rate-limit')

const rateLimitMiddleware = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 10,
    message: 'TO many request to sent on server',
    standardHeaders: true,
    legacyHeaders: false,
})

module.exports = {
    rateLimitMiddleware
}