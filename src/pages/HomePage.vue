<template>
    <section class="section fadeup mt-5">
        <div class="container">
            <div class="row fadeup fade-delay">
                <div class="col-12 col-md-7 mx-auto">
                    <h1 class="text-center custom-fs-big mb-5 pt-5">
                        An architectural studio designing spaces worldwide
                    </h1>
                </div>
            </div>
            <div class="row fadeup fade-delay">
                <div
                    class="col-12 mx-auto d-flex flex-wrap justify-content-center align-items-center custom-fs-small custom-mb-big">
                    <div class="me-3 text-center">
                        Expertise
                    </div>
                    <div v-for='expertise in expertiseList' class="custom-badge me-3 text-center mb-1">
                        {{ expertise }}
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section fadeup mb-5">
        <div class="container">
            <div class="row">
                <div v-for='image in imagesList' class="col-12 col-md-6 mb-4 position-relative">
                    <div class="position-absolute text-white custom-label">
                        {{ image.label }}
                    </div>
                    <img :src="image.url" :alt="image.label" class="rounded-3 w-100">
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
export default {
    name: 'HomePage',
    data() {
        return {
            expertiseList: ['Innovation', 'Functionality', 'Sustainability'],
            imagesList: [
                {
                    url: '/images/img1.jpg',
                    label: 'Zenith Tower'
                },
                {
                    url: '/images/img2.jpg',
                    label: 'EcoSphere Residence'
                },
                {
                    url: '/images/img3.jpg',
                    label: 'Aurora Pavilion'
                },
                {
                    url: '/images/img4.jpg',
                    label: 'Terra Vista Estates'
                },
                {
                    url: '/images/img5.jpg',
                    label: 'Solstice Plaza Residence'
                },
                {
                    url: '/images/img6.jpg',
                    label: 'Horizon Haven'
                },
            ]
        }
    },

    mounted() {

        window.onload = function () {
            window.scrollTo(0, 0);
        }

        // Viene definito un oggetto observerOptions che specifica le opzioni per l'Intersection Observer:
        // root: specifica l'elemento radice da cui calcolare le intersezioni. Se null = l'elemento viewport del browser.
        // threshold: specifica la percentuale di intersezione dell'elemento target rispetto all'elemento radice.
        // rootMargin: specifica un margine intorno all'elemento radice. Qui è impostato su '0px 0px -50px 0px', il che significa che c'è un margine di -50 pixel nella parte inferiore dell'elemento radice.
        const observerOptions = {
            root: null,
            threshold: 0,
            rootMargin: '0px 0px 0px 0px'
        };

        // Viene creato un nuovo IntersectionObserver con la funzione di callback specificata.
        // La callback si occupa di aggiungere una classe CSS 'in-view' all'elemento target quando entra nella vista (cioè quando è intersecato).
        // Viene anche chiamato observer.unobserve(entry.target) per smettere di osservare l'elemento una volta che è stato intersecato.
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Viene selezionata una lista di tutti gli elementi con la classe CSS 'section' all'interno del documento.
        // Questi sono gli elementi che saranno osservati per le intersezioni.
        const sections = Array.from(document.getElementsByClassName('section'));


        // Viene iterata la lista delle sezioni.
        // Per ciascuna sezione, viene selezionata una lista di tutti gli elementi con la classe CSS 'fade-delay'
        // all'interno di quella sezione. Questi elementi saranno soggetti a un ritardo di transizione graduale.
        // Per ogni elemento con la classe 'fade-delay' all'interno di ogni sezione, viene aggiunto un attributo style
        // per impostare il ritardo di transizione in base al conteggio dell'elemento.
        // Ad esempio, il primo elemento avrà un ritardo di 0 * 0.5 = 0s, il secondo avrà un ritardo di 1 * 0.5 = 0.5s, e così via.

        // Infine, ogni sezione viene osservata utilizzando l'Intersection Observer appena creato,
        // il che significa che verrà monitorata per le intersezioni con l'elemento radice e verrà eseguita
        // la funzione di callback appropriata quando necessario.
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
</style>