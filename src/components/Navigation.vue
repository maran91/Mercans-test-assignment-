<template>
  <div class="menu">
    <div class="menu__title-box">
      <p class="menu__title">Employee
        self service</p>
    </div>
    <div class="menu-btn">
      <div class="menu-btn__svg-box">
        <img src="/icons/chevron.svg" alt="chevron" class="nav__svg-icon">
      </div>
    </div>
    <div>
      <NavigationItem icon="quick_access" name="quick_access" title="Quick access"/>
      <NavigationItem icon="my_information" name="my_information" title="My Information"/>
      <NavigationItem icon="payslips" name="payslips" title="My Payslips"/>
      <NavigationItem icon="time_entry" name="time_entry" title="Time Entry"/>
      <NavigationItem icon="leaves" name="leaves" title="Leave"/>
      <NavigationItem icon="benefits" name="expense" title="Benefits"/>
      <NavigationItem icon="organizational_chart" name="organizational_chart" title="Organizational chart"/>
      <NavigationItem icon="my_team" name="my_team" title="My Team"/>

      <p class="menu-copyright">Mercans © 2021</p>
    </div>
  </div>
</template>

<script>
import NavigationItem from "@/components/NavigationItem.vue";

export default {
  components: {
    NavigationItem
  },
  name: "Navigation"
}
</script>

<style scoped>

.menu {
  width: 227px;
  height: 100vh;
  background: var(--white);
  border-right: 1px solid var(--grey);
  min-height: 439px;
}

.menu-btn__svg-box {
  width: 20px;
  height: 20px;
  background: var(--white);
  -webkit-transition: width .3s;
  position: absolute;
  box-shadow: 0 2px 4px var(--grey-light);
  top: 10px;
  right: 10px;
  border-radius: 100px;
}

.menu-btn:hover > .menu-btn__svg-box {
  width: 23px;
  background: var(--black);
}

.nav__svg-icon {
  position: absolute;
  width: 5px;
  height: 8px;
  top: 6px;
  right: 7px;
  -webkit-transition: right .3s;
}

.menu-btn:hover .nav__svg-icon {
  right: 15px;
  filter: invert(60%) sepia(87%) saturate(4578%) hue-rotate(347deg) brightness(101%) contrast(102%);
}

.menu-btn {
  top: 60px;
  left: 208px;
  width: 39px;
  height: 39px;
  position: absolute;
  border: 1px solid var(--gray-blue);
  display: block;
  border-radius: 50%;
  background: var(--gray-blue);
}

.menu__title {
  height: 34px;
  padding: 18px 123px 20px 36px;
  font-weight: bold;
  color: var(--white);
  text-align: left;
  margin: 0;
}

.menu__title-box {
  background: var(--black);
  height: 72px;
  width: 228px;
}

.menu-copyright {
  width: 80px;
  height: 17px;
  color: var(--grey-dark);
  text-align: left;
  font-size: 12px;
  position: absolute;
  left: 75px;
  right: 74px;
  bottom: 22px;
  margin: 0;
}
</style>