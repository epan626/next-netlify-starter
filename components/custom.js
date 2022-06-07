export default function Customjs() {
  
    const resume = document.getElementsByClassName('resumeContainer');
    const highlight = document.getElementsByClassName('highlightContainer');
    const aboutMe = document.getElementsByClassName('aboutMeContainer');
    const meSwitch = document.getElementById('meSwitcher');
    const locationText = document.getElementById('locationText');
    const resumeSwitch = document.getElementById('resumeSwitcher');
    resumeSwitch.addEventListener("click", function() {
        resume[0].style.display = "block";
        // highlight[0].style.display = "block";
        aboutMe[0].style.display = "none";
        resumeSwitch.style.background = "#8e8e8e";
        meSwitch.style.background = "#366f57";
        meSwitch.classList.remove("active");
        resumeSwitch.classList.add("active");
        locationText.innerText = "resume"

      });

      meSwitch.addEventListener("click", function() {

        aboutMe[0].style.display = "block"
        resume[0].style.display = "none";
        // highlight[0].style.display = "none";       
        meSwitch.style.background = "#8e8e8e";
        resumeSwitcher.style.background = "#366f57";
        resumeSwitcher.classList.remove("active");
        meSwitch.classList.add("active");
        locationText.innerText = "homepage"
    });


}
