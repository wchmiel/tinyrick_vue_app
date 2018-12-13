<template>
  <div id="app">
    <TheHeader/>
    <main class="main">
      <!-- content -->
      <router-view>
        <!-- <EpisodeView/>
        <EpisodeDetails/> -->
      </router-view>
    </main>
  </div>
</template>

<script>

import TheHeader from './components/TheHeader.vue';
import EpisodeView from './views/EpisodeView.vue';
import EpisodeDetails from './views/EpisodeDetails.vue';

export default {
  components: {
    TheHeader,
    EpisodeView,
    EpisodeDetails
  }
}
</script>

<style>

</style>
