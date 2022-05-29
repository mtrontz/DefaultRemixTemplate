import React, { 
    useState, useEffect, 
    useCallback, useMemo, 
    useRef, createContext, 
    useContext, useReducer
} from "react";
import type {} from "react";
import {} from "remix";
import type {} from "remix";

// https://javascript.plainenglish.io/react-context-simplified-86e1e8ce2d73
/**
 * Enabling React Context
 * To enable context in react application we need to follow these steps:
 * Creating Context
 * Using Reducer
 * Providing Context
 * Using Context
 * Creating Context
 * React.js provides createContext() hook. This hook receives an argument as initial state and returns a context. In our example we create a context and passing initial state containing an empty list of todos to it.
 */
interface ITodo {
    id: string;
    content: string;
    completed?: boolean
};

interface IState {
  todos: ITodo[]
};
interface IActions {
  type: keyof typeof ACTIONS;
  payload: any
};

let todos: ITodo[] = [];

const initialState = {todos};

 export const TodosContext = createContext(initialState);

 /**
  * Using Reducer
  * Reducer is a function receives two arguments state and 
  * action and returns a plain JavaScript object. 
  * Usually action has two variables type and payload.
  */

  const enum ACTIONS {
    FETCH_TODOS = "FETCH_TODOS",
    CREATE_TODO = "CREATE_TODO",
    SAVE_TODO = "SAVE_TODO"
};
function todosReducer(state: IState, action: IActions) {
   switch(action.type) {
      case "FETCH_TODOS":
         return {
            ...state,
            todos: action.payload,
         };
      case "CREATE_TODO":
         return {
            ...state,
            todos: [...state.todos, action.payload],
         };
      default:
         return state;
   }
}
/**
 * Later we use this reducer using useReducer hook. It returns tuple with two values:
 * State: it is the state of the application. It is required to pass to Provider.
 * Dispatch: it is required to dispatch reducer actions.
 */
 const [state, dispatch] = useReducer(todosReducer, initialState);

 /**
  * Providing Context
  * The context which has been created using createContext hook, in our example TodoContext comes with a context provider TodoContext.Provider.
  * We have to wrap the whole app with the provider. For that reason we create a component which returns TodoContext.Provider with children.
  * Create a react component (a JavaScript function) inside TodoContext.js file named TodoContextProvider.
  * Reducer actions are also defined inside TodoContextProvider component. They call dispatch method which comes from useReducer hook.
  */
// Create Provider
export function TodoContextProvider({ children }: { children: React.ReactNode }) {
    // Use reducer
    const [state, dispatch] = useReducer(todosReducer, initialState);
    
    // Define reducer actions
    function fetchTodos(todos: ITodo[]) {
      dispatch({
        type: "FETCH_TODOS",
        payload: todos,
      });
    }
    
    function saveTodo(todo: ITodo) {
      dispatch({
        type: "SAVE_TODO",
        payload: todo,
      });
    }
    return (
      <TodosContext.Provider value={{todos: state.todos}}>
      {children}
      </TodosContext.Provider>
    );
  }







