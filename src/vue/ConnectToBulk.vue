<script>
    const Bulk = require('../js/class/usb/Bulk');


    export default {
        data() {
            const models = require('../js/config/models');
            // find model by slug
            const model = Object.values(models).find(model => model.slug === this.$route.params.slug);
            // if model not found or is not enabled, redirect to model picker
            if (!model || !model.isEnabled) this.$router.push({ name: 'model_list' });

            const bulk = new Bulk(model.filters);

            return {
                model,
                bulk,
            }
        },
        async created() {
            try {
                const grantedDevices = await this.bulk.grantedDevices();
                if (grantedDevices.length > 0) {
                    await this.bulk.connect(grantedDevices[0]);
                } else {
                    const device = await this.bulk.requestDevice();
                    if (!device) {
                        return this.$router.push({ name: 'model_list' });
                    }
                    await this.bulk.connect(device);
                }

                await this.bulk.linkSession(this.session);

                window.bulk = this.bulk;
            } catch (e) {
                console.error(e);
                this.$router.push({ name: 'model_list' });
            }  
        },
        methods: {

        }
    }
</script>

<template>
    <div class="medium-8 medium-offset-2 columns text-center mb-3">
        <h2 class="display-6">- Connecting to bulk -</h2>
    </div>
</template>