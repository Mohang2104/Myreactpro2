/* global React, ReactDOM */

/* --------- Main component --------- */
function App() {
  const [task, setTask]           = React.useState('');
  const [todos, setTodos]         = React.useState([]);
  const [currentTime, setNow]     = React.useState(new Date());

  /* Clock ticker */
  React.useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  /* Add a new task */
  const addTask = () => {
    if (task.trim() === '') return;

    const newTask = {
      id:   Date.now(),
      text: task,
      date: currentTime.toLocaleDateString(),
      time: currentTime.toLocaleTimeString(),
    };

    setTodos([newTask, ...todos]);
    setTask('');
  };

  /* Delete a task */
  const deleteTask = (id) => setTodos(todos.filter((t) => t.id !== id));

  return (
    <div className="app">
      <h1>📝 Day-To-Day Planning Project</h1>

      <p className="intro">
        You should complete all the work today. ALL THE BEST BUDDY! <br />
        <strong>Today:</strong> {currentTime.toLocaleDateString()} |{' '}
        <strong>Time:</strong> {currentTime.toLocaleTimeString()}
      </p>

      {/* Input */}
      <div className="input-area">
        <input
          type="text"
          placeholder="Type your task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
        />
        <button onClick={addTask}>➕ Add</button>
      </div>

      {/* Todo list */}
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <div>
              <h3>{todo.text}</h3>
              <p>🗓 {todo.date} &nbsp; ⏰ {todo.time}</p>
            </div>
            <button className="del-btn" onClick={() => deleteTask(todo.id)}>🗑</button>
          </li>
        ))}

        {todos.length === 0 && (
          <p className="empty">No tasks yet. Add one above!</p>
        )}
      </ul>
    </div>
  );
}

/* --------- Mount to the page --------- */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
