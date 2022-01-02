<template>
  <div>
    <p data-testid="computed">
      We have {{ spacesLeft }} out of {{ capacity }} seats
    </p>
    <h1>
      Capacity: <span data-testid="capacity-updated-value">{{ capacity }}</span>
    </h1>
    <button data-testid="increase" @click="increaseCapacity()">Increase</button>
    <button data-testid="decrease" @click="decreaseCapacity()">Decrease</button>

    <div>
      <ul v-for="(people, index) in attending" :key="index">
        <li>{{ people }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  name: "Home",
  setup() {
    const capacity = ref(3);
    const attending = ref(["Jason", "Jon", "lou", "Kanye"]);
    const spacesLeft = computed(() => {
      return capacity.value - attending.value.length;
    });
    function increaseCapacity() {
      capacity.value++;
    }

    function decreaseCapacity() {
      capacity.value--;
    }

    return {
      capacity,
      attending,
      spacesLeft,
      increaseCapacity,
      decreaseCapacity,
    };
  },
};
</script>

<style lang="scss" scoped></style>
