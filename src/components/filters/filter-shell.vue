<template>
   	<div class="filter-shell">
		<header class="head">
			<span>{{title}}</span> 
				<slot name="head">
					
				</slot>
		</header>
		<div class="filter-content">
			<slot name="body"></slot>
		</div>
	</div> 
</template>

<script>
export default {
    name: 'filter-shell',
    props: {
		title: String
	}
}
</script>

<style scoped lang="scss">

</style>
