<template>
    <div class="favorite-list">
		<ab-favorite v-for="(f, index) in 8" :key="index"></ab-favorite>
	</div>
</template>

<script>
import abFavorite from './favorite'
export default {
    name: 'fav_grid',
    components: {
        abFavorite
    }
}
</script>

<style lang="scss" scoped>
.favorite-list {
	display: grid;
	grid-gap: 32px;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: repeat(1fr);
	@media(max-width: 1000px) {
			grid-gap: 24px;
			grid-template-columns: 1fr 1fr;
	}
	@media(max-width: 650px) {
			grid-gap: 16px;
			grid-template-columns: 1fr;
	}
}
</style>
