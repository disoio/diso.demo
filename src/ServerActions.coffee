Views = require('./Views')

class ServerActions
  constructor : (options)->
    @session = options.session
    
  @Page : Views.MainPageView
    
  @notFound : (request, response)=>
    response.end("OH NOT FOUND OH NO")
  
  home : (params, cb)=>
    cb(
      View : Views.HomeView
      data : {}
    )

module.exports = ServerActions