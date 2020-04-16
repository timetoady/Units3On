//Variable to get what entryID/page it is
var entryID = document.getElementById("entryID").value;

//Quick and easy capitalization function
const capitalize = (string) => {
  if (typeof string !== "string") return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
};

//Fetch and content creation for entry pages
const apiURL = "/Capstone/entries.json";

fetch(apiURL)
  .then((response) => response.json())
  .then((myList) => {
    console.log(myList.entries);
    let entryList = myList.entries;
    console.log(`Fetch says entryID = ${entryID}`);
    console.log(`The title is ${entryList[entryID].title}`);
    let entry = entryList[entryID];
    console.log(entry);

    //Set up main top display
    let displayArea = document.querySelector("#display");
    let detailDiv = document.createElement("div");
    let hackTitle = document.createElement("h1");
    let hackSubtitle = document.createElement("h2");
    let hackImg = document.createElement("img");
    hackImg.setAttribute("class", "mainImg");
    detailDiv.setAttribute("class", "infoDiv");
    //Set up detail grid
    let innerDetailDiv = document.createElement("div");
    innerDetailDiv.setAttribute("class", "detailDiv"); //this is the div that contains detail titles and detail info
    let detailTitles = document.createElement("ul"); //UL with all the detail titles. These will be constants.

    //Names and text conent of all detail categories
    let category = document.createElement("li");
    category.textContent = "Category";
    let platform = document.createElement("li");
    platform.textContent = "Platform";
    let patchInfo = document.createElement("li");
    patchInfo.textContent = "Patching Information";
    let genre = document.createElement("li");
    genre.textContent = "Genre";
    genre.setAttribute("class", "genre");
    let mods = document.createElement("li");
    mods.textContent = "Mods";
    let patchVer = document.createElement("li");
    patchVer.textContent = "Patch Version";
    let hackDate = document.createElement("li");
    hackDate.textContent = "Hack Release Date";
    let readme = document.createElement("li");
    readme.textContent = "Readme";
    let downloads = document.createElement("li");
    downloads.textContent = "Downloads";
    let lastMod = document.createElement("li");
    lastMod.textContent = "Last Modified";
    detailTitles.setAttribute("class", "detailTitles");
    let detailInfo = document.createElement("ul");
    detailInfo.setAttribute("class", "detailInfo");

    //Name and text content of all detailInfo
    let categoryI = document.createElement("li");
    categoryI.textContent = `${capitalize(entry.category)}`;
    let platformI = document.createElement("li");
    platformI.textContent = entry.platform;
    let patchInfoI = document.createElement("li");
    patchInfoI.textContent = entry.patchingInfo;
    let genreI = document.createElement("li");
    genreI.textContent = entry.genre;
    let modsI = document.createElement("li");
    modsI.textContent = entry.mods;
    let patchVerI = document.createElement("li");
    patchVerI.textContent = entry.patchVer;
    let hackDateI = document.createElement("li");
    hackDateI.textContent = entry.releaseDate;
    let readmeI = document.createElement("li");
    readmeI.innerHTML = `<a href = "${entry.readme}">Readme File</a>`;
    let downloadsI = document.createElement("li");
    downloadsI.textContent = entry.downloads;
    let lastModI = document.createElement("li");
    lastModI.textContent = entry.lastMod;

    //Main top text content
    hackTitle.textContent = entryList[entryID].title;
    hackSubtitle.textContent = `${capitalize(entry.type)} of ${
      entry.gameTitle
    } released by ${entry.author}`;
    hackImg.src = `/Capstone/assets/${entry.picture}`;
    hackImg.alt = "Title Image";

    //Appending to DOM.
    displayArea.appendChild(detailDiv); //attach to display ID in page
    detailDiv.appendChild(hackTitle);
    detailDiv.appendChild(hackSubtitle);
    detailDiv.appendChild(hackImg);
    detailDiv.appendChild(innerDetailDiv);
    //innerDetailDiv has two divs: detailTitles and detailInfo, flexed so they are side by side.
    innerDetailDiv.appendChild(detailTitles);
    innerDetailDiv.appendChild(detailInfo);
    //All detail titles append
    detailTitles.appendChild(category);
    detailTitles.appendChild(platform);
    detailTitles.appendChild(patchInfo);
    detailTitles.appendChild(genre);
    detailTitles.appendChild(mods);
    detailTitles.appendChild(patchVer);
    detailTitles.appendChild(hackDate);
    detailTitles.appendChild(readme);
    detailTitles.appendChild(downloads);
    detailTitles.appendChild(lastMod);
    //All detail info append
    detailInfo.appendChild(categoryI);
    detailInfo.appendChild(platformI);
    detailInfo.appendChild(patchInfoI);
    detailInfo.appendChild(genreI);
    detailInfo.appendChild(modsI);
    detailInfo.appendChild(patchVerI);
    detailInfo.appendChild(hackDateI);
    detailInfo.appendChild(readmeI);
    detailInfo.appendChild(downloadsI);
    detailInfo.appendChild(lastModI);

    //Make the three buttons to append to detailDiv
    let editButton = document.createElement("button");
    let editCredButton = document.createElement("button");
    let flagButton = document.createElement("button");
    editButton.setAttribute("class", "entryButton");
    flagButton.setAttribute("class", "entryButton");
    editCredButton.setAttribute("class", "entryButton");
    editButton.textContent = "EDIT";
    editCredButton.textContent = "EDIT CREDITS";
    flagButton.textContent = "FLAS AS NONCOMPLIANT";
    detailDiv.appendChild(editButton);
    detailDiv.appendChild(editCredButton);
    detailDiv.appendChild(flagButton);

    //Description div, including description and screenshots (in their own div)
    let descDiv = document.createElement("div");
    descDiv.setAttribute("class", "descDiv");
    let descTitle = document.createElement("h3");
    let descP = document.createElement("p");
    let romInfoTitle = document.createElement("h3");
    let romInfo = document.createElement("p");
    let screenDiv = document.createElement("div");
    let screenTitle = document.createElement("h3");
    let screenshot1 = document.createElement("img");
    let screenshot2 = document.createElement("img");
    let screenshot3 = document.createElement("img");
    descTitle.textContent = "Description";
    descP.innerText = entry.description;
    romInfoTitle.textContent = "ROM Information";
    romInfo.innerText = entry.romISOinfo;
    screenTitle.textContent = "Screenshots";
    screenshot1.src = `/Capstone/assets/${entry.screenshot1}`;
    screenshot1.alt = "Screenshot1";
    screenshot2.src = `/Capstone/assets/${entry.screenshot2}`;
    screenshot2.alt = "Screenshot2";
    screenshot3.src = `/Capstone/assets/${entry.screenshot3}`;
    screenshot3.alt = "Screenshot3";
    screenDiv.setAttribute("class", "screenDiv");
    screenshot1.setAttribute("class", "screenshotImg");
    screenshot2.setAttribute("class", "screenshotImg");
    screenshot3.setAttribute("class", "screenshotImg");
    displayArea.appendChild(descDiv);
    descDiv.appendChild(descTitle);
    descDiv.appendChild(descP);
    descDiv.appendChild(romInfoTitle);
    descDiv.appendChild(romInfo);
    descDiv.appendChild(screenTitle);
    descDiv.appendChild(screenDiv);
    screenDiv.appendChild(screenshot1);
    screenDiv.appendChild(screenshot2);
    screenDiv.appendChild(screenshot3);

    //Lazy loading images div, with just "wallpapers" and images full width
    let wallTitle = document.createElement("h3");
    wallTitle.textContent = "Wallpapers";
    let wallpaperDiv = document.createElement("div");
    let wallFig1 = document.createElement("figure");
    let wallFig2 = document.createElement("figure");
    let wallpaper1 = document.createElement("img");
    let wallpaper2 = document.createElement("img");
    wallpaperDiv.setAttribute("class", "wallpaperDiv");
    wallpaper1.setAttribute("class", "lazy");
    wallpaper2.setAttribute("class", "lazy");
    wallpaper1.setAttribute("data-src", `/Capstone/assets/${entry.wallpaper1}`);
    wallpaper2.setAttribute("data-src", `/Capstone/assets/${entry.wallpaper2}`);
    wallpaper1.alt = "Wallpaper 1";
    wallpaper2.alt = "Wallpaper 2";
    //Lazy load image wallpaper append
    displayArea.appendChild(wallpaperDiv);
    wallpaperDiv.appendChild(wallTitle);
    wallpaperDiv.appendChild(wallFig1);
    wallpaperDiv.appendChild(wallFig2);
    wallFig1.appendChild(wallpaper1);
    wallFig2.appendChild(wallpaper2);
    var lazyLoadInstance = new LazyLoad({
      elements_selector: ".lazy",
      threshold: 0,
      // ... more custom settings?
    });
  });


  window.onresize = function () {
    if (window.innerWidth >= 1024) {location.reload()};
  };