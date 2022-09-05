<script>

    // get list of all ConnectionSteps in ./components/ConnectionSteps/
    const connectionSteps = require.context('./components/ConnectionSteps', false, /\.vue$/)
    const connectionStepsList = connectionSteps.keys().map(key => {
        return {
            default: connectionSteps(key).default,
            key: key.replace(/(\.\/|\.vue)/g, '')
        }
    }).reduce((acc, step) => {
        acc[step.key] = step.default
        return acc
    }, {})
    
    export default {
        components: connectionStepsList,
        data() {
            const models = require('../js/config/models');

            // find model by slug
            const model = Object.values(models).find(model => model.slug === this.$route.params.slug);

            // if model not found or is not enabled, redirect to model picker
            if (!model || !model.isEnabled) this.$router.push({ name: 'model_list' });

            return { 
                model,
                currentStep: model.connectionSteps[0]
            }
        },
        methods: {
            // go to next step
            nextStep() {
                const currentIndex = this.model.connectionSteps.indexOf(this.currentStep);
                const nextIndex = currentIndex + 1;
                               
                // if no next step, goto connect
                if (currentIndex === this.model.connectionSteps.length - 1) this.$router.push({ name: `model_connect_${this.model.methods[0].toLowerCase()}`, params: { slug: this.model.slug } });
                else this.currentStep = this.model.connectionSteps[nextIndex];
            },
           
            // go to previous step
            prevStep() {
                const currentIndex = this.model.connectionSteps.indexOf(this.currentStep);
                const prevIndex = currentIndex - 1;

                // if we are on the first step, go back to model picker
                if (prevIndex < 0) this.$router.push({ name: 'model_list' });
                else this.currentStep = this.model.connectionSteps[prevIndex];
            }
        }
    }
    
</script>

<template>
    <keep-alive>
        <component :is="this.currentStep" />
    </keep-alive>

    <div class="d-flex justify-content-between mt-3">
        <button class="btn btn-secondary next-step" @click="prevStep">Back</button>
        <button class="btn btn-primary prev-step" @click="nextStep">Next</button>
    </div>
</template>