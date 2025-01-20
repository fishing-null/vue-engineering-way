<template>
  <MyTable :data="tableData1">
    <template #default="{ i }">
      <button @click="findRow(i)">查看</button>
    </template>
  </MyTable>
  <MyTable :data="tableData2">
<!--    解构-->
    <template #default="{ i }">
      <button @click="deleteRow(i)">删除</button>
    </template>
  </MyTable>
</template>

<script setup>
import MyTable from "@/component/MyTable.vue";
import {ref} from "vue"
const tableData1 = ref([
  { id: 11, name: '狗蛋', age: 18 },
  { id: 22, name: '大锤', age: 19 },
  { id: 33, name: '铁棍', age: 17 }
])

const tableData2 = ref([
  { id: 21, name: 'Jack', age: 18 },
  { id: 32, name: 'Rose', age: 19 },
  { id: 43, name: 'Henry', age: 17 }
])

const deleteRow = (i) => {
  // 移除数组中的元素
  if(window.confirm("点击删除元素")){
    //从当前位置删除一个元素
    tableData2.value.splice(i, 1);
  }
}

const findRow = (i) => {
  alert(JSON.stringify(tableData2.value[i]));
}
</script>

<style lang="scss" scoped>

</style>