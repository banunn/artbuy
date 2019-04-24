<template>
  <ab-widget :title="'Video Link'">
    <template slot="body">
      <header class="link">
        <input type="text" v-model="link">
        <button class="btn">Save</button>
      </header>
      <div class="video">
        <video width="282" height="167" :poster="video.thumb" controls>
          <source :src="video.sources[0]" type="video/mp4">
          <!-- include fallback sources as needed <source src="movie.ogg" type="video/ogg"> -->
          Your browser does not support the video tag.
        </video>
        <div class="video-detail">
          <h4>{{video.title}}</h4>
          <span>{{video.subtitle}}</span>
        </div>
      </div>
    </template>
  </ab-widget>
</template>

<script>
export default {
  name: "video-link-widget",
  data() {
    return {
      link: "https://bit.ly/2FRlfkd",
      video: {
        description:
          "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        sources: [
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        ],
        subtitle: "Uploaded on February 1, 2019",
        thumb:
          "https://images.unsplash.com/photo-1551076192-487813ceb8dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=450&q=80",
        title: "Ellie Figueroa 2019 Art Reel"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.link {
  display: flex;
  height: 40px;
  input {
    border: 1px solid #000;
    border-right: none;
    flex: 1;
    padding: 0 12px;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.1px;
    line-height: 20px;
    color: rgba(#000, 0.8);
  }
  .btn {
    background-color: #111215;
    border: none;
    color: #fff;
    border-radius: 0 2px 2px 0;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 1.2px;
    line-height: 16px;
    padding: 0 20px;
  }
}
.video {
  overflow: hidden;
  margin-top: 16px;
}
video {
  object-fit: cover;
  width: 100%;
  max-width: 100%;
}

.video-detail {
  padding: 8px 12px;
  background-color: #fafafa;
  border-right: 1px solid rgba(#000, 0.1);
  border-bottom: 1px solid rgba(#000, 0.1);
  border-left: 1px solid rgba(#000, 0.1);
  margin-bottom: 0;
  h4 {
    margin: 0;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 4px;
  }
  span {
    font-size: 12px;
    color: rgba(#000, 0.4);
    font-weight: 600;
  }
}
</style>
