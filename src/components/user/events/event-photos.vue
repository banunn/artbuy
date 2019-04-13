<template>
  <ab-widget :title="'Event Photos'">
    <template slot="body">
      <div class="photo-grid">
        <figure class="photo add">
            <input class="input" type="file" name="" id="">
          <i class="material-icons">add_a_photo</i>
          <span>Add Photo</span>
        </figure>
        <figure class="photo" v-for="p in photos" :key="p.id">
          <img :src="p.url" :title="p.name" alt>
        </figure>
      </div>
    </template>
  </ab-widget>
</template>

<script>
import abWidget from "@/components/general/widget";
export default {
  name: "eventPhotos",
  components: {
    abWidget
  },
  data() {
    return {
      photos: [
        {
          id: 1,
          name: "",
          url:
            "https://images.unsplash.com/photo-1507643179773-3e975d7ac515?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
        },
        {
          id: 2,
          name: "",
          url:
            "https://images.unsplash.com/photo-1503418895522-46f9804cda40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
        },
        {
          id: 3,
          name: "",
          url:
            "https://images.unsplash.com/photo-1546496189-53a557187ed3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
        },
        {
          id: 4,
          name: "",
          url:
            "https://images.unsplash.com/photo-1507643179773-3e975d7ac515?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
        },
        {
          id: 5,
          name: "",
          url:
            "https://images.unsplash.com/photo-1503418895522-46f9804cda40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
        },
        {
          id: 6,
          name: "",
          url:
            "https://images.unsplash.com/photo-1546496189-53a557187ed3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
        },
        {
          id: 7,
          name: "",
          url:
            "https://images.unsplash.com/photo-1507643179773-3e975d7ac515?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
        },
        {
          id: 8,
          name: "",
          url:
            "https://images.unsplash.com/photo-1503418895522-46f9804cda40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
        },
        {
          id: 9,
          name: "",
          url:
            "https://images.unsplash.com/photo-1546496189-53a557187ed3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.photo-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  .photo {
    height: 104.5px;
    width: 104.5px;
    border: 0.5px solid #ffffff;
    cursor: pointer;
    &.add {
      background-color: #111215;
      color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      i {
        margin-bottom: 8px;
      }
      span {
        font-size: 10px;
        font-weight: 900;
        letter-spacing: 0.5px;
        line-height: 14px;
        text-transform: uppercase;
      }
      .input {
        width: 100%;
        height: 100%;
        opacity: 0;
        overflow: hidden;
        position: absolute;
            cursor: pointer;
}
    }
    img {
      max-width: 100%;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>
