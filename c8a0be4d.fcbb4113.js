(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{1233:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/try-free-52c2cec515e5862b2f5021faf0fbbe53.png"},1234:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/create_heroku-adefbcbc7fe61ec48d1a65a3172f9f58.png"},1235:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/heroku_app1_env-8d491cfd2c8859db457a5821eb59f94a.png"},1236:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/heroku_ratelimiter-536e63f33448af8ad5c84987300831e4.png"},301:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return l}));var o=a(3),n=a(7),r=(a(0),a(362)),i=(a(364),{id:"index-herokupython",title:"Deploy a Python app on Heroku using Redis",sidebar_label:"How to deploy a Python based application on Heroku using Redis",slug:"/create/heroku/herokupython",authors:["ajeet"]}),s={unversionedId:"create/heroku/herokupython/index-herokupython",id:"create/heroku/herokupython/index-herokupython",isDocsHomePage:!1,title:"Deploy a Python app on Heroku using Redis",description:"Heroku is a container-based cloud Platform as a Service (PaaS). It is a new way of building and deploying web apps. Heroku lets app developers spend 100% of their time on their application code, not managing servers, deployment, ongoing operations, or scaling. Developers use Heroku to deploy, manage, and scale modern apps. The Heroku platform is elegant, flexible, and easy to use, offering developers the simplest path to getting their apps to market.",source:"@site/docs/create/heroku/herokupython/index-herokupython.mdx",slug:"/create/heroku/herokupython",permalink:"/create/heroku/herokupython",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/create/heroku/herokupython/index-herokupython.mdx",version:"current",lastUpdatedAt:1648553198,sidebar_label:"How to deploy a Python based application on Heroku using Redis",sidebar:"docs",previous:{title:"Deploy a NodeJS app on Heroku using Redis",permalink:"/create/heroku/herokunodejs"},next:{title:"Deploy a Redis Rate Limiting app on Heroku",permalink:"/create/heroku/ratelimiting-go"}},p=[{value:"Step 2. Create a Heroku account",id:"step-2-create-a-heroku-account",children:[]},{value:"Step 3. Install Heroku CLI on your system",id:"step-3-install-heroku-cli-on-your-system",children:[]},{value:"Step 4. Login to Heroku",id:"step-4-login-to-heroku",children:[]},{value:"Step 5. Connect your application to Redis Enterprise Cloud",id:"step-5-connect-your-application-to-redis-enterprise-cloud",children:[]},{value:"Step 6. Setting up Environment Variables",id:"step-6-setting-up-environment-variables",children:[]},{value:"Step 7. Deploy your code",id:"step-7-deploy-your-code",children:[]},{value:"Step 8. Accessing the application",id:"step-8-accessing-the-application",children:[]},{value:"Next Step",id:"next-step",children:[]}],c={toc:p};function l(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Heroku is a container-based cloud Platform as a Service (PaaS). It is a new way of building and deploying web apps. Heroku lets app developers spend 100% of their time on their application code, not managing servers, deployment, ongoing operations, or scaling. Developers use Heroku to deploy, manage, and scale modern apps. The Heroku platform is elegant, flexible, and easy to use, offering developers the simplest path to getting their apps to market."),Object(r.b)("p",null,"Some of the notable features offered by Heroku are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Agile deployment for Node.js, Java, Python, Ruby, Go and Scala"),Object(r.b)("li",{parentName:"ul"},"Run and scale any type of app"),Object(r.b)("li",{parentName:"ul"},"Flexibility to customize and support unique DevOps workflow needs"),Object(r.b)("li",{parentName:"ul"},"Total visibility across your entire app"),Object(r.b)("li",{parentName:"ul"},"Offers a powerful dashboard and CLI")),Object(r.b)("h4",{id:"step-1-create-redis-enterprise-cloud"},"Step 1. Create Redis Enterprise Cloud"),Object(r.b)("p",null,"Create your free Redis Enterprise Cloud account by visiting ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://redis.com/try-free"}),"this link")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"TIP")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"For a limited time, use ",Object(r.b)("strong",{parentName:"p"},"TIGER200")," to get ",Object(r.b)("strong",{parentName:"p"},"$200")," credits on Redis Enterprise Cloud and try all the advanced capabilities!"),Object(r.b)("p",{parentName:"div"},"\ud83c\udf89 ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://redis.com/try-free"}),"Click here to sign up")))),Object(r.b)("p",null,Object(r.b)("img",{alt:"recloud",src:a(1233).default})),Object(r.b)("p",null,Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/create/rediscloud"}),"Follow this link to create a Redis Enterprise Cloud")," subscription and database. Once you create the database, you will be provisioned with a unique database endpoint URL, port and password. Save these for future reference."),Object(r.b)("h3",{id:"step-2-create-a-heroku-account"},"Step 2. Create a Heroku account"),Object(r.b)("p",null,"If you are using Heroku for the first time, create your new Heroku account ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://signup.heroku.com/login"}),"through this link"),"."),Object(r.b)("p",null,Object(r.b)("img",{alt:"heroku",src:a(1234).default})),Object(r.b)("h3",{id:"step-3-install-heroku-cli-on-your-system"},"Step 3. Install Heroku CLI on your system"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-macos"})," brew install heroku\n")),Object(r.b)("h3",{id:"step-4-login-to-heroku"},"Step 4. Login to Heroku"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"})," heroku login\n heroku: Press any key to open up the browser to login or q to exit:\n Opening browser to https://cli-auth.heroku.com/auth/cli/browser/XXXXXXXXXXA\n Logging in... done\n Logged in as your_email_address\n")),Object(r.b)("h3",{id:"step-5-connect-your-application-to-redis-enterprise-cloud"},"Step 5. Connect your application to Redis Enterprise Cloud"),Object(r.b)("p",null,"For this demonstration, we will be using a ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/redis-developer/basic-rate-limiting-demo-python"}),"Sample Rate Limiting application"),"."),Object(r.b)("h4",{id:"clone-the-repository"},"Clone the repository"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"})," git clone https://github.com/redis-developer/basic-rate-limiting-demo-python\n")),Object(r.b)("p",null,"Run the commands below to get a functioning Git repository that contains a simple application as well as a package.json file."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"$ heroku create\nCreating app... done, \u2b22 fast-reef-76278\nhttps://fast-reef-76278.herokuapp.com/ | https://git.heroku.com/fast-reef-76278.git\n")),Object(r.b)("h3",{id:"step-6-setting-up-environment-variables"},"Step 6. Setting up Environment Variables"),Object(r.b)("p",null,'Go to the Heroku dashboard, click "Settings" and set REDIS_ENDPOINT_URI and REDIS_PASSWORD under the Config Vars.\nRefer to Step 1 for the correct values to use.'),Object(r.b)("p",null,Object(r.b)("img",{alt:"heroku",src:a(1235).default})),Object(r.b)("h3",{id:"step-7-deploy-your-code"},"Step 7. Deploy your code"),Object(r.b)("p",null,"Heroku generates a random name (in this case fast-reef-76278) for your app, or you can pass a parameter to specify your own app name.\nNow deploy your code:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"$ git push heroku                        \nEnumerating objects: 512, done.\nCounting objects: 100% (512/512), done.\nDelta compression using up to 12 threads\nCompressing objects: 100% (256/256), done.\nWriting objects: 100% (512/512), 1.52 MiB | 660.00 KiB/s, done.\nTotal 512 (delta 244), reused 512 (delta 244)\nremote: Compressing source files... done.\nremote: Building source:\nremote: \nremote: -----\x3e Building on the Heroku-20 stack\nremote: -----\x3e Determining which buildpack to use for this app\nremote: -----\x3e Python app detected\n\u2026\n\nemote: -----\x3e Compressing...\nremote:        Done: 59.3M\nremote: -----\x3e Launching...\nremote:        Released v5\nremote:        https://fast-reef-76278.herokuapp.com/ deployed to Heroku\nremote: \nremote: Verifying deploy... done.\nTo https://git.heroku.com/fast-reef-76278.git\n * [new branch]      master -> master\n")),Object(r.b)("h3",{id:"step-8-accessing-the-application"},"Step 8. Accessing the application"),Object(r.b)("p",null,"Open ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://fast-reef-76278.herokuapp.com/"}),"https://fast-reef-76278.herokuapp.com/")," to see your application"),Object(r.b)("p",null,Object(r.b)("img",{alt:"heroku",src:a(1236).default})),Object(r.b)("h3",{id:"next-step"},"Next Step"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"/explore/redisinsight/"}),"Connecting to the database using RedisInsight")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"/howtos/moviesdatabase/getting-started/"}),"How to list & search Movies database using Redisearch"))))}l.isMDXComponent=!0},364:function(e,t,a){"use strict";var o=a(0),n=a.n(o),r=a(362),i=a(369);a(363),a(59);t.a=function(e){var t=n.a.useState(!1),a=t[0],o=t[1];return n.a.createElement("div",{className:"ri-container"},n.a.createElement("div",{className:"ri-description-short"},n.a.createElement("div",{className:"ri-icon"},n.a.createElement("span",{className:"fe fe-zap"})),n.a.createElement("div",{className:"ri-detail"},n.a.createElement("div",{className:"ri-title"},n.a.createElement("a",{href:e.page},e.title)),n.a.createElement("div",{className:"ri-description"},e.description,n.a.Children.count(e.children)>0&&n.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return o(!a)}})))),a&&n.a.createElement("div",{className:"ri-description-long"},n.a.createElement(r.a,{components:i.a},e.children)))}}}]);