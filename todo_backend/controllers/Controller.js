const Model = require("../models/Model");

module.exports.getToDo = async (req, res) => {
    const todo = await Model.find();
    res.send(todo);
}

module.exports.saveToDo = (req, res) => {
    const { text } = req.body;

    Model
        .create({ text })
        .then((data) =>{ 
            console.log("Added Successfully...")
            console.log(data)
            res.send(data)
        })
        .catch((err) => console.log(err));
}

module.exports.deleteToDo = (req, res) => {
    const { _id } = req.body;

    console.log('id : ', _id);

    Model
        .findByIdAndDelete(_id)
        .then(() => res.set(201).send("Todo deleted successfully..."))
        .catch((err) => console.log(err));
}

module.exports.updateToDo = (req, res) => {
    const { _id, text } = req.body;

    Model
        .findByIdAndUpdate(_id, { text })
        .then(() => res.set(201).send("Todo updated successfully..."))
        .catch((err) => console.log(err));
}