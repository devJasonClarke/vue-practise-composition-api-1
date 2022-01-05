<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>Capacity: {{ capacity }}</p>
    <p>SpacesLeft: {{ spacesLeft }}</p>
    <p></p>
  </div>
</template>
<script>
import useEventSpace from "@/use/event-space";
import { onMounted } from "vue";
export default {
  setup() {
    console.log("Let's go created");
    onMounted(() => {
      console.log("mounted!");
    });

    const { capacity, spacesLeft } = useEventSpace();

    return { capacity, spacesLeft };
  },
};
</script>
