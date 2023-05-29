import { createApp } from "vue"
import { createPinia } from "pinia"
import { Quasar } from "quasar"
import "quasar/dist/quasar.css"
// import "quasar/src/css/index.sass"
import "@quasar/extras/material-icons/material-icons.css"

import App from "./App.vue"
import router from "./router"
import "./assets/main.css"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Quasar, {
    plugins: {},
    config: {
        brand: {
            primary: "#1B75BA",
            secondary: "#666666",
            accent: "#2F1F94",
            dark: "#333333",
            "dark-page": "#333333",
            positive: "#4db888",
            negative: "#FF3A1E",
            info: "#31CCEC",
            warning: "#FFC500"
        }
    }
})
app.mount("#app")
