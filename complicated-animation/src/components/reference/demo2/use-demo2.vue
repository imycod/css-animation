<template>
  <div class="ground-cropped bd">
    <div class="car-one red bd">
      <img src="@/assets/images/icon1/icon11Adong.png" alt="" />
    </div>
    <div class="car-one blue">
      <img src="@/assets/images/icon1/icon11Azhu.png" alt="" />
    </div>
    <div class="car-two black">
      <img src="@/assets/images/icon1/icon11Bzhu.png" alt="" />
    </div>
  </div>
  <div class="road">
    <img src="@/assets/images/icon1/icon11.png" alt="" />
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.road {
  position: absolute;
  display: block;
  width: 40px;
  height: 200px;
  //   transform: rotateZ(45deg);
  top: 0px;
  left: 10px;
  z-index: -998;
    img{
      width: 200px;
      height: 200px;
    }
}

.ground-cropped {
  position: absolute;
  display: block;
  background-color: transparent;
  width: 200px;
  height: 200px;
//   transform: rotateZ(45deg);
  z-index: -997;
  overflow: hidden;

  .car-one {
    position: absolute;
    display: block;
    width: 15px;
    height: 7px;
    top: 86px;
    left: 200px;
    box-shadow: 2px 2px 0 0 #333;
    z-index: -998;
  }
  .car-one.red {
    background-color: #c52735;
    // animation: red-car 9s linear infinite;
  }
  @keyframes red-car {
    0% {
      top: 73px;
      left: 420px;
    }
    100% {
      top: 73px;
      left: -180px;
    }
  }

  .car-one.blue {
    background-color: #2d6398;
    // animation: blue-car 9s linear infinite;
  }
  @keyframes blue-car {
    0% {
      top: 86px;
      left: -180px;
    }
    100% {
      top: 86px;
      left: 420px;
    }
  }

  .car-two {
    position: absolute;
    display: block;
    width: 7px;
    height: 15px;
    top: -100px;
    left: 85px;
    box-shadow: 2px 2px 0 0 #333;
    z-index: -998;
  }
  .car-two.black {
    background-color: #7d7d7d;
    // animation: black-car 9s ease infinite;
  }
  @keyframes black-car {
    0% {
      top: -50px;
      left: 85px;
    }
    35% {
      top: 37px;
      left: 85px;
    }
    62% {
      top: 37px;
      left: 85px;
    }
    65% {
      top: 34px;
      left: 85px;
    }
    100% {
      top: 280px;
      left: 85px;
    }
  }
}
</style>