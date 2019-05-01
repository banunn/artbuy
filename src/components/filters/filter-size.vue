<template>
    <filter-shell :title="'Filter By Size'">
		<template slot="head"><button class="btn-text">Clear</button>			
		</template>
		<template slot="body">
				<div class="size-filter">
					<div class="col">
						<h4>Height</h4>
						<input type="number" placeholder="Min"><input type="number" placeholder="Max">
					</div>
					<div class="col">
						<h4>Width</h4>
						<input type="number" placeholder="Min"><input type="number" placeholder="Max">
					</div>
					<div class="col">
						<h4>Depth</h4>
						<input type="number" placeholder="Min"><input type="number" placeholder="Max">
					</div>
				</div>
				<div class="size-foot">
					<div class="radio"><i class="material-icons">radio_button_checked</i><span>Inches</span></div>
					<div class="radio"><i class="material-icons">radio_button_unchecked</i><span>Metric</span></div>	
				</div>
		</template>
	</filter-shell>
</template>

<script>
export default {
    name: 'filter-size'
}
</script>

<style scoped lang="scss">

</style>
