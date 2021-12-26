const database = [
  {
    name: "Hostel 1A",
  },
  {
    name: "Hostel 1B",
  },
  {
    name: "Hostel 1C",
  },
  {
    name: "Hostel 1A",
  },
  {
    name: "Hostel 1B",
  },
  {
    name: "Hostel 1C",
  },
  {
    name: "Hostel 1A",
  },
  {
    name: "Hostel 1B",
  },
  {
    name: "Hostel 1C",
  },
  {
    name: "Hostel 1A",
  },
  {
    name: "Hostel 1B",
  },
  {
    name: "Hostel 1C",
  },
  {
    name: "Hostel 1A",
  },
  {
    name: "Hostel 1B",
  },
  {
    name: "Hostel 1C",
  },
  {
    name: "Hostel 1A",
  },
  {
    name: "Hostel 1B",
  },
  {
    name: "Hostel 1C",
  },
  {
    name: "Hostel 1C",
  },
];

function selectElement(selector) {
  return document.querySelector(selector);
}

function clearResults() {
  selectElement(".searchItem").innerHTML = "";
}

function getResults() {
  const search = selectElement(".searchItem").value;
  clearResults();
  for (let i = 0; i < database.length; i++) {
    if (
      database[i].name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    ) {
      selectElement(".singlecomponent").innerHTML += `
      <div>
      <div class="singlecomponent">
      <div class="topicinfo">
          <p>${database[i].name}</p>
      </div>
      <div class="btns">
          <a href="tel: +918130282925" class="btn-1">Call Warden</a> <!--Done-->
          <a href="mailto:xy000@snu.edu.in "class="btn-2">Mail Warden</a>
          <a href="https://www.google.co.uk/maps/place/SNU+Hostel+1A/@28.5244496,77.573215,19.42z/data=!4m5!3m4!1s0x390c94d7553aabc9:0xd09ad60822f3d32e!8m2!3d28.5249758!4d77.5730025"class="btn-3">Location</a> 
      </div>
  </div>
  </div>
      `;
    }
  }
}

selectElement(".searchItem").addEventListener("keyup", getResults);

var icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "/SNUxplore/images/sun.png";
  } else {
    icon.src = "/SNUxplore/images/moon.png";
  }
};
