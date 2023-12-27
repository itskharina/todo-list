(()=>{"use strict";class e{constructor(e){this.name=e,this.taskList=[]}addTodo(e){this.taskList.push(e)}}class t{constructor(e,t,c,n){this.title=e,this.desc=t,this.dueDate=c,this.priority=n}}const c=()=>{if(a){const e=a.taskList,t=document.querySelector(".task-container");t.innerHTML="",e.forEach((e=>{const c=document.createElement("div");c.classList.add("div-tasks");const n=document.createElement("div");n.classList.add("div-title"),n.textContent=`${e.title}`;const o=document.createElement("div");o.classList.add("div-date"),o.textContent=`${e.dueDate}`;const a=document.createElement("div");a.classList.add("div-priority"),a.textContent=`${e.priority}`;const s=document.createElement("div");s.classList.add("right-container");const d=document.createElement("i");d.classList.add("fa-solid","fa-circle-info"),document.createElement("i").classList.add("fa-solid","fa-pen-to-square");const r=document.createElement("i");r.classList.add("fa-solid","fa-trash-can"),s.append(o,a,r,d),c.append(n,s),t.append(c)}))}};function n(){const e=document.querySelectorAll("input"),t=document.querySelector("textarea");e.forEach((e=>{"radio"!==e.type&&(e.value="")})),t.value=""}const o=[];let a=null;const s=()=>{const e=document.querySelector("ul");e.innerHTML="",o.forEach(((t,n)=>{const o=document.createElement("li"),d=document.createElement("button");d.classList.add("project-btn","button");const i=document.createElement("div");i.classList.add("icon-name");const l=document.createElement("i");l.classList.add("fa-solid","fa-list-ul");const u=document.createElement("i");u.classList.add("fa-solid","fa-trash-can"),u.dataset.index=n;const m=document.createElement("span");if(m.innerHTML=`${t.name}`,i.append(l,m),d.append(i,u),o.append(d),e.append(o),d.addEventListener("click",(()=>{r(t),s(),c()})),a&&t.name===a.name){d.classList.add("current-project");const e=document.querySelector(".project-title");e.textContent=a.name,e.classList.add("underline")}})),document.querySelectorAll(".fa-trash-can").forEach((e=>{e.addEventListener("click",d)}))},d=e=>{const t=e.target.dataset.index;o.splice(t,1),a&&t===a.name&&(a=null,localStorage.removeItem("currentProject")),localStorage.setItem("projectArray",JSON.stringify(o));const n=document.querySelector(".project-title");n.textContent="",n.classList.remove("underline"),s(),c()},r=e=>{a=e,localStorage.setItem("currentProject",JSON.stringify(a))};(()=>{document.querySelector(".add-task").addEventListener("click",(function(){e.classList.remove("hidden")})),document.querySelector(".remove-task").addEventListener("click",t);const e=document.querySelector(".task-popup");function t(){e.classList.add("hidden")}document.addEventListener("keydown",(e=>{"Escape"===e.key&&t()}))})(),(()=>{document.querySelector(".add-project").addEventListener("click",(function(){e.classList.remove("hidden")})),document.querySelector(".remove-project").addEventListener("click",t);const e=document.querySelector(".project-popup");function t(){e.classList.add("hidden")}document.addEventListener("keydown",(e=>{"Escape"===e.key&&t()}))})(),(()=>{const t=document.querySelector("#submit-project"),c=document.querySelector("#name"),d=()=>{const t=c.value,d=new e(t);o.push(d),a=d,localStorage.setItem("projectArray",JSON.stringify(o)),document.querySelector(".project-popup").classList.add("hidden"),s(),n(),console.log(o)};t.addEventListener("click",(e=>{e.preventDefault(),d()})),c.addEventListener("keydown",(e=>{"Enter"===e.key&&(e.preventDefault(),d())}))})(),(()=>{const e=document.querySelector("#submit-task");e.addEventListener("click",(e=>{e.preventDefault(),(()=>{const e=document.querySelector("#title").value,c=document.querySelector("#description").value,s=document.querySelector("#date").value,d=document.querySelector('input[type="radio"]:checked').value;if(a){const r=new t(e,c,s,d);a.addTodo(r),console.log(a),localStorage.setItem("projectArray",JSON.stringify(o)),document.querySelector(".task-popup").classList.add("hidden"),n(),document.querySelectorAll('input[type="radio"]').forEach((e=>{e.checked=!1}))}else alert("Please select a project before adding a task.")})(),c()})),dueDate.addEventListener("keydown",(e=>{"Enter"===e.key&&(e.preventDefault(),submitProjectForm())}))})()})();