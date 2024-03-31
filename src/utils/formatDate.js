export function parseFirebaseTime(data){
    try {
        const milliseconds = Math.floor(data.seconds * 1000 + data.nanoseconds / 1000000);
        const date = new Date(milliseconds);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const timeString = `${hours}:${minutes}`
        return timeString;
    } catch (error) {
        
    }
}