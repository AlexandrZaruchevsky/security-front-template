<template>
  <card-link-az @click="clickWidget">
    <template v-slot:header>
      <div>Users</div>
    </template>
    <template v-slot:body>
      <div class="flex flex-col gap-1">
        <div>Всего - {{ amount }}</div>
        <div>Активных - {{ amountActive }}</div>
        <div>Не активных - {{ amountNotActive }}</div>
      </div>
    </template>
    <template v-slot:footer v-if="isError">
      <div class="border-t py-2 px-4">Error request</div>
    </template>
  </card-link-az>
</template>

<script>
import { ref } from "@vue/reactivity";
import { computed, onMounted, watch } from "@vue/runtime-core";
import UserAdminService from "../services/admin/UserAdminService";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  name: "UserAdminWidget",
  props: {
    to: {
      type: String,
      default: "#",
    },
  },
  setup(props) {
    const amount = ref(0);
    const amountActive = ref(0);
    const amountNotActive = ref(0);
    const isError = ref(false);
    const isAuth = computed(() => store.getters["auth/isAuth"]);
    const store = useStore();
    const router = useRouter();

    watch(isAuth, async (val) => {
      await getAmountUser();
    });

    const getAmountUser = async () => {
      UserAdminService.getUserCount()
        .then((users) => {
          amount.value = users.count;
          amountNotActive.value = users.countNotActive;
          amountActive.value = users.countActive;
          isError.value = false;
        })
        .catch((e) => {
          amount.value = 0;
          amountNotActive.value = 0;
          amountActive.value = 0;
          isError.value = true;
        });
    };

    const clickWidget = () => {
      router.push({ path: props.to });
    };

    onMounted(async () => {
      await getAmountUser();
    });
    return {
      amount,
      amountActive,
      amountNotActive,
      isError,
      clickWidget,
    };
  },
};
</script>
