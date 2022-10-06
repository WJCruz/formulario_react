import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList} from '../TodoList';
import { TodoItem} from '../TodoItem'
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoForm } from "../TodoForm";

function AppUI() {
    const value = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {value.error && <p>Hubo un error...</p>}
                {value.loading && <p>Estamos cargando, no desesperes...</p>}
                {(!value.loading && !value.searchedTodos.length) && <p>Crea tu primer TODO!</p>}

                {value.searchedTodos.map((todo) => (
                <TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => value.completeTodo(todo.text)}
                    onDelete={() => value.deleteTodo(todo.text)}
                />
                ))}
            </TodoList>

            {value.openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}

            <CreateTodoButton
                setOpenModal = {value.setOpenModal}
            />

        </React.Fragment>
    );
}

export {AppUI}