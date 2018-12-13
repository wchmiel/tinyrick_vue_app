<template>
    <header class="header">
      <a href="/" class="header__logo">
        <LogoSvg/>
      </a>
      
      <button @click="onMenuBtnClick" class="header__nav-trigger">
        <HamburgerSvg v-if="!showMenu"/>
        <IconCloseSvg v-else/>
      </button>

      <nav class="header__nav" :class="{ 'is-visible': showMenu }">
        <router-link to="/" class="header__nav-link">
            Episodes
        </router-link>
        <router-link to="/quiz" class="header__nav-link">
            Quiz
        </router-link>
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

