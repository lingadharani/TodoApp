import { useState } from "react"

const TodoCreate = ({ createTodo }) => {
    const [title, setTitle] = useState('');
    const handleChange = (e) => {
        setTitle(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        createTodo(title);
        setTitle('');
    }
    return (
        <form className="todo-create" onSubmit={handleSubmit}>
            <input type="text" name="title" id="title" placeholder="Enter a todo here...." onChange={handleChange} value={title} />
        </form>
    )
}
export default TodoCreate;