const fs = require('fs').promises
const copy = require('recursive-copy')

const plugins = [
  'jquery',
  'bootstrap',
  'slick-carousel'
]
const distPlugins = './dist/plugins'

fs.rmdir(distPlugins, { recursive: true })
  .then(() => {
    console.log('Plugins directory removed!')

    plugins.forEach(plugin => {
      copy(`./node_modules/${plugin}`, `${distPlugins}/${plugin}`, function(error, results) {
        if (error) {
          console.error(`Copy failed: ${error}`)
        } else {
          console.info(`Copied ${results.length} files`)
        }
      })
    })
  })

const distImages = './dist/images'

fs.rmdir(distImages, { recursive: true })
  .then(() => {
    console.log('Images directory removed!')

    copy('./src/images', distImages, function(error, results) {
      if (error) {
        console.error(`Copy failed: ${error}`)
      } else {
        console.info(`Copied ${results.length} files`)
      }
    })
  })
