<template>
  <nav class="app-bar">
    <div class="app-bar-header">{{ title }}</div>
    <div class="app-bar-content">
      <div class="app-bar-auth">
        <template v-if="isAuth">
          <app-bar-menu>
            <template v-slot:title>
              <div class="py-1 px-2 whitespace-nowrap">{{ fio }}</div>
            </template>
            <template v-slot:content>
              <div class="flex flex-col py-1">
                <div class="flex flex-col gap-2 border-t px-2 py-1">
                  <link-az v-if="isAdmin" title="Admin panel" to="/admin" />
                </div>
                <div class="px-2 border-t">
                  <link-az @click="logout" title="Logout" />
                </div>
              </div>
            </template>
          </app-bar-menu>
        </template>
        <template v-else>
          <link-menu-app title="Sign up" to="/auth/sign-up" />
          <link-menu-app title="Sign in" to="/auth/sign-in" />
        </template>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed, ref } from "@vue/runtime-core";
import { useStore } from "vuex";
import AppBarMenu from "@/components/AppBarMenu.vue";

const title = ref(import.meta.env.VITE_APP_NAME);

const store = useStore();

const isAdmin = computed(() => store.getters["auth/isAdmin"]);
const isAuth = computed(() => store.getters["auth/isAuth"]);
const fio = computed(() => store.getters["auth/getFioShort"]);

const logout = () => {
  store.dispatch("auth/actLogout");
};
</script>

<style lang="scss" scoped>
.app-bar {
  @apply shadow p-2 flex justify-between items-center;
  .app-bar-header {
    @apply text-2xl;
  }
  .app-bar-content {
    @apply flex gap-4;
    .app-bar-menu {
      @apply flex flex-row gap-2 items-center;
    }
    .app-bar-auth {
      @apply flex flex-row items-center gap-2;
    }
  }
}
</style>
