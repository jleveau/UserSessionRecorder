

const url = "http://localhost:4000/events";

let playerElement;
let playButton;
let loadButton;
let clearButton;
document.addEventListener('DOMContentLoaded', function (event) {
    playerElement = document.getElementById("player");
    playButton = document.getElementById("play");
    loadButton = document.getElementById("load");
    clearButton = document.getElementById("clear");

    loadButton.addEventListener("click", loadEvents);
    playButton.addEventListener("click", play);
    clearButton.addEventListener("click", clearEvents);
})

let events = [];

function loadEvents() {
    fetch(url)
        .then(response => response.json())
        .then(responseEvents => {
            events = responseEvents;
            console.log(events)
        })
}

function clearEvents() {
    this.events = [];
    fetch(url, {
        method: 'DELETE',
    });
}

function play() {
    while (playerElement.firstChild) {
        playerElement.removeChild(playerElement.firstChild);
    }
    const replayer = new rrwebPlayer({
        target: playerElement, // customizable root element
        props: {
            events,
        },
    });
}

