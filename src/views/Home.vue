<template>
  <div class="home">
    <div v-highlight>
      <h1>高亮代码测试</h1>
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
import { fetchArticle } from '@/api/article' // mock demo

export default {
  name: "Home",
  data(){
    return {

    }
  },
  components: {
    HelloWorld
  },
  created(){
    this.getData()
  },
  methods: {
    getData() {
      fetchArticle().then(response => {
        console.log(response.data)
      }).catch(err => {
        console.log(err)
      })
    },
  }
};
</script>
