var express = require('express')
var router = express.Router();

var comments = [{id: 0,
                 firstname: "François",
                 name: "Brucker",
                 comment: "Le web c'est la vie !"
                },
                {id: 1,
                 firstname: "Pascal",
                 name: "Préa",
                 comment: "La recherche est en n, on peut faire mieux. Comment ?"
                },
                {id: 2,
                 firstname: "Joëlle",
                 name: "Gazérian",
                 comment: "Un beau projet."
                }
               ]
var nextID = 3


router.get("/comment/:id", (request, response) => {
    response.send("READ comment with id: " + request.params.id)})
router.post("/comment/:id", (request, response) => {
    response.send("UPDATE comment with id: " + request.params.id)})
router.delete("/comment/:id", (request, response) => {
    response.send("DELETE comment with id: " + request.params.id)})
module.exports = router;