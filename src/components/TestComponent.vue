<script>
export default {
  name: "TestComponent",
  props: {
    modelValue: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      query: {},
    };
  },
  emits: ["update:modelValue"],
  watch: {
    query: {
      deep: true,
      handler(newVal, oldVal) {
        console.log("query changed", newVal, oldVal);
      },
    },
  },
  computed: {
    parsedValue() {
      return JSON.parse(this.modelValue);
    },
  },
  mounted() {
    console.log("mounted");
    this.query = this.parsedValue;
  },
  methods: {
    changeQuery() {
      this.query.something = "test";
      this.$emit("update:modelValue", JSON.stringify(this.query));
    },
  },
};
</script>

<template>
  <div>
    <button @click="changeQuery">Change query value</button>
    <div v-if="query && query.something">{{ query.something }}</div>
  </div>
</template>
