var members = [
    {
        "name": "Nuha",
        "grade": "11",
        "bio": "I am Nuha",
        "instagram": "",
        "linkedin": "",
        "github": "",
        "projects": ["WCI Extracurriculars Website", "New WCI Web-Dev Website"]
    }
];

var dataFetched = false;

async function fetchData() {
    if (window.location.protocol == "file:") {
        console.log("fetchData: Running from a file, won't attempt to load data.");
        dataFetched = true;
    } else {
        console.log("fetchData: Starting to load data.");
        members = await (await fetch("databases/team.json")).json();
    }
    dataFetched = true;
}
