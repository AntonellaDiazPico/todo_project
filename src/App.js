import './App.css';
import {API} from 'aws-amplify';
import * as queries from './graphql/queries';
import * as mutations from './graphql/mutations';

function App() {

  async function fetchTodos() {

    let response = await API.graphql({
      query: queries.listTodos
    })
    console.log(response);
  }
  
  async function createTodo() {
      let myTodo = {
        name: "Todo 4",
        description: "some description"
      };
      let response = await API.graphql({
        query: mutations.createTodo,
        variables: {
          input: myTodo
        }
      });

      console.log(response);
  }

  return (
    <div>
      <h1>
        Hello world
      </h1>
      <button onClick={fetchTodos}>List todos</button>
      <button onClick={createTodo}>Create todos</button>
    </div>
  );
}

export default App;
