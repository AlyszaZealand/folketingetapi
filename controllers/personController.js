const Person = require('../models/person');

exports.create = async (req, res) => {
    const person = new Person(req.body);
    await person.save();
    res.status(201).json(person);
};

exports.getAll = async (req, res) => {
    const persons = await Person.find();
    res.json(persons);
}

exports.getById = async (req, res) => {
    const person = await Person.findById(req.params.id);
    if (!person) {
        return res.status(404).json({ error: 'Personen ikke fundet'})
    }
    res.json(person);
}

exports.updateById = async (req, res) => {
    const person = await Person.findByIdAndUpdate(req.params.id, req.body, {new: true})
    if (!person) {
        return res.status(404).json({ error: 'Personen ikke fundet'})
    }
    res.json(person);
}

exports.deleteById = async (req, res) => {
    const person = await Person.findByIdAndDelete(req.params.id);
    if (!person) {
        return res.status(404).json({error: 'Personen ikke fundet'})
    }
    res.json({message: 'Personen blev slettet'});
}

