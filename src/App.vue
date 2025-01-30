<template>
<!--  el-form最外层的表单组件
        model 中绑定表单的数据源
        label-width 表单域标签的宽度
        style 行内样式
  -->
  <el-form :model="form" label-width="auto" style="max-width: 600px">
<!--    el-form-item 用来包裹一个单独的表单控件（输入框、下拉列表、复选框、单选框）
          label 当前表单控件的名称
  -->
    <el-form-item label="Activity name">
<!--      双向绑定，收集输入框的值到表单，实现双向数据绑定-->
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Activity zone">
<!--      el-select + el-option  封装下拉列表组件-->
      <el-select v-model="form.region" placeholder="please select your zone">
<!--        具体的选项、
              label 用户看到的
              value 为v-model提供的值
  -->
        <el-option label="Zone one" value="shanghai" />
        <el-option label="Zone two" value="beijing" />
      </el-select>
    </el-form-item>
    <el-form-item label="Activity time">
<!--      el-col 列组件，一行分成24列
          span 占多少份
  -->
      <el-col :span="11">
<!--        日期选择器
              type:选择器的类型 date表示可以选择日期
  -->
        <el-date-picker
            v-model="form.date1"
            type="date"
            placeholder="Pick a date"
            style="width: 100%"
        />
      </el-col>
      <el-col :span="2" class="text-center">
        <span class="text-gray-500">-</span>
      </el-col>
      <el-col :span="11">
        <el-time-picker
            v-model="form.date2"
            placeholder="Pick a time"
            style="width: 100%"
        />
      </el-col>
    </el-form-item>
    <el-form-item label="Instant delivery">
      <el-switch v-model="form.delivery" />
    </el-form-item>
    <el-form-item label="Activity type">
<!--      el-checkbox-group 分组来管理多个复选框-->
      <el-checkbox-group v-model="form.type">
<!--        el-checkbox是一个单独的多选框
              value:提供给v-model收集使用
              name:多选框的名字
    -->
        <el-checkbox value="Online activities" name="type">
<!--          默认插槽-->
          Online activities
        </el-checkbox>
        <el-checkbox value="Promotion activities" name="type">
          Promotion activities
        </el-checkbox>
        <el-checkbox value="Offline activities" name="type">
          Offline activities
        </el-checkbox>
        <el-checkbox value="Simple brand exposure" name="type">
          Simple brand exposure
        </el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="Resources">
<!--      el-radio-group用来管理一组单选框-->
      <el-radio-group v-model="form.resource">
<!--        value会被赋值给form.resource-->
        <el-radio value="Sponsor">Sponsor</el-radio>
        <el-radio value="Venue">Venue</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="Activity form">
      <el-input v-model="form.desc" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Create</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const onSubmit = () => {
  console.log('submit!')
}
</script>