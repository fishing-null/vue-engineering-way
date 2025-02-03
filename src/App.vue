<template>
<!--  el-menu菜单组件
        active-text-color:菜单高亮时的字体颜色
        background-color:菜单背景色
        default-active:默认高亮的菜单
        text-color:文字的默认颜色
-->
  <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
  >
<!--    el-sub-menu:当前菜单下嵌套子菜单-->
    <el-sub-menu index="1">
<!--      通过title具名插槽自定义当前一级菜单的名称-->
      <template #title>
        <el-icon><location /></el-icon>
        <span>导航栏</span>
      </template>
      <el-menu-item-group title="Group One">
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
<!--   el-sub-menu里嵌套另外一个el-sub-menu   继续嵌套二级菜单-->
      <el-sub-menu index="1-4">
        <template #title>item four</template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
<!--    el-menu-item:子菜单-->
    <el-menu-item index="2">
<!--      向默认插槽中传入字体图标 菜单名称-->
      <el-icon><icon-menu /></el-icon>
      <span>用户管理</span>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon><document /></el-icon>
      <span>权限管理</span>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <span>角色管理</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>


<style lang="scss" scoped>
  .el-menu {
    width: 350px;
  }
</style>