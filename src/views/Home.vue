<template>
  <div class="home">
    <div v-highlight>
      <pre>
        <code>
          export default {
            name: "Home",
            data() {
              return {
              }
            },
            components: {
              HelloWorld
            }
          };
        </code>
      </pre>
    </div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  data() {
    return {
    }
  },
  components: {
    HelloWorld
  }
};
</script>
