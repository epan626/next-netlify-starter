import Head from 'next/head';
import Script from 'next/script';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
     <Head>
     <title>Eric Pan</title>
     <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap" rel="stylesheet"/>
     <link href="https://fonts.googleapis.com/css2?family=Yellowtail&display=swap" rel="stylesheet"/>
     </Head>

    <div class="landing">
            <div class="container">
                <div id="stateBanner">
                    <p>You are currently viewing: Eric Pan's <h1 id="locationText"> homepage</h1>.</p>
                </div>
                <div id="leftSide">
                    <nav class="landingOptionsCont">
       
                        <button class="meSwitcher active" onClick={(e) => switchThis(e, "me")} id="meSwitcher" tabindex="0" ><div class="landingOptionMe"><span class="landingOptionText">Me</span><span class="toolTips">A little bit about myself.</span> </div> </button>
                        <button class="resumeSwitcher" onClick={(e) => switchThis(e, "resume")} id="resumeSwitcher"  tabindex="0"><div class="landingOptionWork"><span class="landingOptionText">Resume</span><span class="toolTips">Some of my work experiences.</span></div> </button>               
                    </nav>
                    <div class="landingCont">
                        <p><span>Try using your keyboard to navigate this site.</span></p>
                    </div> 
                </div>
                <div id="rightSide"> 
                    <div class="aboutMeContainer">
                        <div class="profile">
                            <img src="/ProfilePic.jpg" alt="Yes, this is an actual picture of Eric Pan"/>
                        </div>
                        <div class="bio">
                            <h1>Hi, I'm Eric Pan.</h1>
                            <p>Welcome to my page.</p>
                            <p>My skill sets are focused around digital accessibility and web development.</p>
                            <p>I am currently learning about Web 3.</p>
                            <p>Trying to reach me? Contact me at: <a href="mailto:epan626@gmail.com">epan626@gmail.com</a></p>
                        </div>
                    </div>
                    <div class="highlightContainer">
                      <label class="switch">
                          <input autocomplete="off" id="highlighter" onClick={(e) => highlightThis(e)} type="checkbox" value="true"/> <span>Turn <span id="highlightState">on</span> highlights.</span>
                      </label>
                    </div>
                    <div class="resumeContainer" tabindex="-1">
                        <div class="jobContainer">
                            <div class="jobResponsbilities">
                                <div class="jobNameDuration"><h3>Los Angeles Housing Department</h3>
                                <p class="start">10/2018 - Present</p> </div>
                                <h2 class="jobTitle">Systems Analyst</h2>
                                <p>Department's <span tabindex="0" class="highlight">webmaster<span class="toolTips">Responsible for the department's public facing websites with over a million visitors each year.</span>.</span></p>
                                <p><span tabindex="0" class="highlight">Redesigned and rebranded <span class="toolTips">Increased web traffic by 40% the following year after the redesign.</span></span> the department's website.</p>
                                <p><span tabindex="0" class="highlight">Supervised<span class="toolTips">Trained, mentored, and monitored staff to be proficient in performing their task. Some promoted and stayed within the city. Others moved onto better opportunites in the private sector.</span> </span> System Contractors and Student Workers.</p>
                                <p>Trained and provided support department wide in <span tabindex="0" class="highlight">Web and PDF Accessbility<span class="toolTips">Led and developed PDF accessibility training department wide. Training includes: user manual, virtual, in-person, one-on-one, and group trainings. Provided development support for web accessibility.</span></span>.</p>                            
                                <p class="textBlock">Tech used: <span tabindex="0" class="highlight">Wordpress, Drupal,<span class="toolTips">Content Management Systems (CMS)</span></span> <span tabindex="0" class="highlight">Monsido, CommonLook, Adobe Pro, NVDA, JAWS,<span class="toolTips">Accessibility Tools</span></span> <span tabindex="0" class="highlight">IIS, Windows Server 2016/2019, Apache,<span class="toolTips smaller">Servers</span></span>  <span tabindex="0" class="highlight">ServiceNow, Jira<span class="toolTips smaller">Ticketing System</span></span>  <span tabindex="0" class="highlight">GitHub, GIT, Team Foundation Server (TFS) <span class="toolTips smaller moveleft">Source Control</span></span></p>
                            </div>     
                        </div>
                        <div class="jobContainer">
                            <div class="jobResponsbilities">
                                <div class="jobNameDuration"><h3>Department of Children and Family Services</h3>
                                <p class="start">4/2017 - 10/2018</p> </div>
                                <h2 class="jobTitle">Children's Social Worker</h2>
                                <p>Continuous Service Case Manager</p>
                                <p>Worked with families to provide safety, well-being, and permanency to children.</p>
                                <p>Referred families to service providers.</p>
                                <p>Reported observations and findings to <span tabindex="0" class="highlight">court.<span class="toolTips">Wrote reports for court hearings.</span></span></p>
                            </div>  
                        </div>
                        <div class="jobContainer">
                            <div class="jobResponsbilities">
                                <div class="jobNameDuration"><h3>Department of Building and Safety</h3>
                                <p class="start">2/2016 - 10/2016</p> </div>
                                <h2 class="jobTitle">Administrative Clerk</h2>
                                <p>Worked in the Financial Services Department.</p>
                                <p>Prepared lien reports to City Council.</p>
                                <p>Created official lien notices and releases to the property owners.</p>
                            </div>
                        </div>
                        <div class="jobContainer">
                            <div class="jobResponsbilities">
                                <div class="jobNameDuration"><h3>Arey Jones</h3>
                                <p class="start">10/2014 - 9/2015</p> </div>
                                <h2 class="jobTitle">PC Technician</h2>
                                <p>Provided flexible support options that respect each school or district’s specific requirements.</p>
                                <p>Duties: Asset tag management, BIOS configuration, enterprise enrollment, imaging desktops/laptops to
                                    their respected settings, script editing, provided tech support in the field, upgrading
                                    desktop/laptop hardware and software, workbench testing</p>
                                <p class="textBlock">Tech used: OS, Windows 7 and 8.1, Absolute, MS office, <span tabindex="0" class="highlight upper moveLeft">SoftThink, Ghost, GimageX, Sysprep, Fred, Deployment Studios.<span class="toolTips">Imaging Softwares</span></span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accessibilityTips">
                    <p>Keyboard Tips: Use <span>Tab</span> to navigate and <span>Spacebar</span> to interact.</p>
                </div>
            </div>
        </div>
        <script
            dangerouslySetInnerHTML={{
              __html: `
              const resume = document.getElementsByClassName('resumeContainer');
              const highlight = document.getElementsByClassName('highlightContainer');
              const aboutMe = document.getElementsByClassName('aboutMeContainer');
              const meSwitch = document.getElementById('meSwitcher');
              const resumeSwitch = document.getElementById('resumeSwitcher');
              const switchThis = (e, text) => {
                if(text == "resume") {
                  resume[0].style.display = "block";
                  aboutMe[0].style.display = "none";
                  resumeSwitch.style.background = "#8e8e8e";
                  meSwitch.style.background = "#366f57";
                  meSwitch.classList.remove("active");
                  resumeSwitch.classList.add("active");
                  highlight[0].style.display = "block";
                  document.getElementById('locationText').innerHTML = "resume";
                } else {
                  aboutMe[0].style.display = "block"
                  resume[0].style.display = "none";     
                  meSwitch.style.background = "#8e8e8e";
                  resumeSwitch.style.background = "#366f57";
                  resumeSwitch.classList.remove("active");
                  meSwitch.classList.add("active");
                  highlight[0].style.display = "none";
                  document.getElementById('locationText').innerHTML = "homepage";
                }
              };
                  `,
            }}
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              const text = document.getElementsByClassName('highlight');
              const textBlock = document.getElementsByClassName('textBlock');
              const highlightState = document.getElementById('highlightState');
              var flag = false;
              const highlightThis = (e) => {
                if(flag == false) {
                  document.getElementById('highlightState').innerHTML = "off"
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
                    document.getElementById('highlightState').innerHTML = "on"
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
              };
                  `,
            }}
          ></script>
        </Fragment>
  )
}
