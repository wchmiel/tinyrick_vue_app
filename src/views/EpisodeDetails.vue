<template>
    <div>
        <h1>Episode</h1>

        <router-link to="/" class="go-back-link">
            <arrowSvg/>
            Search results
        </router-link>

        <div class="episode__content">
            <div class="episode__left-col">
                <div class="episode-details">
                    <transition
                        enter-active-class="animated fadeIn"
                    >
                        <EpisodeItem :episode="episode" v-if="episode">
                            <div class="episode-info">
                                <span class="episode-info__label">{{ episode.air_date }}</span>
                            </div>
                        </EpisodeItem>
                    </transition>
                </div>
                <h2>Characters</h2>

                <div class="characters-list">
                    <transition-group
                        enter-active-class="animated fadeInLeft"
                        tag="div"
                    >
                        <template v-if="characters">
                            <Character 
                                v-for="character in characters"
                                :key="character.id"
                                :character="character"
                                />
                        </template>
                    </transition-group>
                
                <div class="link-container">
                    <button class="primary-link is-big">
                    Show more
                    </button>
                </div>
                </div>
            </div>
                
            <div class="episode__right-col">
                <h2>Comments</h2>
                <CommentForm @submitform="onSubmit"/>
                <transition-group
                    enter-active-class="animated fadeInUp"
                    tag="div"
                >
                    <template v-if="comments.length">
                        <Comment
                            v-for="comment in comments"
                            :key="comment.id"
                            :comment="comment"
                        />
                    </template>
                </transition-group>
            </div>
        </div>
    </div>
</template>

<script>

import arrowSvg from './../assets/icon-arrow-left.svg';
import EpisodeItem from './../components/EpisodeItem.vue';
import Character from './../components/Character.vue';
import Comment from './../components/Comment.vue';
import CommentForm from './../components/CommentForm.vue';
import { fetchEpisode, fetchCharacters, fetchComments, addComment } from './../api.js';


export default {
    props: {
        id: {
            type: [Number, String]
        }
    },
    components: {
        arrowSvg,
        EpisodeItem,
        Character,
        Comment,
        CommentForm
    },
    data() {
        return {
            episode: null,
            characters: null,
            charactersColl: [],
            comments: []
        }
    },
    methods: {
        async getEpisode() {
            try {
                const result = await fetchEpisode(this.id);
                this.episode = result;
                this.setCharactersCollection(result.characters);
                this.getComments(this.id);
            } catch(e) {
                console.log(e);
            }
        },
        async getCharacters(listOfCharacters) {
            try {
                const result = await fetchCharacters(listOfCharacters);
                this.characters = result;
            } catch(e) {
                console.log(e);
            }
        },
        async getComments(id) {
            try {
                const result = await fetchComments(id);
                this.comments = result.results;
            } catch(e) {
                console.log(e);
            }
        },
        setCharactersCollection(characters) {
            characters.forEach(character => {
                const id = +character.split("/").pop();
                this.charactersColl.push(id);
            });

            this.getCharacters(this.charactersColl);
        },
        async onSubmit(commentText) {
            const result = await addComment(this.id, commentText);
            this.comments = [
                result.data,
                ...this.comments
            ];
        }
    },
    created() {
        this.getEpisode();
    }
}
</script>

<style scoped>
    .fadeInUp {
        animation-duration: 0.3s;
    }
    .fadeInLeftBig {
        animation-duration: 0.3s;
    }
</style>
