import TodoShow from "./TodoShow"

const TodoList = ({ todos, removeTodo, changeTodo }) => {
    const renderTodos = todos.map((todo) => {
        return <TodoShow key={todo.id} todos={todo} removeTodo={removeTodo} changeTodo={changeTodo} />
    });
    return <ul className="todo-list">{renderTodos}</ul>
};
export default TodoList;