import React from "react";
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';

function TodoSearch() {
    const { searchValue, setSerchValue } = React.useContext(TodoContext);

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSerchValue(event.target.value);
    }

    return (
        <input
            className="TodoSearch"
            placeholder="Introduzca la tarea"
            value={searchValue}
            onChange={onSearchValueChange}
        />
    );
}

export { TodoSearch }