<template>
  <router-view/>
</template>
<style lang="scss">
html,
body {
  height: 100%;
  overflow: hidden;
}

body {
  margin: 0;
  font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  width: 100%;
  height: 100%;
}

div {
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

span,
a,
p,
h1,
h2,
h3,
h4,
h5 {
  color: var(--color-font);
}

// mint-ui custom
.mint-tab-container-wrap {
  height: 100%;
}
</style>
