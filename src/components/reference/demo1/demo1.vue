<template>
  <div class="container bd">
    <div class="scene">
      <div class="cubes">
        <div class="cube" v-for="_ in 3">
          <div class="face face--front"></div>
          <div class="face face--back"></div>
          <div class="face face--left"></div>
          <div class="face face--right"></div>
          <div class="face face--top"></div>
          <div class="face face--bottom"></div>
          <svg
            class="cube-ring"
            viewBox="0 0 200 200"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <rect
              class="cube-ring__rect-inner"
              x="7"
              y="7"
              width="186"
              height="186"
              stroke="#FF0000"
              stroke-width="1"
              fill="none"
            ></rect>
            <rect
              class="cube-ring__rect-outer"
              x="1"
              y="1"
              width="198"
              height="198"
              stroke="#FF0000"
              stroke-width="4"
              fill="none"
            ></rect>
          </svg>
        </div>

        <!-- <div class="cube">
          <div class="face face--front"></div>
          <div class="face face--back"></div>
          <div class="face face--left"></div>
          <div class="face face--right"></div>
          <div class="face face--top"></div>
          <div class="face face--bottom"></div>

          <svg
            class="cube-ring"
            viewBox="0 0 200 200"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <rect
              class="cube-ring__rect-inner"
              x="7"
              y="7"
              width="186"
              height="186"
              stroke="#FF0000"
              stroke-width="1"
              fill="none"
            ></rect>
            <rect
              class="cube-ring__rect-outer"
              x="1"
              y="1"
              width="198"
              height="198"
              stroke="#FF0000"
              stroke-width="4"
              fill="none"
            ></rect>
          </svg>
        </div>
        <div class="cube">
          <div class="face face--front"></div>
          <div class="face face--back"></div>
          <div class="face face--left"></div>
          <div class="face face--right"></div>
          <div class="face face--top"></div>
          <div class="face face--bottom"></div>

          <svg
            class="cube-ring"
            viewBox="0 0 200 200"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <rect
              class="cube-ring__rect-inner"
              x="7"
              y="7"
              width="186"
              height="186"
              stroke="#FF0000"
              stroke-width="1"
              fill="none"
            ></rect>
            <rect
              class="cube-ring__rect-outer"
              x="1"
              y="1"
              width="198"
              height="198"
              stroke="#FF0000"
              stroke-width="4"
              fill="none"
            ></rect>
          </svg>
        </div>
        <div class="cube">
          <div class="face face--front"></div>
          <div class="face face--back"></div>
          <div class="face face--left"></div>
          <div class="face face--right"></div>
          <div class="face face--top"></div>
          <div class="face face--bottom"></div>

          <svg
            class="cube-ring"
            viewBox="0 0 200 200"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <rect
              class="cube-ring__rect-inner"
              x="7"
              y="7"
              width="186"
              height="186"
              stroke="#FF0000"
              stroke-width="1"
              fill="none"
            ></rect>
            <rect
              class="cube-ring__rect-outer"
              x="1"
              y="1"
              width="198"
              height="198"
              stroke="#FF0000"
              stroke-width="4"
              fill="none"
            ></rect>
          </svg>
        </div>
        <div class="cube">
          <div class="face face--front"></div>
          <div class="face face--back"></div>
          <div class="face face--left"></div>
          <div class="face face--right"></div>
          <div class="face face--top"></div>
          <div class="face face--bottom"></div>

          <svg
            class="cube-ring"
            viewBox="0 0 200 200"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <rect
              class="cube-ring__rect-inner"
              x="7"
              y="7"
              width="186"
              height="186"
              stroke="#FF0000"
              stroke-width="1"
              fill="none"
            ></rect>
            <rect
              class="cube-ring__rect-outer"
              x="1"
              y="1"
              width="198"
              height="198"
              stroke="#FF0000"
              stroke-width="4"
              fill="none"
            ></rect>
          </svg>
        </div>
        <div class="cube">
          <div class="face face--front"></div>
          <div class="face face--back"></div>
          <div class="face face--left"></div>
          <div class="face face--right"></div>
          <div class="face face--top"></div>
          <div class="face face--bottom"></div>

          <svg
            class="cube-ring"
            viewBox="0 0 200 200"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <rect
              class="cube-ring__rect-inner"
              x="7"
              y="7"
              width="186"
              height="186"
              stroke="#FF0000"
              stroke-width="1"
              fill="none"
            ></rect>
            <rect
              class="cube-ring__rect-outer"
              x="1"
              y="1"
              width="198"
              height="198"
              stroke="#FF0000"
              stroke-width="4"
              fill="none"
            ></rect>
          </svg>
        </div>
        <div class="cube">
          <div class="face face--front"></div>
          <div class="face face--back"></div>
          <div class="face face--left"></div>
          <div class="face face--right"></div>
          <div class="face face--top"></div>
          <div class="face face--bottom"></div>

          <svg
            class="cube-ring"
            viewBox="0 0 200 200"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <rect
              class="cube-ring__rect-inner"
              x="7"
              y="7"
              width="186"
              height="186"
              stroke="#FF0000"
              stroke-width="1"
              fill="none"
            ></rect>
            <rect
              class="cube-ring__rect-outer"
              x="1"
              y="1"
              width="198"
              height="198"
              stroke="#FF0000"
              stroke-width="4"
              fill="none"
            ></rect>
          </svg>
        </div>
        <div class="cube">
          <div class="face face--front"></div>
          <div class="face face--back"></div>
          <div class="face face--left"></div>
          <div class="face face--right"></div>
          <div class="face face--top"></div>
          <div class="face face--bottom"></div>

          <svg
            class="cube-ring"
            viewBox="0 0 200 200"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <rect
              class="cube-ring__rect-inner"
              x="7"
              y="7"
              width="186"
              height="186"
              stroke="#FF0000"
              stroke-width="1"
              fill="none"
            ></rect>
            <rect
              class="cube-ring__rect-outer"
              x="1"
              y="1"
              width="198"
              height="198"
              stroke="#FF0000"
              stroke-width="4"
              fill="none"
            ></rect>
          </svg>
        </div> -->
      </div>
    </div>
  </div>
  <div class="collection">
    <a
      class="collection__link"
      href="https://codepen.io/collection/02388423440b98155f8e4002bde094f2"
      target="_blank"
      >View the collection<span></span
    ></a>
  </div>

  <a href="https://greensock.com" target="_blank"
    ><img
      class="gsap-3-logo"
      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/gsap-3-logo.svg"
      width="150"
  /></a>
