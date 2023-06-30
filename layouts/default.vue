<template>
  <div>
    <Header :top-url="topUrl" />
    <a class="download-blind" style="display: none"
      ><img
        src="https://images.squarespace-cdn.com/content/v1/55a8d6f7e4b054bcba8dfc63/1553722639427-F85K3SJ5IPAWILG60L7D/test.png?format=750w"
      />
      <i class="blind">대한민국 직장인 생활백서 블라인드 다운로드</i>
    </a>
    <div>
      <nuxt/>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/pages/footer.vue";
import data from "~/api/data.json";

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
       topUrl: ""
    };
  },
  mounted() {
    this.topUrl = data.link.url;
  },
}
</script>
<style>
</style>

