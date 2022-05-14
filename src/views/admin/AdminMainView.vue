<template>
  <div class="p-5">
    <dashboard-az
      class="shadow-md bg-teal-800 bg-opacity-20"
      title="Admin dashboard"
    >
      <user-admin-widget to="/admin/users" />
    </dashboard-az>
  </div>
</template>

<script setup>
import DashboardAz from "@/components/DashboardAz.vue";
</script>
