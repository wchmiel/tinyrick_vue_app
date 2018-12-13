<template>
    <div class="episode-item">
        <h3 class="episode-item__num">Episode {{ episodeNb }}</h3>
        <h2 class="episode-item__name">{{ episode.name }}</h2>
        <span class="episode-item__season-badge">Season {{ seasonNb }}</span>

        <!-- optional info -->
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        episode: {
            type: Object
        }
    },
    computed: {
        seasonNb() {
            const episode = this.episode.episode;
            return +episode.slice(1, 3);
        },
        episodeNb() {
            const episode = this.episode.episode;
            return +episode.slice(4);
        }
    }
}
</script>

<style>

</style>


