<template>
    <section class="section fadeup ">
        <div class="container">
            <div class="row mb-5">
                <div class="col-12 col-md-5 mx-auto p-5">
                    <h2 class="text-center fs-1 fadeup fade-delay">
                        Let's work together
                    </h2>
                    <div class="col-3 mx-auto custom-fs-small fadeup fade-delay text-center">
                        <div class="custom-badge text-center mb-2 ">
                            Contacts
                        </div>
                    </div>
                    <ul class="text-center fs-5 fadeup fade-delay">
                        <li>Email: info@archidesign.com</li>
                        <li>Phone: (555) 123-4567</li>
                        <li>Address: 123 Architecture Avenue, Cityville, CA 98765</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-7 mx-auto mb-5 px-5 pb-5">
                    <h2 class="text-center fs-2 fadeup fade-delay">
                        At archiDesign, we are always open to new ideas, connections, and collaborations. Whether you
                        have a project in mind, seek consultation, or wish to explore potential partnerships, we welcome
                        the opportunity to engage with you. Feel free to reach out to us at any time.
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
.custom-label {
    top: 20px;
    left: 30px;
    font-size: 1.2rem;
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
</style>