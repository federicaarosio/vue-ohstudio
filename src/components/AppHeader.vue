<template lang="">

<div class="container">
    <div class="row">
        <div class="col-8 col-md-3 mx-auto d-flex justify-content-evenly text-center custom-nav text-center custom-mb-big mt-5">
            <div v-for="(link, index) in linkItems" :key="index" >
                <router-link :to="{ name: link.routeName }" :class="{ 'active': $route.name === link.routeName }" class="custom-menu-item">
                    <span>{{ link.label }}</span>
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
    border-radius: 35px;
    padding: 0.9rem  0;

    .custom-menu-item {
        background-color: #f3f2f1;
        text-decoration: none;
        color: #666666;
        font-weight: 500;
        padding: 0.8rem 1.6rem;       
    }

    .active {
        background-color: white;
        padding: 0.8rem 1.6rem;
        border-radius: 35px;
    }
}
</style>