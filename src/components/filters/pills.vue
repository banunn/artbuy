<template>
    <div class="filters">
	<div class="filter">
		<span class="results">182 Results</span>
		<ul>
			<li>Oil <i class="material-icons">clear</i></li>
			<li>Water Color <i class="material-icons">clear</i></li>
			<li>Gouache <i class="material-icons">clear</i></li>
		</ul>
		<button class="remove">Remove All Filters</button>
	</div>
	<div class="sort">
		<span>Sort By:</span> 
		<button class="sort-btn">Nearest to Location <i class="material-icons">arrow_drop_down</i></button>
	</div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.filters {
	display: flex;
	justify-content: space-between;
	padding: 34px 0 24px 0;
	@media(max-width: 1000px) {
		flex-direction: column;
		padding: 16px 10px;
	}
	.filter {
		display: flex;
		align-items: center;
		.results {
			color: #111215;	
			font-size: 14px;	
			font-weight: 500;	
			letter-spacing: 0.1px;	
			line-height: 20px;
			margin-right: 32px;
		}
		ul {
			list-style: none;
			display: block;
			margin:0;
			padding:0;
			@media(max-width: 1000px) {
				display: flex;
				flex-direction: column;
			}
			li {
				display: inline-flex;
				align-items: center;
				color: rgba(#111215, .6);	
				font-size: 12px;	
				font-weight: 600;	
				letter-spacing: 0.09px;	
				margin-right: 6px;
				padding: 4px 8px;
				border: 1.5px solid rgba(17,18,21,0.2);	
				border-radius: 22px; 
				@media(max-width: 1000px) {
				margin-bottom: 12px;
				}
				i {
					font-size: 14px;
					margin-left: 4px;
					cursor: pointer;
				}
				
			}
		}
	}
	.remove {
		background: none;
	  height: 24px;	
		min-width: 122px;	
		border: 1px solid rgba(17,18,21,0.8);	      
		border-radius: 12px;
		color: #111215;	
		font-size: 12px;	
		font-weight: 600;	
		letter-spacing: 0.1px;	
		line-height: 20px;
	}
	
	.sort {
		span {
			color: #111215;	
			font-size: 14px;	
			font-weight: 500;	
			letter-spacing: 0.1px;	
			line-height: 20px;
		}
		.sort-btn {
			-webkit-appearance: none;
			background: none;
			border: none;
			color: #111215;
			font-size: 14px;	
			font-weight: bold;	
			letter-spacing: 0.1px;	
			line-height: 20px;
			display: inline-flex;
			align-items: center;
			i {
				opacity: 0.6;
			}
		}
	}
}
</style>
