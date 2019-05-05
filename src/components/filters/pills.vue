<template>
    <div class="filters">
	<div class="filter">
		<span class="results">182 Results</span>
		<ul>
			<li v-for="(f, index) in filters.items" :key="index">{{f}} <i @click="removeFilter(f)" class="material-icons">clear</i></li>
		</ul>
		<button v-if="filters.items.length" @click="removeAllFilters" class="remove">Remove All Filters</button>
	</div>
	<div class="sort">
		<span>Sort By:</span> 
		<button @click="sort.open = true" class="sort-btn">{{sort.selected}} <i class="material-icons">arrow_drop_down</i></button>

		<div v-if="sort.open" v-on-clickaway="closeSort" class="sort-menu">
			<div class="sort-head">
				<span>Sort By</span>
				<i class="material-icons">arrow_drop_down</i>
			</div>
			<div class="sort-body">
				<div @click="selectSort(o)" v-for="(o, index) in sort.options" :key="index" class="sort-item">
					<span :class="{'bold': sort.selected == o}">{{o}}</span>
					<i v-if="sort.selected == o" class="material-icons">check</i>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
export default {
	name: 'filter_pills',
	mixins: [ clickaway ],
	data() {
		return {
			sort: {
				options:  ['Nearest To Location', 'Newest Items', 'Oldest Items', 'Price (Lowest - Highest)', 'Price (Highest - Lowest)'],
				open: false,
				selected: null
			},
			filters: {
				items: ['Oil', 'Water Color', 'Gouache'],
			}
		}
	},
	methods: {
		selectSort(sort) {
			this.sort.selected = sort;
		},
		closeSort() {
				if(this.sort.open) {
					this.sort.open = false;
				} else {
						return;
				} 
		},
		removeFilter(filter) {
			var arr = this.filters.items;
			let theIndex = _.findIndex(arr, function(i) {
				return i == filter;
			});
			theIndex > -1 ? arr.splice(theIndex, 1) : '';
		},
		removeAllFilters() {
			this.filters.items = new Array();
		}
	},
	created() {
		this.sort.selected = this.sort.options[0];
	}
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
		position: relative;
		span {
			color: #111215;	
			font-size: 14px;	
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
			&:focus {
				outline: none;
			}
			i {
				opacity: 0.6;
			}
		}
	}
}

.sort-menu {
		border-radius: 2px;	
		background-color: #FFFFFF;	
		box-shadow: inset -1px 1px 0 0 rgba(17,18,21,0), 0 1px 6px 0 rgba(17,18,21,0.2);
		width: 360px;
		z-index: 50;
		position: absolute;
		top: 0;
		right:0;
		font-size: 14px;	font-weight: 500;	letter-spacing: 0.1px;	line-height: 20px;
		.sort-head {
			display: flex;
			position: relative;
			align-items: center;
			justify-content: space-between;
			padding: 0 12px;
			height: 42px;
		}
		.sort-item {
			padding: 10px 12px;
			display: flex;
			justify-content: space-between;
			position: relative;
			cursor: pointer;
			i {
				position: absolute;
				right:12px;
				top: 8px;
			}
		}
}

</style>
