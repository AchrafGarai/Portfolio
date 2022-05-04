import lume from '/lume/mod.ts'
import sass from '/lume/plugins/sass.ts'
import terser from '/lume/plugins/terser.ts'
import jsx from '/lume/plugins/jsx.ts'


const site = lume({
  src: './src',
})
site.copy('static')
site.use(jsx())
site.use(sass({ extensions: ['.scss'] }))
site.use(terser())

export default site
