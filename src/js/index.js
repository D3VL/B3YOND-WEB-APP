import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from '../vue/App.vue'


// Components
import Logo from '../vue/components/Logo.vue'
import Footer from '../vue/components/Footer.vue'
import Alert from '../vue/components/Alert.vue'

const duml = {
    Session: require('./class/duml/Session.js'),
    Packer: require('./class/duml/Packer.js'),
}

// Set up router
const router = createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: '/start',
            name: 'start',
            component: require('../vue/Start.vue').default
        },
        {
            path: '/models',
            name: 'model_list',
            component: require('../vue/ModelPicker.vue').default
        },
        {
            path: '/model/:slug',
            name: 'model_connect',
            component: require('../vue/ConnectionFlow.vue').default
        },
        {
            path: '/connect/bulk/:slug',
            name: 'model_connect_bulk',
            component: require('../vue/ConnectToBulk.vue').default
        },
        {
            path: '/connect/serial/:slug',
            name: 'model_connect_serial',
            component: require('../vue/ConnectToSerial.vue').default
        },
        { path: '/:pathMatch(.*)*', redirect: '/start' }
    ]
})

const app = createApp(App)

// @TODO: make this match the GitHub build
app.config.globalProperties.$build = '0.0.0'

// global class instances
const dumlSession = new duml.Session();
app.config.globalProperties.session = dumlSession;
// app.config.globalProperties.session.setUnmatchedListener(console.warn);

// left here for debugging
window.session = dumlSession;
window.duml = duml;

// add global components
app.component('Logo', Logo)
app.component('Footer', Footer)
app.component('Alert', Alert)

// add router
app.use(router)

// Start up app
app.mount('#app')

