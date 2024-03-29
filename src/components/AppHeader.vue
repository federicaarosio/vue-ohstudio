<template lang="">

    <ul>
        <li v-for="(link, index) in linkItems" :key="index">
            <router-link :to="{ name: link.routeName }" class="nav-link">
                {{ link.label }}
            </router-link>
        </li>
    </ul>

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
<style lang="">

</style>