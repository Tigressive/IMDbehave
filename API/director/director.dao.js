const mongoose = require('mongoose');
const schema = require('./director.schema');

schema.statics = {
    create: function (data, callback){
        const document = new this(data);
        document.save(callback);
    },
    read: function (query, callback){
        this.find(query, callback);
    },
    update: function (query, data, callback) {
        this.findOneAndUpdate(query, {$set: data}, callback);
    },
    delete: function (query, callback) {
        this.findOneAndDelete(query, callback);
    }
}

const model = mongoose.model('Director', schema);
module.exports = model;
