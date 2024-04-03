<template lang="">

    <div class="container">
        <div class="row custom-mb-big">
            <div class="col-10 col-md-5 col-lg-3 mx-auto d-flex justify-content-between text-center custom-nav mt-4">
                <div v-for="(link, index) in linkItems" :key="index" class="text-center" >
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
@use '../style/partials/variables' as *;

.custom-nav {
    background-color: $primary-color;
    border-radius: 35px;
    padding: 0.8rem 0.25rem;

    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 50px;
    z-index: 1000;

    .custom-menu-item {
        text-decoration: none;
        color: $text-color;
        font-weight: 500;
        padding: 0.7rem 1.6rem;
        border-radius: 35px;
        transition: background-color 0.5s;
    }

    .active {
        background-color: white;
        padding: 0.7rem 1.6rem;
        border-radius: 35px;
    }
}
</style>