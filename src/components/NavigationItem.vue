<template>
  <router-link :to="{name: name}" class="nav__link">
    <div class="nav__svg">
      <img :src="`/icons/${icon}.svg`" :alt="icon" class="nav__svg-icon">
    </div>
    {{ title }}
  </router-link>
</template>

<script>
export default {
  name: "NavigationItem",
  props: ['title', 'name', 'icon'],
  data() {
    return {}
  }
}
</script>

<style scoped>

.nav__svg {
  width: 40px;
  height: 40px;
}

.nav__svg-icon {
  width: 24px;
  height: 24px;
  padding: 8px 16px 8px 0;
}

.nav__link:first-of-type {
  margin-top: 31px;
}

.nav__link {
  height: 40px;
  padding-left: 36px;
  text-decoration: none;
  color: var(--black);
  text-align: left;
  display: flex;
  align-items: center;
}

.router-link-exact-active .nav__svg-icon {
  filter: invert(60%) sepia(87%) saturate(4578%) hue-rotate(347deg) brightness(101%) contrast(102%);
}

.router-link-exact-active {
  color: var(--orange-light);
  padding-left: 32px;
  border-left: var(--orange) solid 4px;
  background: var(--gray-blue);
}

.nav__link:hover {
  background: var(--gray-blue);
}
</style>