function setWithExpiry(key, value, timeToLive) {
    const now = new Date()

    // const item = {
    //     value: value,
    //     expiry: now.getTime() + timeToLive,
    // }
    localStorage.setItem(key, JSON.stringify(item))
}