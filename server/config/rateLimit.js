import rateLimit from 'express-rate-limit';


export const limiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 60 minutes
    limit: 100, // Limit each IP to 100 requests per windowMs
    standardHeaders: 'draft-7',
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

