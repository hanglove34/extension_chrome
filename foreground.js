var allResearchTitle = document.querySelectorAll(".LC20lb")
console.log(allResearchTitle);
var result = [];
allResearchTitle.forEach(data => {
    console.log(data.innerHTML)
    result = [...result, data.innerHTML];
})
console.log(result);