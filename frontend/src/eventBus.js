import { reactive } from "vue";

const eventBus = reactive({
  loading: false,
});

export default eventBus;
