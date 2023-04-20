import axios from "axios";

export const useSubmitClient = (client, resetClient) => {

    const postHandler = async (e) => {
        e.preventDefault();

        await axios.post('https://absorbing-mahogany-olivine.glitch.me/api/clients', client)
                        .then((response) => console.log(response))
                        .catch((error) => console.log(error));
        resetClient();
        window.location.reload();
    };

    return postHandler;
}