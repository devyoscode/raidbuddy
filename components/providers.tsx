import React from 'react';
import {iComponent} from "@/types/types";
import {StateContext} from "@/context/statecontext";

const Providers = ({children}: iComponent) => {
    return (
        <StateContext>
            {children}
        </StateContext>
    );
};

export default Providers;