Client = require('diso.core/Client')

Views          = require('./Views')
routes         = require('./routes') 
ClientMessages = require('./ClientMessages')

Client.run(
  routes   : routes
  Views    : Views
  Messages : ClientMessages
)