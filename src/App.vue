<template>
<!--
el-table 表格组件
      data是一个对象数组，:data绑定数据源
      stripe属性，为表格带上斑马纹
-->

  <el-table :data="tableData" style="width: 100%" stripe>
<!--    一个el-table-column就是一列-->
  <!--    prop对应属性名
          label是列名
  -->
    <el-table-column label="日期" width="180">
      <template #default="{row}">
        <el-icon>
          <Timer/>
        </el-icon>
        <span>{{row.date}}</span>
      </template>
    </el-table-column>
<!--    自定义列模版-->
    <el-table-column label="名称" width="180">
  <!--      通过插槽传入模版-->
    <!--      通过作用域插槽结构出row（每一行的数据对象）-->
      <template #default="{row}">
        <el-tag type="success">{{row.name}}</el-tag>
      </template>
    </el-table-column>
    <el-table-column prop="address" label="地址" />
    <el-table-column label="操作">
      <template #default="{row}">
        <el-icon :size="14">
          <Delete/>
        </el-icon>
        <el-icon>
          <Edit/>
        </el-icon>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
// 数据源 一般发请求从后端拿到
import {Delete, Edit, Timer} from "@element-plus/icons-vue";

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Sakura',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>