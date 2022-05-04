import lume from '/lume/mod.ts'
import sass from '/lume/plugins/sass.ts'
import terser from '/lume/plugins/terser.ts'
import relative_urls from '/lume/plugins/relative_urls.ts'
import pug from '/lume/plugins/pug.ts'
import jsx from '/lume/plugins/jsx.ts'


const site = lume({
  src: './src',
})
site.copy('static')
site.use(jsx())
site.use(pug())
site.use(relative_urls())
site.use(sass({ extensions: ['.scss'] }))
site.use(terser())

export default site
