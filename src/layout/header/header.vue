<template>
  <div class="header">
    <div class="header_left">后台管理系统</div>
    <div class="header_right">退出</div>
  </div>
</template>
<style lang="scss">
  .header{
    padding: 5px 10px;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: var(--theme-color);
    align-items: center;
    .header_left{
      display: inline-block;
    margin: 0;
    color: #fff;
    font-weight: 400;
    line-height: 50px;
    font-size: 28px;
    font-family: alihan;
    vertical-align: middle;
    }
    .header_right{
      color: #fff;
      font-size: 18px;
    }
  }
</style>