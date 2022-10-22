<script setup>
</script>

<template>
  <router-view></router-view>
</template>

<style lang="scss">
<<<<<<< .merge_file_a02296
@import "node_modules/mathsass/dist/_math";

.bd {
  border: 1px solid #ccc;
}

@function spring-wobbly($t) {
  @return -0.5 * pow(2.71828, (-6 * $t)) *
    (-2 * pow(2.71828, (6 * $t)) + sin(12 * $t) + 2 * cos(12 * $t));
}
@function lerp($a, $b, $p) {
  @return $a + $p * ($b - $a);
}
@keyframes move {
  @for $i from 0 through 100 {
    #{$i}% {
      left: lerp(100px, 200px, spring-wobbly(calc($i/100)));
    }
  }
}
.box {
  animation: 1s move linear infinite;
  position: relative;
  background: red;
  width: 100px;
  height: 100px;
=======
html,
body {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
>>>>>>> .merge_file_a02932
}
</style>
