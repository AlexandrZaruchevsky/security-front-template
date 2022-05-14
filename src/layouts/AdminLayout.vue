<template>
  <div class="layout-za">
    <div>
      <side-bar>
        <div class="p-2 flex flex-col gap-1">
          <link-az title="Dashboard" to="/admin" />
          <link-az title="Users" to="/admin/users" />
        </div>
      </side-bar>
    </div>
    <div class="layout-content"><slot /></div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
export default {
  name: "AdminLayout",
  components: {
    SideBar,
  },
};
</script>

<style lang="scss" scoped>
.layout-za {
  height: 100vh;
  @apply flex;
  .layout-content {
    @apply w-full;
  }
}
</style>
