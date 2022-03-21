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
                    if ("instagram" in member) {
                        let instagram = document.createElement('h6'); instagram.innerText = "Instagram"; instagram.classList.add('sl');
                        let ins_link = document.createElement('a'); ins_link.href = member.instagram;
                        ins_link.appendChild(instagram);
                        socials.appendChild(ins_link);
                    }
                    if ("linkedin" in member) {
                        let linkedin = document.createElement('h6'); linkedin.innerText = "Linkedin"; linkedin.classList.add('sl');
                        socials.appendChild(linkedin);
                    }
                    if ("github" in member) {
                        let github = document.createElement('h6'); github.innerText = "GitHub"; github.classList.add('sl');
                        socials.appendChild(github);
                    }
                box.appendChild(info);
                box.appendChild(socials);
            section.appendChild(box);
        }
    }
}