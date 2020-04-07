const express = require('express');
const router = express.Router();

const Links = require('../../model/Links');

router.get('/', (req, res) => {
    Links.find()
        .then(result => res.json(result))
        .catch(err => res.status(400).json({ "message": err }));
});

router.post('/', (req, res) => {
    let link = new Links({
        longlink: req.body.longlink
    });

    link.save()
        .then(result => res.json({ "success": true, result: result }))
        .catch(err => res.status(404).json(err));
});

router.delete('/:_id', (req, res) => {
    Links.deleteOne({ _id: req.params._id})
        .then(result => {
            if(!result) res.json({ "success": false, "message": "Link not found!"});
            res.json({ "success": true, result: result });
        })
        .catch(err => res.json({ "success": false, result: err }));
});

module.exports = router;