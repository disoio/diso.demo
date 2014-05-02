View = require('diso.view')

class MainPageView extends View.Page
  styles : []
  
  scripts : ['/static/runClient.js']

  site_name   : "YOUPLAYSPORTS"
  description : 'SPORTS'
  viewport    : 'initial-scale = 1.0,maximum-scale = 1.0'
  keywords    : ['drawing']
  

  template : ()->
    """
      <div>
        #{@body.html()}
      </div>
    """

module.exports = MainPageView