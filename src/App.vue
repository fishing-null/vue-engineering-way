<template>
<!--  点击后，将对话框可见-->
  <el-button plain @click="dialogVisible = true">
    Click to open the Dialog
  </el-button>

<!--  v-model 绑定一个响应式数据控制对话框组件是否可见-->
<!--  title:弹出对话框的标题-->
<!--  before-close:对话框关闭前的回调函数-->
  <el-dialog
      v-model="dialogVisible"
      title="Tips"
      width="500"
      :before-close="handleClose"
  >
<!--    主体内容，在默认插槽中-->
    <template #default>
      <span>This is a message</span>
    </template>
<!--    footer，自定义底部操作内容-->
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script  setup>
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'

const dialogVisible = ref(false)

const handleClose = (done) => {
  ElMessageBox.confirm('Are you sure to close this dialog?')
      .then(() => {
        done()
      })
      .catch(() => {
        // catch error
      })
}
</script>
