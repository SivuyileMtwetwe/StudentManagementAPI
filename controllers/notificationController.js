const Notification = require("../models/Notification");

exports.addNotification = async (message, icon = "info") => {
  const notification = new Notification({ message, icon });
  await notification.save();
};

exports.getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find();
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch notifications", error });
  }
};
