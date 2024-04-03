<template>
    <section class="section fadeup mt-5">
        <div class="container">
            <div class="row fadeup fade-delay">
                <div class="col-12 col-md-7 mx-auto">
                    <h1 class="text-center custom-fs-big mb-5 pt-5">
                        Hey, we are ArchiDesign Vision studio
                    </h1>
                </div>
            </div>
            <div class="row fadeup fade-delay">
                <div
                    class="col-7 mx-auto d-flex flex-wrap justify-content-center align-items-center fs-2 custom-mb-big">
                    <div class="me-3 text-center">
                        your architectural partner
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section fadeup mb-5">
        <div class="container">
            <div class="row">
                <div v-for='image in imagesList' class="col-12 col-md-6 mb-4 position-relative">
                    <img :src="image.url" :alt="image.label" class="rounded-3 w-100">
                </div>
            </div>
        </div>
    </section>
    <section class="section fadeup ">
        <div class="container">
            <div class="row fadeup fade-delay">
                <div class="col-12 mx-auto d-flex flex-wrap justify-content-center align-items-center custom-fs-small">
                    <div class="custom-badge me-3 text-center mb-2">
                        About
                    </div>
                </div>
            </div>
            <div class="row mb-5">
                <div class="col-12 col-md-7 mx-auto mb-5 px-5 pb-5">
                    <h2 class="text-center fs-2 fadeup fade-delay">
                        We specialize in creating captivating spaces that merge functionality, innovation, and aesthetic
                        appeal. Our expertise in architecture and design enables us to transform ideas into immersive
                        experiences that inspire and delight.
                    </h2>
                </div>
            </div>
        </div>
    </section>
    <section class="section fadeup ">
        <div class="container">
            <div class="row fadeup fade-delay">
                <div class="col-12 mx-auto d-flex flex-wrap justify-content-center align-items-center custom-fs-small">
                    <div class="custom-badge me-3 text-center mb-2">
                        Experience
                    </div>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-12 col-md-7 mx-auto mb-5 px-5 pb-5">
                    <h2 class="text-center fs-2 fadeup fade-delay">
                        Where we've worked
                    </h2>
                </div>
            </div>
        </div>
    </section>
    <section class="section fadeup ">
        <div class="container">
            <div class="row fadeup fade-delay text-center">

                <div v-for="project in projectsList"
                    class="col-4 d-flex flex-column align-items-center justify-content-center mb-5">
                    <div class="date custom-fs-small mb-3 text-secondary">
                        {{ project.date }}
                    </div>
                    <div class="project-name fs-5 fw-medium mb-3">
                        {{ project.name }}
                    </div>
                    <div class="project-type custom-fs-small mb-3 text-secondary">
                        {{ project.type }}
                    </div>

                    <div class="custom-badge text-center mb-2 custom-fs-small mb-3">
                        {{ project.badge }}
                    </div>
                </div>

            </div>
        </div>
    </section>
    <section class="section fadeup ">
        <div class="container">
            <div class="row mb-5">
                <div class="col-12 col-md-5 mx-auto mb-5 p-5">
                    <h2 class="text-center fs-1 fadeup fade-delay">
                        Let's work together.
                    </h2>
                    <h2 class="text-center fs-1 fadeup fade-delay">
                        <router-link to="/contact">Get in touch.</router-link>
                    </h2>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import ContactPage from './ContactPage.vue';

export default {
    name: 'HomePage',
    data() {
        return {
            imagesList: [
                {
                    url: '/images/img7.jpg',
                    label: 'office'
                },
                {
                    url: '/images/img8.jpg',
                    label: 'people working'
                },
                {
                    url: '/images/img9.jpg',
                    label: 'people working'
                },
                {
                    url: '/images/img10.jpg',
                    label: 'office'
                },
            ],
            projectsList: [
                {
                    name: 'Oasis Plaza',
                    date: '1996',
                    type: 'Commercial',
                    badge: 'Consultancy'
                },
                {
                    name: 'Harmony Court',
                    date: '2023',
                    type: 'Renovation',
                    badge: 'Urban Planning'
                },
                {
                    name: 'Cascade Mall',
                    date: '2008',
                    type: 'Commercial',
                    badge: 'Urban Planning'
                },
                {
                    name: 'Solaris Office Park',
                    date: '2012',
                    type: 'Institutional',
                    badge: 'Urban Planning'
                },
                {
                    name: 'Harmony Court',
                    date: '2005',
                    type: 'Residential',
                    badge: 'Interior Design'
                },
                {
                    name: 'Innovation Hub',
                    date: '2010',
                    type: 'Institutional',
                    badge: 'Sustainability'
                },
                {
                    name: 'Cultural Nexus',
                    date: '2008',
                    type: 'Institutional',
                    badge: 'Restoration'
                },
                {
                    name: 'Vibrant Plaza',
                    date: '2015',
                    type: 'Commercial',
                    badge: 'Event Planning'
                },
                {
                    name: 'Zen Garden Retreat',
                    date: '2021',
                    type: 'Residential',
                    badge: 'Landscape Design'
                },
                {
                    name: 'Future Forward Center',
                    date: '2019',
                    type: 'Institutional',
                    badge: 'Research and Development'
                },
                {
                    name: 'Urban Oasis',
                    date: '2003',
                    type: 'Commercial',
                    badge: 'Sustainability'
                },
                {
                    name: 'Heritage Heights',
                    date: '1999',
                    type: 'Residential',
                    badge: 'Conservation'
                }
            ]
        }
    },

    mounted() {

        window.onload = function () {
            window.scrollTo(0, 0);
        }

        const observerOptions = {
            root: null,
            threshold: 0,
            rootMargin: '0px 0px 0px 0px'
        };

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);


        const sections = Array.from(document.getElementsByClassName('section'));


        sections.forEach(section => {
            const fadeups = section.getElementsByClassName('fade-delay');
            for (let count = 0; count < fadeups.length; count++) {
                fadeups[count].setAttribute('style', 'transition-delay: ' + count * 0.5 + 's');
            }
            observer.observe(section);
        });
    },

}
</script>
<style lang="scss" scoped>
@use '../style/partials/variables' as *;
.custom-label {
    top: 20px;
    left: 30px;
    font-size: 1.2rem;
}

img {
    height: 400px;
    object-fit: cover;
    object-position: center;
}

a {
    text-decoration: none;
    color: $text-color;

    &:hover {
        color: #999999;
    }
}
</style>