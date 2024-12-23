<script setup>
  // 子组件数据需要随时改变的时候,就可以使用父子组件传值
  // 子组件通过 defineProps()接收数据并使用
  // 父组件内,子组件的自定义标签上,通过自定义属性传递数据
  const props = defineProps(['imgUrl','title','price','idx'])
  // 拿到触发自定义事件的函数
  const emit = defineEmits()
  const onCut = () => {
    emit('ccc',props.idx,1)
  }
</script>

<template>
  <div class="list">
    <div class="item">
      <img :src="props.imgUrl"
          :alt = "props.title" />
      <p class="name">{{ props.title }}</p>
      <p class="price">
        <span>{{props.price}}.00</span>
        <button @click="onCut">砍一刀</button>
      </p>
    </div>
  </div>
</template>


<style scoped lang="scss">
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
      display: flex;
      height: 36px;
      font-size: 22px;
      color: firebrick;
      button{
        margin-left: 50px;
        font-size: 14px;
      }
    }

    .price::before{
      content: "$";
      font-size: 22px;
    }
  }
</style>