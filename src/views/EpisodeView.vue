<template>
    <div v-infinite-scroll="loadMoreEpisodes" infinite-scroll-disabled="isLoadingDisabled">
        <h1 class="episodes__title">Episodes</h1>

        <div class="episodes__search">
        <ArrowSearch/>
        <input @input="filterEpisodes" type="text" placeholder="Search">
        </div>

        <transition-group
            enter-active-class="animated fadeIn faster"
            tag="ul"
            class="episodes__list"
        >
            <li v-for="episode in episodes" :key="episode.id">
                <router-link :to="{name: 'EpisodeDetails', params: {id: episode.id} }">
                    <EpisodeItem :episode="episode"/>
                </router-link>
            </li>
        </transition-group>

        <div
            v-if="!isLoadingDisabled"
            class="episodes__loader"
        >
            Loading more...
        </div>
    </div>
</template>

<script>

import ArrowSearch from './../assets/icon-search.svg';
import { fetchEpisodes } from './../api.js';
import EpisodeItem from './../components/EpisodeItem.vue';
import debounce from 'lodash.debounce';

export default {
    components: {
        ArrowSearch,
        EpisodeItem
    },
    data() {
        return {
            page: 1,
            name: '',
            episodes: [],
            busy: true,
            initScroll: true,
            maxPages: 0
        }
    },
    methods: {
        async fetchData() {
            try {
                this.busy = true;
                const result = await fetchEpisodes(this.page, this.name);

                if (result) {
                    this.episodes = this.episodes.concat(result.results);
                    this.maxPages = result.info.pages;
                }

                this.busy = false;
            } catch(e) {
                console.log(e);
            }
        },
        loadMoreEpisodes() {
            this.page++;
            this.fetchData();
        },
        filterEpisodes: debounce(async function(e) {
            this.episodes.length = 0;
            this.page = 1;
            this.name = e.target.value;
            this.fetchData();
        }, 100)
    },
    computed: {
        // isInitLoading() {
        //     return this.busy || this.page === 1;
        // },
        isLoadingDisabled() {
            return this.page >= this.maxPages || this.busy
        }
    },
    created() {
        this.fetchData();
    },
    mounted() {
        this.initScroll = false;
    }
}
</script>

<style>

</style>
