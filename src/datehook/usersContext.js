import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import router from 'next/router'
import Cookies from 'js-cookie'

const userContext = createContext({})
export function UserProvider(props) {

    return (
        <userContext.Provider value={{

        }}>
            {props.children}
        </userContext.Provider>
    )
}

export default userContext