import { useState } from "react"
import TickIcon from './assets/check.svg';
const TodoEdit = ({ todos, onSubmit }) => {
    const [title, setTitle] = useState(todos.title);
    const handleChange = (e) => {
        setTitle(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(todos.id, title);
    }
    return (
        <form className="todo-edit">
            <input type="text" value={title} onChange={handleChange} />
            <button onClick={handleSubmit} type="submit">
                <img src={TickIcon} alt="save" title="save" />
            </button>
        </form>
    )
}
export default TodoEdit;