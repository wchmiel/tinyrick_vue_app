<template>
  <div id="app">
    <TheHeader/>
    <main class="main">
      <!-- content -->
      <EpisodeView/>
    </main>
  </div>
</template>

<script>

import TheHeader from './components/TheHeader.vue';
import EpisodeView from './views/EpisodeView.vue';

export default {
  components: {
    TheHeader,
    EpisodeView
  }
}
</script>

<style>

</style>
