import { reactive, computed, toRefs } from "vue";
export default function useEventSpace() {
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
}
