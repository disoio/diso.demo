View = require('diso.view')

class MainPageView extends View.Page
  styles : []
  
  scripts : ['/static/runClient.js']

  site_name   : "diso.io"
  description : 'diso'
  viewport    : 'initial-scale = 1.0,maximum-scale = 1.0'
  keywords    : ['diso']
  

  template : ()->
    """
      <div>
        #{@body.html()}
      </div>
    """

module.exports = MainPageView