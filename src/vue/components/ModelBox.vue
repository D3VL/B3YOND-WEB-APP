<script>
    export default {
        props: ['image', 'codename', 'name', 'slug']
    }
</script>

<template>
    <router-link :to="{name: 'model_connect', params: { slug }}" class="ModelBox">
        <div class="card border">
            <img :src=image rel="preload">
            <h6>{{name}}</h6>
        </div>
    </router-link>
</template>
