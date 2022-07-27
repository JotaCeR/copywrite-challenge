function reverseWord (req, res) {
    try {
        const params = req.query;
        const reversed = params.text.split('').reverse().join('');
        const response = {
            text: reversed
        };

        if (params.text === reversed) response.palindrome = true;

        res.status(200).json(response);
    } catch (e) {
        console.error(e);
        res.status(400).send(e.message);
    };
};

module.exports = reverseWord;