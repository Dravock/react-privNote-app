const Copy_to_clipboard =()=> {
    return 
}

// Funktion zum endgerät erkennen
function detectDeviceType() {
    const userAgent = navigator.userAgent;

    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(userAgent)) {
        return "Tablet";
    } else if (/Mobile|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
        return 
    } else {
        return "Desktop";
    }
}

export default Copy_to_clipboard