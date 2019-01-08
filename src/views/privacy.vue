<template>
    <div class="page">
        <div class="page-wrap">
            <header class="page-head">
                <h2>{{pageTitle}}</h2>
            </header>
            <article class="page-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos reiciendis est libero. Eos, illum minus delectus laboriosam molestias dolor architecto atque? Labore adipisci fugit nesciunt! Modi, repudiandae doloremque sit laudantium natus sunt hic sequi possimus, quia consectetur eius? Architecto expedita optio neque soluta tenetur. Labore maxime doloribus molestiae ipsum eligendi ullam necessitatibus magni animi assumenda!</p>
            </article>
        </div>
    </div>
</template>

<script>
export default {
    name: 'privacy-page',
    computed: {
        pageTitle() {
            return this.$route.meta.pageName;
        }
    }
}
</script>

<style>

</style>
