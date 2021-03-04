import { AddTodo } from "./components/AddTodo";
import './App.css';
import { List } from "./components/List";

function App() {
  return (
    <div className="App">
     <AddTodo />
     <List />
    </div>
  );
}

export default App;
