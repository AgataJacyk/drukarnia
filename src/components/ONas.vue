<template>
  <div>
    <h1>O Nas</h1>
    <o-firmie />
    <artysci />
  </div>
</template>

<script>
import OFirmie from "./components/OFirmie.vue";
import Artysci from "./components/Artysci.vue";

export default {
  name: "ONas",
  components: {
    OFirmie,
    Artysci,
  },
};
</script>
