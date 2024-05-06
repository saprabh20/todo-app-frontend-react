import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

const App = () => {
    let [todos, setTodos] = useState([]);
    let [foundTodos, setFoundTodos] = useState([]);
    let [searching, setSearching] = useState(false);

    function deleteTodo(id) {
        const selectedTodo = todos.find((td) => td.id === id);
        if (!selectedTodo.completed) {
            if (
                window.confirm(
                    "The task is not completed yet. Are you sure you want to delete the task?"
                )
            ) {
                setTodos((prevTodos) => prevTodos.filter((td) => td.id !== id));
            }
        } else {
            setTodos((prevTodos) => prevTodos.filter((td) => td.id !== id));
        }
    }

    function searchTodo(searchTerm){
        let TodosResult = todos.filter(
            (todo) => todo.title.toLowerCase().startsWith(searchTerm.toLowerCase())
        );
        if(searchTerm !== ''){
            setSearching(true);
            setFoundTodos(TodosResult);
        }else{
            setSearching(false);
        }
    }

    return (
        <div className="container">
            <div className="header flex-center">
                <Header />
            </div>
            <div className="cont flex-center">
                <div className="addTodo flex-center">
                    <AddTodo todos={todos} setTodos={setTodos} />
                </div>
                <div className="todos flex">
                    {searching ? (
                        <Todos todos={foundTodos} deleteTodo={deleteTodo} />
                    ) : (
                        <Todos todos={todos} deleteTodo={deleteTodo} />
                    )}
                </div>
            </div>
            <div className="footer flex-center">
                <Footer todos={todos} searchTodo={searchTodo}/>
            </div>
        </div>
    );
};

export default App;
