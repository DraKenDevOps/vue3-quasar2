<script lang="ts">
import { ref } from "vue"
import { useRoute } from "vue-router"

const menuList = [
    {
        icon: "home",
        label: "Dashboard",
        to: "/dashboard"
    },
    {
        icon: "business",
        label: "Companies",
        to: "/dashboard",
        separator: false
    },
    {
        icon: "account_circle",
        label: "Accounts",
        to: "/dashboard",
        separator: false
    },
    {
        icon: "vpn_key",
        label: "Credentials",
        to: "/dashboard",
        separator: true
    },
    {
        icon: "settings",
        label: "Settings",
        separator: false,
        to: "/dashboard"
    }
]

export default {
    name: "AppLayout",

    setup() {
        const route = useRoute()
        const miniState = ref(false)

        function drawerClick(e: PointerEvent) {
            if (miniState.value) {
                miniState.value = false
                e.stopPropagation()
            }
        }
        return {
            drawer: ref(false),
            miniState,
            menuList,
            route,
            drawerClick
        }
    }
}
</script>
<template>
    <q-layout view="hHh Lpr lff">
        <q-header elevated class="bg-dark q-pa-sm">
            <q-toolbar>
                <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
                <q-toolbar-title>AMS</q-toolbar-title>
            </q-toolbar>
        </q-header>

        <q-drawer v-model="drawer" show-if-above :mini="!drawer || miniState" @click.capture="drawerClick" :width="250" :breakpoint="500" bordered style="overflow: inherit">
            <img style="width: 100%; height: auto" src="https://cdn.dribbble.com/users/719060/screenshots/5713089/dribbble.jpg" alt="logo" />
            <q-separator />
            <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
                <q-list>
                    <template v-for="(menuItem, index) in menuList" :key="index">
                        <q-item :active="menuItem.to === route.name" clickable v-ripple>
                            <q-item-section avatar class="min-width-0">
                                <q-icon :name="menuItem.icon" color="secondary" />
                            </q-item-section>
                            <q-item-section>
                                <router-link :to="menuItem.to" class="link">
                                    {{ menuItem.label }}
                                </router-link>
                            </q-item-section>
                        </q-item>
                        <q-separator :key="'sep' + index" v-if="menuItem.separator" />
                    </template>
                </q-list>
                <q-separator />
                <q-list>
                    <q-item clickable v-ripple>
                        <q-item-section avatar class="min-width-0">
                            <q-icon name="logout" color="negative" />
                        </q-item-section>
                        <q-item-section color="negative">
                            <router-link to="/login" class="link"> log out </router-link>
                        </q-item-section>
                    </q-item>
                </q-list>
            </q-scroll-area>
            <div class="q-mini-drawer-hide absolute" style="bottom: 15px; right: -17px">
                <q-btn dense round unelevated color="primary" icon="chevron_left" @click="miniState = true" />
            </div>
        </q-drawer>

        <q-page-container>
            <router-view></router-view>
        </q-page-container>
    </q-layout>
</template>
<!-- <script lang="ts">
import { defineComponent, ref } from "vue"

export default defineComponent({
    name: "AppLayout"
})
</script>
<script setup lang="ts">
const drawerOpen = ref<boolean>(false)

const menuList = [
    {
        icon: "inbox",
        label: "Inbox",
        separator: true
    },
    {
        icon: "send",
        label: "Outbox",
        separator: false
    },
    {
        icon: "delete",
        label: "Trash",
        separator: false
    },
    {
        icon: "error",
        label: "Spam",
        separator: true
    },
    {
        icon: "settings",
        label: "Settings",
        separator: false
    },
    {
        icon: "feedback",
        label: "Send Feedback",
        separator: false
    },
    {
        icon: "help",
        iconColor: "primary",
        label: "Help",
        separator: false
    }
]

function toogleDrawer() {
    drawerOpen.value = !drawerOpen.value
}
</script> -->
<!-- <template>
    <q-layout view="hHh lpR fFf">
        <q-header reveal class="bg-primary text-white">
            <q-toolbar style="padding: 10px">
                <q-btn dense flat round icon="menu" @click="toogleDrawer" />

                <q-toolbar-title>
                    <q-avatar>
                        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
                    </q-avatar>
                    AMS
                </q-toolbar-title>
            </q-toolbar>
        </q-header>

        <q-drawer show-if-above v-model="drawerOpen" side="left" behavior="desktop" elevated>
            <q-scroll-area class="fit">
                <q-list>
                    <template v-for="(menuItem, index) in menuList" :key="index">
                        <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
                            <q-item-section avatar>
                                <q-icon :name="menuItem.icon" />
                            </q-item-section>
                            <q-item-section>
                                {{ menuItem.label }}
                            </q-item-section>
                        </q-item>
                        <q-separator :key="'sep' + index" v-if="menuItem.separator" />
                    </template>
                </q-list>
            </q-scroll-area>
        </q-drawer>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template> -->
