const express = require('express');

const router = express.Router();
const animals = [
    {id: 1, name: 'Dog',    age: 15},
    {id: 2, name: 'Cat',    age: 3 },
    {id: 3, name: 'Turtle', age: 25},
    {id: 4, name: 'Lion',   age: 10},
]


//GET return all animals.
router.get('/animals', (req, res) => {
   return res.json(animals);
})

//GET return just one animal by id.
router.get('/animals/:id', (req, res) => {
    const animalSelected = animals.filter(e => e.id == req.params.id);
    if (animalSelected.length !== 0) {
        res.status(200).json(animalSelected);
    } 
    else {
        res.status(400).send();
    }
})

//POST add a new animal.
router.post('/animals', (req, res) => {
    animals.push(req.body);
    res.json(animals);
})

//PUT update an animal.
router.put('/animals/:id', (req, res) => {
    const animalId = req.params.id;
    const animalName = req.body.name;
   
    const updateAnimal = animals.filter(e => e.id == animalId);
    updateAnimal[0].name = animalName;

    res.json(animals);
})

//DELETE delete an animal.
router.delete('/animals/:id', (req, res) => {
    const animalId = parseInt(req.params.id);
    animals.splice(animalId - 1, 1)

    res.json(animals);
})


module.exports = router;
