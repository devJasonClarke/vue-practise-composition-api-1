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
import { reactive, computed, toRefs } from "vue";
export default {
  name: "Home",
  setup() {
    const event = reactive({
      capacity: 3,
      attending: ["Jason", "Jon", "lou", "Kanye"],
      spacesLeft: computed(() => {
        return event.capacity - event.attending.length;
      }),
    });

    function increaseCapacity() {
      event.capacity++;
    }

    function decreaseCapacity() {
      event.capacity--;
    }

    return {
      ...toRefs(event),
      increaseCapacity,
      decreaseCapacity,
    };
  },
};
</script>

<style lang="scss" scoped></style>
