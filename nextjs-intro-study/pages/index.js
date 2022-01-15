import {useState} from 'react';
import NavBar from '../components/NavBar';

export default function Home(){

    const [count, setCount] = useState(0);

    function plusNum(){
        setCount(count+1)
    }


  return  <div>
            <h1 className="active">{count}</h1>
            <div className="active">gdgdgd</div>
            <button onClick={plusNum}>+</button>
            <style jsx>{`
                h1{
                    color: red;
                    font-size: 50px;
                }
            `}</style>
            <h1>안녕하세요!</h1>
        </div>
}