const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
    message: { type: String, required: true },
    icon: { type: String, default: 'info' },
    date: { type: Date, default: Date.now }
});

const Notification = mongoose.model('Notification', NotificationSchema);
module.exports = Notification;
