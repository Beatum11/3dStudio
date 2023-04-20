import { useState } from "react";

export const useClientState = () => {

    const [client, setClient] = useState({
        name: '',
        number: '',
        email: ''
    });

    const changeHandler = (e) => {
        setClient({
            ...client,
            [e.target.name]: e.target.value
        });
    }

    const resetClient = () => {
        setClient({
            name: '',
            number: '',
            email: ''
        });
    }

    return{ client, changeHandler, resetClient };

}