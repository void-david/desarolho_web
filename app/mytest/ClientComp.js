'use client';

import {useState} from 'react';

const ClientComp = ({children}) => {
    const [state, setState] = useState(0);
    
    return (
        <div>
        <button onClick={() => setState(state + 1)}>Click me</button>
        <p>{state}</p>
        <div>{children}</div>
        </div>
    );
}

export default ClientComp;