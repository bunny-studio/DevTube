const singleVidButtons = document.getElementById("single-vids");
const videoContainer = document.getElementById("single-video");
const contSelection = document.getElementById("cont-selection");
const videoCat = document.getElementById("select-cat");
const catButtons = document.getElementById("cat-button");
const alertMsg = document.getElementById("alertMsg");

let isContentVisible = false;
// var videoCatvalue = videoCat.value;

const form = document.forms["form"];
const optionSelection = form.categorySelection.options;
form.onchange = function (e) {
  e.preventDefault();
  let opt = this.categorySelection.value;

  singleVidButtons.addEventListener("click", () => {
    if (isContentVisible || opt === "english" || opt === "hindi") {
      videoContainer.style.display = "none";
      contSelection.innerHTML = `<div class="content-type" id="content-type">
                    <button class="btns" id="uiux">UI/UX Design</button>
                    <button class="btns" id="webdev">Web Development</button>
                    <button class="btns" id="others">Classic & Essential Languages</button>
                    <button class="btns" id="appscript">App-Script (Google Sheets)</button>
               </div>
               <hr class="lineButton">
               <div class="content-type two" id="main-content-type"></div>`;
      const uiux = document.getElementById("uiux");
      uiux.addEventListener("click", showUiuxContent);
      uiux.scrollIntoView();

      const webdev = document.getElementById("webdev");
      webdev.addEventListener("click", showWebDevContent);
      webdev.scrollIntoView();

      const others = document.getElementById("others");
      others.addEventListener("click", showOtherLanguagesContent);
      others.scrollIntoView();

      const googleSheets = document.getElementById("appscript");
      googleSheets.addEventListener("click", showGoogleSheetsContent);
    } else {
      contSelection.innerHTML = "";
      videoContainer.style.display = "none";
    }
    isContentVisible = !isContentVisible;
  });

  function showWebDevContent() {
    document.getElementById(
      "main-content-type"
    ).innerHTML = `<button class="btns" id="frontend">Front-End Developement</button>
          <button class="btns" id="backend">Back-End Development</button>`;
    videoContainer.style.display = "none";
    const frontend = document.getElementById("frontend");
    frontend.addEventListener("click", showFrontendContent);
    frontend.scrollIntoView();
    const backend = document.getElementById("backend");
    backend.addEventListener("click", showBackendContent);
    backend.scrollIntoView();
    const videoCat = document.getElementById("video-cat");
    videoCat.scrollIntoView();
  }

  if (opt === "english") {
    catButtons.style.display = "block";
    videoContainer.style.display = "none";
    contSelection.innerHTML = "";
    alertMsg.innerHTML =
      "<span>New Content Added in Hindi Language Also.</span>";
    //   console.log("English");

    function showUiuxContent() {
      document.getElementById("main-content-type").innerHTML = "";
      videoContainer.style.display = "block";
      videoContainer.innerHTML = `<div class="note">
              <h3>These all videos are available only in <span>English Language</span></h3>
            </div>
            <div class="video-cat" id="video-cat">
                <div class="category show" id="uiuxDesignEng">
                    <div class="heading-text">
                        <h2 class="uiux">UI/UX Design</h2>
                    </div>
                    <hr>
                    <div class="video-content-cont">
                        <div class="video-container">
                            <div class="video-category">
                                <h2>Figma Introduction</h2>
                            </div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/bI6q16ffdgQ?si=GbWq04RJGqCo4Uwd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <div class="video-title">
                                <h3>Foundation Of Figma <br> For Beginner to Professional by <a class="credits" href="https://www.youtube.com/@AnshMehraa" target="_blank">Ansh Mehra</a></h3>
                            </div>
                        </div>
                        <div class="video-container">
                            <div class="video-category">
                                <h2>Adobe Xd UI/UX Design</h2>
                            </div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/BU_afT-aIn0?si=z2zSVuOHHjuGkWO1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <div class="video-title">
                                <h3>Adobe Xd UI/UX Design Course <br> For Beginner to Professional by <a class="credits" href="https://www.youtube.com/@intellipaat" target="_blank">Intellipaat</a></h3>
                            </div>
                        </div>
                        <div class="video-container">
                            <div class="video-category">
                                  <h2>Adobe Xd UX Design</h2>
                            </div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/f2K1jmjj5pM?si=YJs5dULo2tdXJ8U4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <div class="video-title">
                                <h3>Adobe Xd UX Design For Beginners by <a class="credits" href="https://www.youtube.com/@BringYourOwnLaptop" target="_blank">Bring Your Own Laptop</a></h3>
                            </div>
                        </div>
                    </div>
                    <div class="video-content-cont">
                    <div class="video-container">
                    <div class="video-category">
                        <h2>Figma UI/UX Design</h2>
                    </div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/cKZEgtQUxlU?si=XoxwDgvAuwjdj4Wq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <div class="video-title">
                          <h3>Figma UI/UX Design Course For Beginners by <a class="credits" href="https://www.youtube.com/@ZeroToMastery" target="_blank">Zero To Mastery</a></h3>
                      </div>
                  </div>
                  <div class="video-container">
                    <div class="video-category">
                        <h2>Figma UX Design</h2>
                    </div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/kbZejnPXyLM?si=n6_TUZbjv_UTEXgL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <div class="video-title">
                          <h3>Figma UX Design UI Essentials Course <br> For Beginners by <a class="credits" href="https://www.youtube.com/@BringYourOwnLaptop" target="_blank">Bring Your Own Laptop</a></h3>
                      </div>
                  </div>
                    </div>
                </div>
            </div>`;
    }

    function showGoogleSheetsContent() {
      document.getElementById("main-content-type").innerHTML = "";
      videoContainer.style.display = "block";
      videoContainer.innerHTML = `<div class="note">
              <h3>These all videos are available only in <span>English Language</span></h3>
            </div>
            <div class="video-cat" id="video-cat">
                <div class="category show" id="googleScriptEng">
                    <div class="heading-text">
                        <h2 class="googleLang">Google Sheets</h2>
                    </div>
                    <hr>
                    <div class="video-content-cont">
                        <div class="video-container">
                            <div class="video-category">
                                <h2>Appscript Language</h2>
                            </div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=ZSCwfggOKka14hTo&amp;list=PLv9Pf9aNgemv62NNC5bXLR0CzeaIj5bcw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <div class="video-title">
                                <h3>Appscript by <a class="credits" href="https://www.youtube.com/@excelGoogleSheets" target="_blank">Learn Google Sheets & Excel Spreadsheets</a></h3>
                                <h3><a class="credits" href="https://www.youtube.com/playlist?list=PLv9Pf9aNgemv62NNC5bXLR0CzeaIj5bcw" target="_blank">Full Playlist Check from Here</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
    }

    function showOtherLanguagesContent() {
      document.getElementById("main-content-type").innerHTML = "";
      videoContainer.style.display = "block";
      videoContainer.innerHTML = `<div class="note">
              <h3>These all videos are available only in <span>English Language</span></h3>
            </div>
            <div class="video-cat" id="video-cat">
                <div class="category show" id="otherCatEng">
                    <div class="heading-text">
                        <h2 class="otherlang">Classic & Essential Languages</h2>
                    </div>
                    <hr>
                    <div class="video-content-cont">
                        <div class="video-container">
                            <div class="video-category">
                                <h2>C Language</h2>
                            </div>
                            <iframe width="560" height="315"
                                src="https://www.youtube-nocookie.com/embed/87SH2Cn0s9A?si=4sYgB23x7KsG7oyd&start=6"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; gyroscope; encrypted-media; picture-in-picture; web-share"
                                allowfullscreen></iframe>
                            <div class="video-title">
                                <h3>C Language Beginner to Professional by <a class="credits" href="https://www.youtube.com/@BroCodez" target="_blank">Bro Code</a></h3>
                            </div>
                        </div>
                        <div class="video-container">
                            <div class="video-category">
                                <h2>C++ Language</h2>
                            </div>
                            <iframe width="560" height="315"
                                src="https://www.youtube-nocookie.com/embed/-TkoO8Z07hI?si=QWw14hfPLGlO8c0z&start=3"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; gyroscope; encrypted-media; picture-in-picture; web-share"
                                allowfullscreen></iframe>
                            <div class="video-title">
                                <h3>C++ Beginner to Professional by <a class="credits"
                                        href="https://www.youtube.com/@BroCodez" target="_blank">Bro Code</a></h3>
                            </div>
                        </div>
                        <div class="video-container">
                            <div class="video-category">
                                <h2>C# Language</h2>
                            </div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/wxznTygnRfQ?si=HwPBUZKkOrrAO7w9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <div class="video-title">
                                <h3>C# Beginner to Professional by <a class="credits" href="https://www.youtube.com/@BroCodez" target="_blank">Bro Code</a></h3>
                            </div>
                        </div>
                    </div>
                    <div class="video-content-cont">
                        <div class="video-container">
                            <div class="video-category">
                                <h2>Data Structure & Algorithms using JAVA</h2>
                            </div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/CBYHwZcbD-s?si=buFFkepiMlai8XU0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <div class="video-title">
                                <h3>Data Structure & Algorithms using JAVA Beginner to Professional by <a class="credits"
                                        href="https://www.youtube.com/@BroCodez" target="_blank">Bro Code</a></h3>
                            </div>
                        </div>
                        <div class="video-container">
                            <div class="video-category">
                                <h2>Data Structure Using C & C++</h2>
                            </div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/B31LgI4Y4DQ?si=AjsbM-GLlFkhJ1qB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <div class="video-title">
                                <h3>Data Structure using C & C++ Beginner to Professional by <a class="credits"
                                        href="https://www.youtube.com/@freecodecamp.org" target="_blank">freecodecamp.org</a></h3>
                            </div>
                        </div>
                        <div class="video-container">
                            <div class="video-category">
                                <h2>Data Structure & Algorithms using Python</h2>
                            </div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/pkYVOmU3MgA?si=7lGAobBPNmYT0tgA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <div class="video-title">
                                <h3>Data Structure using Python Beginner to Professional by <a class="credits"
                                        href="https://www.youtube.com/@freecodecamp.org" target="_blank">freecodecamp.org</a></h3>
                            </div>
                        </div>
                    </div>
                    <div class="video-content-cont">
                        <div class="video-container">
                            <div class="video-category">
                                <h2>Java Language</h2>
                            </div>
                            <iframe width="560" height="315"
                                src="https://www.youtube-nocookie.com/embed/xk4_1vDrzzo?si=FpTwyteKoV3hncrl&start=1"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen></iframe>
                            <div class="video-title">
                                <h3>Java Beginner to Professional by <a class="credits"
                                        href="https://www.youtube.com/@BroCodez" target="_blank">Bro Code</a></h3>
                            </div>
                        </div>
                        <div class="video-container">
                            <div class="video-category">
                                <h2>Java GUI Course</h2>
                            </div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/Kmgo00avvEw?si=wmVMuEZ6-DTigFNd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <div class="video-title">
                                <h3>Java GUI Beginner to Professional by <a class="credits"
                                        href="https://www.youtube.com/@BroCodez" target="_blank">Bro Code</a></h3>
                            </div>
                        </div>
                        <div class="video-container">
                            <div class="video-category">
                                <h2>Python</h2>
                            </div>
                            <iframe width="560" height="315"
                                src="https://www.youtube-nocookie.com/embed/XKHEtdqhLK8?si=8Z_Frdxbg-QPHfPy&start=8"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; gyroscope; encrypted-media; picture-in-picture; web-share"
                                allowfullscreen></iframe>
                            <div class="video-title">
                                <h3>Python Beginner to Professional by <a class="credits"
                                        href="https://www.youtube.com/@BroCodez" target="_blank">Bro Code</a>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
    }

    function showFrontendContent() {
      videoContainer.style.display = "block";
      videoContainer.innerHTML = `<div class="note">
              <h3>These all videos are available only in <span>English Language</span></h3>
            </div>
            <div class="video-cat">
                <div class="category show" id="webDevCatEng">
                    <div class="heading-text">
                        <h2>Front-End Development</h2>
                    </div>
                    <hr>
                    <div class="video-content-cont">
                        <div class="video-container">
                            <div class="video-category">
                                <h2>HTML, CSS</h2>
                            </div>
                            <iframe width="560" height="315"
                                src="https://www.youtube-nocookie.com/embed/bWACo_pvKxg?si=wDl6dZqUlEklEFkh"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; gyroscope; encrypted-media; picture-in-picture; web-share"
                                allowfullscreen></iframe>
                            <div class="video-title">
                                <h3>HTML & CSS From Beginner to Professional by <a class="credits" href="https://www.youtube.com/@huxnwebdev" target="_blank">HuXn Webdev</a>
                                </h3>
                            </div>
                        </div>
                        <div class="video-container">
                            <div class="video-category">
                                <h2>SASS</h2>
                            </div>
                            <iframe width="560" height="315"
                                src="https://www.youtube.com/embed/sb4Nnc6VtZI?si=-MKaICgoIhTPyxae"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen></iframe>
                            <div class="video-title">
                                <h3>SASS From Beginner to Professional by <a class="credits"
                                        href="https://www.youtube.com/@huxnwebdev" target="_blank">HuXn
                                        Webdev</a>
                                </h3>
                            </div>
                        </div>
                        <div class="video-container">
                            <div class="video-category">
                                <h2>Javascript</h2>
                            </div>
                            <iframe width="560" height="315"
                                src="https://www.youtube-nocookie.com/embed/H3XIJYEPdus?si=NKVliz5cx8T4gGSV"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; gyroscope; encrypted-media; picture-in-picture; web-share"
                                allowfullscreen></iframe>
                            <div class="video-title">
                                <h3>Javascript From Beginner to Professional by <a class="credits"
                                        href="https://www.youtube.com/@huxnwebdev" target="_blank">HuXn
                                        Webdev</a>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div class="video-content-cont">
                        <div class="video-container">
                            <div class="video-category">
                                <h2>React.JS</h2>
                            </div>
                            <iframe width="560" height="315"
                                src="https://www.youtube-nocookie.com/embed/XrwsMN2IWnE?si=Dknxhy3pjGzjOmFA&start=3"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; gyroscope; encrypted-media; picture-in-picture; web-share"
                                allowfullscreen></iframe>
                            <div class="video-title">
                                <h3>React.js From Beginner to Professional by <a class="credits"
                                        href="https://www.youtube.com/@huxnwebdev" target="_blank">HuXn Webdev</a>
                                </h3>
                            </div>
                        </div>
                        <div class="video-container">
                            <div class="video-category">
                                <h2>Typescript</h2>
                            </div>
                            <iframe width="560" height="315"
                                src="https://www.youtube-nocookie.com/embed/zeCDuo74uzA?si=lsrT19i1DLHsWtXp"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; gyroscope;  encrypted-media; picture-in-picture; web-share"
                                allowfullscreen></iframe>
                            <div class="video-title">
                                <h3>Typescript From Beginner to Professional by <a class="credits"
                                        href="https://www.youtube.com/@huxnwebdev" target="_blank">HuXn Webdev</a>
                                </h3>
                            </div>
                        </div>
                        <div class="video-container">
                            <div class="video-category">
                                <h2>Angular.js</h2>
                            </div>
                            <iframe width="560" height="315"
                                src="https://www.youtube.com/embed/9b9pLgaSQuI?si=_b3E9SSiA-ukYkN2"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen></iframe>
                            <div class="video-title">
                                <h3>Angular.js For Beginners by <a class="credits"
                                        href="https://www.youtube.com/@MyLesson007" target="_blank">My Lesson</a>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div class="video-content-cont">
                        <div class="video-container">
                            <div class="video-category">
                                <h2>Vue.js</h2>
                            </div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/FXpIoQ_rT_c?si=DsvGlx8a0aU1Z2li" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <div class="video-title">
                                <h3>Vue.js For Beginners by <a class="credits"
                                    href="https://www.youtube.com/@freecodecamp.org" target="_blank">FreeCodeCamp.org</a>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
    }

    function showBackendContent() {
      videoContainer.style.display = "block";
      videoContainer.innerHTML = `<div class="note">
              <h3>These all videos are available only in <span>English Language</span></h3>
            </div>
            <div class="video-cat">
                <div class="category show" id="webDevCatEng">
                    <div class="heading-text">
                        <h2>Back-End Development</h2>
                    </div>
                    <hr>
                    <div class="video-content-cont">
                        <div class="video-container">
                            <div class="video-category">
                                <h2>Node.JS & Express.JS</h2>
                            </div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/Oe421EPjeBE?si=fWqdCI867b_-2aTr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <div class="video-title">
                                <h3>Node.js & Express.js From Beginner to Professional by <a class="credits" href="https://www.youtube.com/@freecodecamp" target="_blank">FreeCodeCamp.org</a>
                                </h3>
                            </div>
                        </div>
                        <div class="video-container">
                            <div class="video-category">
                                <h2>PHP</h2>
                            </div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/zZ6vybT1HQs?si=lktA7ClsszH5ue1_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <div class="video-title">
                                <h3>PHP From Beginner to Professional by <a class="credits" href="https://www.youtube.com/@brocode" target="_blank">Bro Code</a>
                                </h3>
                            </div>
                        </div>
                        <div class="video-container">
                            <div class="video-category">
                                <h2>Laravel for PHP</h2>
                            </div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/ImtZ5yENzgE?si=9zHmCQPEx4ngzUAH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <div class="video-title">
                                <h3>Laravel for PHP From Beginner to Professional by <a class="credits" href="https://www.youtube.com/@freecodecamp" target="_blank">FreeCodeCamp.org</a>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div class="video-content-cont">
                        <div class="video-container">
                            <div class="video-category">
                                <h2>Spring for JAVA</h2>
                            </div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/Jl9OKQ92SJU?si=Tx_hrFCVoho5Pkdj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <div class="video-title">
                                <h3>Spring for JAVA From Beginner to Professional by <a class="credits" href="https://www.youtube.com/@Telusko" target="_blank">Telusko</a>
                                </h3>
                            </div>
                        </div>
                        <div class="video-container">
                            <div class="video-category">
                                <h2>Ruby</h2>
                            </div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/t_ispmWmdjY?si=r7s2WvIz-R_eMMt3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <div class="video-title">
                                <h3>Ruby From Beginner to Professional by <a class="credits" href="https://www.youtube.com/@" target="_blankfreecodecamp">FreeCodeCamp.org</a>
                                </h3>
                            </div>
                        </div>
                        <div class="video-container">
                            <div class="video-category">
                                <h2>Ruby on Rails</h2>
                            </div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/fmyvWz5TUWg?si=IFlK09Jmn4qXyqTQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <div class="video-title">
                                <h3>Ruby on Rails For Beginners by <a class="credits" href="https://www.youtube.com/@freecodecamp" target="_blank">FreeCodeCamp.org</a>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div class="video-content-cont">
                        <div class="video-container">
                            <div class="video-category">
                                <h2>ASP.Net for C#</h2>
                            </div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/kdPtNMb8tPw?si=iW4SCbPLWelwfUPj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <div class="video-title">
                                <h3>ASP.Net for C# For Beginners by <a class="credits" href="https://www.youtube.com/@Intellipaat" target="_blank">Intellipaat</a>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
    }
  } else if (opt === "hindi") {
    catButtons.style.display = "block";
    videoContainer.style.display = "none";
    contSelection.innerHTML = "";
    alertMsg.innerHTML =
      "<span>New Content Added in English Language Also.</span>";
    // console.log("Hindi");

    function showUiuxContent() {
      document.getElementById("main-content-type").innerHTML = "";
      videoContainer.style.display = "block";
      videoContainer.innerHTML = `<div class="note">
                <h3>These all videos are available only in <span>Hindi Language</span></h3>
              </div>
              <div class="video-cat" id="video-cat">
                  <div class="category show" id="uiuxDesignEng">
                      <div class="heading-text">
                          <h2 class="uiux">UI/UX Design</h2>
                      </div>
                      <hr>
                      <div class="video-content-cont">
                            <div class="video-container">
                                <div class="video-category">
                                    <h2>Adobe Xd UI/UX Design</h2>
                                </div>
                              <iframe width="560" height="315" src="https://www.youtube.com/embed/ddQHFKVrCkU?si=FPiyV_VNhUOWpIgP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <div class="video-title">
                                    <h3>Adobe UI/UX Design For Beginners by <a  class="credits" href="https://www.youtube.com/@wscubetech" target="_blank">WsCube Tech</a></h3>
                                </div>
                            </div>
                            <div div class="video-container">
                                <div class="video-category">
                                    <h2>Full UI/UX Design</h2>
                                </div>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/e_dv7GBHka8?si=Pfmct7Ox1p3GSLgK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <div class="video-title">
                                    <h3>Full UI/UX Design Course For Beginners by <a class="credits" href="https://www.youtube.com/@LetsUncover" target="_blank">Lets Uncover</a></h3>
                                </div>
                            </div>
                      </div>
                  </div>
              </div>`;
    }

    function showGoogleSheetsContent() {
      document.getElementById("main-content-type").innerHTML = "";
      videoContainer.style.display = "block";
      videoContainer.innerHTML = `<div class="note">
                <h3>These all videos are available only in <span>Hindi Language</span></h3>
              </div>
              <div class="video-cat" id="video-cat">
                  <div class="category show" id="googleScriptHindi">
                      <div class="heading-text">
                          <h2 class="googleLang">Google Sheets</h2>
                      </div>
                      <hr>
                      <div class="video-content-cont">
                          <div class="video-container ">
                              <div class="video-category">
                                  <h2>Appscript Language</h2>
                              </div>
                              <div class="coming-up-text">
                                <h2>Video Not Available In Hindi Currently. <br>Please, Come Back Later!</h2>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>`;
    }

    function showOtherLanguagesContent() {
      document.getElementById("main-content-type").innerHTML = "";
      videoContainer.style.display = "block";
      videoContainer.innerHTML = `<div class="note">
                <h3>These all videos are available only in <span>Hindi Language</span></h3>
              </div>
              <div class="video-cat">
                  <div class="category show" id="pythonCatHindi">
                      <div class="heading-text">
                          <h2 class="otherlang">Classic & Essential Languages</h2>
                      </div>
                      <hr>
                      <div class="video-content-cont">
                          <div class="video-container">
                                <div class="video-category">
                                    <h2>C Language</h2>
                                </div>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/ZSPZob_1TOk?si=bCFXjdTHorPNyIJO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                <div class="video-title">
                                  <h3>C language For Beginners by <a class="credits" href="https://www.youtube.com/@CodeWithHarry" target="_blank">CodeWithHarry</a>
                                  </h3>
                                </div>
                            </div>
                            <div class="video-container">
                                <div class="video-category">
                                    <h2>C++ Language</h2>
                                </div>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/e7sAf4SbS_g?si=P9OTOZ4sZJyTmGoP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <div class="video-title">
                                    <h3>C++ language For Beginners by <a class="credits" href="https://www.youtube.com/@CollegeWallahbyPW" target="_blank">College Wallah</a></h3>
                                </div>
                            </div>
                            <div class="video-container">
                                <div class="video-category">
                                    <h2>C# Language</h2>
                                </div>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/SuLiu5AK9Ps?si=udxTtOkdEhMUKfJu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <div class="video-title">
                                    <h3>C# language For Beginners by <a class="credits" href="https://www.youtube.com/@CodeWithHarry" target="_blank">CodeWithHarry</a></h3>
                                </div>
                            </div>
                        </div>
                        <div class="video-content-cont">
                            <div class="video-container">
                                <div class="video-category">
                                    <h2>C# Game Development on Unity</h2>
                                </div>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/IjqN3GvQSy8?si=6Kbp6vQnX-m6iB-J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <div class="video-title">
                                    <h3>C# Game Development on Unity For Beginners by <a class="credits" href="https://www.youtube.com/@tecnezo" target="_blank">Tecenzo</a></h3>
                                </div>
                            </div>
                            <div class="video-container">
                                <div class="video-category">
                                    <h2>Data Structure & Algorithms using C/C++</h2>
                                </div>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/OkS9YkfW50s?si=C9p3lim70F2zsyiu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <div class="video-title">
                                    <h3>DSA using C/C++ For Beginners by <a class="credits" href="https://www.youtube.com/@codingseekho" target="_blank">CoDing SeeKho</a></h3>
                                </div>
                            </div>
                            <div class="video-container">
                                <div class="video-category">
                                    <h2>Data Structure & Algorithms using Python</h2>
                                </div>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/f9Aje_cN_CY?si=O9SV-LKzuqi0-iEP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <div class="video-title">
                                    <h3>DSA using Python For Beginners by <a class="credits" href="https://www.youtube.com/@campusx-official" target="_blank">CampusX</a></h3>
                                </div>
                            </div>
                        </div>
                        <div class="video-content-cont">
                            <div class="video-container">
                                <div class="video-category">
                                    <h2>Java Language</h2>
                                </div>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/ECT-ehj-q7s?si=ZiFisRud5NPx3tAh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <div class="video-title">
                                      <h3>JAVA language For Beginners by <a class="credits" href="https://www.youtube.com/@JTCINDIA" target="_blank">JTC INDIA</a></h3>
                                </div>
                            </div>
                            <div class="video-container">
                                <div class="video-category">
                                    <h2>Java Language</h2>
                                </div>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/32DLasxoOiM?si=kkS7nATXsu2KzVyE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <div class="video-title">
                                      <h3>JAVA language For Beginners by <a class="credits" href="https://www.youtube.com/@codingseekho" target="_blank">CoDing SeeKho</a></h3>
                                </div>
                            </div>
                            <div class="video-container">
                                <div class="video-category">
                                    <h2>Python</h2>
                                </div>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/ERCMXc8x7mc?si=vfyVDMIpwH9Q_b6m" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <div class="video-title">
                                    <h3>Python language For Beginners by <a class="credits" href="https://www.youtube.com/@ApnaCollegeOfficial" target="_blank">Apna College</a></h3>
                                </div>
                            </div>
                      </div>
                  </div>
              </div>`;
    }

    function showFrontendContent() {
      videoContainer.style.display = "block";
      videoContainer.innerHTML = `<div class="note">
                    <h3>These all videos are available only in <span>Hindi Language</span></h3>
                </div>
                <div class="video-cat">
                    <div class="category show" id="webDevCatHindi">
                        <div class="heading-text">
                            <h2>Front-End Development</h2>
                        </div>
                        <hr>
                        <div class="video-content-cont">
                            <div class="video-container">
                                <div class="video-category">
                                    <h2>HTML</h2>
                                </div>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/HcOc7P5BMi4?si=jez_nOOVANJ0gabt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <div class="video-title">
                                    <h3>HTML language For Beginners to Advanced by <a class="credits" href="https://www.youtube.com/@ApnaCollegeOfficial" target="_blank">Apna College</a></h3>
                                </div>
                            </div>
                            <div class="video-container">
                                <div class="video-category">
                                    <h2>CSS</h2>
                                </div>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/ESnrn1kAD4E?si=TjMWxwASRMybEm7X" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <div class="video-title">
                                    <h3>CSS For Beginners to Advanced by <a class="credits" href="https://www.youtube.com/@ApnaCollegeOfficial" target="_blank">Apna College</a></h3>
                                </div>
                            </div>
                            <div class="video-container">
                                <div class="video-category">
                                    <h2>SASS</h2>
                                </div>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/tEQOdFgUXI4?si=T2a8d7Qy7tXpMSoQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <div class="video-title">
                                    <h3>CSS For Beginners to Advanced by <a class="credits" href="https://www.youtube.com/@ThapaTechnical" target="_blank">Thapa Technical</a></h3>
                                </div>
                            </div>
                        </div>
                        <div class="video-content-cont">
                            <div class="video-container">
                                <div class="video-category">
                                    <h2>Javascript</h2>
                                </div>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/13gLB6hDHR8?si=vvlmwyac1KVxIpED" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <div class="video-title">
                                    <h3>CSS For Beginners to Advanced by <a class="credits" href="https://www.youtube.com/@ThapaTechnical" target="_blank">Thapa Technical</a></h3>
                                </div>
                            </div>
                            <div class="video-container">
                                <div class="video-category">
                                    <h2>React.JS</h2>
                                </div>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/eILUmCJhl64?si=_FZTuMF1Bdw6pgNI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <div class="video-title">
                                    <h3>React.JS For Beginners to Advanced by <a class="credits" href="https://www.youtube.com/@KG_Coding" target="_blank">KG Coding by Prashant Sir</a></h3>
                                </div>
                            </div>
                            <div class="video-container">
                                <div class="video-category">
                                    <h2>Typescript</h2>
                                </div>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/66_bET6sI20?si=-Dn3_LOAyDMSSBf9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <div class="video-title">
                                    <h3>Typescript For Beginners to Advanced by <a class="credits" href="https://www.youtube.com/@6PackProgrammer" target="_blank">6 Pack Programmer</a></h3>
                                </div>
                            </div>
                        </div>
                        <div class="video-content-cont">
                            <div class="video-container">
                                <div class="video-category">
                                    <h2>Angular.JS</h2>
                                </div>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/0LhBvp8qpro?si=y-zEZpwwdh4OIMxT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <div class="video-title">
                                    <h3>Angular.JS For Beginners to Advanced by <a class="credits" href="https://www.youtube.com/@codewithharry" target="_blank">CodeWithHarry</a></h3>
                                </div>
                            </div>
                            <div class="video-container">
                                <div class="video-category">
                                    <h2>Vue.JS</h2>
                                </div>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/0xt_Jv-P_Vo?si=Uj2XQrNoNd7LMgut" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <div class="video-title">
                                    <h3>Vue.JS For Beginners to Advanced by <a class="credits" href="https://www.youtube.com/@codestepbystep" target="_blank">Code Step By Step</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
    }

    function showBackendContent() {
      videoContainer.style.display = "block";
      videoContainer.innerHTML = `<div class="note">
                    <h3>These all videos are available only in <span>Hindi Language</span></h3>
                </div>
                <div class="video-cat">
                    <div class="category show" id="webDevCatEng">
                        <div class="heading-text">
                            <h2>Back-End Development</h2>
                        </div>
                        <hr>
                        <div class="video-content-cont">
                            <div class="video-container ">
                                <div class="video-category">
                                    <h2>Node.JS/ Express.JS/ MongoDB</h2>
                                </div>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/ChVE-JbtYbM?si=XIQXld2yaJS4hNjk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <div class="video-title">
                                    <h3>Node.JS For Beginners to Advanced by <a class="credits" href="https://www.youtube.com/@coderdost" target="_blank">Coder Dost</a></h3>
                                </div>
                            </div>
                            <div class="video-container ">
                                <div class="video-category">
                                    <h2>PHP</h2>
                                </div>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/1SnPKhCdlsU?si=kMziP5LJipoj-Pn_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <div class="video-title">
                                    <h3>PHP For Beginners to Advanced by <a class="credits" href="https://www.youtube.com/@codewithharry" target="_blank">CodeWithHarry</a></h3>
                                </div>
                            </div>
                            <div class="video-container ">
                                <div class="video-category">
                                    <h2>Laravel PHP</h2>
                                </div>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/xIApzP4mWyA?si=3y75_I741C9PIEW2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <div class="video-title">
                                    <h3>PHP For Beginners to Advanced by <a class="credits" href="https://www.youtube.com/@wscubetech" target="_blank">WsCube Tech</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
    }
  } else {
    catButtons.style.display = "none";
    videoContainer.style.display = "none";
    contSelection.innerHTML = "";
    alertMsg.innerHTML = "";
    // console.log("Select Language");
  }
};
