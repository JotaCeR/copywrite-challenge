function getQueryParams (req, res, next) {
    try {
        const params = req.query;
        const check = Object.entries(params);

        if (check.length <= 0) {
            return res.status(400).send('API needs query params passed by to function correctly...')
        } else if (!params.text) {
            return res.status(400).json({error: 'no text'})
        }

        next();
    } catch (e) {
        console.error(e)
        res.status(400).message(e.message);
    };
};

module.exports = getQueryParams;