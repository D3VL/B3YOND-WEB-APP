<script>
    export default {
        data() {
            return { year: new Date().getFullYear() }
        }
    }
</script>

<template>
    <div class="medium-8 medium-offset-2 columns text-center">
        <small>©{{year}} <a href="//d3vl.com" class="d3vl-link">D3VL LTD</a></small><br>
        <small>BUILD: {{$build}}</small>
    </div>
</template>
