// Resources
const itemSchema = require('.././models/model.js');
const json = require('json');

// Route Handlers

// Get Request
exports.getItem = async (req, res, next) => {
    try {
        const item = await item.findById(req.param.id);

        res.status(200).json({
            status: 'success',
            data: {
                item: item
            }
        })
    }
    catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err
        })
    }
}

// Get Request: All
exports.getItems = async (req, res, next) => {
    try {
        const items = await item.find();

        res.status(200).json({
            status: 'success',
            data: {
                items: items
            }
        })
    }
    catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err
        })
    }
}

// Get Request: Filter
exports.getFilteredItems = async (req, res, next) => {
    try {
        // Build Query
        const queryObj = {...req.query};
        const excludedFields = ['page', 'sort', 'limit', 'fields'];
        excludedFields.forEach(el => delete queryObj);
        
        // Execute Query
        const query = item.find(queryObj);
        const items = await query;
        
        // Send Response
        res.status(200).json({
            status: 'success',
            data: {
                items: items
            }
        })
    }
    catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err
        })
    }
}

// Patch Request
exports.updateItem = async (req, res, next) => {
    try {
        const updatedItem = await item.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });

        res.status(200).json({
            status: 'success',
            data: {
                item: updatedItem
            }
        })
    }
    catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err
        })
    }
}

// Put Request
exports.overwriteItem = async (req, res, next) => {
    try {
        const overwrittenItem = await item.put(req.body);

        res.status(200).json({
            status: 'success',
            data: {
                item: overwrittenItem
            }
        })
    }
    catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err
        })
    }
}

// Post Request
exports.createItem = async (req, res, next) => {
    try {
        const newItem = await item.create(req.body);

        res.status(200).json({
            status: 'success',
            data: {
                item: newItem
            }
        })
    }
    catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err
        })
    }

    
}

// Delete Request
exports.deleteItem = async (req, res, next) => {
    try {
        const deletedItem = await item.findByIdAndDelete(req.params.id);

        res.status(200).json({
            status: 'success',
            data: {
                item: deletedItem
            }
        })
    }
    catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err
        })
    }
}
