<template>
  <aside class="search-filters">
    <header class="wrap">
      <div class="meta">
        <div class="filter">
          <button @click="selectFilter('style')" class="filter-ctrl">
            <span>Style</span>
            <i class="material-icons">arrow_drop_down</i>
          </button>
          <f-style v-on-clickaway="closeFilter" v-if="selected == 'style'"></f-style>
        </div>
        <div class="filter">
          <button @click="selectFilter('category')" class="filter-ctrl">
            <span>Category</span>
            <i class="material-icons">arrow_drop_down</i>
          </button>
          <f-category v-on-clickaway="closeFilter" v-if="selected == 'category'"></f-category>
        </div>
        <div class="filter">
          <button @click="selectFilter('medium')" class="filter-ctrl">
            <span>Medium</span>
            <i class="material-icons">arrow_drop_down</i>
          </button>
          <f-medium v-on-clickaway="closeFilter" v-if="selected == 'medium'"></f-medium>
        </div>
        <div class="filter">
          <button @click="selectFilter('color')" class="filter-ctrl">
            <span>Color</span>
            <i class="material-icons">arrow_drop_down</i>
          </button>
          <f-color v-on-clickaway="closeFilter" v-if="selected == 'color'"></f-color>
        </div>
        <div class="filter">
          <button @click="selectFilter('price')" class="filter-ctrl">
            <span>Price</span>
            <i class="material-icons">arrow_drop_down</i>
          </button>
          <f-price v-on-clickaway="closeFilter" v-if="selected == 'price'"></f-price>
        </div>
        <div class="filter">
          <button @click="selectFilter('size')" class="filter-ctrl">
            <span>Size</span>
            <i class="material-icons">arrow_drop_down</i>
          </button>
          <f-size v-on-clickaway="closeFilter" v-if="selected == 'size'"></f-size>
        </div>
      </div>
    </header>
  </aside>
</template>

<script>
import fCategory from "@/components/filters/filter-category";
import fColor from "@/components/filters/filter-color";
import fMedium from "@/components/filters/filter-medium";
import fPrice from "@/components/filters/filter-price";
import fSize from "@/components/filters/filter-size";
import fStyle from "@/components/filters/filter-style";
import { mixin as clickaway } from 'vue-clickaway';

export default {
  name: "home-search-filters",
  components: {
    fCategory,
    fColor,
    fMedium,
    fPrice,
    fSize,
    fStyle
  },
  mixins: [ clickaway ],
  methods: {
    selectFilter(filter) {
        if(filter === this.selected) {
            return this.closeFilter();
        } else {
            return this.selected = filter;
        }
      
    },
    closeFilter() {
      return this.selected = null;
    }
  },
  data() {
    return {
      viewStyle: false,
      selected: null,
      facets: [
        {
          name: "style",
          open: false,
          params: []
        },
        {
          name: "category",
          open: false,
          params: []
        },
        {
          name: "medium",
          open: false,
          params: []
        },
        {
          name: "color",
          open: false,
          params: []
        },
        {
          name: "price",
          open: false,
          params: []
        },
        {
          name: "size",
          open: false,
          params: []
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.filter-ctrl {
  text-transform: uppercase;
  color: #111215;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 2px;
  line-height: 16px;
  i {
    opacity: 0.4;
  }
  &:last-child {
    margin-right: 0;
  }
}
.search-filters {
    background: #fff;
  box-shadow: inset 0 -1px 0 0 #e3e7e8, 0 2px 4px 0 rgba(17, 18, 21, 0.2);
  header.wrap {
    display: flex;
    justify-content: space-between;
    height: 64px;
    align-items: center;
    @media(max-width: 1000px) {
      height: inherit;
    }
    button {
      -webkit-appearance: none;
      background: none;
      border: none;
      display: inline-flex;
      align-items: center;
    }
  }
}

.ctrl {
  button {
    margin-left: 16px;
    opacity: 0.4;
    &.active {
      opacity: 1;
    }
  }
}

.meta {
  @media(max-width: 1000px) {
    display: flex;
    flex-direction: row;
    max-width: 100%;
    overflow-y: auto;
    padding: 16px;
  }
}

.filter {
  display: inline-block;
  position: relative;
  margin-right: 42px;
}
</style>
