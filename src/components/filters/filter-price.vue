<template>
    	<filter-shell :title="'Filter By Price'">
		<template slot="head"><button class="btn-text">Clear</button>			
		</template>
		<template slot="body">
				<div class="price-filter">
						<div class="filter"><span>$</span><input type="number" placeholder="Min"></div>
						<span class="space">-</span>
						<div class="filter"><span>$</span><input type="number" placeholder="Max"></div>
				</div>
		</template>
	</filter-shell>
</template>

<script>
export default {
    name: 'filter-price'
}
</script>

<style scoped lang="scss">

</style>
