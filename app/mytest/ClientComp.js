'use client';

import {useState} from 'react';
import { useUser } from "@clerk/clerk-react";

const ClientComp = ({children}) => {
    const [state, setState] = useState(0);
    const { user } = useUser();
    
    return (
        <div>
        <button onClick={() => setState(state + 1)}>Click me</button>
        <p>{state}</p>
        <h1>{user?.lastName}</h1>

        <div>{children}</div>
        </div>
    );
}

export default ClientComp;