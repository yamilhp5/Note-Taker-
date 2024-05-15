const router = require('express').Router();
const store = require('../db/store');
const fs = require("fs");


//This is the route path /api/notes

router.get('/notes', (req, res)=>{
    store
     .getNotes()
     .then((notes) => {
        return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});


// This is the post route /api/notes

router.post('/notes', (req, res) => {
    store
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});

// Bonus 

//  -----  /api/notes/77

router.delete("/notes/:id", (req, res)=>{
   fs.readFile("./db/db.json", (err, results)=>{
        if( err){
            throw err
        }

        let notelist = JSON.parse(results)

        console.log(notelist)
        

       

        //req.params.id

   })
});

module.exports = router; 