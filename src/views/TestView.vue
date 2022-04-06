<template>
  <div class="test">
    <h1>This is the test page</h1>
    <test-component v-model="$query.query"></test-component>
  </div>
</template>

<script>
import TestComponent from "../components/TestComponent.vue";

export default {
  components: {
    TestComponent,
  },
  methods: {
    update() {
      console.log("update");
    },
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .test {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
