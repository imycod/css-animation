import { defineComponent, reactive, ref } from "vue"

export const test1 = defineComponent({
    setup() {
        const count = ref(1)
        function add() {
            count.value += 1
        }
        return () => (
            <div>
                jsx test1 : {count.value}
                <button onClick={add}>add +1</button>
            </div>
        )
    }
})
export const test2 = defineComponent({
    data() {
        return {
            msg: 'hello world!'
        }
    },
    render() {
        return (
            <div>
                {this.msg}
            </div>
        )
    }
})

export const test3 = defineComponent({
    setup() {
        const input = ref('11')
        let todos = reactive([])
        let id = 0
        function add() {
            todos.push({ id: id++, content: input.value })
            input.value = ''
        }
        function remove(id) {
            const index = todos.findIndex(todo => todo.id === id)
            todos.splice(index, 1)
        }
        return () => (
            <div>
                <input type="text" v-model={input.value} />
                <button onClick={add}>add</button>
                <ul>
                    {todos.map(todo => {
                        return (
                            <>
                                <li key={todo.id}>{todo.id} / {todo.content}</li>
                                <button onClick={() => remove(todo.id)}>remove</button>
                            </>
                        )
                    })}
                </ul>
            </div>
        )
    }
})