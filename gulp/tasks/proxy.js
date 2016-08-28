
'use strict'

import gutil from 'gulp-util'
import express from 'express'
import bodyParser from 'body-parser'
// import login from '../api/login'
// import user from '../api/user'
// import blogs from '../api/blogs'
// import globalConfig from '../api/global-config'
import config from '../../gulpfile.babel.js'
// import verify from '../api/verify'
import {AbstractTaskLoader} from 'banger'

// import config from '../../config'
// import utils from '../../utils'

class ProxyTaskLoader extends AbstractTaskLoader {

  constructor (phase) {
    super(phase)

    this.name = 'proxy'
    this.phase = phase
  }

  registerTask (gulp) {
    super.registerTask(gulp)

    gulp.task(this.name, false, () => {
      let app = express()
      app.use(bodyParser.json())
      // to support URL-encoded bodies.
      app.use(bodyParser.urlencoded({
        extended: true
      }))

    //   app.get('/api/login', login.showLoginPage)
    //   app.post('/api/login', login.login)

    //   app.get('/api/logout', user.logout)

    //   app.get('/api/user', user.getUser)
    //   app.put('/api/user', user.setUser)

    //   app.get('/api/user/update', user.getUpdateUser)
    //   app.put('/api/user/update', user.setUpdateUser)

    //   app.get('/api/user/register', user.getRegisteringUser)
    //   app.put('/api/user/register', user.registerUser)

    //   app.get('/api/user/register/resend', verify.resend)

    //   app.get('/api/user/register/verify/:token', verify.verify)

    //   app.get('/api/user/not', user.getNotUser)
    //   app.put('/api/user/not', user.setNotUser)

    //   app.get('/api/activate', user.getActivations)
    //   app.put('/api/activate', user.setActivations)

    //   app.get('/api/blogs', blogs.getPosts)

    //   app.get('/api/global-config', globalConfig.getConfig)

      app.listen(config.options.proxy.port)
      gutil.log(gutil.colors.green('API Stub listening on port: ' + config.options.proxy.port))
    })
  }
}

module.exports = new ProxyTaskLoader()
