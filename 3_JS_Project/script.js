const clock = document.getElementById('clock'); // We don't use # or . here as this is specifically build for id only

setInterval(() => {
    let date = new Date();
    clock.textContent = date.toLocaleTimeString();
}, 1000); // interval in ms.