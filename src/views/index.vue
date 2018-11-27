<template>
  <div>
    <h1>home page</h1>
    <router-link to="/page">单页入口示例</router-link>
    <HelloWorld/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
