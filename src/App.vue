<template>
  <div class="list">
<!--    使用子组件-->
    <MyGoods :imgUrl="goodsList[0].picture"
             :title="goodsList[0].name"
             :price="goodsList[0].price" />
    <MyGoods/>
    <MyGoods :imgUrl="goodsList[1].picture"
             :title="goodsList[1].name"
             :price="goodsList[1].price" />
    <MyGoods/>
  </div>

</template>

<script setup>
  // 导入组件
  import MyGoods from "@/components/MyGoods.vue";
  // 将父组件的值传递给子组件

  const goodsObj = {
    name: '德国百年工艺高端水晶玻璃红酒杯2支装',
    price: 139,
    picture:'https://yanxuan-item.nosdn.127.net/8896b897b3ec6639bbd1134d66b9715c.jpg'
  }
  const goodOBj2 = {
    name: '竹制干泡茶盘正方形沥水茶台品茶盘',
    price: 135,
    picture: 'https://yanxuan-item.nosdn.127.net/2d942d6bc94f1e230763e1a5a3b379e1.png'
  }
  let goodsList = [goodsObj,goodOBj2]
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