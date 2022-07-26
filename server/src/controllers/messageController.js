const router = require('express').Router();

const api = require('../services/messageService');


router.get('/', async (req, res) => {
    try {
        res.json(await api.getAll(req.query.where));
    } catch (err) {
        res.status(400).json({ message: 'Bad request' });
    }
});
router.post('/', async (req, res) => {
    const message = {
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        message: req.body.message,
    };
    try {
        const result = await api.create(message);
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(400).json({ err });
    }
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const result = await api.onDelete(id);
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(404).json({ message: `Item ${id} not found` });
    }
})

module.exports = router;