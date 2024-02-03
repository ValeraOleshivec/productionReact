import React, {useState} from 'react';
import styles from './counter.module.scss'
const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>{count}</h1>
            <button className={styles.button} onClick={()=>setCount((prev)=>prev+1)}>Нажми</button>
        </div>
    );
};

export default Counter;