</template>

<script>
import { onMounted } from "vue";
import gsap from "gsap";
export default {
  setup() {
    onMounted(() => init());
    function init() {
      console.clear();

      // var styleVars = getComputedStyle(document.documentElement),
      // 	cubeWidth = styleVars.getPropertyValue('--cube-width'),
      // 	cubeHeight = styleVars.getPropertyValue('--cube-height'),
      // 	cubeDepth = styleVars.getPropertyValue('--cube-depth'),
      // cubeGap = styleVars.getPropertyValue('--cube-gap');

      // console.log(cubeWidth);
      // console.log(cubeHeight);
      // console.log(cubeDepth);

      const selectAll = (e) => document.querySelectorAll(e);

      const cubes = selectAll(".cube");
      const cubeYPos = 10;

      gsap.set(".container", { autoAlpha: 1 });
      gsap.set(".scene", { rotateX: -30 });
      // gsap.to('.cubes', { rotateY: 360, ease:"Sine.easeInOut", repeat: -1, yoyo: true, duration: 4 })

      gsap.to(".cube", {
        duration: 4,
        scaleY: 3,
        rotateY: 180,
        y: (i) => {
          return cubeYPos * i - (cubes.length - 1) * cubeYPos;
        },
        ease: "sine.inOut",
        stagger: {
          each: 0.08,
          yoyo: true,
          repeat: -1,
          from: "start",
        },
      });

      gsap.to(".cube-ring", {
        duration: 4,
        scale: 1.2,
        rotateY: 180,
        ease: "sine.inOut",
        stagger: {
          each: 0.05,
          yoyo: true,
          repeat: -1,
          repeatDelay: 0,
          ease: "none",
          from: "start",
        },
      });

      gsap
        .timeline({
          repeat: -1,
          defaults: {
            duration: 3,
            stagger: {
              each: 0.1,
              from: "end",
            },
            ease: "power2.inOut",
          },
        })
        .from(".cube-ring__rect-inner", {
          drawSVG: "0% 0%",
        })
        .to(".cube-ring__rect-inner", {
          drawSVG: "100% 100%",
        });
    }
    return {};
  },
};
</script>

