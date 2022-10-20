import { record } from "rrweb";


window.addEventListener("load", function () {
    console.log("Recorder loaded");

    record({
        emit(event) {
            console.log("recording event", event);
            fetch("http://localhost:4000/event", {
                method: "POST",
                body: JSON.stringify(event),
                headers: {
                    "Content-Type": "application/json"
                }
            });
        }
    })
});

