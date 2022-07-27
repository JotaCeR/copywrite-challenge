function getQueryParams (req, res, next) {
    try {
        if (!req.query.text) return res.status(400).json({error: 'no text'})

        next();
    } catch (e) {
        console.error(e)
        res.status(400).message(e.message);
    };
};

module.exports = getQueryParams;