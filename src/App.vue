<template>
  <main>
    <Navigation/>
    <router-view class="content"/>
    <div>
    </div>
  </main>
</template>
<script>

import Navigation from "@/components/Navigation.vue";

export default {
  components: {Navigation},
}

</script>
<style>

.content {
  background: var(--gray-blue);
}

h1 {
  margin: 0;
}

main {
  display: flex;
  flex-direction: row;
}
</style>
