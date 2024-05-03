import Todo from "./Todo";

const Todos = ({ todos, deleteTodo }) => {
    return (
        <>
            {todos.map((todo) => {
                return (
                    <div
                        key={todo.id}
                    >
                        <Todo todo={todo} deleteTodo={deleteTodo}/>
                    </div>
                );
            })}
        </>
    );
};

export default Todos;
