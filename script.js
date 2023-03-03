// TODO: add code here
window.addEventListener("load", async function fetchData() {
    const response = await fetch('https://handlers.education.launchcode.org/static/astronauts.json');
    const data = await response.json();
});