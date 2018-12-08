<template>
    <header class="header">
      <a href="/" class="header__logo">
        <!-- Logo -->
        <LogoSvg/>
      </a>
      
      <button @click="onMenuBtnClick" class="header__nav-trigger">
        <!-- Hamburger Icon -->
        <HamburgerSvg v-if="!showMenu"/>
        <IconCloseSvg v-else/>
      </button>

      <nav class="header__nav" :class="{ 'is-visible': showMenu }"> <!-- .is-visible -->
        <a class="header__nav-link" href="/">
          Episodes
        </a>
        <a class="header__nav-link" href="/quiz">
          Quiz
        </a>
      </nav>
    </header>
</template>

<script>

import LogoSvg from './../assets/logo.svg';
import HamburgerSvg from './../assets/icon-menu.svg';
import IconCloseSvg from './../assets/icon-close.svg';

export default {
    components: {
        LogoSvg,
        HamburgerSvg,
        IconCloseSvg
    },
    data() {
        return {
            showMenu: false
        }
    },
    methods: {
        onMenuBtnClick() {
            this.showMenu = !this.showMenu;
        }
    }
}
</script>

<style>

</style>

