import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io.connect('http://localhost:3002');
function DataShow() {
  const [vip, setvip] = useState([]);
  const [loading, setLoading] = useState(false);


useEffect(() => {
  socket.on("output", data => {
    console.log(data)
      setvip(data);
})
}, [socket])


  if (loading) {
    return (
      <>
        <h1>Data is loading...</h1>
      
      </>
    );
  }else{
    return (
    <ul>
      {vip.map((item) => (
        <li key={item._id}>{item.city}</li>
      ))}
    </ul>
  );
  }
  
}

export default DataShow;
