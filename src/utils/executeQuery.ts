import fetchToken from "./fetchToken";
import config from "@/config/config";

const executeQuery = async (query: string, variables: any = undefined) => {
    try {
        const { token, error } = await fetchToken()
        const resp = await fetch(config.grafbaseURL!, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                query,
                variables
            })
        })
        const { data } = await resp.json()

        return data
    } catch (error) {
        console.log('executeQuery: ', error);
    }
}

export default executeQuery
