import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { useState } from 'react';


let userData;

function App() {
  const [data,setdata] = useState([]); 
  const [query,setquery] = useState("");

  axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then(data => setdata(data.data))
  .catch(error => console.log(error));

  let temp = data.filter((user)=>user.id.toString().includes(query)||user.name.toLowerCase().includes(query)||user.username.toLowerCase().includes(query)||user.email.toLowerCase().includes(query));

  return (
    <div className="App">
      <input type='text' placeholder='search...' className='search' onChange={(e) => setquery(e.target.value)}/>
      <div style={{overflowX: 'auto'}}>
            <table>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>email</th>
                </tr>
                {temp.map((val, key) => {
                    return (
                      <tr key={key}>
                          <td>{val.id}</td>
                          <td>{val.name}</td>
                          <td>{val.username}</td>
                          <td>{val.email}</td>
                      </tr>
                  )
              })} 
            </table>  
      </div>    
    </div>
  );
}


export default App;
