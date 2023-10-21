import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const counter = ref(0);
  const name = ref("John Doe");
  const doubleCounter = computed(() => counter.value * 2);
  const increment = () => counter.value++;
  const decrement = () => counter.value--;

  return { counter, name, doubleCounter, increment, decrement };
});
