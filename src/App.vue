<template>
  <div class="list">
<!--    使用子组件-->
    <MyGoods v-for="(item, index) in goodsList"
             :key="item.id"
             :title="item.name"
             :img-url="item.picture"
             :price="item.price"
             :idx="index"
             @ccc="subPrice"
    />
  </div>

</template>

<script setup>
  // 导入组件
  import MyGoods from "@/components/MyGoods.vue";
  import {ref} from "vue";

  const subPrice = (index, price) => {
    goodsList.value[index].price -= price;
  }
  // 将父组件的值传递给子组件
  const goodsList = ref([
    {
      id:'1',
      name: '德国百年工艺高端水晶玻璃红酒杯2支装',
      price: 139,
      picture:'https://yanxuan-item.nosdn.127.net/8896b897b3ec6639bbd1134d66b9715c.jpg'
    },
    {
      id:'2',
      name: '竹制干泡茶盘正方形沥水茶台品茶盘',
      price: 135,
      picture: 'https://yanxuan-item.nosdn.127.net/2d942d6bc94f1e230763e1a5a3b379e1.png'
    },
    {
      id: '4001874',
      name: '古法温酒汝瓷酒具套装白酒杯莲花温酒器',
      price: 488,
      picture: 'https://yanxuan-item.nosdn.127.net/44e51622800e4fceb6bee8e616da85fd.png'
  },
  ])
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .list {
    width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
  }

</style>