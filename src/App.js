import React, {useState} from "react";

function App(){

  const[data, setData] = useState(null);
  const[print, setPrint] = useState(false); 

  function getData(val){

    if(!val) return;

    const URL_REGEX = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    let textSubject = val.target.value;
    
    return setData(textSubject.replace(URL_REGEX, (url)=>{

      let hyperLink = url;
  
      if(!hyperLink.match('^https?:\/\/')){
  
        hyperLink = 'http://' + hyperLink;
      }
  
      setPrint(false)
      return `<a href="${hyperLink.toLowerCase().lastIndexOf('www.', 0) === 0 ? `//${hyperLink}` : hyperLink}">${hyperLink}</a>`
    }));    

  }

  return(
      <div>
      {
        print?
          <h1>
            <div dangerouslySetInnerHTML={{ __html: data }} />
          </h1>  
        :null
      }
      <input type="text" onChange={getData}></input>
      <button onClick={()=>setPrint(true)}>Print Data</button>
      </div>
  );
}
export default App;