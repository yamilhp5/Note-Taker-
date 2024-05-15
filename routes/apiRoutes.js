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

// router.delete("/notes/:id", (req, res)=> {
//    fs.readFile("./db/db.json", (err, results)=>{
//         if( err){
//             throw err
//         }

//         let notelist = JSON.parse(results)

//         console.log(notelist)
        

       

//         //req.params.id

//    })
// });
router.delete('/notes/:id', (req, res)=> {
    let data = fs.readFileSync('./db/db.json','utf-8');
    const dataJSON =JSON.parse(data);
    const newNotes = dataJSON.filter((note) => {
        return note.id !== req.params.id;
    });
    fs.writeFileSync('./db/db.json', JSON.stringify(newNotes));
    res.json('Note deleted.');
}); 

module.exports = router; 