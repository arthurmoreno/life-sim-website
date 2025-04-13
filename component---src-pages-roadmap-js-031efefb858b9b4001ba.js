"use strict";(self.webpackChunklife_simulation_game=self.webpackChunklife_simulation_game||[]).push([[917],{8678:function(e,t,r){var a=r(7294),i=r(4160),o=r(1611);const n={margin:"0 auto",maxWidth:1200,padding:"0 1.0875rem 1.45rem",fontFamily:"-apple-system, Roboto, sans-serif, serif"},l={background:"linear-gradient(to right, "+o.Z.darkBlue+", "+o.Z.midBlue+")",marginBottom:"1.45rem",padding:"1rem 0",color:"white",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)",width:"100vw",position:"fixed",top:0,left:0,right:0,zIndex:1e3},s={margin:"0 auto",maxWidth:1200,padding:"0.5rem 1.0875rem",display:"flex",justifyContent:"space-between",alignItems:"center"},c={margin:0,fontSize:"1.8rem"},m={color:o.Z.white,textDecoration:"none",display:"flex",alignItems:"center"},d={display:"flex",listStyle:"none",margin:0,padding:0},u={margin:"0 0.5rem"},p={color:o.Z.white,textDecoration:"none",fontSize:"1.1rem",fontWeight:"500",padding:"0.6rem 1rem",borderRadius:"4px",transition:"all 0.2s ease",display:"block",position:"relative"},g={backgroundColor:o.Z.blueCyanDimmed,color:o.Z.lightCyan},h={marginTop:"4rem",padding:"2.5rem 0 1.5rem",background:"linear-gradient(to right, "+o.Z.darkBlue+", "+o.Z.midBlue+")",color:o.Z.white,textAlign:"center",position:"relative",overflow:"hidden",width:"100vw",left:"50%",right:"50%",marginLeft:"-50vw",marginRight:"-50vw"},y={position:"absolute",top:"0",left:"0",width:"100%",height:"75px",backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z' fill='%23ffffff' fill-opacity='0.1'%3E%3C/path%3E%3C/svg%3E\")",backgroundSize:"cover",backgroundPosition:"center"};t.Z=e=>{let{children:t,pageTitle:r}=e;return a.createElement("div",{className:"site-wrapper"},a.createElement("header",{style:l},a.createElement("div",{style:s},a.createElement("h1",{style:c},a.createElement(i.rU,{to:"/",style:m},"Life Simulation Game")),a.createElement("nav",null,a.createElement("ul",{style:d},a.createElement("li",{style:u},a.createElement(i.rU,{to:"/",style:p,activeStyle:g,className:"nav-link"},"Home")),a.createElement("li",{style:u},a.createElement(i.rU,{to:"/roadmap",style:p,activeStyle:g,className:"nav-link"},"Road Map")),a.createElement("li",{style:u},a.createElement(i.rU,{to:"/documentation",style:p,activeStyle:g,className:"nav-link"},"Documentation")),a.createElement("li",{style:u},a.createElement(i.rU,{to:"/download",style:p,activeStyle:g,className:"nav-link"},"Download")))))),a.createElement("div",{style:{...n,marginTop:"calc(3rem + 45px)"}},a.createElement("main",null,a.createElement("title",null,r," | Life Simulation Game"),t)),a.createElement("footer",{style:h},a.createElement("div",{style:y}),a.createElement("div",{style:{padding:"1rem",position:"relative",zIndex:"1"}},a.createElement("p",null,"© ",(new Date).getFullYear()," Life Simulation Game. All rights reserved."),a.createElement("div",{style:{marginTop:"1rem",display:"flex",justifyContent:"center",gap:"1.5rem"}},a.createElement("a",{href:"https://twitter.com/lifesimgame",style:{color:o.Z.lightCyan}},"Twitter"),a.createElement("a",{href:"https://discord.gg/lifesimgame",style:{color:o.Z.lightCyan}},"Discord"),a.createElement("a",{href:"https://github.com/lifesimgame",style:{color:o.Z.lightCyan}},"GitHub")))))}},8077:function(e,t,r){r.r(t),r.d(t,{default:function(){return B}});var a=r(7294),i=r(8678),o=r(4160),n=r(1611);const l=e=>{let{position:t,date:r,title:i,features:o,isActive:l,setActiveItem:s,index:c}=e;const m="left"===t,d={padding:"10px 40px",position:"relative",backgroundColor:"inherit",width:"50%",marginBottom:"30px",left:m?"0":"50%",cursor:"pointer",transition:"transform 0.3s ease",transform:l?"scale(1.03)":"scale(1)"},u={content:'""',position:"absolute",width:"25px",height:"25px",right:m?"-12px":"auto",left:m?"auto":"-12px",backgroundColor:l?n.Z.cyan:n.Z.blueCyan,border:"4px solid "+n.Z.white,top:"15px",borderRadius:"50%",zIndex:"1",transition:"background-color 0.3s ease, transform 0.3s ease",transform:l?"scale(1.2)":"scale(1)"},p={padding:"20px 30px",backgroundColor:l?n.Z.lightGray:n.Z.white,position:"relative",borderRadius:"6px",boxShadow:l?"0 5px 15px rgba(0, 0, 0, 0.15), 0 0 0 2px "+n.Z.cyan:"0 2px 10px rgba(0, 0, 0, 0.1)",transition:"all 0.3s ease",borderLeft:l?"4px solid "+n.Z.cyan:"none"},g={color:n.Z.darkBlue,marginBottom:"0.5rem",transition:"color 0.3s ease",fontSize:"1.3rem"},h={color:l?n.Z.blueCyan:n.Z.blueCyanDimmed,fontWeight:"500",fontSize:"0.9rem",marginBottom:"1rem",display:"inline-block"},y={marginBottom:"0.5rem",transition:"transform 0.3s ease",transformOrigin:"left"};return a.createElement("div",{style:d,onClick:()=>s(c),onMouseEnter:()=>s(c)},a.createElement("div",{style:u}),a.createElement("div",{style:p},a.createElement("h3",{style:g},i),a.createElement("small",{style:h},r),a.createElement("ul",{style:{padding:"0 0 0 1.2rem"}},o.map(((e,t)=>a.createElement("li",{key:t,style:{...y,transform:l?"translateX(5px)":"none",transitionDelay:.05*t+"s"}},e))))))};var s=e=>{let{timelineData:t}=e;const{0:r,1:i}=(0,a.useState)(0),o={content:'""',position:"absolute",width:"4px",backgroundColor:n.Z.blueCyan,backgroundImage:"linear-gradient("+n.Z.blueCyan+", "+n.Z.lightCyan+")",top:"0",bottom:"0",left:"50%",marginLeft:"-2px",zIndex:"0"};return a.createElement("div",{style:{position:"relative",maxWidth:"1000px",margin:"0 auto",paddingTop:"20px"}},a.createElement("div",{style:{position:"relative",padding:"0 10px"}},a.createElement("div",{style:o}),t.map(((e,t)=>a.createElement(l,{key:t,position:t%2==0?"left":"right",date:e.date,title:e.title,features:e.features,isActive:r===t,setActiveItem:i,index:t})))))};const c=e=>{let{title:t,description:r,icon:i,completed:o}=e;const{0:l,1:s}=(0,a.useState)(!1),c={backgroundColor:l?n.Z.lightGray:n.Z.white,borderRadius:"8px",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.08)",padding:"1.5rem",marginBottom:"1.5rem",transition:"all 0.3s ease",transform:l?"translateY(-3px)":"translateY(0)",border:"1px solid "+(l?n.Z.cyan:"transparent"),position:"relative",overflow:"hidden"},m={color:n.Z.darkBlue,fontSize:"1.3rem",marginBottom:"0.8rem",display:"flex",alignItems:"center"},d={color:n.Z.blueCyan,marginRight:"10px",fontSize:"1.5rem"},u={color:n.Z.midBlue,lineHeight:"1.6"},p={height:"4px",width:"100%",backgroundColor:n.Z.lightGray,borderRadius:"2px",marginTop:"1rem",position:"relative",overflow:"hidden"},g={position:"absolute",top:"0",left:"0",height:"100%",backgroundColor:o?n.Z.lightCyan:n.Z.blueCyan,width:o?"100%":"0%",transition:"width 1s ease-in-out"},h={position:"absolute",top:"1rem",right:"1rem",padding:"0.3rem 0.7rem",borderRadius:"20px",fontSize:"0.8rem",fontWeight:"bold",backgroundColor:o?n.Z.lightCyan:n.Z.blueCyanDimmed,color:o?n.Z.darkBlue:n.Z.white};return(0,a.useEffect)((()=>{const e=setTimeout((()=>{const e=document.getElementById("progress-"+t.replace(/\s+/g,"-").toLowerCase());e&&(e.style.width=o?"100%":"70%")}),300);return()=>clearTimeout(e)}),[t,o]),a.createElement("div",{style:c,onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1)},a.createElement("div",{style:m},a.createElement("span",{style:d},i),t),a.createElement("p",{style:u},r),a.createElement("div",{style:p},a.createElement("div",{id:"progress-"+t.replace(/\s+/g,"-").toLowerCase(),style:g})),a.createElement("div",{style:h},o?"Completed":"In Progress"))};var m=e=>{let{features:t}=e;return a.createElement("div",{style:{marginTop:"2rem"}},t.map(((e,t)=>a.createElement(c,{key:t,title:e.title,description:e.description,icon:e.icon,completed:e.completed}))))};var d=e=>{let{currentVersion:t,targetVersion:r,percentage:i}=e;const{0:o,1:l}=(0,a.useState)(0);(0,a.useEffect)((()=>{const e=setTimeout((()=>{l(i)}),300);return()=>clearTimeout(e)}),[i]);const s={backgroundColor:n.Z.white,borderRadius:"8px",boxShadow:"0 4px 15px rgba(0, 0, 0, 0.1)",padding:"2rem",marginBottom:"2rem",position:"relative",overflow:"hidden"},c={color:n.Z.darkBlue,fontSize:"1.5rem",margin:0},m={fontSize:"1.1rem",color:n.Z.midBlue},d={height:"10px",backgroundColor:n.Z.lightGray,borderRadius:"5px",position:"relative",overflow:"hidden",marginBottom:"1rem"},u={position:"absolute",top:0,left:0,height:"100%",width:o+"%",background:"linear-gradient(to right, "+n.Z.blueCyan+", "+n.Z.cyan+")",borderRadius:"5px",transition:"width 1.5s cubic-bezier(0.19, 1, 0.22, 1)"},p={color:n.Z.blueCyanDimmed,fontSize:"0.9rem",fontWeight:"bold"},g={color:n.Z.darkBlue,fontSize:"1.2rem",fontWeight:"bold"},h={position:"absolute",top:"-50%",left:"-50%",width:"200%",height:"200%",backgroundColor:n.Z.cyan,opacity:"0.05",borderRadius:"50%",transform:"scale("+o/100+")",transition:"transform 1.5s cubic-bezier(0.19, 1, 0.22, 1)"};return a.createElement("div",{style:s},a.createElement("div",{style:h}),a.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1.5rem"}},a.createElement("h2",{style:c},"Development Progress"),a.createElement("div",{style:m},a.createElement("span",{style:{fontWeight:"bold"}},t)," → ",a.createElement("span",null,r))),a.createElement("div",{style:d},a.createElement("div",{style:u})),a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},a.createElement("div",{style:p},"Progress Toward Full Release"),a.createElement("div",{style:g},o,"%")))};var u=e=>{let{images:t}=e;const{0:r,1:i}=(0,a.useState)(0),{0:l,1:s}=(0,a.useState)(!1);(0,a.useEffect)((()=>{const e=setInterval((()=>{c()}),5e3);return()=>clearInterval(e)}),[r]);const c=()=>{l||(s(!0),i((e=>(e+1)%t.length)),setTimeout((()=>s(!1)),500))},m={position:"relative",width:"100%",overflow:"hidden",borderRadius:"12px",boxShadow:"0 8px 30px rgba(0, 0, 0, 0.12)",marginBottom:"2rem",backgroundColor:n.Z.darkBlue,height:"400px"},d={display:"flex",height:"100%",transition:"transform 0.5s ease-in-out",transform:"translateX(-"+100*r+"%)"},u={minWidth:"100%",height:"100%",backgroundSize:"cover",backgroundPosition:"center",transition:"opacity 0.5s ease-in-out"},p={position:"absolute",top:"50%",transform:"translateY(-50%)",backgroundColor:"rgba(255, 255, 255, 0.2)",color:n.Z.white,border:"none",width:"50px",height:"50px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.5rem",cursor:"pointer",transition:"background-color 0.3s ease, transform 0.3s ease",zIndex:"2",backdropFilter:"blur(4px)",boxShadow:"0 2px 10px rgba(0, 0, 0, 0.1)","&:hover":{backgroundColor:"rgba(255, 255, 255, 0.3)",transform:"translateY(-50%) scale(1.05)"},"&:active":{transform:"translateY(-50%) scale(0.95)"}},g={...p,left:"20px"},h={...p,right:"20px"},y={position:"absolute",bottom:"60px",left:"0",width:"100%",textAlign:"center",color:n.Z.white,padding:"0 20px",zIndex:"2"};return a.createElement("div",{style:m},a.createElement("div",{style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",background:"linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 60%)",zIndex:"1"}}),a.createElement("div",{style:d},t.map(((e,t)=>a.createElement("div",{key:t,style:{...u,backgroundImage:"url("+(0,o.dq)(e.src)+")"}})))),a.createElement("button",{style:g,onClick:()=>{l||(s(!0),i((e=>(e-1+t.length)%t.length)),setTimeout((()=>s(!1)),500))}},"❮"),a.createElement("button",{style:h,onClick:c},"❯"),a.createElement("div",{style:y},a.createElement("h3",{style:{margin:"0 0 5px 0",fontSize:"1.4rem"}},t[r].title),a.createElement("p",{style:{margin:0,fontSize:"1rem",opacity:.9}},t[r].description)),a.createElement("div",{style:{position:"absolute",bottom:"20px",left:"50%",transform:"translateX(-50%)",display:"flex",gap:"10px",zIndex:"2"}},t.map(((e,t)=>{return a.createElement("div",{key:t,style:(o=t===r,{width:o?"12px":"10px",height:o?"12px":"10px",borderRadius:"50%",backgroundColor:o?n.Z.cyan:n.Z.white,opacity:o?1:.6,cursor:"pointer",transition:"all 0.3s ease",transform:o?"scale(1.2)":"scale(1)"}),onClick:()=>(e=>{l||e===r||(s(!0),i(e),setTimeout((()=>s(!1)),500))})(t)});var o}))))};const p={color:n.Z.darkBlue},g={marginBottom:"3.5rem",position:"relative"},h={color:n.Z.darkBlue,marginBottom:"1.5rem",fontSize:"2.2rem"},y={color:n.Z.midBlue,marginBottom:"1.2rem",fontSize:"1.8rem"},b={color:n.Z.midBlue,lineHeight:"1.7",fontSize:"1.1rem"},f={display:"inline-block",padding:"0.9rem 1.8rem",backgroundColor:n.Z.blueCyan,color:n.Z.white,textDecoration:"none",borderRadius:"4px",fontWeight:"bold",marginTop:"1.2rem",border:"none",cursor:"pointer",transition:"all 0.3s ease",boxShadow:"0 4px 10px rgba(0, 0, 0, 0.1)","&:hover":{backgroundColor:n.Z.cyan,transform:"translateY(-2px)",boxShadow:"0 6px 14px rgba(0, 0, 0, 0.15)"}},E=[{title:"Alpha 0.8.5 (Current Version)",date:"April 2025",features:["Enhanced character AI behaviors","New personality traits system","Basic home building functionality","Core relationship mechanics","Performance optimizations"]},{title:"Beta 0.9.0",date:"July 2025 (Planned)",features:["Advanced building tools and objects","Career progression paths (5 career tracks)","Dynamic weather system","First iteration of genetics system","Community events and gatherings"]},{title:"Beta 0.9.5",date:"October 2025 (Planned)",features:["Pet companions with AI behaviors","Advanced social interactions","New world locations and neighborhoods","Life events system (celebrations, milestones)","Extended character skills"]},{title:"Full Release 1.0",date:"January 2026 (Planned)",features:["Complete life stages from birth to elderly","Full career paths with special events","Community sharing features","Town customization tools","Advanced genetics and family trees","Expanded building catalog","Storyline scenarios and challenges"]},{title:"Post-Release Updates",date:"2026 and beyond",features:["Seasonal content and holiday celebrations","New neighborhoods and world expansion","Mod support for community content","Mobile companion app","Multiplayer features"]}],v=[{title:"Character System",description:"Create detailed characters with unique personalities, traits, and appearances through our advanced character creation system.",icon:"👤",completed:!0},{title:"Building & Construction",description:"Design and build detailed houses and community buildings with our intuitive building tools.",icon:"🏠",completed:!0},{title:"Social Interactions",description:"Develop relationships with other characters through a rich system of social interactions and relationship dynamics.",icon:"👥",completed:!1},{title:"Life Stages",description:"Experience the full cycle of life with age-appropriate activities and events for each life stage.",icon:"👶👴",completed:!1}],x=[{src:"/images/game-screenshot.png",title:"Advanced Building Tools",description:"Create detailed houses with our intuitive building system"},{src:"/images/game-screenshot.png",title:"Character Creation",description:"Design unique characters with hundreds of customization options"},{src:"/images/game-screenshot.png",title:"Dynamic Weather System",description:"Experience changing seasons and weather patterns that affect gameplay"}],w=[{id:45,title:"[Epic] Design and Implement AI Evolution framework",url:"https://github.com/arthurmoreno/life-simulation/issues/45",status:"In Progress"},{id:52,title:"[Epic] Engine Core V3",url:"https://github.com/arthurmoreno/life-simulation/issues/52",status:"Backlog"},{id:27,title:"[Epic] Environment V2",url:"https://github.com/arthurmoreno/life-simulation/issues/27",status:"Backlog"},{id:22,title:"[Epic] Combat V1",url:"https://github.com/arthurmoreno/life-simulation/issues/22",status:"Backlog"},{id:23,title:"[Epic] Building V1",url:"https://github.com/arthurmoreno/life-simulation/issues/23",status:"Backlog"},{id:28,title:"[Epic] Map Procedural Generation V3",url:"https://github.com/arthurmoreno/life-simulation/issues/28",status:"Backlog"},{id:29,title:"[Epic] Optimizations",url:"https://github.com/arthurmoreno/life-simulation/issues/29",status:"Backlog"},{id:32,title:"[Epic] Metabolism V1",url:"https://github.com/arthurmoreno/life-simulation/issues/32",status:"Backlog"},{id:47,title:"[Epic] Client-Server V2",url:"https://github.com/arthurmoreno/life-simulation/issues/47",status:"Backlog"},{id:46,title:"[Epic] Graphics and SDL integration",url:"https://github.com/arthurmoreno/life-simulation/issues/46",status:"Backlog"},{id:49,title:"[Epic][Infinite] Project management",url:"https://github.com/arthurmoreno/life-simulation/issues/49",status:"Todo"},{id:24,title:"Migrate to SDL3",url:"https://github.com/arthurmoreno/life-simulation/issues/24",status:"Backlog"},{id:57,title:"[Epic] Docs V1",url:"https://github.com/arthurmoreno/life-simulation/issues/57",status:"Backlog"},{id:61,title:"Finish the docs code before starting the documentation of this Epic",url:"https://github.com/arthurmoreno/life-simulation/issues/61",status:"Done"},{id:66,title:"[Project Item][Epic] Developer Experience",url:"https://github.com/arthurmoreno/life-simulation/issues/66",status:"Backlog"},{id:68,title:"[Project Item][Epic] Game Engine",url:"https://github.com/arthurmoreno/life-simulation/issues/68",status:"Backlog"}],k={width:"100%",borderCollapse:"collapse",marginTop:"2rem",boxShadow:"0 2px 10px rgba(0, 0, 0, 0.1)",borderRadius:"8px",overflow:"hidden"},C={padding:"1rem",borderBottom:"1px solid #eaeaea"},Z={...C,backgroundColor:n.Z.blueCyan,color:n.Z.white,fontWeight:"bold",textAlign:"left"},S=e=>{const t={display:"inline-block",padding:"0.25rem 0.75rem",borderRadius:"20px",fontWeight:"500",fontSize:"0.85rem"};switch(e.toLowerCase()){case"in progress":return{...t,backgroundColor:"#FEF9C3",color:"#854D0E"};case"done":return{...t,backgroundColor:"#DCFCE7",color:"#166534"};case"todo":return{...t,backgroundColor:"#E0F2FE",color:"#075985"};default:return{...t,backgroundColor:"#F3F4F6",color:"#4B5563"}}};var B=()=>{const{0:e,1:t}=(0,a.useState)(!1),{0:r,1:o}=(0,a.useState)(!1);return a.createElement(i.Z,{pageTitle:"Road Map"},a.createElement("div",{style:p},a.createElement("section",{style:g},a.createElement("h1",{style:h},"Development Road Map"),a.createElement("p",{style:b},"Follow our journey as we develop the Life Simulation Game. Here's our planned roadmap with features, improvements, and estimated release dates."),a.createElement(d,{currentVersion:"Alpha 0.8.5",targetVersion:"Release 1.0",percentage:65}),a.createElement("h2",{style:y},"Feature Previews"),a.createElement(u,{images:x})),a.createElement("section",{style:g},a.createElement("h2",{style:y},"Project Development Roadmap"),a.createElement("p",{style:b},"Below is our GitHub project roadmap showing the current epics and major development items. Track our progress and see what features are coming next."),a.createElement("div",null,a.createElement("table",{style:k},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",{style:Z},"Title"),a.createElement("th",{style:Z},"Status"),a.createElement("th",{style:Z},"Details"))),a.createElement("tbody",null,w.filter((e=>!!r||("In Progress"===e.status||"Todo"===e.status||w.indexOf(e)<6))).map((e=>a.createElement("tr",{key:e.id},a.createElement("td",{style:C},e.title),a.createElement("td",{style:C},a.createElement("span",{style:S(e.status)},e.status)),a.createElement("td",{style:C},a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",style:{color:n.Z.blueCyan,textDecoration:"none"}},"View on GitHub"))))))),!r&&a.createElement("div",{style:{textAlign:"center",marginTop:"1.5rem"}},a.createElement("button",{style:f,onClick:()=>o(!0)},"View Complete Roadmap")))),a.createElement("section",{style:g},a.createElement("h2",{style:y},"Major Features"),a.createElement(m,{features:v}),e&&a.createElement(m,{features:[{title:"Career Progression",description:"Pursue various career paths with unique advancement opportunities, workplace events, and rewards.",icon:"💼",completed:!1},{title:"Dynamic Weather",description:"Experience changing weather patterns that affect character moods and available activities.",icon:"🌦️",completed:!1}]}),a.createElement("div",{style:{textAlign:"center",marginTop:"2rem"}},a.createElement("button",{style:f,onClick:()=>t(!e)},e?"Show Less":"Show More Features"))),a.createElement("section",{style:g},a.createElement("h2",{style:y},"Development Timeline"),a.createElement(s,{timelineData:E})),a.createElement("section",{style:{...g,marginTop:"4rem"}},a.createElement("h2",{style:y},"Community Feedback"),a.createElement("p",{style:b},"Your feedback shapes our development! Join our community discussion forums to suggest features and report bugs. Our team actively incorporates player feedback to improve the game."),a.createElement("div",{style:{marginTop:"1.5rem",display:"flex",gap:"1rem",flexWrap:"wrap"}},a.createElement("a",{href:"https://community.lifesimulationgame.com",target:"_blank",rel:"noopener noreferrer",style:{...f,backgroundColor:n.Z.midBlue}},"Join Community Discussion"),a.createElement("a",{href:"https://docs.google.com/forms/d/e/1FAIpQLSf...",target:"_blank",rel:"noopener noreferrer",style:{...f,backgroundColor:"transparent",border:"2px solid "+n.Z.blueCyan,color:n.Z.blueCyan}},"Submit Feature Request")))))}},1611:function(e,t){t.Z={darkBlue:"rgb(30, 49, 75)",midBlue:"rgb(47, 76, 108)",blueCyan:"rgb(61, 128, 163)",blueCyanDimmed:"rgb(43, 90, 114)",cyan:"rgb(99, 196, 204)",lightCyan:"rgb(154, 229, 213)",white:"#FFFFFF",lightGray:"#F0F3F5",darkGray:"#333333"}}}]);
//# sourceMappingURL=component---src-pages-roadmap-js-031efefb858b9b4001ba.js.map