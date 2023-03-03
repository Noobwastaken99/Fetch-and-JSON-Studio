// TODO: add code here
window.addEventListener("load", async function fetchData() {
    const response = await fetch('https://handlers.education.launchcode.org/static/astronauts.json');
    const data = await response.json();
    console.log(data);

    for (let i = 0; i < data.length; i++) {
        container.innerHTML += `
        <div class="astronaut">
            <div class="bio">
            <h3>${data[i].id}: ${data[i].firstName} ${data[i].lastName}</h3>
                <ul>
                    <li>Hours in Space: ${data[i].hoursInSpace}</li>
                    <li>Active: ${data[i].active}</li>
                    <li>Skills: ${data[i].skills}</li>
                </ul>
            </div>
            <img class="avatar" src="${data[i].picture}" alt="Astronaut">
        </div>
        `;
    };
});