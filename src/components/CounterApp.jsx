import {useState} from 'react'
const CounterApp = () => {
   
    
        let [counter, setCount] = useState(0);
        const inc = () => {
          setCount(counter + 1);
        };
      
        const dec = () => {
          setCount(counter - 1);
        };
        return (
          <>
            <div className="text-center text-white border-8 border-rose-500 bg-gray-700">
              <h1 className="">Count:{counter}</h1>
              <button className="rounded-lg bg-green-500" onClick={inc}>
                Increment
              </button>
              <button className="rounded-lg bg-red-500" onClick={dec}>
                Decrement
              </button>
            </div>
          </>
        );
      };
      
      export default CounterApp;
