<script>
import ModelBox from './components/ModelBox.vue'

export default {
    components: {
        ModelBox
    },
    data() {
        const models = require('../js/config/models');
        return { models }
    },

}
</script>

<template>
    <div class="medium-8 medium-offset-2 columns text-center mb-3">
        <h2 class="display-6">Pick Your Model</h2>
    </div>

    <div class="d-flex justify-content-center flex-wrap">
        <ModelBox v-for="model in models" v-show="model.isEnabled" :key="model.codename" :image="model.image" :codename="model.codename" :name="model.name" :slug="model.slug" />
    </div>

    <!-- model not here? email us -->
    <div class="medium-8 medium-offset-2 columns text-center">
        <p>Can't find your model? <a target="_blank" href="mailto:b3yond@d3vl.com">Email us</a></p>
    </div>
</template>