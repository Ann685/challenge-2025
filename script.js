document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let email = document.getElementById("email").value;
    let course = document.getElementById("course").value;
    let teamMembers = document.getElementById("team-members").value;
    
    if (!name || !surname || !email || !course) {
        alert("Խնդրում ենք լրացնել բոլոր պարտադիր դաշտերը");
        return;
    }

    let teamData = [];
    for (let i = 2; i <= teamMembers; i++) {
        let memberName = document.getElementById(`member-name-${i}`).value;
        let memberSurname = document.getElementById(`member-surname-${i}`).value;
        let memberEmail = document.getElementById(`member-email-${i}`).value;

        if (!memberName || !memberSurname || !memberEmail) {
            alert("Խնդրում ենք լրացնել թիմի բոլոր անդամների տվյալները");
            return;
        }

        teamData.push({ memberName, memberSurname, memberEmail });
    }

    let registrationData = { name, surname, email, course, teamData };

    localStorage.setItem("registrationData", JSON.stringify(registrationData));
    alert("Գրանցումը հաջողությամբ կատարվեց!");
});

function addMemberFields() {
    let container = document.getElementById("team-members-container");
    container.innerHTML = ""; 

    let teamSize = document.getElementById("team-members").value;
    for (let i = 2; i <= teamSize; i++) {
        container.innerHTML += `
            <h3>Թիմի անդամ ${i}</h3>
            <label>Անուն</label>
            <input type="text" id="member-name-${i}" required>
            <label>Ազգանուն</label>
            <input type="text" id="member-surname-${i}" required>
            <label>Էլ․ փոստ</label>
            <input type="email" id="member-email-${i}" required>
        `;
    }
}
