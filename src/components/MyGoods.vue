<script setup>
  // 子组件数据需要随时改变的时候,就可以使用父子组件传值
  // 子组件通过 defineProps()接收数据并使用
  // 父组件内,子组件的自定义标签上,通过自定义属性传递数据
  defineProps(['imgUrl','title','price'])
</script>

<template>
  <div class="list">
    <div class="item">
      <img :src="imgUrl"
          :alt = "title" />
      <p class="name">{{ title }}</p>
      <p class="price">{{ price }}</p>
    </div>
  </div>
</template>


<style scoped lang="scss">

  .item{
    width: 240px;
    margin-left: 10px;
    padding: 20px 30px;
    transition: all 0.5s;
    margin-bottom: 20px;
    .item:nth-child(4n){
      margin-right: 0;
    }
    &:hover{
      box-shadow: 0px 0px 5px rgba(0,0,0,0.2);
      transform: translate3d(0, -4px, 0);
      cursor: pointer;
    }

    img {
      width: 100%;
    }

    .name {
      font-size: 18px;
      margin-bottom: 10px;
      color: #666;
    }

    .price {
      font-size: 22px;
      color: firebrick;
    }

  }
</style>