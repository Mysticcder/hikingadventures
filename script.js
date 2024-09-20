// Dynamic event loading
const events = [
    {
        image: "images/events.jpg",
        description: "Join us for an exciting mountain hike in the Rocky Mountains."
    },
   
];

const eventContainer = document.getElementById('event-container');

events.forEach(event => {
    const eventDiv = document.createElement('div');
    eventDiv.classList.add('event');

    eventDiv.innerHTML = `
        <img src="${event.image}" alt="${event.title}">
        <h3>${event.title}</h3>
        <p>${event.date}</p>
        <p>${event.description}</p>
    `;

    eventContainer.appendChild(eventDiv);
});
