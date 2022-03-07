// List of recipes on the front page
async function buildTeamMember(id=null) {
    if (!dataFetched) {
        await fetchData();
    }

    let section = document.getElementById("team_members");
    
    for (const member of members) {
        if (id == null || member.id == id) {
            console.log(member);
            let box = document.createElement('div'); box.classList.add('a_box');
                let photo = document.createElement('img'); photo.src = member.photo; photo.style.width = '90%';
                box.appendChild(photo);
                let info = document.createElement('div'); info.classList.add('info');
                    let name = document.createElement('h3'); name.innerText = member.name;
                    info.appendChild(name);
                    let grade = document.createElement('h6'); grade.innerText = "Grade: ".concat(member.grade);
                    info.appendChild(grade);
                    let bio = document.createElement('p'); bio.innerText = member.bio;
                    info.appendChild(bio);
                let socials = document.createElement('div'); socials.classList.add('socials_links');
                box.appendChild(info);
            section.appendChild(box);
        }
    }
}