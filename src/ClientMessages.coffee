class ClientMessages
  constructor : (options)->
    @client = options.client
  
  clientReady : ()->
    console.log("OH SHIT THE CLIENT IS READY")
  
  nameReply : (data, cb)=>
    console.log("OK GOT THIS NAME : #{data.name}")
        
module.exports = ClientMessages