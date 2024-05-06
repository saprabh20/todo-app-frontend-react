import { useRef } from "react";
import Todo from "./Todo";

const Todos = ({ todos, deleteTodo }) => {
    
    const myRef = useRef(null);
    const executeScroll = () => myRef.current.scrollIntoView();
    return (
        <>
            {todos.map((todo) => {
                return (
                    <div key={todo.id}>
                        <Todo todo={todo} deleteTodo={deleteTodo} executeScroll={executeScroll}/>
                    </div>
                );
            })}
            <div ref={myRef}></div>
        </>
    );
};

export default Todos;
