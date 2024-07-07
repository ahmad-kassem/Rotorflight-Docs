"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[9244],{90207:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var A=t(74848),n=t(28453);const l={sidebar_position:7},s="Two-Stage Gear Train Ratios",i={id:"Tutorial-Walkthroughs/Two-Stage-Gear-Train-Ratios",title:"Two-Stage Gear Train Ratios",description:"Having an accurate gear ratio for the main and tail rotor is essential for Rotorflight accurate RPM Filters performance.",source:"@site/docs/Tutorial-Walkthroughs/Two-Stage-Gear-Train-Ratios.md",sourceDirName:"Tutorial-Walkthroughs",slug:"/Tutorial-Walkthroughs/Two-Stage-Gear-Train-Ratios",permalink:"/docs/Tutorial-Walkthroughs/Two-Stage-Gear-Train-Ratios",draft:!1,unlisted:!1,editUrl:"https://github.com/pkaig/Rotorflight-Docs/tree/main/docs/Tutorial-Walkthroughs/Two-Stage-Gear-Train-Ratios.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"ELRS Telemetry Reuse",permalink:"/docs/Tutorial-Walkthroughs/ELRS-telemetry-reuse"},next:{title:"OpenLog and OpenLager",permalink:"/docs/Tutorial-Walkthroughs/OpenLog-OpenLager"}},d={},o=[{value:"SAB Style Two-Stage Gear Train",id:"sab-style-two-stage-gear-train",level:2},{value:"KDS Style Two-Stage Gear Train",id:"kds-style-two-stage-gear-train",level:2}];function a(e){const r={code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(r.h1,{id:"two-stage-gear-train-ratios",children:"Two-Stage Gear Train Ratios"}),"\n",(0,A.jsx)(r.p,{children:"Having an accurate gear ratio for the main and tail rotor is essential for Rotorflight accurate RPM Filters performance."}),"\n",(0,A.jsx)(r.p,{children:"Therefore it is best to count the tooth on the main and tail gear/pulley reduction sets and enter the values into the configurator."}),"\n",(0,A.jsx)(r.p,{children:"This is relatively easy in single stage drive train that are used on most helicopters."}),"\n",(0,A.jsx)(r.h2,{id:"sab-style-two-stage-gear-train",children:"SAB Style Two-Stage Gear Train"}),"\n",(0,A.jsx)(r.p,{children:"The SAB Goblin helis have a two-stage transmission, therefore you have double the amount of gears/pulleys, also the main tail pulley is mounted on the intermediate shaft, which make the tail ratio a little more complicated to determine."}),"\n",(0,A.jsx)(r.p,{children:(0,A.jsx)(r.img,{alt:"Gear Train",src:t(1615).A+"",width:"1448",height:"827"})}),"\n",(0,A.jsx)(r.p,{children:"The above pictures shows the configuration of the transmission on the SAB Raw 580, 700, Piuma, Black Thunder 700, etc."}),"\n",(0,A.jsx)(r.p,{children:"The gears/pulleys tooth count is marked by Z, and is numbered to identify each one."}),"\n",(0,A.jsxs)(r.p,{children:["For the main ratio, Rotorflight requires you to enter the ",(0,A.jsx)(r.code,{children:"motor pinion"})," and ",(0,A.jsx)(r.code,{children:"main gear"})," tooth count respectively in the two fields of the ",(0,A.jsx)(r.em,{children:"Main Rotor Gear Ratio"})," line."]}),"\n",(0,A.jsxs)(r.p,{children:["Based on the above picture, enter ",(0,A.jsx)(r.code,{children:"motor pinion"})," value as ",(0,A.jsx)(r.strong,{children:"(Z1 x Z3)"})," and ",(0,A.jsx)(r.code,{children:"main gear"})," value as ",(0,A.jsx)(r.strong,{children:"(Z2 x Z4)"}),"."]}),"\n",(0,A.jsxs)(r.p,{children:["For the tail ratio, Rotorflight requires you to enter the ",(0,A.jsx)(r.code,{children:"tail pulley"})," and ",(0,A.jsx)(r.code,{children:"front pulley"})," tooth count respectively in the two fields of the ",(0,A.jsx)(r.em,{children:"Tail Rotor Gear Ratio"})," line."]}),"\n",(0,A.jsxs)(r.p,{children:["Also based on the above picture, enter ",(0,A.jsx)(r.code,{children:"tail pulley"})," value as ",(0,A.jsx)(r.strong,{children:"(Z3 x Z6)"})," and ",(0,A.jsx)(r.code,{children:"front pulley"})," value as ",(0,A.jsx)(r.strong,{children:"(Z4 x Z5)"}),"."]}),"\n",(0,A.jsx)(r.p,{children:"The below table shows some gear/pulley tooth counts for some famous two-stage helicopters."}),"\n",(0,A.jsxs)(r.table,{children:[(0,A.jsx)(r.thead,{children:(0,A.jsxs)(r.tr,{children:[(0,A.jsx)(r.th,{children:"Heli Model"}),(0,A.jsx)(r.th,{children:"Z1 (Motor Pulley)"}),(0,A.jsx)(r.th,{children:"Z2"}),(0,A.jsx)(r.th,{children:"Z3"}),(0,A.jsx)(r.th,{children:"Z4"}),(0,A.jsx)(r.th,{children:"Z5"}),(0,A.jsx)(r.th,{children:"Z6 (Tail Pulley)"})]})}),(0,A.jsxs)(r.tbody,{children:[(0,A.jsxs)(r.tr,{children:[(0,A.jsx)(r.td,{children:"SAB Goblin 500 Sport"}),(0,A.jsx)(r.td,{children:"15 to 24 ( Std 18T )"}),(0,A.jsx)(r.td,{children:"48"}),(0,A.jsx)(r.td,{children:"18"}),(0,A.jsx)(r.td,{children:"62"}),(0,A.jsx)(r.td,{children:"28"}),(0,A.jsx)(r.td,{children:"21"})]}),(0,A.jsxs)(r.tr,{children:[(0,A.jsx)(r.td,{children:"SAB Black Thunder 700"}),(0,A.jsx)(r.td,{children:"18 to 25 ( Std 21T )"}),(0,A.jsx)(r.td,{children:"60"}),(0,A.jsx)(r.td,{children:"19"}),(0,A.jsx)(r.td,{children:"68"}),(0,A.jsx)(r.td,{children:"37"}),(0,A.jsx)(r.td,{children:"26"})]}),(0,A.jsxs)(r.tr,{children:[(0,A.jsx)(r.td,{children:"SAB Raw 580"}),(0,A.jsx)(r.td,{children:"18 to 26 ( Std 22T )"}),(0,A.jsx)(r.td,{children:"50"}),(0,A.jsx)(r.td,{children:"14"}),(0,A.jsx)(r.td,{children:"58"}),(0,A.jsx)(r.td,{children:"27"}),(0,A.jsx)(r.td,{children:"23"})]}),(0,A.jsxs)(r.tr,{children:[(0,A.jsx)(r.td,{children:"SAB Raw 580 Nitro"}),(0,A.jsx)(r.td,{children:"26 to 28 ( Std 26T )"}),(0,A.jsx)(r.td,{children:"50"}),(0,A.jsx)(r.td,{children:"14"}),(0,A.jsx)(r.td,{children:"58"}),(0,A.jsx)(r.td,{children:"27"}),(0,A.jsx)(r.td,{children:"23"})]}),(0,A.jsxs)(r.tr,{children:[(0,A.jsx)(r.td,{children:"SAB Raw 700"}),(0,A.jsx)(r.td,{children:"18 to 25 ( Std 21T )"}),(0,A.jsx)(r.td,{children:"56"}),(0,A.jsx)(r.td,{children:"18"}),(0,A.jsx)(r.td,{children:"69"}),(0,A.jsx)(r.td,{children:"34"}),(0,A.jsx)(r.td,{children:"26"})]}),(0,A.jsxs)(r.tr,{children:[(0,A.jsx)(r.td,{children:"SAB Raw 700 Nitro"}),(0,A.jsx)(r.td,{children:"26 to 28 ( Std 27T )"}),(0,A.jsx)(r.td,{children:"52"}),(0,A.jsx)(r.td,{children:"14"}),(0,A.jsx)(r.td,{children:"58"}),(0,A.jsx)(r.td,{children:"27"}),(0,A.jsx)(r.td,{children:"22"})]}),(0,A.jsxs)(r.tr,{children:[(0,A.jsx)(r.td,{children:"SAB Raw Piuma"}),(0,A.jsx)(r.td,{children:"18 to 26 ( Std 20T )"}),(0,A.jsx)(r.td,{children:"52"}),(0,A.jsx)(r.td,{children:"14"}),(0,A.jsx)(r.td,{children:"58"}),(0,A.jsx)(r.td,{children:"27"}),(0,A.jsx)(r.td,{children:"22"})]})]})]}),"\n",(0,A.jsx)(r.p,{children:"For example for the Raw 700 with STD 21T motor pulley, the calculation will be as follow:"}),"\n",(0,A.jsxs)(r.ul,{children:["\n",(0,A.jsxs)(r.li,{children:[(0,A.jsx)(r.code,{children:"motor pinion"})," = ",(0,A.jsx)(r.em,{children:"(Z1 x Z3)"})," = ",(0,A.jsx)(r.em,{children:"(21 x 18)"})," = ",(0,A.jsx)(r.code,{children:"378"}),"."]}),"\n",(0,A.jsxs)(r.li,{children:[(0,A.jsx)(r.code,{children:"main gear"})," = ",(0,A.jsx)(r.em,{children:"(Z2 x Z4)"})," = ",(0,A.jsx)(r.em,{children:"(56 x 69)"})," = ",(0,A.jsx)(r.code,{children:"3864"}),"."]}),"\n",(0,A.jsxs)(r.li,{children:[(0,A.jsx)(r.code,{children:"tail pulley"})," = ",(0,A.jsx)(r.em,{children:"(Z3 x Z6)"})," = ",(0,A.jsx)(r.em,{children:"(18 x 26)"})," = ",(0,A.jsx)(r.code,{children:"468"}),"."]}),"\n",(0,A.jsxs)(r.li,{children:[(0,A.jsx)(r.code,{children:"front pulley"})," = ",(0,A.jsx)(r.em,{children:"(Z4 x Z5)"})," = ",(0,A.jsx)(r.em,{children:"(69 x 34)"})," = ",(0,A.jsx)(r.code,{children:"2346"}),"."]}),"\n"]}),"\n",(0,A.jsx)(r.p,{children:"After entering the value the ratios in the configurator motor page should look like this."}),"\n",(0,A.jsx)(r.p,{children:(0,A.jsx)(r.img,{alt:"Gear Train",src:t(383).A+"",width:"816",height:"67"})}),"\n",(0,A.jsx)(r.h2,{id:"kds-style-two-stage-gear-train",children:"KDS Style Two-Stage Gear Train"}),"\n",(0,A.jsx)(r.p,{children:"The KDS Agile helis also have a two-stage transmission, however the autorotation gear/pulley is mounted on the main shaft, thus the tail ratio calculation will be straightforward."}),"\n",(0,A.jsx)(r.p,{children:(0,A.jsx)(r.img,{alt:"Gear Train",src:t(97636).A+"",width:"1468",height:"749"})}),"\n",(0,A.jsx)(r.p,{children:"The above pictures shows the configuration of the transmission on the KDS Agile 5.5, 7.5, A5, and A7."}),"\n",(0,A.jsxs)(r.p,{children:["For the main ratio, Rotorflight requires you to enter the ",(0,A.jsx)(r.code,{children:"motor pinion"})," and ",(0,A.jsx)(r.code,{children:"main gear"})," tooth count respectively in the two fields of the ",(0,A.jsx)(r.em,{children:"Main Rotor Gear Ratio"})," line."]}),"\n",(0,A.jsxs)(r.p,{children:["Based on the above picture, enter ",(0,A.jsx)(r.code,{children:"motor pinion"})," value as ",(0,A.jsx)(r.strong,{children:"(Z1 x Z3)"})," and ",(0,A.jsx)(r.code,{children:"main gear"})," value as ",(0,A.jsx)(r.strong,{children:"(Z2 x Z4)"}),"."]}),"\n",(0,A.jsxs)(r.p,{children:["For the tail ratio, Rotorflight requires you to enter the ",(0,A.jsx)(r.code,{children:"tail pulley"})," and ",(0,A.jsx)(r.code,{children:"front pulley"})," tooth count respectively in the two fields of the ",(0,A.jsx)(r.em,{children:"Tail Rotor Gear Ratio"})," line."]}),"\n",(0,A.jsxs)(r.p,{children:["Also based on the above picture, enter ",(0,A.jsx)(r.code,{children:"tail pulley"})," value as ",(0,A.jsx)(r.strong,{children:"Z5"})," and ",(0,A.jsx)(r.code,{children:"front pulley"})," value as ",(0,A.jsx)(r.strong,{children:"Z6"}),"."]}),"\n",(0,A.jsx)(r.p,{children:"The below table shows some gear/pulley tooth counts for these KDS helis."}),"\n",(0,A.jsxs)(r.table,{children:[(0,A.jsx)(r.thead,{children:(0,A.jsxs)(r.tr,{children:[(0,A.jsx)(r.th,{children:"Heli Model"}),(0,A.jsx)(r.th,{children:"Z1 (Motor Pulley)"}),(0,A.jsx)(r.th,{children:"Z2"}),(0,A.jsx)(r.th,{children:"Z3"}),(0,A.jsx)(r.th,{children:"Z4"}),(0,A.jsx)(r.th,{children:"Z5"}),(0,A.jsx)(r.th,{children:"Z6 (Tail Pulley)"})]})}),(0,A.jsxs)(r.tbody,{children:[(0,A.jsxs)(r.tr,{children:[(0,A.jsx)(r.td,{children:"KDS Agile A5"}),(0,A.jsx)(r.td,{children:"20 or 21 ( Std 21T )"}),(0,A.jsx)(r.td,{children:"54"}),(0,A.jsx)(r.td,{children:"17"}),(0,A.jsx)(r.td,{children:"66"}),(0,A.jsx)(r.td,{children:"54"}),(0,A.jsx)(r.td,{children:"14"})]}),(0,A.jsxs)(r.tr,{children:[(0,A.jsx)(r.td,{children:"KDS Agile 7.2"}),(0,A.jsx)(r.td,{children:"19 to 21 ( Std 19T )"}),(0,A.jsx)(r.td,{children:"54"}),(0,A.jsx)(r.td,{children:"20"}),(0,A.jsx)(r.td,{children:"66"}),(0,A.jsx)(r.td,{children:"57"}),(0,A.jsx)(r.td,{children:"12"})]}),(0,A.jsxs)(r.tr,{children:[(0,A.jsx)(r.td,{children:"KDS Agile A7"}),(0,A.jsx)(r.td,{children:"19 to 21 ( Std 20T )"}),(0,A.jsx)(r.td,{children:"54"}),(0,A.jsx)(r.td,{children:"20"}),(0,A.jsx)(r.td,{children:"66"}),(0,A.jsx)(r.td,{children:"57"}),(0,A.jsx)(r.td,{children:"12"})]})]})]}),"\n",(0,A.jsx)(r.p,{children:"For example for the KDS Agile A7 with STD 20T motor pulley, the calculation will be as follow:"}),"\n",(0,A.jsxs)(r.ul,{children:["\n",(0,A.jsxs)(r.li,{children:[(0,A.jsx)(r.code,{children:"motor pinion"})," = ",(0,A.jsx)(r.em,{children:"(Z1 x Z3)"})," = ",(0,A.jsx)(r.em,{children:"(20 x 20)"})," = ",(0,A.jsx)(r.code,{children:"400"}),"."]}),"\n",(0,A.jsxs)(r.li,{children:[(0,A.jsx)(r.code,{children:"main gear"})," = ",(0,A.jsx)(r.em,{children:"(Z2 x Z4)"})," = ",(0,A.jsx)(r.em,{children:"(54 x 66)"})," = ",(0,A.jsx)(r.code,{children:"3564"}),"."]}),"\n",(0,A.jsxs)(r.li,{children:[(0,A.jsx)(r.code,{children:"tail pulley"})," = ",(0,A.jsx)(r.em,{children:"Z6"}),"  = ",(0,A.jsx)(r.code,{children:"12"}),"."]}),"\n",(0,A.jsxs)(r.li,{children:[(0,A.jsx)(r.code,{children:"front pulley"})," = ",(0,A.jsx)(r.em,{children:"Z5"})," = ",(0,A.jsx)(r.code,{children:"57"}),"."]}),"\n"]}),"\n",(0,A.jsx)(r.p,{children:"After entering the value the ratios in the configurator motor page should look like this."}),"\n",(0,A.jsx)(r.p,{children:(0,A.jsx)(r.img,{alt:"Gear Train",src:t(30703).A+"",width:"815",height:"64"})})]})}function c(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,A.jsx)(r,{...e,children:(0,A.jsx)(a,{...e})}):a(e)}},1615:(e,r,t)=>{t.d(r,{A:()=>A});const A=t.p+"assets/images/gear-train-goblin-3332ac8ada6d2c0da4dccdb904f86657.png"},30703:(e,r,t)=>{t.d(r,{A:()=>A});const A="data:image/png;base64,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"},97636:(e,r,t)=>{t.d(r,{A:()=>A});const A=t.p+"assets/images/gear-train-kds-33f84f367d184014a3ef660bc2e0aa94.png"},383:(e,r,t)=>{t.d(r,{A:()=>A});const A="data:image/png;base64,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"},28453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>i});var A=t(96540);const n={},l=A.createContext(n);function s(e){const r=A.useContext(l);return A.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),A.createElement(l.Provider,{value:r},e.children)}}}]);