import React,{useState} from 'react';

const Count = () =>{
 const[count,setCount] = useState(0);

 return(
    <header>
        <h1>This is a basic counter</h1>
        <p>You have clicked {count} times!</p>
        <button onClick={() => setCount(count + 1)}>Increase</button><button onClick={() => setCount(count - 1)}>Decrease</button>
    </header>
 )
}
export default Count;