<script>
export default {
  name: "LifeCycle",
  setup() {
    console.log("LifeCycle setup");
  },
  //创建阶段钩子
  beforeCreate() {
    console.log("LifeCycle beforeCreate")
    //访问不到
    console.log(this.count)
    console.log(this.fn)
  },
  created() {
    console.log("LifeCycle created")
    //能够正常访问到
    console.log(this.count)
    console.log(this.fn)
    //创建定时器
    this.timerId = setInterval(()=>{console.log(this.count)},1000)
  },
  //挂载阶段钩子
  beforeMount() {
    //挂载前钩子,此时template下的标签还没有变成真实DOM，无法获取到
    console.log("LifeCycle beforeMount")
    console.log(document.querySelector('p'))
  },
  mounted() {
    //挂载后钩子,此时template下的标签已经变成真实DOM，无法获取到
    console.log("LifeCycle mounted")
    console.log(document.querySelector('p'))
    document.querySelector('p').style.color = 'red'
  },
  //3.更新阶段，数据发生变化，重新渲染DOM元素
  beforeUpdate() {
    //获取重新渲染前的DOM元素内容
    console.log("LifeCycle updated")
    console.log(document.querySelector('p').innerText)
  },
  updated() {
    //获取重新渲染后的DOM元素内容
    console.log("LifeCycle updated")
    console.log(document.querySelector('p').innerText)
  },
  //4.卸载阶段
  beforeUnmount() {
    console.log("LifeCycle beforeUnmount")
  },
  unmounted() {
    console.log("LifeCycle unmounted")
    //关闭定时器
    clearInterval(this.timerId)
  },
  data(){
    return {
      count:0
    }
  },
  methods: {
    fn(){
      console.log("LifeCycle invoke fn")
    }
  }
}
</script>

<template>
  <div>
    <p>{{count}}</p>
    <button @click="count++">+1</button>
  </div>
</template>

<style scoped lang="scss">

</style>