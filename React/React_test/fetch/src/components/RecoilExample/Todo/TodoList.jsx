import React from 'react'
import TodoListCreator from './TodoListCreator';
import { useRecoilValue } from 'recoil';
import { todoListState, filteredTodoListState } from './TodoStore';
import TodoItem from './TodoItem';
import TodoListStats from './TodoListStats';
import TodoListFilters from './TodoListFilters';

export default function TodoList() {
  
  const todoList = useRecoilValue(filteredTodoListState)
  return (
    <div>
      <TodoListStats/>
      <TodoListFilters/>
      <TodoListCreator/>
      {todoList.map((item)=>(
        <TodoItem key={item.id} item={item}/>))}
    </div>
  )
}
