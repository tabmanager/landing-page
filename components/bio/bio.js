function Bio(attributes) {
    const img = document.createElement('img')
    const section = document.createElement('section');
    const h4 = document.createElement('h4');
    const p = document.createElement('p');
    const div = document.createElement('div')
    const box = document.createElement('div')
    const figure = document.createElement('figure');
    div.classList.add("social");
    box.classList.add("box");

    img.src = attributes.img;
    p.innerText = attributes.bio;
    h4.innerText = attributes.name;
    h4.innerHTML += `<br> ${attributes.role}`;
    figure.append(img);
    box.append(figure);
    box.append(div)
    const linkedin = document.createElement('a');
    linkedin.href = attributes.linkedin;
    linkedin.innerHTML = content.icon.linkedin;
    div.append(linkedin)
    
    const github = document.createElement('a');
    github.href = attributes.linkedin;
    github.innerHTML = content.icon.github;
    div.append(github)

    if (attributes.twitter !== "") {
        const twitter = document.createElement('a');
        twitter.href = attributes.twitter;
        twitter.innerHTML = content.icon.twitter;
        div.append(twitter);
    }


    section.append(box);
    section.append(h4);
    section.append(p);    


    section.classList.add("bio");
    var t1 = performance.now();
    return section
}