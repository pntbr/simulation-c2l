!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.dayjs_plugin_timezone=e()}(this,function(){"use strict";var t={year:0,month:1,day:2,hour:3,minute:4,second:5},e={};return function(n,i,o){var r,u=o().utcOffset(),a=function(t,n,i){void 0===i&&(i={});var o=new Date(t);return function(t,n){void 0===n&&(n={});var i=n.timeZoneName||"short",o=t+"|"+i,r=e[o];return r||(r=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:i}),e[o]=r),r}(n,i).formatToParts(o)},f=function(e,n){for(var i=a(e,n),r=[],u=0;u<i.length;u+=1){var f=i[u],s=f.type,m=f.value,c=t[s];c>=0&&(r[c]=parseInt(m,10))}var d=r[3],v=24===d?0:d,h=r[0]+"-"+r[1]+"-"+r[2]+" "+v+":"+r[4]+":"+r[5]+":000",l=+e;return(o.utc(h).valueOf()-(l-=l%1e3))/6e4},s=i.prototype;s.tz=function(t,e){void 0===t&&(t=r);var n=this.utcOffset(),i=this.toDate().toLocaleString("en-US",{timeZone:t}),a=Math.round((this.toDate()-new Date(i))/1e3/60),f=o(i).$set("millisecond",this.$ms).utcOffset(u-a,!0);if(e){var s=f.utcOffset();f=f.add(n-s,"minute")}return f.$x.$timezone=t,f},s.offsetName=function(t){var e=this.$x.$timezone||o.tz.guess(),n=a(this.valueOf(),e,{timeZoneName:t}).find(function(t){return"timezonename"===t.type.toLowerCase()});return n&&n.value},o.tz=function(t,e,n){var i,u=n&&e,a=n||e||r,s=f(+o(),a);"string"!=typeof t&&(i=o(t)+60*s*1e3);var m=function(t,e,n){var i=t-60*e*1e3,o=f(i,n);if(e===o)return[i,e];var r=f(i-=60*(o-e)*1e3,n);return o===r?[i,o]:[t-60*Math.min(o,r)*1e3,Math.max(o,r)]}(i=i||o.utc(t,u).valueOf(),s,a),c=m[0],d=m[1],v=o(c).utcOffset(d);return v.$x.$timezone=a,v},o.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},o.tz.setDefault=function(t){r=t}}});