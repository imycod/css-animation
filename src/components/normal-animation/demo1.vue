<template>
  <div class="demo1__img bd">
    <img src="@/assets/images/icon1.png" alt="" />
    <div class="demo1__shadow"></div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.demo1__img {
  width: 230px;
  height: 220px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    position: absolute;
    z-index: 3;
    width: 230px;
    animation: floaty 1.8s infinite alternate;
  }

  .demo1__shadow {
    position: absolute;
    z-index: 1;
    bottom: 0px;

    width: 130px;
    height: 24px;
    background-color: hsla(38, 21%, 19%, 0.16);
    margin: 0 auto;
    border-radius: 50%;
    filter: blur(7px);
    animation: shadow 1.8s infinite alternate;
  }
}

@keyframes shadow {
  0% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(0.85, 0.85);
  }
}
/* Animate ghost */
@keyframes floaty {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(calc(15px + 15px));
  }
}
</style>