// List of recipes on the front page
async function buildTeamMember(id=null) {
    if (!dataFetched) {
        await fetchData();
    }

    let section = document.getElementById("team_members");
    
    for (const member of members) {
        if (id == null || member.id == id) {
            console.log(member);
        }
    }
}