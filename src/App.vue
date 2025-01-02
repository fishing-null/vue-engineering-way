<template>
  <FancyButton>
<!--    父组件在这里提供 slot content-->
    Click me!
<!--    插槽的内容可以是普通的文本，也可以是html模版内容，甚至可以是组件-->
    <button>click</button>
<!--    插槽的内容会在子组件的出口处被渲染出来-->

<!--    因为插槽是在父组件中,所以可以访问到父组件的数据作用域-->
    <p>{{data}}</p>
  </FancyButton>

  <BaseLayout>
<!--    #是指令v-slot的缩写-->
<!--    通过使用含有v-slot的template元素来将插槽名传递给该指令-->
    <template #header>
      <h1>title
      </h1>
    </template>

    <template #default>
      <p>main content</p>
    </template>

    <template #footer>
      <p>here's some contact info</p>
    </template>
  </BaseLayout>


<!--  这个组件的插槽中没有任何内容，所以会显示插槽出口处的默认内容-->
  <FancyButton/>
</template>

<script setup>

import FancyButton from "@/components/FancyButton.vue";
import {ref} from "vue";
import BaseLayout from "@/components/BaseLayout.vue";

const data = ref('from parent');
</script>

<style lang="scss" scoped>
</style>