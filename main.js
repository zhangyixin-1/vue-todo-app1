const { createApp, ref, computed } = Vue

createApp({
    setup() {
        const todos = ref([])
        const newTodo = ref('')
        
        const addTodo = () => {
            if (newTodo.value.trim() === '') return
            todos.value.push({
                id: Date.now(),
                text: newTodo.value,
                completed: false
            })
            newTodo.value = ''
        }
        
        const deleteTodo = (id) => {
            const index = todos.value.findIndex(todo => todo.id === id)
            if (index !== -1) {
                todos.value.splice(index, 1)
            }
        }
        
        const completedCount = computed(() => {
            return todos.value.filter(todo => todo.completed).length
        })
        
        const pendingCount = computed(() => {
            return todos.value.filter(todo => !todo.completed).length
        })
        
        return {
            todos,
            newTodo,
            addTodo,
            deleteTodo,
            completedCount,
            pendingCount
        }
    }
}).mount('#app')
