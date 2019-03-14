Navigation(".navigation");

team.forEach( member => {

        document.querySelector(".team").append(new Bio(member));
    }
)