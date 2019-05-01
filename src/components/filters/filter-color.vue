<template>
    	<filter-shell :title="'Filter By Color'">
		<template slot="head"><button class="btn-text">Clear</button>			
		</template>
		<template slot="body">
				<div class="check-filter">
					<div @click="selectFilter(i)" v-for="(i, index) in items" :key="index" class="filter"><i class="material-icons">{{exists(i) ? "check_box" : "check_box_outline_blank"}}</i><span>{{i}}</span></div>
				</div>
		</template>
	</filter-shell>
</template>

<script>
export default {
    name: 'filter-color',
    	data() {
		return {
			items: ["White","Tan","Yellow","Orange","Red","Pink","Purple","Blue","Black","Teal"],
			selected: new Array()
		}
	},
	methods: {
		selectFilter(filter) {
			const vm = this;
			var index = _.findIndex(vm.selected, function(i) {
				return i == filter;
			});
			if(index > -1) {
				vm.selected.splice(index, 1);
			} else {
				vm.selected.push(filter);
			}
		},
		exists(filter) {
			const vm = this;
			return _.includes(vm.selected, filter);
		}
	}
}
</script>

<style scoped lang="scss">

</style>
