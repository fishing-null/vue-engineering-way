<script setup>
  const props = defineProps({
    width:{
      // 对参数类型约束
      type: Number,
      // 设置缺省值
      default: 50,
      // 当前参数是否必传
      required: false,
      // 自定义参数效验规则,通过校验规则返回true,未通过参数校验规则返回false
      validator: (value) => {
        // value是实际传递给props的数据
        if (value > 100 || value <= 0) {
          console.log("illegal value");
          return false;
        }
        return true;
      }
    }
  })
</script>

<template>
  <div class="my-progress">
    <div
        class="inner"
        :style="{ width: width + '%' }"
    >
      <span> {{props.width}}%</span>
    </div>
  </div>
</template>

<style scoped>
  .my-progress {
    height: 26px;
    width: 400px;
    border-radius: 15px;
    background-color: #272425;
    border: 3px solid #272425;
    box-sizing: border-box;
    margin-bottom: 30px;
  }
  .inner {
    position: relative;
    background: #379bff;
    border-radius: 15px;
    height: 25px;
    box-sizing: border-box;
    left: -3px;
    top: -2px;
  }
  .inner span {
    position: absolute;
    right: -30px;
    top: 26px;
  }
</style>