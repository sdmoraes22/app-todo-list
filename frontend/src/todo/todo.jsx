import React from 'react'

import PageHeader from '../template/pageheader'
import TodoForm from './todoform'
import TodoList from './todoList'

export default props => (
    <div>
        <PageHeader name='Tarefas' small='Cadastro' />
        <TodoForm  />
        <TodoList />
    </div>
)
