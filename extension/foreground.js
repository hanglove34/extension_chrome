var allResearchTitle = document.querySelector("#rso")
var titleHtml = allResearchTitle.querySelectorAll(".LC20lb")
console.log(titleHtml);
var result = [];
titleHtml.forEach(data => {
    console.log(data.innerHTML)
    result = [...result, data.innerHTML];
})
console.log(result);
var _data = {
    resultResearch: result,
  }
  
  fetch('http://127.0.0.1:8080/extension/setInfo', {
    method: "POST",
    body: JSON.stringify(_data),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
  .then(response => response.json()) 
  .then(json => console.log(json))
  .catch(err => console.log(err));