<template>
    <div class="follow-grid">
	<header class="nav">
		<button class="active">Followers</button><button>Following</button>
	</header>
	<div class="search">
		<i class="material-icons">search</i>
		<input v-model="searchText" type="search" placeholder="search followers">
	</div>
	<div class="grid-content">
		<div v-for="(f, index) in filteredFollowers" :key="index" class="grid-item">
			<div class="detail">
				<figure class="user-img"><img :src="f.userImg" alt=""></figure>
				<div class="meta">
					<header>{{f.first_name + ' ' + f.last_name}}</header>
					<span>{{f.city + ', ' + f.state}}</span>
				</div>
			</div>
			<div class="ctrl">
				<button class="btn-sm block">Block</button>
				<button @click="f.following = !f.following" :class="{'dark': f.following}" class="followToggle btn-sm"><i v-if="f.following" class="material-icons">check</i><span>{{f.following ? 'unfollow' : 'follow'}}</span></button>
			</div>
		</div>
	</div>
    </div>
</template>

<script>
export default {
    name: 'follow-grid',
    data() {
        return {
            searchText: ''
        }
    },
    computed: {

        followers() {
             return this.$store.getters.userInfo.social.followerList;
        },
        filteredFollowers() {
            const vm = this;
            if(this.searchText.length > 0) {
                var search = this.searchText;
                var lowSearch = search.toLowerCase();
                var results = _.filter(vm.followers, function(i) {
                    return  i.last_name.toLowerCase().includes(lowSearch, 0) || i.first_name.toLowerCase().includes(lowSearch, 0);
                });
                return results;
            } else {
                return this.followers;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.follow-grid {
	border: 1px solid rgba(17,18,21,0.1);	
	border-radius: 2px;	
	background-color: #FFFFFF;
	width: 100%;
	.nav {
		height: 55px;
		display: flex;
		padding: 0 18px;
		border-bottom: 1px solid #E8EAEB;
		button {
			border: none;
			background: none;
			opacity: 0.6;	color: #111215;
			font-size: 12px;	
			font-weight: bold;	
			letter-spacing: 1px;	
			line-height: 18px;
			text-transform: uppercase;
			cursor: pointer;
			&.active {
				opacity:1;
				box-shadow: inset 0px -2px 0 #111215;
			}
		}
	}
	
	.search {
		height: 48px;
		display: flex;
		padding: 0 18px;
		border-bottom: 1px solid #E8EAEB;
		i {
			transform: translatey(2px);
			font-size: 18px;
			align-self: center;
		}
		input {
			border: none;
			background: none;
			-webkit-appearance: none;
			display: block;
			width: 100%;
			padding: 0 6px;
			&::placeholder {
				opacity: 0.4;	
				color: #111215;		
				font-size: 14px;	
				font-weight: 500;	
				letter-spacing: 0.1px;	
				line-height: 18px;
			}
		}
	}
	
	.grid-content {
		padding: 0 0 0 16px;
		.grid-item {
			height: 78px;
			display: flex;
			align-items:center;
			justify-content: space-between;
			border-bottom: 1px solid #E8EAEB;
			padding-right: 16px;
			&:last-child {
				border-bottom: none;
			}
			&:hover {
				background-color: #FAFCFC;
			}
			.detail {
				display: flex;
				align-items: center;
				figure {
					margin-right: 12px;
				}
				.meta {
					header {
						color: #111215;
						font-size: 14px;	
						font-weight: 600;	
						letter-spacing: 0.1px;	
						line-height: 18px;
					}
					span {
						opacity: 0.8;	
						color: #111215;		
						font-size: 12px;	
						font-weight: 500;	
						letter-spacing: 0.5px;	
						line-height: 18px;
					}
				}
			}
			.ctrl {
				display: flex;
				align-items: center;
				.btn-sm {
					cursor: pointer;
					margin-left: 8px;
						display: inline-flex;
					justify-content: center;
					align-items: center;
						height: 24px;	
						width: 105px;	
						border: 1px solid rgba(17,18,21,0.2);	
						border-radius: 2px;
						background-color: #fff;
					opacity: 0.8;	
					color: #111215;	
					font-size: 9px;	
					font-weight: bold;	
					letter-spacing: 1px;	
					line-height: 12px;	
					text-transform: uppercase;
					i {
						font-size: 14px;
						margin-right: 4px;
					}
					&.dark {
						background-color: #111215;
						color: #fff;
					}
					&.block {
						opacity: 0;
					}
				}
			}
			&:hover {
				.ctrl {
					.block {
						opacity:1;
					}
				}
			}
		}
	}
	
}
</style>
