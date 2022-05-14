r
<template>
  <card-auth-az header="Sign in" class="shadow-md">
    <template v-slot:default>
      <form class="flex flex-col gap-1 p-2" @submit.prevent="clickA">
        <input-with-label-az
          placeHolder="username"
          label="Username:"
          v-model="userRegistration.username"
        />
        <input-with-label-az
          placeHolder="email"
          label="email:"
          type="email"
          v-model="userRegistration.email"
        />
        <input-with-label-az
          placeHolder="password"
          label="Password:"
          type="password"
          v-model="userRegistration.password"
        />
        <div class="flex justify-between pt-2">
          <button-az class="bg-teal-800 hover:text-teal-50" title="Sign up" />
        </div>
      </form>
    </template>
    <template v-slot:footer>
      <div class="p-2 flex gap-1">
        <link-az to="/auth/sign-up" title="Sign up" />
        <link-az to="/" title="Home" />
      </div>
    </template>
  </card-auth-az>
</template>
<script setup>
import { ref, watch } from "vue";

import AuthService from "@/services/AuthService";
import { useRouter } from "vue-router";

const userRegistration = ref({
  username: "",
  email: "",
  password: "",
});

const router = useRouter();

const clickA = async () => {
  AuthService.registration(userRegistration.value).then((res) => {
    router.push({ path: "/auth/sign-up" });
  });
};
</script>
