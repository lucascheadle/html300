<template>
  <div class="about">
    <h2>About</h2>
    <div class="container my-container px-5">
      <div class="row my-row">
          <div class="col-lg-6 col-sm-12 my-col list-group p-2">
              <h2 class="">Press Links</h2>
                <a v-bind:href="link1" class="list-group-item list-group-item-action" target="">Fine Gardening</a>
                <a v-bind:href="link2" class="list-group-item list-group-item-action" target="">Seattle Times</a>
                <a v-bind:href="link3" class="list-group-item list-group-item-action" target="">Tanya's Garden Blog</a>
                <a v-bind:href="link4" class="list-group-item list-group-item-action" target="">The Outlaw Gardner</a>
                <a v-bind:href="link5" class="list-group-item list-group-item-action" target="">Association of Professional Landscape Designers</a>
          </div>
          <div class="col-lg-6 col-sm-12 my-col p-2">
              <h2 class="">Testimonials</h2>
                <p>{{ test1 }}</p>
                <p>{{ test2 }}</p>
          </div>
      </div>
      <div class="row my-row">
          <div class="col my-col pt-4">
              <h2 class="">Credentials</h2>
                <p>{{ uw }}</p>
                <p>{{ ecc }}</p>
                <p>{{ apld }}</p>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        link1: "https://www.finegardening.com/article/beauty-in-the-shade",
        link2: "https://www.seattletimes.com/pacific-nw-magazine/bainbridge-is-in-full-bloom-for-annual-garden-tour/",
        link3: "http://tanyasgarden.blogspot.com/2015/09/debra-and-ralphs-garden-on-bainbridge.html",
        link4: "http://outlawgarden.blogspot.com/2015/09/the-garden-of-deborah-and-ralph-cheadle.html",
        link5: "https://www.apldwa.org/featured-designer-deborah-cheadle",
        test1: "Clarity out of mud - that’s what you brought me! Plus inspiration and some original thinking.  What a gift!  Thank you over and over.  - Consulting Job",
        test2: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt quam eius nisi odit quidem cum quod voluptatum eos iure, enim harum quibusdam dicta aut placeat rerum esse debitis asperiores magnam.",
        uw: "UW - Bachelor of Arts Degree",
        ecc: "Edmonds Community College - Landscape Design Certificate",
        apld: "Member - Association of Professional Landscape Designers Washington Chapter"
      }
    }
  }
</script>

<style scoped>

</style>