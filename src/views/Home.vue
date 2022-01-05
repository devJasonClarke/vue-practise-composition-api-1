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
import useEventSpace from "@/use/event-space";
export default {
  name: "Home",
  setup() {
    const {
      capacity,
      attending,
      spacesLeft,
      increaseCapacity,
      decreaseCapacity,
    } = useEventSpace();

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
