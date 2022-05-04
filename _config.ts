import lume from 'https://deno.land/x/lume@v1.7.4/mod.ts'
import sass from 'https://deno.land/x/lume@v1.7.4/plugins/sass.ts'
import terser from 'https://deno.land/x/lume@v1.7.4/plugins/terser.ts'
import jsx from 'https://deno.land/x/lume@v1.7.4/plugins/jsx.ts'


const site = lume({
  src: './src',
})
site.copy('static')
site.use(jsx())
site.use(sass({ extensions: ['.scss'] }))
site.use(terser())

export default site
