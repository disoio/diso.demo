View = require('diso.view')
Mediator = require('diso.client').Mediator
$ = require('jquery')

class HomeView extends View
  meta : ()->
    {
      title       : "YOUPLAYSPORTS.com"
      image       : "http://youplaysports.com/static/img/logo.jpg"
    }
    
  run : ()->
    $('body').css(backgroundColor: 'red')
    
    Mediator.send(
      name : 'name'
    )
    
    Mediator.once('nameReply', (data)=>
      $('body')
        .append("<br/>AND JUST GOT THE NAME, AND THE NAME IS <h1>#{data.name}</h1>")
        .css(backgroundColor: 'green')
  
    )
  
  template : ()->
    """
      yr home page hi
    """
  
module.exports = HomeView