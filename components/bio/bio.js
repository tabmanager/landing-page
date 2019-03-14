function Bio(attributes) {
    const img = document.createElement('img')
    const section = document.createElement('section');
    const h4 = document.createElement('h4');
    const p = document.createElement('p')

    img.src = attributes.img;
    p.innerText = attributes.bio;
    h4.innerText = attributes.name;

    section.append(img);
    section.append(h4);
    section.append(p);

    section.classList.add("bio");
    var t1 = performance.now();
    return section
}