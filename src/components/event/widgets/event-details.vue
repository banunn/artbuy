<template>
    <ab-widget :title="'Details'">
        <template slot="body">
            		<div class="w-content">
			<div class="info-row">
				<span class="em">Date</span><span class="date">01/28/2019</span>
			</div>
			<div class="info-row">
				<span class="em">Time</span><span>07:00 PM – 10:00 PM</span>
			</div>
		</div>
        </template>
    </ab-widget>
</template>

<script>
export default {
    name: 'event-details',

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

.info-row {
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #E8EAEB;
	padding: 20px 0;
	span {
		letter-spacing: .75px;
	}
	&:first-child {
		padding-top: 0;
	}
	&:last-child {
		padding-bottom:0;
		border-bottom: none;
	}
	.em {
		font-weight: bold;
	}
}

</style>
