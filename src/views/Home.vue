<template>
  <div class="home">
      <home-hero
        head="Love Art?"
        sub="Find it. Buy it. Sell it."
        :bg="heroBg">
      </home-hero>
      <home-search></home-search>

      <div class="wrap gallery-grid">
        <masonry :cols="{default: 3, 700: 2, 400: 1}" :gutter="{default: '30px'}">
          <gallery-art :item="item"  v-for="(item, index) in items" :key="index"></gallery-art>
        </masonry>
      </div>

  </div>
</template>
<script>
import homeHero from "@/components/home/hero";
import homeSearch from "@/components/home/search";
import galleryArt from "@/components/gallery/gallery-art";
export default {
  name: "home",
  components: {
    homeHero,
    homeSearch,
    galleryArt
  },
  data() {
    return {
      heroBg:
        "https://images.unsplash.com/photo-1520652089412-37d308180157?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      items: [
        {
          author: {
            name: "West Street Studios",
            photoUrl: 'https://images.unsplash.com/photo-1467400492058-1aad44d4bcd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80',
            location: {
              city: "Los Angeles",
              state: "CA"
            }
          },
          meta: {
            likes: 23,
            comments: 43
          },
          art: {
            dimensions: '48" x 56" x 1.5"',
            name: "Always Look On The Bright Side",
            price: 8000,
            photoUrl:
              "https://images.unsplash.com/photo-1533142266415-ac591a4deae9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=588&q=80"
          }
        },
        {
          author: {
            name: "West Street Studios",
            photoUrl: 'https://images.unsplash.com/photo-1467400492058-1aad44d4bcd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80',
            location: {
              city: "Los Angeles",
              state: "CA"
            },
          },
                    meta: {
              likes: 23,
              comments: 43
            },
            art: {
              dimensions: '48" x 56" x 1.5"',
              name: "Always Look On The Bright Side",
              price: 8000,
              photoUrl:
                "https://images.unsplash.com/photo-1533157867295-a910454d3a99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
            }
        },
        {
          author: {
            name: "West Street Studios",
            photoUrl: 'https://images.unsplash.com/photo-1467400492058-1aad44d4bcd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80',
            location: {
              city: "Los Angeles",
              state: "CA"
            },
          },
                      meta: {
              likes: 23,
              comments: 43
            },
            art: {
              dimensions: '48" x 56" x 1.5"',
              name: "Always Look On The Bright Side",
              price: 8000,
              photoUrl:
                "https://images.unsplash.com/photo-1536984456083-d69c8a7d952d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            }
        },
        {
          author: {
            name: "West Street Studios",
            photoUrl: 'https://images.unsplash.com/photo-1467400492058-1aad44d4bcd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80',
            location: {
              city: "Los Angeles",
              state: "CA"
            },
          },
                    meta: {
              likes: 23,
              comments: 43
            },
            art: {
              dimensions: '48" x 56" x 1.5"',
              name: "Always Look On The Bright Side",
              price: 8000,
              photoUrl:
                "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=1415&q=80"
            }
        },
        {
          author: {
            name: "West Street Studios",
            photoUrl: 'https://images.unsplash.com/photo-1467400492058-1aad44d4bcd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80',
            location: {
              city: "Los Angeles",
              state: "CA"
            },
          },
            meta: {
              likes: 23,
              comments: 43
            },
            art: {
              dimensions: '48" x 56" x 1.5"',
              name: "Always Look On The Bright Side",
              price: 8000,
              photoUrl:
                "https://images.unsplash.com/photo-1520652089412-37d308180157?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            }
        },
        {
          author: {
            name: "West Street Studios",
            photoUrl: 'https://images.unsplash.com/photo-1467400492058-1aad44d4bcd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80',
            location: {
              city: "Los Angeles",
              state: "CA"
            }
          },
            meta: {
              likes: 23,
              comments: 43
            },
            art: {
              dimensions: '48" x 56" x 1.5"',
              name: "Always Look On The Bright Side",
              price: 8000,
              photoUrl:
                "https://images.unsplash.com/photo-1508624789013-65884640dec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80"
            }
        },
        {
          author: {
            name: "West Street Studios",
            photoUrl: 'https://images.unsplash.com/photo-1467400492058-1aad44d4bcd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80',
            location: {
              city: "Los Angeles",
              state: "CA"
            }
          },
            meta: {
              likes: 23,
              comments: 43
            },
            art: {
              dimensions: '48" x 56" x 1.5"',
              name: "Always Look On The Bright Side",
              price: 8000,
              photoUrl:
                "https://images.unsplash.com/photo-1519111719558-9cdc748ba2a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            }
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.gallery-grid {
  margin-top: 30px;
}
</style>

