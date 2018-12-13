<template>
    <section class="comments">
        <form class="comments__form" @submit.prevent="onAddComment">
                        <textarea placeholder="Your comment here" v-model="commentText"></textarea>
                        <div class="comments__bar">
                        <input type="text" placeholder="Username" v-model="userName">
                        <button type="submit">
                            <!-- Plus Icon -->
                            <plusSvg/>
                        </button>
                        </div>
                    </form>
                
                <!-- Comment Items -->
                </section>
</template>

<script>

import plusSvg from './../assets/icon-add.svg';

export default {
    components: {
        plusSvg
    },
    props: {

    },
    data() {
        return {
            commentText: '',
            userName: ''
        }
    },
    methods: {
        onAddComment() {
            this.$emit('submitform', {
                content: this.commentText,
                author: this.userName
            });
            this.commentText = '';
            this.userName = '';
        }
    }
}
</script>

<style>

</style>