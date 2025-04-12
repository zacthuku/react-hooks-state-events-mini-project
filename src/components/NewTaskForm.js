import React, {useState} from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[1]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { text, category };
    onTaskFormSubmit(newTask);
    setText(""); // clear form
    setCategory(categories[1]); // reset to default
  };
  return (
    <form className="new-task-form" onSubmit={handleSubmit} >
      <label>
        Details
        <input 
        type="text" 
        name="text"
        placeholder="New task details"
        value={text}
        onChange={(e) => setText(e.target.value)}
        
        />
      </label>
      <label>
        Category
        <select 
        name="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        
        >
          {categories
          .filter((cat) => cat !== "All")
          .map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
