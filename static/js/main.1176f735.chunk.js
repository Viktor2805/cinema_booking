(this.webpackJsonpcinema_booking=this.webpackJsonpcinema_booking||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),l=a.n(c),s=(a(13),a(7)),i=a(1),o=a(2),m=a(4),h=a(3),d=(a(14),a(15),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).styleSeat=function(){var e=n.props.seat,t=e.id,a=e.reserved,r=e.selected,c=n.props.pathToMove,l=c.x,s=c.y,i=c.idOfSeat,o=document.styleSheets[0],m="@keyframes ".concat("rainbow"," {\n            0% {transform:translate(0px, 0px)} \n            100% {transform:translate(",l-33,"px, ").concat(s+40,"px) rotate(20deg)}\n        }");r&&i===t&&o.insertRule(m,o.cssRules.length);var h={backgroundColor:"",marginTop:"",marginRight:""};return a&&(h.backgroundColor="#de6363"),t%10!==0||Number.isInteger(t/20)||(h.marginRight="20px"),t>400&&t<=420&&(h.marginTop="20px"),r&&(h.backgroundColor="#21c252",h.animationName="rainbow",h.animationDuration="0.5s"),h},n.ref=r.a.createRef(),n}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.props.seat,a=t.id,n=t.reserved,c=t.numOfSeat,l=n?"":"tooltip";return r.a.createElement("div",{ref:this.ref,className:"seat "+l,"data-tooltip":c,style:this.styleSeat(),onClick:function(t){return e.props.selectSeat(a,t,e.ref)}})}}]),a}(n.Component)),p=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"seats"},r.a.createElement("h1",null,"Seating plan"),this.props.seats.map((function(t){return r.a.createElement(d,{key:t.id,seat:t,selectSeat:e.props.selectSeat,pathToMove:e.props.pathToMove})})),r.a.createElement("ul",{className:"legend"},r.a.createElement("li",{className:"legend__item legend__item--free"},"Free"),r.a.createElement("li",{className:"legend__item legend__item--reserved"},"Reserved"),r.a.createElement("li",{className:"legend__item legend__item--selected"},"Selected")))}}]),a}(n.Component),u=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("svg",{className:"basket",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},r.a.createElement("g",{"data-name":"1",id:"_1"},r.a.createElement("path",{d:"M397.78,316H192.65A15,15,0,0,1,178,304.33L143.46,153.85a15,15,0,0,1,14.62-18.36H432.35A15,15,0,0,1,447,153.85L412.4,304.33A15,15,0,0,1,397.78,316ZM204.59,286H385.84l27.67-120.48H176.91Z"}),r.a.createElement("path",{d:"M222,450a57.48,57.48,0,1,1,57.48-57.48A57.54,57.54,0,0,1,222,450Zm0-84.95a27.48,27.48,0,1,0,27.48,27.47A27.5,27.5,0,0,0,222,365.05Z"}),r.a.createElement("path",{d:"M368.42,450a57.48,57.48,0,1,1,57.48-57.48A57.54,57.54,0,0,1,368.42,450Zm0-84.95a27.48,27.48,0,1,0,27.48,27.47A27.5,27.5,0,0,0,368.42,365.05Z"}),r.a.createElement("path",{d:"M158.08,165.49a15,15,0,0,1-14.23-10.26L118.14,78H70.7a15,15,0,1,1,0-30H129a15,15,0,0,1,14.23,10.26l29.13,87.49a15,15,0,0,1-14.23,19.74Z"})))}}]),a}(n.Component),v=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.props.seat,a=t.id,n=t.numOfSeat;return r.a.createElement("div",{className:"wrapper-ticket"},r.a.createElement("svg",{onClick:function(){return e.props.removeTicket(a)},className:"cansel-icon",height:"365pt",viewBox:"0 0 365.71733 365",width:"365pt",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("g",{fill:"#f44336"},r.a.createElement("path",{d:"m356.339844 296.347656-286.613282-286.613281c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503906-12.5 32.769532 0 45.25l286.613281 286.613282c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082032c12.523438-12.480468 12.523438-32.75.019532-45.25zm0 0"}),r.a.createElement("path",{d:"m295.988281 9.734375-286.613281 286.613281c-12.5 12.5-12.5 32.769532 0 45.25l15.082031 15.082032c12.503907 12.5 32.769531 12.5 45.25 0l286.632813-286.59375c12.503906-12.5 12.503906-32.765626 0-45.246094l-15.082032-15.082032c-12.5-12.523437-32.765624-12.523437-45.269531-.023437zm0 0"}))),r.a.createElement("div",{className:"ticket"},"\u2116 ",n))}}]),a}(n.Component),f=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).myRef=r.a.createRef(),n}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.selected,n=t.basketOpen,c={},l={};0===a.length?(c={transform:"scale(0)"},l={backgroundColor:"#48724e"}):l={backgroundColor:"#017374"};var s="",i={};n&&0!==a.length?(s="wrapper-basket animation",i.display="flex"):(i.display="none",s="wrapper-basket");return r.a.createElement("div",{className:"checkout"},r.a.createElement("div",{className:s},r.a.createElement("div",{onClick:function(t){return e.props.basketToggle(t)},style:l,className:"button-basket"},r.a.createElement(u,null),r.a.createElement("span",{ref:this.myRef,style:c},a.length)),r.a.createElement("h2",{style:i},"Tickets"),r.a.createElement("div",{style:i,className:"tickets scrollbar",id:"style-2"},r.a.createElement("div",{className:"force-overflow"}),a.map((function(t){return r.a.createElement(v,{removeTicket:e.props.removeTicket,key:t.id,seat:t})})))),r.a.createElement("button",{className:"total"},"Total - $(",70*a.length,")"),r.a.createElement("button",{className:"action action--buy"},"Buy tickets"))}}]),a}(n.Component),b=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("svg",{className:"cinema",height:"512",viewBox:"0 0 512 512",width:"512",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("circle",{cx:"256",cy:"200",fill:"#ecae49",r:"176"}),r.a.createElement("path",{d:"m163.658 109.736a11.544 11.544 0 0 1 -1.75-18.736 144.487 144.487 0 0 1 21.107-15.159 142.61 142.61 0 0 1 25.564-11.841 11.554 11.554 0 0 1 15.421 10.859v49.741a11.53 11.53 0 0 1 -17.295 9.985z",fill:"#d08b29"}),r.a.createElement("path",{d:"m288 74.9a11.544 11.544 0 0 1 15.354-10.885 144.507 144.507 0 0 1 23.682 10.7 142.657 142.657 0 0 1 23.031 16.223 11.554 11.554 0 0 1 -1.691 18.783l-43.076 24.868a11.53 11.53 0 0 1 -17.3-9.989z",fill:"#d08b29"}),r.a.createElement("path",{d:"m72 232h368v240h-368z",fill:"#58646f"}),r.a.createElement("path",{d:"m56 168h400v80h-400z",fill:"#58646f"}),r.a.createElement("path",{d:"m56 456h400v32h-400z",fill:"#48525b"}),r.a.createElement("path",{d:"m128 312h96v144h-96z",fill:"#0093ba"}),r.a.createElement("path",{d:"m288 312h96v144h-96z",fill:"#0093ba"}),r.a.createElement("path",{d:"m72 248h368v16h-368z",fill:"#48525b"}),r.a.createElement("path",{d:"m248 48h16v96h-16z"}),r.a.createElement("path",{d:"m133.685 114h16v40h-16z",transform:"matrix(.5 -.866 .866 .5 -45.205 189.703)"}),r.a.createElement("path",{d:"m350.315 126h40v16h-40z",transform:"matrix(.866 -.5 .5 .866 -17.387 203.11)"}),r.a.createElement("path",{d:"m223.808 58.975a19.7 19.7 0 0 0 -17.858-2.529 151.044 151.044 0 0 0 -27 12.5 152.81 152.81 0 0 0 -22.275 16 19.544 19.544 0 0 0 2.981 31.72l43.047 24.853a19.53 19.53 0 0 0 29.297-16.919v-49.741a19.519 19.519 0 0 0 -8.192-15.884zm-7.808 65.625a3.53 3.53 0 0 1 -5.295 3.057l-43.047-24.853a3.445 3.445 0 0 1 -1.745-2.716 3.5 3.5 0 0 1 1.227-3.043 136.725 136.725 0 0 1 19.937-14.32 135.005 135.005 0 0 1 24.131-11.171 3.579 3.579 0 0 1 3.33.458 3.41 3.41 0 0 1 1.462 2.847z"}),r.a.createElement("path",{d:"m362.035 101.608a19.694 19.694 0 0 0 -6.735-16.729 150.973 150.973 0 0 0 -24.323-17.131 152.724 152.724 0 0 0 -24.997-11.292 19.543 19.543 0 0 0 -25.98 18.444v49.7a19.487 19.487 0 0 0 29.3 16.913l43.08-24.872a19.518 19.518 0 0 0 9.655-15.033zm-15.929-1.508a3.409 3.409 0 0 1 -1.731 2.687l-43.075 24.874a3.53 3.53 0 0 1 -5.3-3.061v-49.7a3.446 3.446 0 0 1 1.479-2.869 3.56 3.56 0 0 1 2.047-.669 3.646 3.646 0 0 1 1.2.21 136.82 136.82 0 0 1 22.374 10.103 135.033 135.033 0 0 1 21.74 15.313 3.58 3.58 0 0 1 1.266 3.112z"}),r.a.createElement("path",{d:"m456 256a8 8 0 0 0 8-8v-80a8 8 0 0 0 -8-8h-20.371a184.037 184.037 0 0 0 -359.258 0h-20.371a8 8 0 0 0 -8 8v80a8 8 0 0 0 8 8h8v192h-8a8 8 0 0 0 -8 8v32a8 8 0 0 0 8 8h400a8 8 0 0 0 8-8v-32a8 8 0 0 0 -8-8h-8v-192zm-200-224a167.889 167.889 0 0 1 163.2 128h-326.4a167.889 167.889 0 0 1 163.2-128zm-192 144h384v64h-384zm384 304h-384v-16h384zm-264-128h32v96h-32zm32-16h-32v-16h32zm-48 0h-32v-16h32zm-32 16h32v96h-32zm208 0h32v96h-32zm32-16h-32v-16h32zm-48 0h-32v-16h32zm-32 16h32v96h-32zm136 96h-40v-136a8 8 0 0 0 -8-8h-96a8 8 0 0 0 -8 8v136h-48v-136a8 8 0 0 0 -8-8h-96a8 8 0 0 0 -8 8v136h-40v-192h352z"}),r.a.createElement("path",{d:"m88 200h16v16h-16z"}),r.a.createElement("path",{d:"m120 200h296v16h-296z"}),r.a.createElement("path",{d:"m168 272h16v16h-16z"}),r.a.createElement("path",{d:"m328 272h16v16h-16z"}))}}]),a}(n.Component),g=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"movie"},r.a.createElement("div",{className:"wrapper-logo"},r.a.createElement(b,null),r.a.createElement("p",null,"Cinema")),r.a.createElement("img",{src:"https://i.pinimg.com/564x/a1/3c/c5/a13cc59013b3554919aa67998d788bf0.jpg",alt:""}),r.a.createElement("div",{className:"price"},"Ticket Price - $70"))}}]),a}(n.Component),E=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){var e=n.childRef.current.myRef.current.getBoundingClientRect(),t=e.x,a=e.y;n.setState({positionOfBasket:{xOfSeat:t,yOfSeat:a}});for(var r=[],c=1,l=1;l<=20;l++)for(var s=1;s<=40;s++){var i=String.fromCharCode(l+64)+s;5===Math.floor(9*Math.random())?r.push({id:c++,numOfseat:i,reserved:!0,selected:!1}):r.push({id:c++,numOfSeat:i,reserved:!1,selected:!1})}n.setState({seats:r})},n.selectSeat=function(e,t){var a=t.currentTarget.getBoundingClientRect(),r=a.x,c=a.y,l=n.state.positionOfBasket,i=l.xOfSeat,o=l.yOfSeat;n.setState({pathToMove:{x:i-r,y:o-c,idOfSeat:e}}),n.setState({seats:n.state.seats.map((function(t){return t.id!==e||t.reserved||(t.selected=!t.selected,t.selected?n.setState({selected:[].concat(Object(s.a)(n.state.selected),[t])}):n.setState({selected:n.state.selected.filter((function(e){if(e.id!==t.id)return e}))})),t}))})},n.basketToggle=function(e){0!==n.state.selected.length&&n.setState({basketOpen:!n.state.basketOpen})},n.removeTicket=function(e){n.setState({seats:n.state.seats.map((function(t){return t.id!==e||t.reserved||(t.selected=!t.selected,t.selected||n.setState({selected:n.state.selected.filter((function(e){if(e.id!==t.id)return e}))})),t}))})},n.childRef=r.a.createRef(),n.state={seats:[],selected:[],positionOfBasket:{},pathToMove:{},basketOpen:!1},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=(e.id,e.seats),a=e.selected,n=e.pathToMove,c=e.basketOpen;return r.a.createElement("div",{className:"App"},r.a.createElement(g,null),r.a.createElement(p,{pathToMove:n,seats:t,selectSeat:this.selectSeat}),r.a.createElement(f,{ref:this.childRef,selected:a,basketToggle:this.basketToggle,basketOpen:c,removeTicket:this.removeTicket}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.1176f735.chunk.js.map