const router = require ("express").Router()
const notes = require("../../db/db.json");
const uuid = require("uuid")
const fs = require("fs")
const path = require("path")
router.get("./notes", (req,res)=>{
    res.json(notes)
})
router.post("/notes", (req, res) =>{
    const notes = require("../../db/db.json")
    req.body.id = uuid.v4();
    console.log(req.body)
    notes.pish(req.body)
    fs.writeFileSync(
        path.join(__dirname + "../../../db/db.json"),
        JSON.stringify(notes)
    )
    res.json(req.body)
})
module.exports = router