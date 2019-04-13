<template>
    <ab-widget :title="'Location'">
        <template slot="body">
		<div class="w-content">
			<header class="address">224 N. Rodeo Drive, Beverly Hills, CA 90210</header>
			<figure class="map">
				<img src="https://www.sanfranciscoshop.com/images/maps/SacramentoStreetMap.gif" alt="">
			</figure>
		</div>
        </template>
    </ab-widget>
</template>

<script>
export default {
    name: 'event-location',

}
</script>

<style lang="scss" scoped>

	.w-content {
		color: #111215;		
		font-size: 14px;	
		font-weight: 500;	
		letter-spacing: 0.1px;	
		line-height: 18px;
	}


.address {
	text-decoration: underline;
	color: #111215;
	font-size: 14px;	
	font-weight: 500;	
	letter-spacing: 0.1px;	
	line-height: 18px;
	cursor: pointer;
}
.map {
	margin:0;
	padding:0;
	overflow: hidden;
	border: 1px solid #E3E5E6;
	border-radius: 2px;
	margin-top: 18px;
	img {
		max-width: 100%;
		height: auto;
		object-fit: cover;
		display: block;
	}
}

</style>
