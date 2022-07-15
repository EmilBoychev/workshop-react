const Item = require('../models/Item');


async function getAll(query) {
    if (query) {
        const userId = query.split('=')[1].slice(1, -1);
        return Item.find({ _ownerId: userId });
    }
    return Item.find({});
}

async function create(item) {
    const result = new Item({
        name: item.make,
        imgUrl: item.imgUrl,
        description: item.description,
        price: item.price,
        // _ownerId: item._ownerId
    });

    await result.save();

    return result;
}

async function getById(id) {
    return Item.findById(id);
}

async function updateById(existing, item) {
    existing.name = item.name;
    existing.imgUrl = item.imgUrl;
    existing.description = item.description;
    existing.price = item.price;

    await existing.save();

    return existing;
}

async function deleteById(id) {
    return await Item.findByIdAndDelete(id);
}

module.exports = {
    getAll,
    create,
    getById,
    updateById,
    deleteById
};