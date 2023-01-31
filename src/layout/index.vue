<template>
  <div class="layout">
    <div>
      <Header></Header>
    </div>
    <div class="main_content">
      <div class="main_left"><Side /></div>
      <div class="main_right">
        <MainContent />
      </div>
    </div>
  </div>
</template>
<script setup name="layout">
import Header from './header/header.vue'
import MainContent from './main/index.vue'
import Side from './side/index.vue'
</script>
<style lang="scss">
.layout {
  height: 100vh;
  position: relative;
  overflow: hidden;
}
.main_content {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  // margin: 10px 0 0 0;
  height: 100%;
}
.main_left {
  width: 220px;
}
.main_right {
  flex: 1;
  // position: relative;
  // height: calc(100% - 90px);
  // width: 100%;
  background-color: #f2f2f2;
  overflow: hidden;
  overflow-y: auto;
  padding: 10px;
  margin: 10px;
  border-radius: 3px;
}
//  ::-webkit-scrollbar{
//    display: none;
//   }
</style>
