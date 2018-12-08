<template>
    <div>
        <h1 class="episodes__title">Episodes</h1>

        <div class="episodes__search">
        <ArrowSearch/>
        <input @change="filterEpisodes" type="text" placeholder="Search">
        </div>

        <ul class="episodes__list">
            <li v-for="episode in episodes" :key="episode.id">
                <EpisodeItem :episode="episode"/>
            </li>
        <!-- ... -->
        </ul>

        <div class="episodes__loader">
        Loading more
        </div>
    </div>
</template>

<script>

import ArrowSearch from './../assets/icon-search.svg';
import { fetchEpisodes } from './../api.js';
import EpisodeItem from './../components/EpisodeItem.vue';

export default {
    components: {
        ArrowSearch,
        EpisodeItem
    },
    data() {
        return {
            page: 1,
            name: '',
            episodes: []
        }
    },
    methods: {
        async fetchData() {
            try {
                const result = await fetchEpisodes(this.page, this.name);
                this.episodes = result ? result.results : [];
            } catch(e) {
                console.log(e);
            }
        },
        filterEpisodes(e) {
            //console.log(e.target.value);
            this.name = e.target.value;
            this.fetchData();
        }
    },
    // watch: {
    //     name() {
    //         this.fetchData();
    //     }
    // },
    created() {
        this.fetchData();
    }
}
</script>

<style>

</style>
