import Head from 'next/head';
// import Header from '@components/Header'
// import Footer from '@components/Footer'
// import Custom from '@components/Custom'
import Script from 'next/script';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
     <Head>
     <title>Eric Pan</title>
     <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Yellowtail&display=swap" rel="stylesheet"/>
      {/* <Script type="text/javascript" src="/static/custom.js" dangerouslySetInnerHTML={{ __html: process.env.rawJsFromFile }}></Script> */}
      <script
            dangerouslySetInnerHTML={{
              __html: `
              const switchThis = (e, text) => {
                console.log(text);
              };
                  `,
            }}
          ></script>
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
                    <div class="resumeContainer" tabindex="-1">
                        <div class="jobContainer">
                            <div class="jobResponsbilities">
                                <div class="jobNameDuration"><h3>Los Angeles Housing Department</h3>
                                <p class="start">10/2018 - Present</p> </div>
                                <h2 class="jobTitle">Systems Analyst</h2>
                                <p>Department's <span tabindex="0" class="highlight">webmaster<span class="toolTips">Responsible for maintaining, upgrading, and supporting the department's public facing websites and intranet.</span>.</span></p>
                                <p><span tabindex="0" class="highlight">Supervised<span class="toolTips">Team was responsible for remediating PDFs for accessibility and providing web support.</span> </span> System Contractors and Student Workers.</p>
                                <p>Trained and provided support in <span tabindex="0" class="highlight">Web and PDF Accessbility<span class="toolTips">We used CommonLook, Monsido, and worked with third party auditors to ensure our websites were at least WCAG 2.0 compliant.</span></span>.</p>                            
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
                                <p class="textBlock">Tech used: <span tabindex="0" class="highlight upper">iOS, Windows 7 and 8.1,<span class="toolTips">Operating Systems</span></span>, Absolute, MS office, <span tabindex="0" class="highlight upper moveLeft">SoftThink, Ghost, GimageX, Sysprep, Fred, Deployment Studios.<span class="toolTips">Imaging Softwares</span></span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accessibilityTips">
                    <p>Keyboard Tips: Use <span>Tab</span> to navigate and <span>Spacebar</span> to interact.</p>
                </div>
            </div>
        </div>
        </Fragment>
  )
}
