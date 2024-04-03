<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex justify-content-between align-items-center mb-4">
                <div class="copyright">&#169; 2024</div>
                <div class="socials-links d-flex">
                    <a v-for="social in socialLinks" :href="social.url">{{ social.socialName }}</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AppFooter',
    data() {
        return {
            socialLinks: [
                {
                    socialName: 'Facebook',
                    url: '#',
                },
                {
                    socialName: 'Linkedin',
                    url: '#',
                },
                {
                    socialName: 'Instagram',
                    url: '#',
                },
            ]
        }
    },
}
</script>
<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.socials-links {
    gap: 10px;

    a {
        color: $text-color;
        text-decoration: none;

        &:hover {
            color: #999999;
        }
    }
}
</style>