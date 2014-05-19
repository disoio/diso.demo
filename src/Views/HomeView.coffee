View     = require('diso.view')
Mediator = require('diso.core/Client').Mediator
$        = require('jquery')

class HomeView extends View
  meta : ()->
    {
      title       : "diso.io"
      image       : "http://diso.io/static/img/logo/png"
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