/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/* tslint:disable */
// clang-format off
function $nextRef(){return++refCount}function $el(e,n,r,t){var o={kind:"E",index:n,name:r,ref:t?++refCount:0,children:[],props:NO_PROPS,domNode:null};return e.children[e.children.length]=o,o}function $cc(e,n,r,t,o,i){var d=!0===t.$isClassCpt,a={kind:"G",index:n,cm:1,cpt:d?new t:null,render:d?null:t,props:r,changes:null,childChanges:null,ref:i?++refCount:0,children:[],domNode:null,sdGroup:null,ltGroup:null,parent:e,$lastChange:refreshCount,$lastRefresh:refreshCount};if(e.children[e.children.length]=a,a.cpt){var l=a.cpt;l.$node=a,l.$renderer=$iv.renderer,l.props=a.props,l.init&&l.init()}return o?a.ltGroup={kind:"G",index:n,cm:1,cpt:a.cpt,render:a.render,props:a.props,changes:null,childChanges:null,ref:0,children:[],domNode:null,sdGroup:a,ltGroup:null,parent:null,$lastChange:refreshCount,$lastRefresh:refreshCount}:(renderCpt(a),a)}function $cg(e,n,r,t){var o=n.children[e];if(o&&o.index===t)return o.childChanges=null,o;var i={kind:"G",index:t,cm:1,props:{},changes:null,childChanges:null,ref:++refCount,children:[],domNode:null,parent:n,$lastChange:refreshCount,$lastRefresh:refreshCount};return r.cm?n.children[n.children.length]=i:(n.children.splice(e,0,i),addChangeInstruction(i,{kind:"CG",node:i,parent:n,position:e,nextSibling:findNextDomSibling(n,e)})),i}function $lg(e,n){addChildChanges(e,n)}function $dg(e,n,r,t){for(var o=n.children[e];o&&o.index<t;){var i={kind:"DG",node:o,parent:n,position:e,nbrOfNextSiblings:n.children.length-1-e};n.children.splice(e,1),addChangeInstruction(o,i),addChildChanges(o,r),o=n.children[e]}}function $dt(e,n,r){var t={kind:"T",index:n,value:r,ref:++refCount,domNode:null};return e.children[e.children.length]=t}function $ct(e){return 0===e?"0":e||""}function $cm(e,n,r,t,o,i){i.props||(i.props={});var d=i.props[e];d||(d=i.props[e]={$isMap:!0,$lastChange:refreshCount}),r?(d=d[n]?d[n]:d[n]={$isMap:!0,$lastChange:refreshCount},t?(d=d[r]?d[r]={$isMap:!0,$lastChange:refreshCount}:d[r])[t]=o:d[r]=o):d[n]=o}function $ut(e,n,r){n.value!==e&&(n.value=e,addChangeInstruction(r,{kind:"UT",value:e,node:n}))}function $uc(e,n,r){r.props[e]=n}function $rc(e,n){var r=e;if(null!==r.sdGroup){var t=r;(r=r.sdGroup).props||(r.props={}),r.props.$content=t}else r.childChanges=null;renderCpt(r),addChildChanges(r,n)}function renderCpt(e){var n=$iv.node;if($iv.node=e,e.cpt){var r=e.cpt;if(!(r.$node.$lastRefresh===refreshCount)&&r.shouldUpdate&&!r.shouldUpdate())return;r.render(),r.$node.$lastRefresh=refreshCount}else e.render(e.props),e.$lastRefresh=refreshCount;$iv.node=n}function $refreshTemplate(e,n,r,t){var o=$iv.node,i=$iv.renderer;refreshCount++,r.childChanges=null,$iv.node=r,$iv.renderer=e,n(t),r.$lastRefresh=refreshCount,$iv.node=o,$iv.renderer=i;var d=[];retrieveChanges(r,d),e.processChanges(d)}function retrieveChanges(e,n,r){void 0===r&&(r=!0);var t,o=e.changes;if(t=e.childChanges){for(d=0;t.length>d;d++)retrieveChanges(t[d],n,r);r&&(e.childChanges=null)}if(o&&o.length){for(var i=n.length,d=0;o.length>d;d++,i++)n[i]=o[d];r&&(e.changes=null)}}function addChangeInstruction(e,n){e.changes?e.changes.splice(e.changes.length,0,n):e.changes=[n],e.$lastChange=refreshCount}function addChildChanges(e,n){(e.changes||e.childChanges)&&(n.childChanges?n.childChanges.push(e):n.childChanges=[e],n.$lastChange=refreshCount)}function findNextDomSibling(e,n,r){void 0===r&&(r=!1);var t,o=e.children;if(n+1<o.length)return"E"===(t=o[n+1]).kind?t:"T"===t.kind?t:"G"===t.kind?findNextDomSibling(t,-1,!0):findNextDomSibling(e,n+1);if("E"===e.kind)return null;if("G"===e.kind){var i=e.parent;if(i&&i!==e)for(var d=0;i.children.length>d;d++)if(i.children[d]===e)return findNextDomSibling(i,d)}return null}function htmlRenderer(e,n,r){return new Renderer(e,n,r)}function processChanges(e,n,r){for(var t=0,o=e;t<o.length;t++){var i=o[t];if("CG"===i.kind){var d=i;if(d.parent)insertGroupContent(d.node,d.parent.domNode,d.nextSibling,r);else{var a=r.createDocFragment();createDomNode(d.node,a,r,null),n.appendChild(a),replaceDomNode(a,n,d.node)}}else if("UT"===i.kind)(s=i.node)&&s.domNode&&(s.domNode.textContent=s.value);else if("UP"===i.kind){var l=i,s=l.node,c=l.name;s&&s.domNode&&(s.domNode.namespaceURI.match(RX_HTML)?s.domNode[c]=l.value:s.domNode.setAttribute(c,l.value))}else if("DG"===i.kind){var u=i;removeGroupFromDom(u.node,!0,0===u.position&&0===u.nbrOfNextSiblings)}else if("UA"===i.kind){var h=i;h.node.domNode.setAttribute(h.name,h.value)}else if("RG"===i.kind){var f=i;removeGroupFromDom(f.oldNode,!0,0===f.position&&null===f.nextSibling),insertGroupContent(f.newNode,f.parent?f.parent.domNode:null,f.nextSibling,r)}else if("UM"===i.kind){var p=i,m=p.node.domNode;if(p.names)updateMapValue(m,p.names[0],p.names[1],p.value);else if(p.name){var g=p.value;for(var C in g)"$"!==C[0]&&g.hasOwnProperty(C)&&updateMapValue(m,p.name,C,g[C])}}else console.error("[iv html renderer] Unsupported change kind: "+i.kind)}}function updateMapValue(e,n,r,t){"style"===n?e.style[r]=t:"class"===n||"className"===n||"classList"===n?t?e.classList.add(r):e.classList.remove(r):console.error("[iv html renderer] Unsupported property map:"+n)}function insertGroupContent(e,n,r,t){var o=t.createDocFragment(),i=null;if(n&&(i=n.namespaceURI)&&i.match(RX_HTML)&&(i=null),createDomNode(e,o,t,i),n){var d=!1;r?r.domNode&&(n.insertBefore(o,r.domNode),d=!0):(n.appendChild(o),d=!0),d&&replaceDomNode(o,n,e)}}function createDomNode(e,n,r,t){if(e.domNode){var o=e.domNode;return o.parentNode&&o.parentNode.removeChild(o),void n.appendChild(o)}switch(e.kind){case"E":createElementDomNode(e,n,r,t);break;case"G":e.domNode=n,processChildNodes(e,n,r,t);break;case"T":var i=r.createTextNode(e.value);e.domNode=i,n.appendChild(i);break;case"D":e.domNode=i;break;default:console.error("[iv html renderer] Invalid node kind: "+e.kind)}}function processChildNodes(e,n,r,t){for(var o=e.children,i=o.length,d=0;i>d;d++)createDomNode(o[d],n,r,t)}function createElementDomNode(e,n,r,t){var o,i,d=e.props,a=e.atts;if(a&&a.xmlns&&(t=a.xmlns),i=t?r.createElementNS(t,e.name):r.createElement(e.name),a)for(var l in a)a.hasOwnProperty(l)&&i.setAttribute(l,a[l]);if(d)if(t&&!t.match(RX_HTML))for(var l in d)d.hasOwnProperty(l)&&i.setAttribute(l,d[l]);else for(var l in d)if(d.hasOwnProperty(l)&&void 0!==(o=d[l]))if(o&&o.$isMap)if("classList"===l){var s=[];a&&(a.class?s.push(a.class):a.className&&s.push(a.className));for(var c in o)o.hasOwnProperty(c)&&"$"!==c[0]&&o[c]&&s.push(c);s.length&&(i.className=s.join(" "))}else"style"===l&&setMapProperties(i.style,o);else o.call?"o"===l[0]&&addEvtListener(i,e,l):i[l]=o;e.domNode=i,n.appendChild(i),processChildNodes(e,i,r,t)}function setMapProperties(e,n){for(var r in n)n.hasOwnProperty(r)&&"$"!==r[0]&&(e[r]=n[r])}function addEvtListener(e,n,r){e.addEventListener(r.substring(2),function(e){n.props[r].call(n,e)})}function removeGroupFromDom(e,n,r){var t,o=e.children,i=e.domNode;if(o){var d=o.length;n&&r&&countGroupDomChildren(e)===i.childNodes.length&&(i.textContent="",n=!1);for(var a=0;d>a;a++)"G"===(t=o[a]).kind?removeGroupFromDom(t,n,!1):"T"!==t.kind&&"E"!==t.kind||n&&t.domNode&&t.domNode.parentNode===i&&i.removeChild(t.domNode)}e.domNode=null}function countGroupDomChildren(e){for(var n,r,t=0,o=e.children,i=o.length,d=0;i>d;d++)"G"===(r=(n=o[d]).kind)?t+=countGroupDomChildren(n):"D"!==r&&t++;return t}function replaceDomNode(e,n,r){if(e!==n&&r.domNode===e&&(r.domNode=n,"G"===r.kind))for(var t=r.children,o=0;t.length>o;o++)replaceDomNode(e,n,t[o])}function getIntParameter(e){return parseInt(getStringParameter(e),10)}function getStringParameter(e){for(var n,r,t=document.querySelectorAll('input[name="'+e+'"]'),o=0;o<t.length;o++){var i=(r=t[o]).type;if("radio"!=i&&"checkbox"!=i||r.checked){n=r.value;break}}if(null==n)throw new Error("Could not find and input field with name "+e);return n}function bindAction(e,n){document.querySelector(e).addEventListener("click",n)}function profile(e,n,r){return function(){window.console.profile(r);for(var t=0,o=0;o++<150;){var i=window.performance.now();e(),t+=window.performance.now()-i,n()}window.console.profileEnd(),window.console.log("Iterations: "+o+"; time: "+t/o+" ms / iteration")}}function urlParamsToForm(){for(var e,n=/(\w+)=(\w+)/g,r=decodeURIComponent(location.search);e=n.exec(r);)for(var t=e[1],o=e[2],i=document.querySelectorAll('input[name="'+t+'"]'),d=void 0,a=0;a<i.length;a++)"radio"===(d=i[a]).type||"checkbox"===d.type?d.checked=d.value===o:d.value=o}function init(){maxDepth=getIntParameter("depth"),treeCreateCount=0,numberData=_buildTree(0,numberValues),charData=_buildTree(0,charValues)}function _buildTree(e,n){var r=e<maxDepth?_buildTree(e+1,n):null;return new TreeNode(n(e),e,maxDepth,r,r)}function buildTree(){return++treeCreateCount%2?numberData:charData}function numberValues(e){return e.toString()}function charValues(e){return String.fromCharCode("A".charCodeAt(0)+e%26)}function refresh(e){renderer||(renderer=htmlRenderer(document.getElementById("root"),tree)),renderer.refresh({data:e})}function destroyDom(){refresh(emptyTree)}function createDom(){refresh(data=buildTree())}function detectChanges(){for(var e=0;e<10;e++)refresh(data);detectChangesRuns+=10,numberOfChecksEl.textContent=""+detectChangesRuns}function getColor(e){return e%2?"":"grey"}function tree(e){var n,r,t,o,i=$iv.node,d=e.data;i.cm?(r=$el(n=$el(i,1,"tree",1),2,"span",0),$cm("style","backgroundColor",0,0,getColor(d.depth),r),$dt(r,3,""+$ct(d.value))):(t=(r=(n=i.children[0]).children[0]).children[0],$ut(""+$ct(d.value),t,i)),o=1,null!=d.left&&(r=$cg(o,n,i,4),o++,0,r.cm?(t=$cc(r,5,{data:d.left},tree,0,1),r.cm=0):(t=r.children[0],$uc("data",d.left,t),$rc(t,r)),$lg(r,i)),null!=d.right&&($dg(o,n,i,6),r=$cg(o,n,i,6),o++,0,r.cm?(t=$cc(r,7,{data:d.right},tree,0,1),r.cm=0):(t=r.children[0],$uc("data",d.right,t),$rc(t,r)),$lg(r,i)),i.cm?i.cm=0:$dg(o,n,i,8)}function noop(){}var EMPTY_PROPS={},NO_PROPS=void 0,refreshCount=0,refCount=0,$iv={node:null,renderer:null,reset:function(e){1===e?refCount=0:2===e&&(refreshCount=0)},get refreshCount(){return refreshCount}},RX_HTML=/html/i,Renderer=function(){function e(e,n,r){this.htmlElement=e,this.vdFunction=n;var t=this.vdom={kind:"G",index:0,ref:$nextRef(),cm:1,changes:null,childChanges:null,children:[],domNode:null,parent:null,$lastChange:$iv.refreshCount,$lastRefresh:$iv.refreshCount},o={kind:"CG",node:t,parent:null,position:-1,nextSibling:null};t.changes=[o],this.doc=r||{createDocFragment:function(){return document.createDocumentFragment()},createTextNode:function(e){return document.createTextNode(e)},createElement:function(e){return document.createElement(e)},createElementNS:function(e,n){return document.createElementNS(e,n)}}}return e.prototype.refresh=function(e){$refreshTemplate(this,this.vdFunction,this.vdom,e)},e.prototype.processChanges=function(e){processChanges(e,this.htmlElement,this.doc)},e}();urlParamsToForm();var TreeNode=function(){function e(e,n,r,t,o){this.value=e,this.depth=n,this.maxDepth=r,this.left=t,this.right=o,this.transitiveChildCount=Math.pow(2,this.maxDepth-this.depth+1)-1,this.children=this.left?[this.left,this.right]:[]}return Object.defineProperty(e.prototype,"style",{get:function(){return this.depth%2==0?"background-color: grey":""},enumerable:!0,configurable:!0}),e}(),treeCreateCount,maxDepth,numberData,charData;init();var emptyTree=new TreeNode("",0,0,null,null),renderer,data=emptyTree,numberOfChecksEl=document.getElementById("numberOfChecks"),detectChangesRuns=0;bindAction("#destroyDom",destroyDom),bindAction("#createDom",createDom),bindAction("#detectChanges",detectChanges),bindAction("#detectChangesProfile",profile(detectChanges,noop,"detectChanges")),bindAction("#updateDomProfile",profile(createDom,noop,"update")),bindAction("#createDomProfile",profile(createDom,destroyDom,"create"));
// clang-format on