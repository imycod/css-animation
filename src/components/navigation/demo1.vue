<template>
  <header>
    <a href="#" class="logo">logo</a>
    <div class="group">
      <ul class="navigation">
        <li v-for="(nav,idx) in list"><a href="#">{{ nav.name }}</a></li>
      </ul>
      <div class="search">
        <span class="icon">
          <ion-icon class="search-btn" :class="isSearchActive ? 'active':''" @click="search"
                    name="search-outline"></ion-icon>
          <ion-icon class="close-btn" :class="isSearchActive ? 'active' :''" @click="close"
                    name="close-outline"></ion-icon>
        </span>
      </div>
      <div class="search-box" :class="isSearchActive ? 'active':''">
        <input type="text" placeholder="search here ...">
      </div>
    </div>
  </header>
</template>

<script setup>
import {useConfigList} from "@/utils/config";
import {ref} from "vue";

const list = useConfigList(import.meta.url)

const isSearchActive = ref(false)

function search() {
  isSearchActive.value = true
}

function close() {
  isSearchActive.value = false
}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googlefonts.cn/css?family=Poppins");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  background: #dee1e2;
  min-height: 100vh;
  overflow-x: hidden;
}

header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 88px;
  background: #fff;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.05);
}

.logo {
  color: #333;
  text-decoration: none;
  font-size: 1.5em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.group {
  display: flex;
  align-items: center;

  .navigation { // ul > li
    list-style: none;
    padding-left: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    overflow: hidden;

    li {
      list-style: none;

      a {
        text-decoration: none;
        cursor: pointer;
        text-transform: uppercase;
        color: #333;
        letter-spacing: 0.2em;
        position: relative;
        height: 30px;

        &::before {
          content: "";
          position: absolute;
          bottom: 0px;
          width: 100%;
          height: 2px;
          border-radius: 3px;
          background: #333;
          transform: scaleX(0);
          transition: transform 0.3s ease-in-out;
          transform-origin: right;
        }

        &:hover::before {
          transform: scaleX(1);
          transform-origin: left;
        }
      }
    }
  }

  .search {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    z-index: 10;
    cursor: pointer;


    .search-btn {
      position: relative;
      left: 30px;
      top: 2.5px;
      transition: 0.5s ease-in-out;

      &.active {
        left: 0;
      }
    }

    .close-btn {
      opacity: 0;
      visibility: hidden;

      &.active {
        opacity: 1;
        visibility: visible;
        transition: 0.5s;
        scale: 1;
      }
    }
  }


  .search-box {

    position: absolute;
    right: -100%;
    width: 100%;
    height: 100%;
    display: flex;
    background: #fff;
    align-items: center;
    padding: 0 30px;
    transition: 0.5s ease-in-out;

    &.active {
      right: 0;
    }

    input {
      width: 100%;
      border: none;
      outline: none;
      height: 50px;
      color: #333;
      font-size: 1.25em;
      background: #fff;
      border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    }
  }
}
</style>
