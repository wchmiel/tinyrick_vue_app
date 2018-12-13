<template>
    <div class="base-item">
    <header class="base-item__header">
        <div class="base-item__header-content">
        <h3 class="base-item__title">{{ comment.author }}</h3>
        <span class="base-item__subtitle">1 day ago</span>
        </div>
    </header>
    
    <p class="base-item__content">
        {{ comment.content }}
    </p>
    </div>
</template>

<script>
export default {
    props: {
        comment: {
            type: Object
        }
    },
    data() {
        return {

        }
    }
}
</script>

<style>

</style>