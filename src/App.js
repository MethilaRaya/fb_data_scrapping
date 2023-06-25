import React, { useState, useEffect } from 'react';

function App() {
 const [data, setData] = useState([]);
  const fetchData = async () => {
  const response = await fetch(
  'https://graph.facebook.com/v17.0/id/feed?fields=attachments{media_type,url},message&access_token=token'
  );
  const json = await response.json();
  setData(json.data);
  console.log(json.data);
 };

 // A function that prints the data state to the console log
 const insert_data = async (id) => {
  const response = await fetch(
    `https://graph.facebook.com/v17.0/${id}?fields=attachments{media_type,url},message&access_token=token`
  );
  const json = await response.json();
  console.log(json);
};
 
 useEffect(() => {
  fetchData();
  }, []);

 return (
  <div className="App">
  <h1 style={{ color: '#16B5A3', textAlign:"center" }}>Zantrik Facebook Page Data Scrapping</h1>
  {data.map((item) => (
  <div key={item.id} style={{textAlign: "left"}}>
  {item.attachments && item.attachments.data[0].media_type === "image" ? (
  <img src={item.attachments.data[0].url} alt="post" />
  ) : (
  item.attachments && item.attachments.data[0].media_type === "video" && (
  <div>
  {item.message && <p>{item.message}</p>}
  <p>{item.attachments.data[0].url}</p>
  </div>
  )
  )}
  {item.attachments && item.attachments.data[0].media_type === "photo" && (
  <div>
  <p>{item.message}</p>
  <p>{item.attachments.data[0].url}</p>
  </div>
  )}
  {!item.attachments && (
  <p>{item.message}</p>
  )}
  {/* Added two buttons for each post */}
  <div style={{textAlign: "center", clear: "both"}}>
 <button style={{marginRight: "10px", backgroundColor: "#16B5A3", fontWeight: "bold"}} onClick={insert_data}>Insert</button>
 <button style={{marginRight: "10px", backgroundColor: "#f44242", fontWeight: "bold"}}>Delete</button>
 </div>
  <hr style={{
    backgroundColor: "#16B5A3",
    //   borderColor: "#16B5A3", 
      color: "#16B5A3",
      height: 2.5
    }}/>
  </div>
  ))}
  </div>
  );
  }
  
  export default App;