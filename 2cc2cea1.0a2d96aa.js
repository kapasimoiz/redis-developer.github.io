(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{131:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return l}));var i=a(3),n=a(7),r=(a(0),a(362)),s={id:"index-usingpython",title:"How to collect and process time-series data using Redis and Python",sidebar_label:"RedisTimeSeries and Python",slug:"/howtos/redistimeseries/using-python",authors:["ajeet"]},o={unversionedId:"howtos/redistimeseries/using-python/index-usingpython",id:"howtos/redistimeseries/using-python/index-usingpython",isDocsHomePage:!1,title:"How to collect and process time-series data using Redis and Python",description:"My Image",source:"@site/docs/howtos/redistimeseries/using-python/index-usingpython.mdx",slug:"/howtos/redistimeseries/using-python",permalink:"/howtos/redistimeseries/using-python",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/redistimeseries/using-python/index-usingpython.mdx",version:"current",lastUpdatedAt:1648389988,sidebar_label:"RedisTimeSeries and Python",sidebar:"docs",previous:{title:"Storing and Querying Time Series data using Redis Stack",permalink:"/howtos/redistimeseries/getting-started"},next:{title:"Processing Time Series data with Redis and .NET",permalink:"/howtos/redistimeseries/using-dotnet"}},c=[{value:"Python Client for RedisTimeSeries",id:"python-client-for-redistimeseries",children:[{value:"Step 1. Create a free Cloud account",id:"step-1-create-a-free-cloud-account",children:[]},{value:"Step 2. Create Your database",id:"step-2-create-your-database",children:[]},{value:"Step 3.  Verify the database details",id:"step-3--verify-the-database-details",children:[]},{value:"Step 4.Installation",id:"step-4installation",children:[]},{value:"Step 5. Create a script file",id:"step-5-create-a-script-file",children:[]},{value:"Step 6. Executing the python script",id:"step-6-executing-the-python-script",children:[]},{value:"Step 7. Monitor the Redis database",id:"step-7-monitor-the-redis-database",children:[]}]},{value:"References",id:"references",children:[]}],d={toc:c};function l(e){var t=e.components,s=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},d,s,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("img",{alt:"My Image",src:a(613).default})),Object(r.b)("p",null,"Time series data is a series of data stored in the time order (Example: Stock performance over time). Industries today are collecting and analyzing time-based data more than ever before. Traditional databases that rely on relational or document data models are designed neither for storing and indexing data based on time, nor for running time-bucketed aggregation queries. Time-series databases fill this void by providing a data model that optimizes data indexing and querying by time."),Object(r.b)("p",null,"RedisTimeSeries is a Redis module that allows Redis to be used as a fast in-memory time series database designed to collect, manage, and deliver time series data at scale. The RedisTimeSeries module shares the performance and simplicity aspects of Redis. Under the hood, it uses efficient data structures such as Radix tree to index data by timestamp, which makes it extremely fast and efficient to run time-aggregate queries."),Object(r.b)("h2",{id:"python-client-for-redistimeseries"},"Python Client for RedisTimeSeries"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"TIP")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"As of redis-py 4.0.0, the redistimeseries-py library is deprecated. It's features have been merged into redis-py. Please either install it from pypy or the repo."))),Object(r.b)("p",null,"Follow the steps below to get started with RedisTimeSeries with Python:"),Object(r.b)("h3",{id:"step-1-create-a-free-cloud-account"},"Step 1. Create a free Cloud account"),Object(r.b)("p",null,"Create your free ",Object(r.b)("a",{href:"https://redis.com/try-free/",target:"_blank",rel:"noopener"},"Redis Enterprise Cloud account"),". Once you click on \u201cGet Started\u201d, you will receive an email with a link to activate your account and complete your signup process."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"TIP")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"For a limited time, use ",Object(r.b)("strong",{parentName:"p"},"TIGER200")," to get ",Object(r.b)("strong",{parentName:"p"},"$200")," credits on Redis Enterprise Cloud and try all the advanced capabilities!"),Object(r.b)("p",{parentName:"div"},"\ud83c\udf89 ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://redis.com/try-free"}),"Click here to sign up")))),Object(r.b)("h3",{id:"step-2-create-your-database"},"Step 2. Create Your database"),Object(r.b)("p",null,'Choose your preferred cloud vendor. Select the region and then click "Let\'s start free" to create your free database automatically.'),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"TIP")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},'If you want to create a custom database with your preferred name and type of redis,\nclick "Create a custom database" option shown in the image.'))),Object(r.b)("p",null,Object(r.b)("img",{alt:"create database ",src:a(614).default})),Object(r.b)("h3",{id:"step-3--verify-the-database-details"},"Step 3.  Verify the database details"),Object(r.b)("p",null,'You will be provided with Public endpoint URL and "Redis Stack" as the type of database with the list of modules that comes by default.'),Object(r.b)("p",null,Object(r.b)("img",{alt:"verify database",src:a(615).default})),Object(r.b)("h3",{id:"step-4installation"},"Step 4.Installation"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"$ pip install redis\n")),Object(r.b)("h3",{id:"step-5-create-a-script-file"},"Step 5. Create a script file"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"})," import redis\n r = redis.Redis(host='redis-18386.c110.qa.us-east-1-1.ec2.qa-cloud.redislabs.com', port=<add port>, password=<add password>)\n r.ts().create(2, retension_msecs=5) \n")),Object(r.b)("p",null,'Save the above file with a name "ts.py".  '),Object(r.b)("h3",{id:"step-6-executing-the-python-script"},"Step 6. Executing the python script"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"})," python3 ts.py\n")),Object(r.b)("h3",{id:"step-7-monitor-the-redis-database"},"Step 7. Monitor the Redis database"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),'  1648389303.557366 [0 20.127.62.215:59768] "TS.CREATE" "2"\n')),Object(r.b)("h2",{id:"references"},"References"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"/howtos/redistimeseries/getting-started/"}),"Getting Started with RedisTimeSeries")),Object(r.b)("li",{parentName:"ul"},"Learn more about RedisTimeSeries in the ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://oss.redis.com/redistimeseries/"}),"Quickstart")," tutorial."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://redis.com/blog/build-your-financial-application-on-redistimeseries/"}),"Build Your Financial Application on RedisTimeSeries")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://redis.com/blog/how-to-manage-real-time-iot-sensor-data-in-redis/"}),"How to Manage Real-Time IoT Sensor Data in Redis")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.youtube.com/watch?v=rXynFOrrd-Q"}),"Introduction to RedisTimeSeries - Video"))),Object(r.b)("h2",{id:""}),Object(r.b)("div",null,Object(r.b)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"}," ",Object(r.b)("img",{src:"/img/launchpad.png",className:"thumb",loading:"lazy",alt:"Redis Launchpad"}))))}l.isMDXComponent=!0},362:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return u}));var i=a(0),n=a.n(i);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=n.a.createContext({}),l=function(e){var t=n.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b=function(e){var t=l(e.components);return n.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),b=l(a),m=i,u=b["".concat(s,".").concat(m)]||b[m]||p[m]||r;return a?n.a.createElement(u,o(o({ref:t},d),{},{components:a})):n.a.createElement(u,o({ref:t},d))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var d=2;d<r;d++)s[d]=a[d];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},613:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/redistimeseries-python-46b664cc5faa36bb37ff7bfef8efbd61.png"},614:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/select_cloud_vendor-1ad229a2effb7aad2f19495d0cea18fb.png"},615:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/details_database-471fa25198e8a549638e2fc8710b96c0.png"}}]);