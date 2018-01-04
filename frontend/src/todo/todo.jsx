import React from 'react';
import PageHeader from '../template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: "",
            list: []
        }

        //Funcao para o this ser de quem chamou a funcao
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(e) {
        this.setState({...this.state, description: e.target.value});
    }

    handleAdd() {
        console.log("Enviar para o DB: " + this.state.description);
    }

    render() {
        return(
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
                <TodoForm 
                handleAdd={this.handleAdd}
                handleChange={this.handleChange}
                description={this.state.description}
                ></TodoForm>
                <TodoList></TodoList>
            </div>
        );
    }
}

export default Todo;