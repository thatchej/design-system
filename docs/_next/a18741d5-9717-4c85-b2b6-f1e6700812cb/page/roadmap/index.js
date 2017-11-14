
          window.__NEXT_REGISTER_PAGE('/roadmap', function() {
            var comp = module.exports=webpackJsonp([12],{1066:function(e,t,a){e.exports=a(1067)},1067:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e){return e&&e.__esModule?e:{default:e}}var i=a(7),o=l(i),s=a(0),r=l(s);Object.defineProperty(t,"__esModule",{value:!0});var d=a(20),u=n(d),c=a(14),f=n(c),m=a(15),p=n(m),g=a(21),h=n(g),y=a(22),x=n(y),b=a(140),w=n(b),E=a(1),k=n(E),v=a(27),j=n(v),M=a(138),C=(n(M),a(16)),S={now:[{title:"Tag",tags:["Component"]},{title:"Layout",tags:["Core"]}],next:[{title:"Navigation Updates",tags:["Site"]},{title:"Drawer",tags:["Component"]},{title:"Avatar",tags:["Component"]},{title:"Button - Loading States",tags:["Component"]},{title:"View Toggle",tags:["Component"]}],future:[{title:"Tooltip / Popover",tags:["Component"]},{title:"Progress Loader",tags:["Component"]},{title:"Writing Style",tags:["Guidelines"]},{title:"Text (vNext)",tags:["Component"]},{title:"Tab (vNext)",tags:["Component"]},{title:"Banner",tags:["Component"]},{title:"Text Input",tags:["Component"]},{title:"Breadcrumb",tags:["Component"]},{title:"Switch",tags:["Component"]},{title:"Modal",tags:["Component"]},{title:"Dialog",tags:["Pattern"]},{title:"Blank State",tags:["Pattern"]},{title:"Error Pages",tags:["Pattern"]},{title:"Data Table",tags:["Pattern"]}]},T=function(e){return r.default.createElement("div",{className:"purpose","data-jsx":2469333919},e.children,r.default.createElement(o.default,{styleId:2469333919,css:'.purpose[data-jsx="2469333919"]{font-size:'+k.default.type.fontSizeMedium+";line-height:"+k.default.type.lineHeightExtra+";font-weight:"+k.default.type.fontWeightXLight+"}"}))},N=function(e){return r.default.createElement("div",{"aria-hidden":"true",className:"bar","data-jsx":693756736},r.default.createElement(o.default,{styleId:693756736,css:'.bar[data-jsx="693756736"]{height:0;overflow:hidden;padding-bottom:'+k.default.layout.spacingXLarge+";border-bottom:1px solid "+k.default.colors.gray01+";margin-bottom:"+k.default.layout.spacingSmall+"}"}))},O=function(e){return r.default.createElement("div",{className:"tasks",style:{borderLeftColor:e.color},"data-jsx":2597502096},e.tasks.map(function(e){return r.default.createElement(I,{key:e.title,item:e})}),r.default.createElement(o.default,{styleId:2597502096,css:'.tasks[data-jsx="2597502096"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:0 calc('+k.default.layout.spacingMedium+" / -2) 0 0;border-left-style:solid;border-left-width:5px;padding-left:"+k.default.layout.spacingXSmall+"}"}))},P=function(e){return r.default.createElement("div",{className:"cat "+(e.isVisible?"cat--is-visible":""),"aria-hidden":!0,"data-jsx":885262860},r.default.createElement(C.GithubIcon,{color:j.default.colors.gray01}),r.default.createElement(o.default,{styleId:885262860,css:'.cat[data-jsx="885262860"]{margin-left:auto;height:24px;width:24px;opacity:0;-webkit-transition:opacity '+k.default.motion.speedNormal+";transition:opacity "+k.default.motion.speedNormal+'}.cat--is-visible[data-jsx="885262860"]{opacity:1}'}))},I=function(e){function t(e){(0,f.default)(this,t);var a=(0,h.default)(this,(t.__proto__||(0,u.default)(t)).call(this,e));return a.handleMouseOver=a.handleMouseOver.bind(a),a.handleMouseOut=a.handleMouseOut.bind(a),a.state={isOver:!1},a}return(0,x.default)(t,e),(0,p.default)(t,[{key:"handleMouseOver",value:function(){this.setState({isOver:!0})}},{key:"handleMouseOut",value:function(){this.setState({isOver:!1})}},{key:"render",value:function(){var e=this.props.item,a=e.tags.indexOf("Site")>-1?"site: "+e.title+" Roadmap Discussion":e.title.toLowerCase().replace(/ /g,"-").replace(/[\(\)]/g,"")+": Roadmap Discussion",l=e.href?e.href:"https://github.com/pluralsight/design-system/issues/new?title="+a;return r.default.createElement("a",{href:l,target:"_blank",className:"task",onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut,"data-jsx":2784244981},r.default.createElement(t.Title,null,e.title),r.default.createElement(t.Tags,{tags:e.tags,icon:r.default.createElement(P,{isVisible:this.state.isOver})}),r.default.createElement(o.default,{styleId:2784244981,css:'.task[data-jsx="2784244981"]{text-decoration:none;color:inherit;display:block;width:100%;margin:calc('+k.default.layout.spacingMedium+" / 2);background:"+k.default.colors.bone+";padding:"+k.default.layout.spacingMedium+";border-radius:12px;border:2px solid transparent;-webkit-transition:all "+k.default.motion.speedNormal+";transition:all "+k.default.motion.speedNormal+'}.task[data-jsx="2784244981"]:focus,.task[data-jsx="2784244981"]:hover{border:2px solid '+k.default.colors.gray01+";outline:none;background:"+k.default.colors.white+'}@media screen and (min-width:1000px){.task[data-jsx="2784244981"]{width:calc(33.333% - '+k.default.layout.spacingMedium+")}}"}))}}]),t}(r.default.Component);I.Title=function(e){return r.default.createElement("div",{className:"title","data-jsx":125360031},e.children,r.default.createElement(o.default,{styleId:125360031,css:'.title[data-jsx="125360031"]{margin:0 0 '+k.default.layout.spacingSmall+" 0;font-size:"+k.default.type.fontSizeMedium+";font-weight:"+k.default.type.fontWeightMedium+"}"}))},I.Tags=function(e){return r.default.createElement("div",{className:"tags","data-jsx":4048218912},e.tags.map(function(e){return r.default.createElement(I.Tag,{key:e},e)}),e.icon,r.default.createElement(o.default,{styleId:4048218912,css:'.tags[data-jsx="4048218912"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}'}))},I.Tag=function(e){return r.default.createElement("div",{className:"tag","data-jsx":2468004776},r.default.createElement(w.default,{appearance:w.default.appearances.stroke},e.children),r.default.createElement(o.default,{styleId:2468004776,css:'.tag[data-jsx="2468004776"]{overflow:hidden}'}))},t.default=(0,C.withServerProps)(function(e){return r.default.createElement(C.Chrome,null,r.default.createElement(C.Content,{title:"Install"},r.default.createElement(C.PageHeading,null,"Roadmap"),r.default.createElement(T,null,"The Roadmap aims to expose what current is and what future work will be tackled in the Design System. Explore the items below and follow them on to Github for more details and to join the conversation to promote or explore these or other items."),r.default.createElement(N,null),r.default.createElement(C.SectionHeading,null,"Now"),r.default.createElement(C.P,null,"What the team is working on currently. These issues are started and we anticipate completing them."),r.default.createElement(O,{color:k.default.colors.green,tasks:S.now}),r.default.createElement(N,null),r.default.createElement(C.SectionHeading,null,"Next"),r.default.createElement(C.P,null,"Here is what we think is coming up quickly (roughly this quarter). Priorities often change. Voice your thoughts on any of these issues, including priority, on"," ",r.default.createElement(C.TextLink,{href:"https://github.com/pluralsight/design-system/issues"},"Github"),", or take a look at how you can"," ",r.default.createElement(C.TextLink,{href:"/contribute"},"contribute"),"."),r.default.createElement(O,{color:k.default.colors.yellow,tasks:S.next}),r.default.createElement(N,null),r.default.createElement(C.SectionHeading,null,"Future"),r.default.createElement(C.P,null,"Longer-term ideas. These are deemed to add value but are in need of more concrete discovery and prioritization."),r.default.createElement(O,{color:k.default.colors.pink,tasks:S.future})))})}},[1066]);
            return { page: comp.default }
          })
        