import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'

const Hooks = (props) => {

    const b = useCallback(() => {

    }, []);

    const inputRef = useRef();
    const stateRef = useRef(10);

    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);
    // const [name, setName] = useState('');
    // props.name;

    const a = useMemo(() => {
        if(count <= 5)
            return 10;
        else 
            return 20;
    }, [count]);

    const updateState = useCallback(() => {
        // this.setState({count: 10});
        setCount(count + 1);
    }, [count]);

    const updateNumber = useCallback(() => {
        setNumber(number + 1);
    }, [number]);

    const inputFocus = () => {
        inputRef.current.focus();
    }

    const updateRef = () => {
        stateRef.current = stateRef.current + 1;
        console.log(stateRef.current);
    }

    useEffect(() => {
        // alert('Inside useEffect Hook');
    }, []);

    return (
        <div>
            <div>State Variable Count: {count}</div>
            <button onClick={updateState}>Update State</button><br /><br />
            <div>State Variable Number: {number}</div>
            <button onClick={updateNumber}>Update Number</button><br /><br />
            <input ref={inputRef} placeholder="useRef hook" /><br />
            <button onClick={inputFocus}>useRef Hook</button><br /><br />
            <div>State Ref Value: {stateRef.current}</div>
            <button onClick={updateRef}>Update Ref Value</button>
        </div>
    )
}

export default Hooks
