<template lang="">
    <section>
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-7 mx-auto">
                    <h1 class="text-center custom-fs-big mb-5">
                        Evolving as a global brand strategist, shaping products
                    </h1>
                </div>
            </div>
            <div class="row">
                <div class="col-12 mx-auto d-flex justify-content-center align-items-center custom-fs-small custom-mb-big">
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
    <section>
        <div class="container">
            <div class="row">
                <div v-for='image in imagesList' class="col-12 col-md-6 mb-4">
                    <img :src="image.url" alt="immagine di prova" class="rounded-3 w-100">
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
            expertiseList: ['Branding', 'Product', 'Design Systems'],
            imagesList: [
                {
                    url: '/images/img1.jpg',
                },
                {
                    url: '/images/img2.jpg',
                },
                {
                    url: '/images/img3.jpg',
                },
                {
                    url: '/images/img4.jpg',
                },
                {
                    url: '/images/img5.jpg',
                },
                {
                    url: '/images/img6.jpg',
                },
            ]
        }
    },
}
</script>
<style lang="scss" scoped>
    img {
        height: 400px;
        object-fit: cover;
        object-position: center;
    }
</style>