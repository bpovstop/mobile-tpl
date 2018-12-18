<template>
  <router-view/>
</template>
<style lang="scss">
html {
  min-height: 100%;
}
body {
  margin: 0;
  font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  user-select: none;
  text-size-adjust: none;
  touch-action: manipulation;
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
</style>
