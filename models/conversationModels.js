const mongoose = require('mongoose');

const ConversationSchema = mongoose.Schema({
  participants: [
    {
      senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      receiverId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    }
  ]
});

module.exports = mongoose.model('Converation', ConversationSchema);
