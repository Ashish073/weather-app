export const formattedTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    return date.toLocaleTimeString(undefined, options);
};

export const getLocalTime = (date) => {
    return date.toLocaleString("en-US", {
        timeZone: "UTC",
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    })
}

export function getTemp(deg, tempType) {
    if (tempType === 'c') {
        return deg;
    }
    return ((deg * (9 / 5)) + 32).toFixed(1);
}
