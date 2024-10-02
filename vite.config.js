import { defineConfig } from 'vite';  
import { ViteEjsPlugin } from 'vite-plugin-ejs';  
import { fileURLToPath } from 'node:url';  
import path from 'node:path';  
import { glob } from 'glob';  
import liveReload from 'vite-plugin-live-reload';  

function autoImportSCSSPlugin() {  
  return {  
    name: 'auto-import-scss',  
    transformIndexHtml(html, ctx) {  
      // 检查当前HTML文件是否为html文件  
      if (ctx.path.endsWith('.html')) {  
        return html.replace(  
          '</head>',  
          '<link rel="stylesheet" href="/assets/scss/all.scss"></head>'  
        );  
      }  
      return html;  
    },  
  };  
}  

function moveOutputPlugin() {  
  return {  
    name: 'move-output',  
    enforce: 'post',  
    apply: 'build',  
    async generateBundle(options, bundle) {  
      for (const fileName in bundle) {  
        if (fileName.startsWith('pages/')) {  
          const newFileName = fileName.slice('pages/'.length);  
          bundle[fileName].fileName = newFileName;  
        }  
      }  
    },  
  };  
}  

export default defineConfig({  
  base: '/FlavorTrail/',  
  plugins: [  
    liveReload(['./layout/**/*.ejs', './pages/**/*.ejs', './pages/**/*.html']),  
    ViteEjsPlugin(),  
    autoImportSCSSPlugin(), // 添加自动引入 all.scss 的插件  
    moveOutputPlugin(),  
  ],  
  server: {  
    open: 'pages/index.html',  
  },  
  build: {  
    rollupOptions: {  
      input: Object.fromEntries(  
        glob  
          .sync('pages/**/*.html')  
          .map((file) => [  
            path.relative('pages', file.slice(0, file.length - path.extname(file).length)),  
            fileURLToPath(new URL(file, import.meta.url)),  
          ])  
      ),  
    },  
    outDir: 'dist',  
  },  
});