<style lang="scss">
:root {
  --cube-width: 160px;
  --cube-height: 8px;
  --cube-depth: var(--cube-width);
  --cube-gap: 15px;
  --ring-width: calc(#{var(--cube-width)} * 1.5);
  --ring-height: calc(#{var(--cube-depth)} * 1.5);
  --face-color: rgba(50, 30, 30, 1);
  --border-color: rgba(0, 0, 0, 0.1);
  --light-glow: rgba(255, 0, 35, 0.6);
  --light-stroke: rgba(255, 0, 35, 1);
}

html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  background-image: linear-gradient(140deg, #434343 0%, black 100%);
  overflow: hidden;
  font-size: 10px;
}

body,
html {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

/*  ==========================================================
	MIXINS
	========================================================== */

@mixin cuboid($cWidth, $cHeight, $cDepth, $cColor) {
  position: relative;
  width: $cWidth;
  height: $cHeight;
  transform-style: preserve-3d;

  .face {
    position: absolute;
    left: 0;
    top: 0;
    background: $cColor;
  }

  .face--front {
    width: $cWidth;
    height: $cHeight;
    transform: translateZ(calc(#{$cDepth}/ 2));
  }

  .face--back {
    width: $cWidth;
    height: $cHeight;
    transform: translateZ(calc(#{$cDepth}/ 2 * -1)) rotateY(180deg);
  }

  .face--left {
    width: $cDepth;
    height: $cHeight;
    transform: translateX(calc(#{$cDepth}/ 2 * -1)) rotateY(-90deg);
  }

  .face--right {
    width: $cDepth;
    height: $cHeight;
    transform: translateX(calc(#{$cWidth} - #{$cDepth}/ 2)) rotateY(90deg);
  }

  .face--top {
    width: $cWidth;
    height: $cDepth;
    transform: translateY(calc(#{$cDepth}/ 2 * -1)) rotateX(90deg);
  }

  .face--bottom {
    width: $cWidth;
    height: $cDepth;
    transform: translateY(calc(#{$cHeight} - #{$cDepth}/ 2)) rotateX(-90deg);
  }
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: auto;
  perspective: 800px;
  visibility: hidden;
}

.scene {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  height: 100%;
  transform-style: preserve-3d;
  // transform: rotateX(-35deg) rotateY(45deg);
}

/*  ==========================================================
	CUBES
	========================================================== */

.cubes {
  transform-style: preserve-3d;
}

.cube {
  @include cuboid(
    var(--cube-width),
    var(--cube-height),
    var(--cube-depth),
    var(--face-color)
  );
  margin-bottom: var(--cube-gap);

  .face {
    // border: 1px solid var(--border-color);
  }

  // .face--back {
  // }
  // .face--left {
  // }
  // .face--right {
  // }
  .face--top {
    background: rgba(25, 25, 25, 1);
  }

  .face--bottom {
    box-shadow: 0px 10px 40px rgba(black, 0.8);
  }
}

.cube-ring {
  position: absolute;
  top: 0;
  left: 0;
  background: transparent;
  box-shadow: 0px 0px 50px var(--light-glow),
    0px 0px 60px var(--light-glow) inset;
  width: var(--ring-width);
  height: var(--ring-height);
  transform-origin: center center;
  transform: translateX(
      calc((#{var(--ring-width)} - #{var(--cube-width)}) / 2 * -1)
    )
    translateY(calc((#{var(--ring-width)} - #{var(--cube-height)}) / 2 * -1))
    rotateX(90deg);
}

.cube-ring__rect-inner {
  stroke-width: 6px;
  stroke: var(--light-stroke);
}

.cube-ring__rect-outer {
  stroke-width: 2px;
  stroke: var(--light-stroke);
}

.gsap-3-logo {
  width: 20vw;
  max-width: 150px;
  position: fixed;
  bottom: 15px;
  right: 15px;
}

/*  ==========================================================
	Collection Linl
	========================================================== */

.collection {
  position: fixed;
  z-index: 1000;
  top: 24px;
  right: 24px;
  display: flex;
  flex-direction: column;
}

.collection__link {
  position: relative;
  margin-bottom: 16px;
  color: white;
  font-family: Helvetica, sans-serif;
  text-decoration: none;
  font-size: 16px;

  span {
    display: block;
    position: absolute;
    bottom: -3px;
    left: 0;
    height: 1px;
    width: 10%;
    background-color: white;
    content: "";
    transition: width 0.3s;
  }

  &:hover span {
    width: 100%;
  }
}
</style>