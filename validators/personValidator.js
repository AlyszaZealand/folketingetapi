const joi = require('joi');

const personValidationSchema = joi.object({
    navn: joi.string().required(),
    titel: joi.string().required(),
    parti: joi.string().required(),
    startdato: joi.date().optional()
});

exports.validatePerson = (req, res, next) => {
    const {error} = personValidationSchema.validate(req.body);


    if(error){
        return res.status(400).json({error: error.details[0].message });
    }

    next();
};