import React from 'react';
import { connect } from "react-redux";
import { deleteTodo } from "./action/action";

function List(props) {
    return (
        <ul>
            {
                props.todos.map((todo , index) =>(
                    <li key = "index">{todo.message}
                    <button onClick = {()=>
                    props.dispatch(deleteTodo(id))}>Delete</button></li>
           ))
            }
        </ul>
    )
}
const mapStateToProps = (state) => {
    return {
        todos: state.todos.data,
    }
}

export default connect(mapStateToProps)(List);
