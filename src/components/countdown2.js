//function conpoment

//react hook setup
import { useState, useEffect } from 'react';
const CountDown2 = (props) => {
    //javascript destruct
    let [count, setCount] = useState(props.startValue);

    useEffect(() => {
        
        const timerID = setInterval(() => {
            setCount(count - 1);
        }, 1000);
        
        if(!count){
            clearInterval(timerID);
        };

        return () => {
            console.log('unmounted');
            clearInterval(timerID);
        }
    }, [count]);

    if (count > 0){           

        return (
            <>
                <h1>Countdown 2 -- Time remaining: {count} seconds.</h1>         
            </>
        );
    }
    else{
        //clearInterval(this.timerID);
        return(<h1>Countdown 2's -- Times Up!</h1>);
    }
    


    return <h1> hi from Countdown 2: {count}</h1>

};

export default CountDown2;