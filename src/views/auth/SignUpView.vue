<template>
  <card-auth-az header="Sign up" class="shadow-md">
    <template v-slot:default>
      <form class="flex flex-col gap-1 p-2" @submit.prevent="clickA">
        <input-with-label-az
          placeHolder="username"
          label="Username:"
          v-model="authUser.username"
        />
        <input-with-label-az
          placeHolder="password"
          label="Password:"
          type="password"
          v-model="authUser.password"
        />
        <div class="flex justify-between pt-2">
          <button-az class="bg-teal-800 hover:text-teal-50" title="Sign up" />
        </div>
      </form>
    </template>
    <template v-slot:footer>
      <div class="p-2 flex gap-1">
        <link-az to="/auth/sign-in" title="Sign in" />
        <link-az to="/" title="Home" />
      </div>
    </template>
  </card-auth-az>
</template>
<script setup>
import { ref, watch } from "vue";

import AuthService from "@/services/AuthService";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const authUser = ref({
  username: "",
  password: "",
});

const store = useStore();
const router = useRouter();

watch(authUser, (v1, v2, v3) => {
  console.log("sdf");
});

const clickA = async () => {
  AuthService.getAuth(authUser.value).then((res) => {
    store.dispatch("auth/actLogin", res);
    router.push({ path: "/" });
  });
};
</script>
