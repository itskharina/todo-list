(()=>{"use strict";class t{constructor(t){this.name=t,this.taskList=[]}addTask(t){this.taskList.push(t)}}class e{constructor(t,e,n,a){this.title=t,this.desc=e,this.dueDate=n,this.priority=a}}function n(t){const e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new t.constructor(+t):"number"==typeof t||"[object Number]"===e||"string"==typeof t||"[object String]"===e?new Date(t):new Date(NaN)}function a(t){if(!(e=t,e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)||"number"==typeof t))return!1;var e;const a=n(t);return!isNaN(Number(a))}const r={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function o(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const i={date:o({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:o({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:o({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},s={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function c(t){return(e,n)=>{let a;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,r=n?.width?String(n.width):e;a=t.formattingValues[r]||t.formattingValues[e]}else{const e=t.defaultWidth,r=n?.width?String(n.width):t.defaultWidth;a=t.values[r]||t.values[e]}return a[t.argumentCallback?t.argumentCallback(e):e]}}function u(t){return(e,n={})=>{const a=n.width,r=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],o=e.match(r);if(!o)return null;const i=o[0],s=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(s)?function(t,e){for(let e=0;e<t.length;e++)if(t[e].test(i))return e}(s):function(t,e){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&t[e].test(i))return e}(s);let u;return u=t.valueCallback?t.valueCallback(c):c,u=n.valueCallback?n.valueCallback(u):u,{value:u,rest:e.slice(i.length)}}}var d;const l={code:"en-US",formatDistance:(t,e,n)=>{let a;const o=r[t];return a="string"==typeof o?o:1===e?o.one:o.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a},formatLong:i,formatRelative:(t,e,n,a)=>s[t],localize:{ordinalNumber:(t,e)=>{const n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:c({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:c({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:c({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:c({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:c({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(d={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,e={})=>{const n=t.match(d.matchPattern);if(!n)return null;const a=n[0],r=t.match(d.parsePattern);if(!r)return null;let o=d.valueCallback?d.valueCallback(r[0]):r[0];return o=e.valueCallback?e.valueCallback(o):o,{value:o,rest:t.slice(a.length)}}),era:u({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:u({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:u({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:u({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:u({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};let m={};function h(){return m}Math.pow(10,8);const f=6048e5,g=864e5;function w(t){const e=n(t);return e.setHours(0,0,0,0),e}function y(t){const e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function p(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function b(t){const e=n(t);return function(t,e){const n=w(t),a=w(e),r=n.getTime()-y(n),o=a.getTime()-y(a);return Math.round((r-o)/g)}(e,function(t){const e=n(t),a=p(t,0);return a.setFullYear(e.getFullYear(),0,1),a.setHours(0,0,0,0),a}(e))+1}function v(t,e){const a=h(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??a.weekStartsOn??a.locale?.options?.weekStartsOn??0,o=n(t),i=o.getDay(),s=(i<r?7:0)+i-r;return o.setDate(o.getDate()-s),o.setHours(0,0,0,0),o}function k(t){return v(t,{weekStartsOn:1})}function M(t){const e=n(t),a=e.getFullYear(),r=p(t,0);r.setFullYear(a+1,0,4),r.setHours(0,0,0,0);const o=k(r),i=p(t,0);i.setFullYear(a,0,4),i.setHours(0,0,0,0);const s=k(i);return e.getTime()>=o.getTime()?a+1:e.getTime()>=s.getTime()?a:a-1}function S(t){const e=n(t),a=k(e).getTime()-function(t){const e=M(t),n=p(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),k(n)}(e).getTime();return Math.round(a/f)+1}function E(t,e){const a=n(t),r=a.getFullYear(),o=h(),i=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??o.firstWeekContainsDate??o.locale?.options?.firstWeekContainsDate??1,s=p(t,0);s.setFullYear(r+1,0,i),s.setHours(0,0,0,0);const c=v(s,e),u=p(t,0);u.setFullYear(r,0,i),u.setHours(0,0,0,0);const d=v(u,e);return a.getTime()>=c.getTime()?r+1:a.getTime()>=d.getTime()?r:r-1}function x(t,e){const a=n(t),r=v(a,e).getTime()-function(t,e){const n=h(),a=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,r=E(t,e),o=p(t,0);return o.setFullYear(r,0,a),o.setHours(0,0,0,0),v(o,e)}(a,e).getTime();return Math.round(r/f)+1}function L(t,e){return(t<0?"-":"")+Math.abs(t).toString().padStart(e,"0")}const D={y(t,e){const n=t.getFullYear(),a=n>0?n:1-n;return L("yy"===e?a%100:a,e.length)},M(t,e){const n=t.getMonth();return"M"===e?String(n+1):L(n+1,2)},d:(t,e)=>L(t.getDate(),e.length),a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(t,e)=>L(t.getHours()%12||12,e.length),H:(t,e)=>L(t.getHours(),e.length),m:(t,e)=>L(t.getMinutes(),e.length),s:(t,e)=>L(t.getSeconds(),e.length),S(t,e){const n=e.length,a=t.getMilliseconds();return L(Math.floor(a*Math.pow(10,n-3)),e.length)}},P={G:function(t,e,n){const a=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if("yo"===e){const e=t.getFullYear(),a=e>0?e:1-e;return n.ordinalNumber(a,{unit:"year"})}return D.y(t,e)},Y:function(t,e,n,a){const r=E(t,a),o=r>0?r:1-r;return"YY"===e?L(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):L(o,e.length)},R:function(t,e){return L(M(t),e.length)},u:function(t,e){return L(t.getFullYear(),e.length)},Q:function(t,e,n){const a=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return L(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){const a=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return L(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){const a=t.getMonth();switch(e){case"M":case"MM":return D.M(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){const a=t.getMonth();switch(e){case"L":return String(a+1);case"LL":return L(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(t,e,n,a){const r=x(t,a);return"wo"===e?n.ordinalNumber(r,{unit:"week"}):L(r,e.length)},I:function(t,e,n){const a=S(t);return"Io"===e?n.ordinalNumber(a,{unit:"week"}):L(a,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):D.d(t,e)},D:function(t,e,n){const a=b(t);return"Do"===e?n.ordinalNumber(a,{unit:"dayOfYear"}):L(a,e.length)},E:function(t,e,n){const a=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){const r=t.getDay(),o=(r-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return L(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){const r=t.getDay(),o=(r-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return L(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,n){const a=t.getDay(),r=0===a?7:a;switch(e){case"i":return String(r);case"ii":return L(r,e.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){const a=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){const a=t.getHours();let r;switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){const a=t.getHours();let r;switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){let e=t.getHours()%12;return 0===e&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return D.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):D.H(t,e)},K:function(t,e,n){const a=t.getHours()%12;return"Ko"===e?n.ordinalNumber(a,{unit:"hour"}):L(a,e.length)},k:function(t,e,n){let a=t.getHours();return 0===a&&(a=24),"ko"===e?n.ordinalNumber(a,{unit:"hour"}):L(a,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):D.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):D.s(t,e)},S:function(t,e){return D.S(t,e)},X:function(t,e,n,a){const r=(a._originalDate||t).getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return q(r);case"XXXX":case"XX":return W(r);default:return W(r,":")}},x:function(t,e,n,a){const r=(a._originalDate||t).getTimezoneOffset();switch(e){case"x":return q(r);case"xxxx":case"xx":return W(r);default:return W(r,":")}},O:function(t,e,n,a){const r=(a._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+T(r,":");default:return"GMT"+W(r,":")}},z:function(t,e,n,a){const r=(a._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+T(r,":");default:return"GMT"+W(r,":")}},t:function(t,e,n,a){const r=a._originalDate||t;return L(Math.floor(r.getTime()/1e3),e.length)},T:function(t,e,n,a){return L((a._originalDate||t).getTime(),e.length)}};function T(t,e=""){const n=t>0?"-":"+",a=Math.abs(t),r=Math.floor(a/60),o=a%60;return 0===o?n+String(r):n+String(r)+e+L(o,2)}function q(t,e){return t%60==0?(t>0?"-":"+")+L(Math.abs(t)/60,2):W(t,e)}function W(t,e=""){const n=t>0?"-":"+",a=Math.abs(t);return n+L(Math.floor(a/60),2)+e+L(a%60,2)}const Y=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},j=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},O={p:j,P:(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],a=n[1],r=n[2];if(!r)return Y(t,e);let o;switch(a){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;default:o=e.dateTime({width:"full"})}return o.replace("{{date}}",Y(a,e)).replace("{{time}}",j(r,e))}},C=["D","DD"],H=["YY","YYYY"];function N(t,e,n){if("YYYY"===t)throw new RangeError(`Use \`yyyy\` instead of \`YYYY\` (in \`${e}\`) for formatting years to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`);if("YY"===t)throw new RangeError(`Use \`yy\` instead of \`YY\` (in \`${e}\`) for formatting years to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`);if("D"===t)throw new RangeError(`Use \`d\` instead of \`D\` (in \`${e}\`) for formatting days of the month to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`);if("DD"===t)throw new RangeError(`Use \`dd\` instead of \`DD\` (in \`${e}\`) for formatting days of the month to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`)}const A=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,F=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,z=/^'([^]*?)'?$/,Q=/''/g,G=/[a-zA-Z]/;const X=()=>{if(U){const t=U.taskList,e=document.querySelector(".task-container");e.innerHTML="",t.forEach(((t,r)=>{const o=document.createElement("input");o.setAttribute("type","checkbox"),o.setAttribute("id","checkbox");const i=document.createElement("div");i.classList.add("task-with-info");const s=document.createElement("div");s.classList.add("div-tasks");const c=document.createElement("div");c.classList.add("div-title"),c.textContent=`${t.title}`;const u=document.createElement("div");u.classList.add("div-date");const d=function(t,e,r){const o=h(),i=r?.locale??o.locale??l,s=r?.firstWeekContainsDate??r?.locale?.options?.firstWeekContainsDate??o.firstWeekContainsDate??o.locale?.options?.firstWeekContainsDate??1,c=r?.weekStartsOn??r?.locale?.options?.weekStartsOn??o.weekStartsOn??o.locale?.options?.weekStartsOn??0,u=n(t);if(!a(u))throw new RangeError("Invalid time value");const d={firstWeekContainsDate:s,weekStartsOn:c,locale:i,_originalDate:u};return e.match(F).map((function(t){const e=t[0];return"p"===e||"P"===e?(0,O[e])(t,i.formatLong):t})).join("").match(A).map((function(n){if("''"===n)return"'";const a=n[0];if("'"===a)return function(t){const e=t.match(z);return e?e[1].replace(Q,"'"):t}(n);const o=P[a];if(o)return r?.useAdditionalWeekYearTokens||(s=n,-1===H.indexOf(s))||N(n,e,String(t)),!r?.useAdditionalDayOfYearTokens&&function(t){return-1!==C.indexOf(t)}(n)&&N(n,e,String(t)),o(u,n,i.localize,d);var s;if(a.match(G))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return n})).join("")}(t.dueDate,"do MMM yyyy");u.innerHTML=`<b>Due</b>: ${d}`;const m=document.createElement("div");m.classList.add("div-priority"),"high"===t.priority?m.innerHTML="<img src='images/redflag.png' alt='red flag'>":"medium"===t.priority?m.innerHTML="<img src='images/orangeflag.png' alt='orange flag'>":m.innerHTML="<img src='images/greenflag.png' alt='green flag'>";const f=document.createElement("div");f.classList.add("right-container");const g=document.createElement("div");g.classList.add("left-container");const w=document.createElement("i");w.classList.add("fa-solid","fa-circle-info"),w.dataset.index=r;const y=document.createElement("i");y.classList.add("fa-solid","fa-pen-to-square");const p=document.createElement("i");p.classList.add("fa-solid","fa-trash-can"),p.dataset.index=r,f.append(u,m,y,w,p),g.append(o,c),s.append(g,f),i.append(s),e.append(i)})),document.querySelectorAll(".fa-trash-can").forEach((t=>{t.addEventListener("click",B)})),document.querySelectorAll(".fa-circle-info").forEach((t=>{t.addEventListener("click",$)}))}},B=t=>{const e=t.target.dataset.index;U.taskList.splice(e,1),X()},$=t=>{t.stopPropagation();const e=t.target.dataset.index,n=U.taskList[e],a=t.target.closest(".task-with-info").querySelector(".info-container");if(a)a.remove();else{const e=document.createElement("div");e.classList.add("info-container");const a=document.createElement("p");a.classList.add("info-desc"),a.innerHTML=`<b>Description:</b> ${n.desc}`,e.append(a),t.target.closest(".task-with-info").append(e)}document.addEventListener("click",J)},J=()=>{document.querySelectorAll(".info-container").forEach((t=>{t.remove()}))};function I(){const t=document.querySelectorAll("input"),e=document.querySelector("textarea");t.forEach((t=>{"radio"!==t.type&&(t.value="")})),e.value=""}const R=[];let U=null;const _=()=>{const t=document.querySelector("ul");t.innerHTML="",R.forEach(((e,n)=>{const a=document.createElement("li"),r=document.createElement("button");r.classList.add("project-btn","button");const o=document.createElement("div");o.classList.add("icon-name");const i=document.createElement("i");i.classList.add("fa-solid","fa-list-ul");const s=document.createElement("i");s.classList.add("fa-solid","fa-trash-can"),s.dataset.index=n;const c=document.createElement("span");if(c.innerHTML=`${e.name}`,o.append(i,c),r.append(o,s),a.append(r),t.append(a),r.addEventListener("click",(()=>{K(e),_(),X()})),U&&e.name===U.name){r.classList.add("current-project");const t=document.querySelector(".project-title");t.textContent=U.name,t.classList.add("underline")}})),document.querySelectorAll(".fa-trash-can").forEach((t=>{t.addEventListener("click",V)}))},V=t=>{const e=t.target.dataset.index,n=R[e];R.splice(e,1),n.taskList=[],U&&e===U.name&&(U=null,localStorage.removeItem("currentProject")),localStorage.setItem("projectArray",JSON.stringify(R));const a=document.querySelector(".project-title");a.textContent="",a.classList.remove("underline"),_(),X()},K=t=>{U=t,localStorage.setItem("currentProject",JSON.stringify(U))};(()=>{document.querySelector(".add-task").addEventListener("click",(function(){t.classList.remove("hidden")})),document.querySelector(".remove-task").addEventListener("click",e);const t=document.querySelector(".task-popup");function e(){t.classList.add("hidden")}document.addEventListener("keydown",(t=>{"Escape"===t.key&&e()}))})(),(()=>{document.querySelector(".add-project").addEventListener("click",(function(){t.classList.remove("hidden")})),document.querySelector(".remove-project").addEventListener("click",e);const t=document.querySelector(".project-popup");function e(){t.classList.add("hidden")}document.addEventListener("keydown",(t=>{"Escape"===t.key&&e()}))})(),(()=>{const e=document.querySelector("#submit-project"),n=document.querySelector("#name"),a=()=>{const e=n.value;if(R.some((t=>t.name===e)))alert("You already have a project with this name!");else{const n=new t(e);R.push(n),U=n,localStorage.setItem("projectArray",JSON.stringify(R)),document.querySelector(".project-popup").classList.add("hidden"),_(),I(),console.log(R)}};e.addEventListener("click",(t=>{t.preventDefault(),a()})),n.addEventListener("keydown",(t=>{"Enter"===t.key&&(t.preventDefault(),a())}))})(),(()=>{const t=document.querySelector("#submit-task");t.addEventListener("click",(t=>{t.preventDefault(),(()=>{const t=document.querySelector("#title").value,n=document.querySelector("#description").value,a=document.querySelector("#date").value,r=document.querySelector('input[type="radio"]:checked').value;if(U){const o=new e(t,n,a,r);U.addTask(o),console.log(U),localStorage.setItem("projectArray",JSON.stringify(R)),document.querySelector(".task-popup").classList.add("hidden"),I(),document.querySelectorAll('input[type="radio"]').forEach((t=>{t.checked=!1}))}else alert("Please select a project before adding a task.")})(),X()})),dueDate.addEventListener("keydown",(t=>{"Enter"===t.key&&(t.preventDefault(),submitProjectForm())}))})()})();