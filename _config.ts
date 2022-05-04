
import lume from 'https://deno.land/x/lume@v1.7.4/mod.ts'
import sass from 'https://deno.land/x/lume@v1.7.4/plugins/sass.ts'
import terser from 'https://deno.land/x/lume@v1.7.4/plugins/terser.ts'
import relative_urls from 'https://deno.land/x/lume@v1.7.4/plugins/relative_urls.ts'
import postcss from 'https://deno.land/x/lume@v1.7.4/plugins/postcss.ts'
import basePath from "https://deno.land/x/lume@v1.7.4/plugins/base_path.ts";
const site = lume({
  src: './src',
   location: new URL("https://achrafgarai.github.io/Portfolio/"),
})
site.copy('static')
site.use(relative_urls())
site.use(sass({ extensions: ['.scss'] }))
site.use(postcss())
site.use(terser())
site.use(basePath());

export default site
