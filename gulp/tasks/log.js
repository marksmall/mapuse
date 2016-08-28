
'use strict'

import gutil from 'gulp-util'
import {AbstractTaskLoader} from 'banger'

// import config from '../../config'
// import utils from '../../utils'

class LogTaskLoader extends AbstractTaskLoader {

  constructor (phase) {
    super(phase)

    this.name = 'logger-app'
    this.phase = phase
  }

  registerTask (gulp) {
    super.registerTask(gulp)

    gulp.task(this.name, false, () => {
    //   gutil.log(gutil.colors.green('Logger task being run'))
      gutil.log(gutil.colors.green(`${this.name} task being run during phase: ${this.phase}`))
    })
  }
}

module.exports = new LogTaskLoader('compile')
