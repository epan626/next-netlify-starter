export default function Customjs() {
    var flag = false
    function highlight(x) {

        const text = document.getElementsByClassName('highlight');
        const textBlock = document.getElementsByClassName('textBlock');
        const highlightState = document.getElementById('highlightState');
  
        if(flag == false) {
            highlightState.innerText = "off"
            for (let i = 0; i < text.length; i++) {
          
                text[i].style.background = '#eec870';
                text[i].style.padding = '2px';
                text[i].style.borderRadius = '5px';
                text[i].style.color  = '#AC0C0C';
                text[i].style.margin ="3px";
                
            }
            for (let x = 0; x < textBlock.length; x++) {
                textBlock[x].style.lineHeight = "30px";
            }
        
            flag = true
            } else {
                highlightState.innerText = "on"
                for (let i = 0; i < text.length; i++) {
                    text[i].style.background = '#fff3e8';
                text[i].style.padding = '0px';
                text[i].style.borderRadius = '0px';
                text[i].style.color  = '#595959';
                text[i].style.margin ="0px";
                }
                for (let x = 0; x < textBlock.length; x++) {
                    textBlock[x].style.lineHeight = "normal";
                }
                flag = false
            }  
    }
    const resume = document.getElementsByClassName('resumeContainer');
    const highlight = document.getElementsByClassName('highlightContainer');
    const aboutMe = document.getElementsByClassName('aboutMeContainer');
    const meSwitch = document.getElementById('meSwitcher');
    const locationText = document.getElementById('locationText');
    const resumeSwitch = document.getElementById('resumeSwitcher');
    resumeSwitch.addEventListener("click", function() {
        resume[0].style.display = "block";
        highlight[0].style.display = "block";
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
        highlight[0].style.display = "none";       
        meSwitch.style.background = "#8e8e8e";
        resumeSwitcher.style.background = "#366f57";
        resumeSwitcher.classList.remove("active");
        meSwitch.classList.add("active");
        locationText.innerText = "homepage"
    });


}
