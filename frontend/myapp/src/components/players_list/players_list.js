import ReactTable from "react-table";  
import axios from 'axios';
import { useEffect, useState } from 'react'; 
import './players_list_record.css'
import Player_list_table from './player_list_table'

export default function Players_list() {
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
      .then(res => setDataTable(res.data))
      .catch(err => console.log(err))
  }, []);

  const column = [
    { heading: 'Name', value: 'name' },
    { heading: 'Email', value: 'email' },
    { heading: 'Phone', value: 'phone' },
    { heading: 'City', value: 'address.city' },
  ]

  return (
    <div className="App">
      <h1>Players List</h1>
      <Player_list_table data={dataTable} column={column} />
    </div>
  );
}
