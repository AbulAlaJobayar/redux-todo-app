import { PayloadAction, createSlice } from '@reduxjs/toolkit'
//import type { PayloadAction } from '@reduxjs/toolkit'
export type TTodo = {
  id: string
  title: string,
  description: string,
  time: Date
  isCompleted?: boolean

}
type CounterState = {
  todo: TTodo[]
}

const initialState: CounterState = {
  todo: [],
}
export const counterSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todo.push({ ...action.payload, isCompleted: false })
    },
    deletedTodo: (state, action) => {
      state.todo = state.todo.filter((item) => item.id !== action.payload)
    },
    todoCompleted:(state,action)=>{
      const task=state.todo.find((item)=>item.id=== action.payload)
   task!.isCompleted=!task?.isCompleted
    }
  }
})

// Action creators are generated for each case reducer function
export const { addTodo ,deletedTodo,todoCompleted} = counterSlice.actions

export default counterSlice.reducer