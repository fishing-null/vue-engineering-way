/** @format */

import { defineStore } from 'pinia'

import { ref, computed } from 'vue'

// 选中的类型
export const TODO_TYPE = {
    all: 'all', // 所有
    unfinished: 'unfinished', // 未完成
    finished: 'finished' // 已完成
}
// 定义并导出
export const useTodoStore = defineStore('todo', () => {
    // todos 数组
    const todos = ref([
        { id: 1, text: 'Buy milk', finished: false },
        { id: 2, text: 'Buy eggs', finished: true },
        { id: 3, text: 'Buy bread', finished: false }
    ])
    // 选择的类型
    const type = ref(TODO_TYPE.all)

    // 小选是否全部选中
    const isAll = computed(() => {
        return todos.value.every((item) => item.finished)
    })

    // 所有未完成的todos
    const unfinishedTodos = computed(() => {
        return todos.value.filter((item) => !item.finished)
    })
    // 计算需要展示的todos
    const showTodos = computed(() => {
        switch (type.value) {
            case TODO_TYPE.all:
                return todos.value
            case TODO_TYPE.unfinished:
                return todos.value.filter((item) => !item.finished)
            case TODO_TYPE.finished:
                return todos.value.filter((item) => item.finished)
        }
    })
    // 添加
    const addTodo = (text) => {
        todos.value.push({
            text,
            id: todos.value.length + 1,
            finished: false
        })
    }
    // 删除
    const delTodo = (i) => {
        if (window.confirm('确认删除么')) {
            todos.value.splice(i, 1)
        }
    }
    // 切换状态
    const toggleTodo = (flag) => {
        todos.value.forEach((item) => (item.finished = flag))
    }

    // 清除
    const clearTodo = () => {
        todos.value = todos.value.filter((item) => !item.finished)
    }
    // 设置选中类型
    const setType = (selectType) => {
        type.value = selectType
    }
    return {
        todos,
        type,
        isAll,
        unfinishedTodos,
        showTodos,
        addTodo,
        delTodo,
        toggleTodo,
        clearTodo,
        setType
    }
})
