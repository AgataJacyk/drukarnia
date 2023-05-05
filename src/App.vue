<!-- Tu nic nie dodajemy  -->
<template>
  <Header />
    <RouterView />
    <Footer />
</template>

<script>
import Header from './layout/HeaderLayout.vue';
import Footer from './layout/FooterLayout.vue';

export default {
  components: { 
    Header,
    Footer,
  }
}
</script>


