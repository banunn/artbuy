<template>
  <div class="favorite-collection">
    <div class="img-wrap">
      <div class="hero">
        <figure class="img">
          <img :src="item.images[0]" alt>
        </figure>
      </div>
      <div class="summary">
        <figure v-for="(i, index) in images" :key="index" class="img">
          <img :src="i" alt>
        </figure>
      </div>
    </div>
    <footer class="detail">
      <div class="meta">
        <header class="heading">{{item.title}}</header>
        <span>{{item.itemLength}} Items</span>
        <span class="space"></span>
        <span>{{fromNow(item.date)}}</span>
      </div>
      <div class="ctrl">
        <i class="material-icons">more_vert</i>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "abFavorite",
  data() {
    return {
      item: {
        title: "Entryway Ideas",
        itemLength: 8,
        date: new Date(),
        images: [
          "https://images.unsplash.com/photo-1534522903854-3b9314fc12f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=350&q=80",
          "https://images.unsplash.com/photo-1541680670548-88e8cd23c0f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=258&q=80",
          "https://images.unsplash.com/photo-1551239997-3d199dbd9f89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80",
          "https://images.unsplash.com/photo-1550294791-19030167b78a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80",
          "https://images.unsplash.com/photo-1494236536165-dab4d859818b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
        ]
      }
    };
  },
  computed: {
    hero() {
      return this.item.images[0];
    },
    images() {
      return this.item.images.slice(1, 5);
    }
  },
  methods: {
    fromNow(date) {
      return this.$moment(date).fromNow();
    }
  }
};
</script>

<style lang="scss" scoped>
.favorite-collection {
	border: 1px solid rgba(17,18,21,0.1);	
	border-radius: 2px;	
	background-color: #FFFFFF;
	padding: 8px 8px 16px 8px;
	.img {
		margin:0;
		position: relative;
		background: #eaeaea;
		height: 100%;
		width: 100%;
		img {
			height: 100%;
			width: 100%;
			object-fit: cover;
		}
	}
	.img-wrap {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 2px;
		.summary {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr 1fr;
			grid-gap: 2px;
		}
	}
	
	.detail {
		display: flex;
		justify-content: space-between;
		.meta {
			.heading {
				color: #111215;
				font-size: 20px;	
				font-weight: 800;	
				letter-spacing: 0.23px;	
				line-height: 28px;
				margin-top: 8px;
			}
			span {
				opacity: 0.6;	
				color: #111215;
				font-size: 12px;	
				font-weight: 500;	
				line-height: 24px;
				&.space {
					margin: 0 6px;
					position: relative;
					&:after {
						content: '';
						height: 2px;
						width: 2px;
						background: rgba(#111215, .6);
						display: inline-block;
						border-radius: 50%;
						position: absolute;
						bottom: 6px;
					}
				}
			}	
		}
		.ctrl {
			margin-top: 12px;
			opacity: .3;
		}
	}
}
</style>
