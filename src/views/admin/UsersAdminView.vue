<template>
  <div class="h-full w-full p-4">
    <card-az title="Users" class="shadow-md bg-slate-50">
      <div class="flex flex-col gap-2">
        <div class="toolbar border-b pb-1">
          <link-button-az
            title="Add"
            to="/admin/users/add"
            class="bg-teal-800"
          />
        </div>
        <table>
          <thead>
            <tr class="border-b-2">
              <th>username</th>
              <th>lastName</th>
              <th>firstName</th>
              <th>middleName</th>
              <th>email</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="users">
              <tr
                v-for="user in users"
                :key="user.id"
                :class="{ 'bg-slate-200 text-slate-500': !user.active }"
              >
                <td class="text-center hover:underline hover:cursor-pointer">
                  <link-az
                    :title="user.username"
                    :to="'/admin/users/' + user.id"
                  />
                </td>
                <td>{{ user.lastName }}</td>
                <td>{{ user.firstName }}</td>
                <td>{{ user.middleName }}</td>
                <td class="text-center">{{ user.email }}</td>
                <td class="flex gap-2">
                  <button-az
                    :title="user.active ? 'Active' : 'Not Active'"
                    :class="user.active ? 'bg-teal-700' : 'bg-red-700'"
                    @click="changeActive(user.id)"
                  />
                </td>
              </tr>
            </template>
            <template v-else> No content </template>
          </tbody>
        </table>
      </div>
    </card-az>
  </div>
</template>

<script setup>
import { onMounted, ref } from "@vue/runtime-core";
import UserAdminService from "../../services/admin/UserAdminService";
const users = ref([]);
const getUsers = async () => {
  UserAdminService.getUsers().then((response) => {
    users.value = [...response];
  });
};
const changeActive = async (id) => {
  UserAdminService.changeActive(id).then((response) => {
    getUsers();
  });
};
onMounted(() => {
  getUsers();
});
</script>

<style lang="scss" scoped>
td {
  @apply px-2 py-1;
}
tbody > tr {
  @apply hover:bg-slate-600 hover:text-slate-50;
}
</style>
