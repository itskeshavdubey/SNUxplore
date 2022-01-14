const inputHandler = (e) => {
  const findables = document.getElementsByClassName("findable");
  for (let i = 0; i < findables.length; i++) {
    if (
      findables[i].innerText
        .toLowerCase()
        .includes(e.target.value.toLowerCase())
    ) {
      findables[i].parentElement.parentElement.style.display = "flex";
    } else {
      findables[i].parentElement.parentElement.style.display = "none";
    }
  }
};
const source = document.getElementById("source");

source.addEventListener("input", inputHandler);

const searchPlaces = () => {
  let filter = document.getElementById("myInput").value.toUpperCase();
  let components = document.getElementById("component");
  let singlecomponent = components.getElementByTagName("singlecomponent");

  for (var i = 0; i < singlecomponent.length; i++) {
    let topicinfo = singlecomponent[i].getElementByTagName("topicinfo")[0];
    let textValue = topicinfo.textContent || topicinfo.innerHTML;
    if (textValue.toUpperCase().indexOf("filter") > -1) {
      singlecomponent[i].style.display = "";
    } else {
      singlecomponent[i].style.display = "none";
    }
  }
};

var icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "/SNUxplore/images/sun.png";
  } else {
    icon.src = "/SNUxplore/images/moon.png";
  }
};
