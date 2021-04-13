import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
const App = () => {
  const [data, setData] = useState([])
  const [defaultData, setDefaultData] = useState([])
  
  useEffect(() => fetch(),[])

  const fetch = async () => {
    const { config, data, headers, request, status } = await axios.get("https://api.publicapis.org/categories")
    setData(data)
    
    setDefaultData(data)
  }
 
  const onFilterData = (e) => {  
    if(e.target.value) {
      const newData = defaultData.filter((str) => str.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1)  
      setData([...newData])
    } else {
      setData([...defaultData])
    } 
  }

  return (
    <div className="App">
      <h3>{`Search & Filter`}</h3>
      <input placeholder='input value' onChange={onFilterData} />
      <table style={{ width: '100%' }}>
        {data.map((d, index) => <tr key={index}><td>{d}</td></tr>)}
      </table>
    </div>
  );
};

export default App;
