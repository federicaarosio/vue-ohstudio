<template lang="">
    <section>
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6 mx-auto">
                    <h1 class="text-center custom-fs-big">
                        A brand and product designer working with clients globally
                    </h1>
                </div>
            </div>
            <div class="row">
                <div class="col-12 mx-auto d-flex justify-content-center align-items-center custom-fs-small">
                    <div class="me-3 text-center">
                        Expertise
                    </div>
                    <div v-for='expertise in expertiseList' class="custom-badge me-3 text-center">
                        {{ expertise }}
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'HomePage',
    data() {
        return {
            expertiseList:
            [
                'Branding', 'Product', 'Design Systems'
            ]
        }
    },
}
</script>
<style lang="">
    
</style>