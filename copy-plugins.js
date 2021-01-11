const fs = require('fs').promises
const copy = require('recursive-copy')

const plugins = [
  'jquery',
  'bootstrap'
]
const distPath = './dist/plugins'

fs.rmdir(distPath, { recursive: true })
  .then(() => {
    console.log('directory removed!')

    plugins.forEach(plugin => {
      copy(`./node_modules/${plugin}`, `${distPath}/${plugin}`, function(error, results) {
        if (error) {
          console.error(`Copy failed: ${error}`)
        } else {
          console.info(`Copied ${results.length} files`)
        }
      })
    })
  })
