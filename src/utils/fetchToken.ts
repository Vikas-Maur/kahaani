const fetchToken = async () => {
    const resp = await fetch('/api/token')
   
    return await resp.json()
}

export default fetchToken
