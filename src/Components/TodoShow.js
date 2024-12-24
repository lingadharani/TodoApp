import { useState } from "react"
import TodoEdit from './TodoEdit';
import DeleteIcon from './assets/delete.svg';
import EditIcon from './assets/edit.svg';
const TodoShow = ({ todos, removeTodo, changeTodo }) => {
    const [showEdit, setShowEdit] = useState(false);
    const handleDelete = () => {
        removeTodo(todos.id);
    }
    const handleEdit = () => {
        setShowEdit(true);
    }
    const handleDoubleClick = () => {
        changeTodo(todos.id, todos.title, !todos.completed);
    }
    const handleSubmit = (id, title) => {
        changeTodo(id, title);
        setShowEdit(false);
    }
    if (showEdit) {
        return (
            <li className="todo">
                <TodoEdit todos={todos} onSubmit={handleSubmit} />
            </li>
        )
    }
    return (
        <li className="todo" onDoubleClick={handleDoubleClick}>
            <p className={todos.completed ? 'completed' : ''}>{todos.title}</p>
            <div className="actions">
                <button onClick={handleDelete}>
                    <img src={DeleteIcon} alt="delete" title="delete" />
                </button>
                <button onClick={handleEdit}>
                    <img src={EditIcon} alt="edit" title="edit" />
                </button>
            </div>
        </li>
    )
}
export default TodoShow;