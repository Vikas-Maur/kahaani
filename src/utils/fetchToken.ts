const fetchToken = async () => {
    const resp = await fetch('/api/auth/token')
   
    return await resp.json()
}

export default fetchToken
