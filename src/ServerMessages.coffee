class ServerMessages 
  constructor : (options)->
    @handler = options.handler
    @session = @handler.session
    
  name : (data, cb)=>
    cb(
      name : 'BARF'
    )
        
module.exports = ServerMessages