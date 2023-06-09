import { fileURLToPath, URL } from "node:url"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import { quasar, transformAssetUrls } from "@quasar/vite-plugin"

export default defineConfig({
    plugins: [
        vue({
            template: { transformAssetUrls }
        }),
        vueJsx(),
        quasar({
            sassVariables: "./src/quasar-variable.scss"
        })
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url))
        }
    },
    server: {
        host: "0.0.0.0",
        port: 8080 || 8081 || 8082 || 8083 || 8084
    }
})
