import {useState} from 'react';
import NavBar from '../components/NavBar';

export default function Home(){

    const [count, setCount] = useState(0);

    function plusNum(){
        setCount(count+1)
    }


  return  <div>
            <NavBar/>
            <h1>{count}</h1>
            <button onClick={plusNum}>+</button>
        </div>
}