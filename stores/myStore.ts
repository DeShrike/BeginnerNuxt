export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const name = ref("John Doe");

  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { count, name, doubleCount, increment };
});

// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
// }

type Customer = {
  fullName: string;
  isActive: boolean;
  totalSpending: number;
};

export const useCustomers = defineStore("customers", {
  state: () => ({
    customers: <Customer[]>[],
    isRequestLoading: false,
  }),
});
