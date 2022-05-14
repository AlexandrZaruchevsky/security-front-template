<template>
  <div class="h-full w-full flex justify-center pt-6">
    <div>
      <card-az title="User | edit" class="shadow-md">
        <form class="flex flex-col gap-2" @submit.prevent="save">
          <div class="flex flex-col gap-2">
            <input-with-label-az
              placeHolder="username"
              label="username:"
              v-model="user.username"
            />
            <input-with-label-az
              placeHolder="email"
              label="email:"
              type="email"
              v-model="user.email"
            />
            <input-with-label-az
              v-if="isAdd"
              placeHolder="password"
              label="password:"
              type="password"
              v-model="user.password"
            />
            <input-with-label-az
              placeHolder="lastName"
              label="lastName:"
              v-model="user.lastName"
            />
            <input-with-label-az
              placeHolder="firstName"
              label="firstName:"
              v-model="user.firstName"
            />
            <input-with-label-az
              placeHolder="middleName"
              label="middleName:"
              v-model="user.middleName"
            />
            <input-with-label-az
              placeHolder="role"
              label="role:"
              v-model="user.role"
            />
          </div>
          <div class="flex justify-between">
            <div class="flex gap-2">
              <button-az class="bg-teal-800 hover:text-teal-50" title="Save" />
              <button-az
                class="bg-gray-800 hover:text-gray-50"
                title="Cancel"
                @click.prevent="routeUsers"
              />
            </div>
            <button-az
              class="bg-rose-800 hover:text-gray-50"
              title="delete"
              @click.prevent="deleteUser(user.id)"
              v-if="!isAdd"
            />
          </div>
        </form>
      </card-az>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
import UserAdminService from "../../services/admin/UserAdminService";
const isAdd = ref(false);
const route = useRoute();
const router = useRouter();
const user = ref({
  id: -1,
  username: "",
  email: "",
  password: "",
  lastName: "",
  firstName: "",
  middleName: "",
  role: "USER",
});
onMounted(() => {
  if (parseInt(route.params.id)) {
    UserAdminService.findById(route.params.id).then((response) => {
      user.value = response;
    });
    isAdd.value = false;
  } else {
    isAdd.value = true;
  }
});
const save = () => {
  if (isAdd.value) {
    UserAdminService.addUser(user.value)
      .then((response) => {
        routeUsers();
      })
      .catch((e) => {
        console.log(e);
      });
  } else {
    UserAdminService.updateUser(user.value)
      .then((response) => {
        routeUsers();
      })
      .catch((e) => {
        console.log(e);
      });
  }
};
const deleteUser = async (id) => {
  if (!isAdd.value && user.value.id > 0) {
    UserAdminService.deleteUser(id).then((response) => {
      routeUsers();
    }).catch(e=>{
      console.log(e);
    });
  }
};
const routeUsers = () => {
  router.push({ path: "/admin/users" });
};
</script>
