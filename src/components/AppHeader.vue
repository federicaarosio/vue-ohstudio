<template lang="">

<div class="container">
    <div class="row">
        <div class="col-2 mx-auto d-flex justify-content-between text-center custom-nav">
            <div v-for="(link, index) in linkItems" :key="index" >
                <router-link :to="{ name: link.routeName }" class="custom-menu-item">
                    {{ link.label }}
                </router-link>
            </div>
        </div>
    </div>
</div>
    


</template>
<script>
export default {
    data() {
        return {
            linkItems: [
                {
                    label: 'Home',
                    routeName: 'home'
                },
                {
                    label: 'About',
                    routeName: 'about'
                },
                {
                    label: 'Contact',
                    routeName: 'contact'
                },
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
.custom-nav {
    background-color: #f3f2f1;

    .custom-menu-item {
        background-color: #f3f2f1;
        text-decoration: none;
        color: #666666;

    }
}
</style>