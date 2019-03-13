
    console.log("page loaded");
Navigation(".navigation");
    
const header = document.querySelector("header");
const intro = new Introduction(content.introduction).create();

header.append(intro);

const features = document.querySelector(".features");

content.features.forEach(feature => {
    const featureHtml = new Feature(feature).create();
    features.append(featureHtml);
});
