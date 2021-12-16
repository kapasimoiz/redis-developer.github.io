(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{282:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return s})),t.d(a,"metadata",(function(){return o})),t.d(a,"toc",(function(){return p})),t.d(a,"default",(function(){return l}));var r=t(3),n=t(7),i=(t(0),t(308)),s={id:"index-usingjavascript",title:"How to query Graph data in Redis using JavaScript",sidebar_label:"RedisGraph and JavaScript",slug:"/howtos/redisgraph/using-javascript",authors:["ajeet"]},o={unversionedId:"howtos/redisgraph/using-javascript/index-usingjavascript",id:"howtos/redisgraph/using-javascript/index-usingjavascript",isDocsHomePage:!1,title:"How to query Graph data in Redis using JavaScript",description:"RedisGraph is the fastest graph database that processes complex graph operations in real time, 10x \u2013 600x faster than any other graph database. Show how your data is connected through multiple visualization integrations including RedisInsight, Linkurious, and Graphileon. Query graphs using the industry-standard Cypher query language and easily use graph capabilities from application code.",source:"@site/docs/howtos/redisgraph/using-javascript/index-usingjavascript.mdx",slug:"/howtos/redisgraph/using-javascript",permalink:"/howtos/redisgraph/using-javascript",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/redisgraph/using-javascript/index-usingjavascript.mdx",version:"current",sidebar_label:"RedisGraph and JavaScript",sidebar:"docs",previous:{title:"How to query Graph data in Redis using Ruby",permalink:"/howtos/redisgraph/using-ruby"},next:{title:"How to query Graph data in Redis using Go",permalink:"/howtos/redisgraph/using-go"}},p=[{value:"RedisGraph JavaScript Client",id:"redisgraph-javascript-client",children:[{value:"Step 1. Run RedisMod Docker container",id:"step-1-run-redismod-docker-container",children:[]},{value:"Step 2. Verify if RedisGraph module is loaded",id:"step-2-verify-if-redisgraph-module-is-loaded",children:[]},{value:"Step 3. Clone the repository",id:"step-3-clone-the-repository",children:[]},{value:"Step 4. Install the packages locally",id:"step-4-install-the-packages-locally",children:[]},{value:"Step 5. Write a JavaScript code",id:"step-5-write-a-javascript-code",children:[]},{value:"Step 6. Execute the  Script",id:"step-6-execute-the--script",children:[]},{value:"Step 7. Monitor the Graph query",id:"step-7-monitor-the-graph-query",children:[]},{value:"Step 8. Install RedisInsight",id:"step-8-install-redisinsight",children:[]},{value:"Step 9. Accessing RedisInsight",id:"step-9-accessing-redisinsight",children:[]},{value:"Step 10. Run the Graph Query",id:"step-10-run-the-graph-query",children:[]},{value:"References",id:"references",children:[]}]}],c={toc:p};function l(e){var a=e.components,s=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,s,{components:a,mdxType:"MDXLayout"}),Object(i.b)("p",null,"RedisGraph is the fastest graph database that processes complex graph operations in real time, 10x \u2013 600x faster than any other graph database. Show how your data is connected through multiple visualization integrations including RedisInsight, Linkurious, and Graphileon. Query graphs using the industry-standard Cypher query language and easily use graph capabilities from application code."),Object(i.b)("h2",{id:"redisgraph-javascript-client"},"RedisGraph JavaScript Client"),Object(i.b)("p",null,"Follow the steps below to get started with RedisGraph with Java:"),Object(i.b)("h3",{id:"step-1-run-redismod-docker-container"},"Step 1. Run RedisMod Docker container"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"})," docker run -p 6379:6379 --name redislabs/redismod\n")),Object(i.b)("h3",{id:"step-2-verify-if-redisgraph-module-is-loaded"},"Step 2. Verify if RedisGraph module is loaded"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"})," info modules\n # Modules\n module:name=graph,ver=20405,api=1,filters=0,usedby=[],using=[],options=[]\n")),Object(i.b)("h3",{id:"step-3-clone-the-repository"},"Step 3. Clone the repository"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"})," git clone https://github.com/RedisGraph/redisgraph.js\n")),Object(i.b)("h3",{id:"step-4-install-the-packages-locally"},"Step 4. Install the packages locally"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"})," npm install redisgraph.js\n")),Object(i.b)("h3",{id:"step-5-write-a-javascript-code"},"Step 5. Write a JavaScript code"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),' const RedisGraph = require("redisgraph.js").Graph;\n\n let graph = new RedisGraph("social");\n\n (async () =>{\n       await graph.query("CREATE (:person{name:\'roi\',age:32})");\n       await graph.query("CREATE (:person{name:\'amit\',age:30})");\n       await graph.query("MATCH (a:person), (b:person) WHERE (a.name = \'roi\' AND b.name=\'amit\') CREATE (a)-[:knows]->(b)");\n       \n       // Match query.\n       let res = await graph.query("MATCH (a:person)-[:knows]->(:person) RETURN a.name");\n       while (res.hasNext()) {\n           let record = res.next();\n           console.log(record.get("a.name"));\n       }\n       console.log(res.getStatistics().queryExecutionTime());\n   \n       // Match with parameters.\n       let param = {\'age\': 30};\n       res = await graph.query("MATCH (a {age: $age}) return a.name", param);\n       while (res.hasNext()) {\n           let record = res.next();\n           console.log(record.get("a.name"));\n       }\n   \n       // Named paths matching.\n       res = await graph.query("MATCH p = (a:person)-[:knows]->(:person) RETURN p");\n       while (res.hasNext()) {\n           let record = res.next();\n           // See path.js for more path API.\n           console.log(record.get("p").nodeCount);\n       }\n       graph.deleteGraph();\n       graph.close();\n   \n   })();\n\n\n\n')),Object(i.b)("p",null,'Save the above file as "app.js".'),Object(i.b)("h3",{id:"step-6-execute-the--script"},"Step 6. Execute the  Script"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"})," node app.js\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{})," roi\n 0.1789\n amit\n 2\n")),Object(i.b)("h3",{id:"step-7-monitor-the-graph-query"},"Step 7. Monitor the Graph query"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),' 1632898652.415702 [0 172.17.0.1:64144] "info"\n 1632898652.418225 [0 172.17.0.1:64144] "graph.query" "social" "CREATE (:person{name:\'roi\',age:32})" "--compact"\n 1632898652.420399 [0 172.17.0.1:64144] "graph.query" "social" "CREATE (:person{name:\'amit\',age:30})" "--compact"\n 1632898652.421857 [0 172.17.0.1:64144] "graph.query" "social" "MATCH (a:person), (b:person) WHERE (a.name = \'roi\' AND b.name=\'amit\') CREATE (a)-[:knows]->(b)" "--compact"\n 1632898652.424911 [0 172.17.0.1:64144] "graph.query" "social" "MATCH (a:person)-[:knows]->(:person) RETURN a.name" "--compact"\n 1632898652.429658 [0 172.17.0.1:64144] "graph.query" "social" "CYPHER age=30  MATCH (a {age: $age}) return a.name" "--compact"\n 1632898652.431221 [0 172.17.0.1:64144] "graph.query" "social" "MATCH p = (a:person)-[:knows]->(:person) RETURN p" "--compact"\n 1632898652.433146 [0 172.17.0.1:64144] "graph.query" "social" "CALL db.labels()" "--compact"\n 1632898652.434781 [0 172.17.0.1:64144] "graph.query" "social" "CALL db.propertyKeys()" "--compact"\n 1632898652.436574 [0 172.17.0.1:64144] "graph.query" "social" "CALL db.relationshipTypes()" "--compact"\n 1632898652.438559 [0 172.17.0.1:64144] "graph.delete" "social"\n')),Object(i.b)("h3",{id:"step-8-install-redisinsight"},"Step 8. Install RedisInsight"),Object(i.b)("p",null,"Run the RedisInsight container. The easiest way is to run the following command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"})," docker run -d -v redisinsight:/db -p 8001:8001 redislabs/redisinsight:latest\n")),Object(i.b)("h3",{id:"step-9-accessing-redisinsight"},"Step 9. Accessing RedisInsight"),Object(i.b)("p",null,"Next, point your browser to http://localhost:8001."),Object(i.b)("h3",{id:"step-10-run-the-graph-query"},"Step 10. Run the Graph Query"),Object(i.b)("p",null,"You can display the number of records returned by a query:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"My Image",src:t(994).default})),Object(i.b)("h3",{id:"references"},"References"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/howtos/redisgraphmovies/"}),"Building Movies database app using RedisGraph and NodeJS")),Object(i.b)("li",{parentName:"ul"},"Learn more about RedisGraph in the ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://oss.redis.com/redisgraph/"}),"Quickstart")," tutorial."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/explore/redisinsight/redisgraph"}),"Query, Visualize and Manipulate Graphs using RedisGraph Browser Tool"))),Object(i.b)("h2",{id:""}),Object(i.b)("div",null,Object(i.b)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"}," ",Object(i.b)("img",{src:"/img/launchpad.png",className:"thumb",loading:"lazy",alt:"Redis Launchpad"}))))}l.isMDXComponent=!0},308:function(e,a,t){"use strict";t.d(a,"a",(function(){return d})),t.d(a,"b",(function(){return b}));var r=t(0),n=t.n(r);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=n.a.createContext({}),l=function(e){var a=n.a.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=l(e.components);return n.a.createElement(c.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},h=n.a.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(t),h=r,b=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return t?n.a.createElement(b,o(o({ref:a},c),{},{components:t})):n.a.createElement(b,o({ref:a},c))}));function b(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=h;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=t[c];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},994:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/redisgraph_ioredisgraph_java-8123a72e86bbf34b975e397cd01deb1d.png"}}]);