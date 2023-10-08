const awesomeFunction = (req, res, next) => {
    res.json('Emily Karl');
};

const superAwesomeFunction = (req, res, next) => {
    res.json('Super Awesome Person');
};

module.exports = {
    awesomeFunction,
    superAwesomeFunction
};