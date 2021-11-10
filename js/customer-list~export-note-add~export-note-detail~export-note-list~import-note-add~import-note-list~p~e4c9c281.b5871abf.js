(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["customer-list~export-note-add~export-note-detail~export-note-list~import-note-add~import-note-list~p~e4c9c281"],{"0829":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return da})),n.d(e,"b",(function(){return wa})),n.d(e,"c",(function(){return to})),n.d(e,"d",(function(){return la})),n.d(e,"e",(function(){return eo})),n.d(e,"f",(function(){return oa})),n.d(e,"g",(function(){return ca})),n.d(e,"h",(function(){return io})),n.d(e,"i",(function(){return Jo})),n.d(e,"j",(function(){return fa})),n.d(e,"k",(function(){return Xo})),n.d(e,"l",(function(){return $o})),n.d(e,"m",(function(){return ya})),n.d(e,"n",(function(){return ua})),n.d(e,"o",(function(){return ha})),n.d(e,"p",(function(){return Qo}));var s=n("5606"),r=n("ffa6"),i=n("4fc1"),o=n("1fd5"),a=n("8f6b");const c="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}u.UNAUTHENTICATED=new u(null),u.GOOGLE_CREDENTIALS=new u("google-credentials-uid"),u.FIRST_PARTY=new u("first-party-uid"),u.MOCK_USER=new u("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let h="9.1.3";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l=new i["b"]("@firebase/firestore");function d(){return l.logLevel}function f(t,...e){if(l.logLevel<=i["a"].DEBUG){const n=e.map(m);l.debug(`Firestore (${h}): ${t}`,...n)}}function g(t,...e){if(l.logLevel<=i["a"].ERROR){const n=e.map(m);l.error(`Firestore (${h}): ${t}`,...n)}}function p(t,...e){if(l.logLevel<=i["a"].WARN){const n=e.map(m);l.warn(`Firestore (${h}): ${t}`,...n)}}function m(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(t="Unexpected state"){const e=`FIRESTORE (${h}) INTERNAL ASSERTION FAILED: `+t;throw g(e),new Error(e)}function w(t,e){t||y()}function v(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends Error{constructor(t,e){super(e),this.code=t,this.message=e,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(t,e){this.user=e,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization="Bearer "+t}}class S{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(u.UNAUTHENTICATED))}shutdown(){}}class A{constructor(t){this.t=t,this.currentUser=u.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const s=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new b;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new b,t.enqueueRetryable(()=>s(this.currentUser))};const i=()=>{const e=r;t.enqueueRetryable(async()=>{await e.promise,await s(this.currentUser)})},o=t=>{f("FirebaseCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit(t=>o(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(f("FirebaseCredentialsProvider","Auth not yet detected"),r.resolve(),r=new b)}},0),i()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(f("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(w("string"==typeof e.accessToken),new I(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return w(null===t||"string"==typeof t),new u(t)}}class N{constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=u.FIRST_PARTY}get authHeaders(){const t={"X-Goog-AuthUser":this.l},e=this.h.auth.getAuthHeaderValueForFirstParty([]);return e&&(t.Authorization=e),this.m&&(t["X-Goog-Iam-Authorization-Token"]=this.m),t}}class _{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new N(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable(()=>e(u.FIRST_PARTY))}shutdown(){}invalidateToken(){}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.g(t),this.p=t=>e.writeSequenceNumber(t))}g(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.p&&this.p(t),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */D.T=-1;class k{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=C(40);for(let r=0;r<s.length;++r)n.length<20&&s[r]<e&&(n+=t.charAt(s[r]%t.length))}return n}}function R(t,e){return t<e?-1:t>e?1:0}function L(t,e,n){return t.length===e.length&&t.every((t,s)=>n(t,e[s]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class x{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new T(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new T(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new T(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new T(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return x.fromMillis(Date.now())}static fromDate(t){return x.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new x(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?R(this.nanoseconds,t.nanoseconds):R(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.timestamp=t}static fromTimestamp(t){return new M(t)}static min(){return new M(new x(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function V(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function F(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t,e,n){void 0===e?e=0:e>t.length&&y(),void 0===n?n=t.length-e:n>t.length-e&&y(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===P.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof P?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=t.get(s),r=e.get(s);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class U extends P{construct(t,e,n){return new U(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new T(E.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new U(e)}static emptyPath(){return new U([])}}const q=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class j extends P{construct(t,e,n){return new j(t,e,n)}static isValidIdentifier(t){return q.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),j.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new j(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const r=()=>{if(0===n.length)throw new T(E.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let i=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new T(E.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new T(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,s+=2}else"`"===e?(i=!i,s++):"."!==e||i?(n+=e,s++):(r(),s++)}if(r(),i)throw new T(E.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new j(e)}static emptyPath(){return new j([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(t){this.fields=t,t.sort(j.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return L(this.fields,t.fields,(t,e)=>t.isEqual(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class K{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new K(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new K(e)}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return R(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}K.EMPTY_BYTE_STRING=new K("");const G=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function H(t){if(w(!!t),"string"==typeof t){let e=0;const n=G.exec(t);if(w(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:$(t.seconds),nanos:$(t.nanos)}}function $(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function z(t){return"string"==typeof t?K.fromBase64String(t):K.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function W(t){const e=t.mapValue.fields.__previous_value__;return Q(e)?W(e):e}function X(t){const e=H(t.mapValue.fields.__local_write_time__.timestampValue);return new x(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t){return null==t}function J(t){return 0===t&&1/t==-1/0}function Z(t){return"number"==typeof t&&Number.isInteger(t)&&!J(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t){this.path=t}static fromPath(t){return new tt(U.fromString(t))}static fromName(t){return new tt(U.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===U.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return U.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new tt(new U(t.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Q(t)?4:10:y()}function nt(t,e){const n=et(t);if(n!==et(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return X(t).isEqual(X(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=H(t.timestampValue),s=H(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return z(t.bytesValue).isEqual(z(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return $(t.geoPointValue.latitude)===$(e.geoPointValue.latitude)&&$(t.geoPointValue.longitude)===$(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return $(t.integerValue)===$(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=$(t.doubleValue),s=$(e.doubleValue);return n===s?J(n)===J(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return L(t.arrayValue.values||[],e.arrayValue.values||[],nt);case 10:return function(t,e){const n=t.mapValue.fields||{},s=e.mapValue.fields||{};if(O(n)!==O(s))return!1;for(const r in n)if(n.hasOwnProperty(r)&&(void 0===s[r]||!nt(n[r],s[r])))return!1;return!0}(t,e);default:return y()}}function st(t,e){return void 0!==(t.values||[]).find(t=>nt(t,e))}function rt(t,e){const n=et(t),s=et(e);if(n!==s)return R(n,s);switch(n){case 0:return 0;case 1:return R(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=$(t.integerValue||t.doubleValue),s=$(e.integerValue||e.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(t,e);case 3:return it(t.timestampValue,e.timestampValue);case 4:return it(X(t),X(e));case 5:return R(t.stringValue,e.stringValue);case 6:return function(t,e){const n=z(t),s=z(e);return n.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),s=e.split("/");for(let r=0;r<n.length&&r<s.length;r++){const t=R(n[r],s[r]);if(0!==t)return t}return R(n.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=R($(t.latitude),$(e.latitude));return 0!==n?n:R($(t.longitude),$(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],s=e.values||[];for(let r=0;r<n.length&&r<s.length;++r){const t=rt(n[r],s[r]);if(t)return t}return R(n.length,s.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},s=Object.keys(n),r=e.fields||{},i=Object.keys(r);s.sort(),i.sort();for(let o=0;o<s.length&&o<i.length;++o){const t=R(s[o],i[o]);if(0!==t)return t;const e=rt(n[s[o]],r[i[o]]);if(0!==e)return e}return R(s.length,i.length)}(t.mapValue,e.mapValue);default:throw y()}}function it(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return R(t,e);const n=H(t),s=H(e),r=R(n.seconds,s.seconds);return 0!==r?r:R(n.nanos,s.nanos)}function ot(t){return at(t)}function at(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=H(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?z(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,tt.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const s of t.values||[])n?n=!1:e+=",",e+=at(s);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const r of e)s?s=!1:n+=",",n+=`${r}:${at(t.fields[r])}`;return n+"}"}(t.mapValue):y();var e,n}function ct(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ut(t){return!!t&&"integerValue"in t}function ht(t){return!!t&&"arrayValue"in t}function lt(t){return!!t&&"nullValue"in t}function dt(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ft(t){return!!t&&"mapValue"in t}function gt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return V(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=gt(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=gt(t.arrayValue.values[n]);return e}return Object.assign({},t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t){this.value=t}static empty(){return new pt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!ft(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=gt(e)}setAll(t){let e=j.emptyPath(),n={},s=[];t.forEach((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,n,s),n={},s=[],e=r.popLast()}t?n[r.lastSegment()]=gt(t):s.push(r.lastSegment())});const r=this.getFieldsMap(e);this.applyChanges(r,n,s)}delete(t){const e=this.field(t.popLast());ft(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return nt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];ft(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){V(e,(e,n)=>t[e]=n);for(const s of n)delete t[s]}clone(){return new pt(gt(this.value))}}function mt(t){const e=[];return V(t.fields,(t,n)=>{const s=new j([t]);if(ft(n)){const t=mt(n.mapValue).fields;if(0===t.length)e.push(s);else for(const n of t)e.push(s.child(n))}else e.push(s)}),new B(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class yt{constructor(t,e,n,s,r){this.key=t,this.documentType=e,this.version=n,this.data=s,this.documentState=r}static newInvalidDocument(t){return new yt(t,0,M.min(),pt.empty(),0)}static newFoundDocument(t,e,n){return new yt(t,1,e,n,0)}static newNoDocument(t,e){return new yt(t,2,e,pt.empty(),0)}static newUnknownDocument(t,e){return new yt(t,3,e,pt.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=pt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof yt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}clone(){return new yt(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t,e=null,n=[],s=[],r=null,i=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=r,this.startAt=i,this.endAt=o,this.A=null}}function vt(t,e=null,n=[],s=[],r=null,i=null,o=null){return new wt(t,e,n,s,r,i,o)}function Et(t){const e=v(t);if(null===e.A){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>At(t)).join(","),t+="|ob:",t+=e.orderBy.map(t=>function(t){return t.field.canonicalString()+t.dir}(t)).join(","),Y(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=Ot(e.startAt)),e.endAt&&(t+="|ub:",t+=Ot(e.endAt)),e.A=t}return e.A}function Tt(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>{return`${(e=t).field.canonicalString()} ${e.op} ${ot(e.value)}`;var e}).join(", ")}]`),Y(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t)).join(", ")}]`),t.startAt&&(e+=", startAt: "+Ot(t.startAt)),t.endAt&&(e+=", endAt: "+Ot(t.endAt)),`Target(${e})`}function bt(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!Ft(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!nt(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ut(t.startAt,e.startAt)&&Ut(t.endAt,e.endAt)}function It(t){return tt.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class St extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.R(t,e,n):new Nt(t,e,n):"array-contains"===e?new kt(t,n):"in"===e?new Rt(t,n):"not-in"===e?new Lt(t,n):"array-contains-any"===e?new xt(t,n):new St(t,e,n)}static R(t,e,n){return"in"===e?new _t(t,n):new Dt(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.P(rt(e,this.value)):null!==e&&et(this.value)===et(e)&&this.P(rt(e,this.value))}P(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return y()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function At(t){return t.field.canonicalString()+t.op.toString()+ot(t.value)}class Nt extends St{constructor(t,e,n){super(t,e,n),this.key=tt.fromName(n.referenceValue)}matches(t){const e=tt.comparator(t.key,this.key);return this.P(e)}}class _t extends St{constructor(t,e){super(t,"in",e),this.keys=Ct("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Dt extends St{constructor(t,e){super(t,"not-in",e),this.keys=Ct("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Ct(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>tt.fromName(t.referenceValue))}class kt extends St{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ht(e)&&st(e.arrayValue,this.value)}}class Rt extends St{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&st(this.value.arrayValue,e)}}class Lt extends St{constructor(t,e){super(t,"not-in",e)}matches(t){if(st(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!st(this.value.arrayValue,e)}}class xt extends St{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ht(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>st(this.value.arrayValue,t))}}class Mt{constructor(t,e){this.position=t,this.before=e}}function Ot(t){return`${t.before?"b":"a"}:${t.position.map(t=>ot(t)).join(",")}`}class Vt{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ft(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Pt(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(s=i.field.isKeyField()?tt.comparator(tt.fromName(o.referenceValue),n.key):rt(o,n.data.field(i.field)),"desc"===i.dir&&(s*=-1),0!==s)break}return t.before?s<=0:s<0}function Ut(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!nt(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(t,e=null,n=[],s=[],r=null,i="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=r,this.limitType=i,this.startAt=o,this.endAt=a,this.V=null,this.S=null,this.startAt,this.endAt}}function jt(t,e,n,s,r,i,o,a){return new qt(t,e,n,s,r,i,o,a)}function Bt(t){return new qt(t)}function Kt(t){return!Y(t.limit)&&"F"===t.limitType}function Gt(t){return!Y(t.limit)&&"L"===t.limitType}function Ht(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function $t(t){for(const e of t.filters)if(e.v())return e.field;return null}function zt(t){return null!==t.collectionGroup}function Qt(t){const e=v(t);if(null===e.V){e.V=[];const t=$t(e),n=Ht(e);if(null!==t&&null===n)t.isKeyField()||e.V.push(new Vt(t)),e.V.push(new Vt(j.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.V.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new Vt(j.keyField(),t))}}}return e.V}function Wt(t){const e=v(t);if(!e.S)if("F"===e.limitType)e.S=vt(e.path,e.collectionGroup,Qt(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const r of Qt(e)){const e="desc"===r.dir?"asc":"desc";t.push(new Vt(r.field,e))}const n=e.endAt?new Mt(e.endAt.position,!e.endAt.before):null,s=e.startAt?new Mt(e.startAt.position,!e.startAt.before):null;e.S=vt(e.path,e.collectionGroup,t,e.filters,e.limit,n,s)}return e.S}function Xt(t,e,n){return new qt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Yt(t,e){return bt(Wt(t),Wt(e))&&t.limitType===e.limitType}function Jt(t){return`${Et(Wt(t))}|lt:${t.limitType}`}function Zt(t){return`Query(target=${Tt(Wt(t))}; limitType=${t.limitType})`}function te(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):tt.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!Pt(t.startAt,Qt(t),e))&&(!t.endAt||!Pt(t.endAt,Qt(t),e))}(t,e)}function ee(t){return(e,n)=>{let s=!1;for(const r of Qt(t)){const t=ne(r,e,n);if(0!==t)return t;s=s||r.field.isKeyField()}return 0}}function ne(t,e,n){const s=t.field.isKeyField()?tt.comparator(e.key,n.key):function(t,e,n){const s=e.data.field(t),r=n.data.field(t);return null!==s&&null!==r?rt(s,r):y()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return y()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:J(e)?"-0":e}}function re(t){return{integerValue:""+t}}function ie(t,e){return Z(e)?re(e):se(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(){this._=void 0}}function ae(t,e,n){return t instanceof he?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof le?de(t,e):t instanceof fe?ge(t,e):function(t,e){const n=ue(t,e),s=me(n)+me(t.C);return ut(n)&&ut(t.C)?re(s):se(t.N,s)}(t,e)}function ce(t,e,n){return t instanceof le?de(t,e):t instanceof fe?ge(t,e):n}function ue(t,e){return t instanceof pe?ut(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class he extends oe{}class le extends oe{constructor(t){super(),this.elements=t}}function de(t,e){const n=ye(e);for(const s of t.elements)n.some(t=>nt(t,s))||n.push(s);return{arrayValue:{values:n}}}class fe extends oe{constructor(t){super(),this.elements=t}}function ge(t,e){let n=ye(e);for(const s of t.elements)n=n.filter(t=>!nt(t,s));return{arrayValue:{values:n}}}class pe extends oe{constructor(t,e){super(),this.N=t,this.C=e}}function me(t){return $(t.integerValue||t.doubleValue)}function ye(t){return ht(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(t,e){this.field=t,this.transform=e}}function ve(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof le&&e instanceof le||t instanceof fe&&e instanceof fe?L(t.elements,e.elements,nt):t instanceof pe&&e instanceof pe?nt(t.C,e.C):t instanceof he&&e instanceof he}(t.transform,e.transform)}class Ee{constructor(t,e){this.version=t,this.transformResults=e}}class Te{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Te}static exists(t){return new Te(void 0,t)}static updateTime(t){return new Te(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function be(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Ie{}function Se(t,e,n){t instanceof Ce?function(t,e,n){const s=t.value.clone(),r=Le(t.fieldTransforms,e,n.transformResults);s.setAll(r),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):t instanceof ke?function(t,e,n){if(!be(t.precondition,e))return void e.convertToUnknownDocument(n.version);const s=Le(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(Re(t)),r.setAll(s),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Ae(t,e,n){t instanceof Ce?function(t,e,n){if(!be(t.precondition,e))return;const s=t.value.clone(),r=xe(t.fieldTransforms,n,e);s.setAll(r),e.convertToFoundDocument(De(e),s).setHasLocalMutations()}(t,e,n):t instanceof ke?function(t,e,n){if(!be(t.precondition,e))return;const s=xe(t.fieldTransforms,n,e),r=e.data;r.setAll(Re(t)),r.setAll(s),e.convertToFoundDocument(De(e),r).setHasLocalMutations()}(t,e,n):function(t,e){be(t.precondition,e)&&e.convertToNoDocument(M.min())}(t,e)}function Ne(t,e){let n=null;for(const s of t.fieldTransforms){const t=e.data.field(s.field),r=ue(s.transform,t||null);null!=r&&(null==n&&(n=pt.empty()),n.set(s.field,r))}return n||null}function _e(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&L(t,e,(t,e)=>ve(t,e))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function De(t){return t.isFoundDocument()?t.version:M.min()}class Ce extends Ie{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}}class ke extends Ie{constructor(t,e,n,s,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=r,this.type=1}}function Re(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Le(t,e,n){const s=new Map;w(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,ce(o,a,n[r]))}return s}function xe(t,e,n){const s=new Map;for(const r of t){const t=r.transform,i=n.data.field(r.field);s.set(r.field,ae(t,i,e))}return s}class Me extends Ie{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class Oe extends Ie{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fe,Pe;function Ue(t){switch(t){default:return y();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function qe(t){if(void 0===t)return g("GRPC error has no .code"),E.UNKNOWN;switch(t){case Fe.OK:return E.OK;case Fe.CANCELLED:return E.CANCELLED;case Fe.UNKNOWN:return E.UNKNOWN;case Fe.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case Fe.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case Fe.INTERNAL:return E.INTERNAL;case Fe.UNAVAILABLE:return E.UNAVAILABLE;case Fe.UNAUTHENTICATED:return E.UNAUTHENTICATED;case Fe.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case Fe.NOT_FOUND:return E.NOT_FOUND;case Fe.ALREADY_EXISTS:return E.ALREADY_EXISTS;case Fe.PERMISSION_DENIED:return E.PERMISSION_DENIED;case Fe.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case Fe.ABORTED:return E.ABORTED;case Fe.OUT_OF_RANGE:return E.OUT_OF_RANGE;case Fe.UNIMPLEMENTED:return E.UNIMPLEMENTED;case Fe.DATA_LOSS:return E.DATA_LOSS;default:return y()}}(Pe=Fe||(Fe={}))[Pe.OK=0]="OK",Pe[Pe.CANCELLED=1]="CANCELLED",Pe[Pe.UNKNOWN=2]="UNKNOWN",Pe[Pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Pe[Pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Pe[Pe.NOT_FOUND=5]="NOT_FOUND",Pe[Pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Pe[Pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Pe[Pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Pe[Pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Pe[Pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Pe[Pe.ABORTED=10]="ABORTED",Pe[Pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Pe[Pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Pe[Pe.INTERNAL=13]="INTERNAL",Pe[Pe.UNAVAILABLE=14]="UNAVAILABLE",Pe[Pe.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class je{constructor(t,e){this.comparator=t,this.root=e||Ke.EMPTY}insert(t,e){return new je(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Ke.BLACK,null,null))}remove(t){return new je(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ke.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Be(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Be(this.root,t,this.comparator,!1)}getReverseIterator(){return new Be(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Be(this.root,t,this.comparator,!0)}}class Be{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,s&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ke{constructor(t,e,n,s,r){this.key=t,this.value=e,this.color=null!=n?n:Ke.RED,this.left=null!=s?s:Ke.EMPTY,this.right=null!=r?r:Ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,r){return new Ke(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const r=n(t,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===r?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ke.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return Ke.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw y();if(this.right.isRed())throw y();const t=this.left.check();if(t!==this.right.check())throw y();return t+(this.isRed()?0:1)}}Ke.EMPTY=null,Ke.RED=!0,Ke.BLACK=!1,Ke.EMPTY=new class{constructor(){this.size=0}get key(){throw y()}get value(){throw y()}get color(){throw y()}get left(){throw y()}get right(){throw y()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Ke(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ge{constructor(t){this.comparator=t,this.data=new je(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new He(this.data.getIterator())}getIteratorFrom(t){return new He(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof Ge))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Ge(this.comparator);return e.data=t,e}}class He{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e=new je(tt.comparator);function ze(){return $e}const Qe=new je(tt.comparator);function We(){return Qe}const Xe=new je(tt.comparator);function Ye(){return Xe}const Je=new Ge(tt.comparator);function Ze(...t){let e=Je;for(const n of t)e=e.add(n);return e}const tn=new Ge(R);function en(){return tn}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(t,e,n,s,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,sn.createSynthesizedTargetChangeForCurrentChange(t,e)),new nn(M.min(),n,en(),ze(),Ze())}}class sn{constructor(t,e,n,s,r){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e){return new sn(K.EMPTY_BYTE_STRING,e,Ze(),Ze(),Ze())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(t,e,n,s){this.k=t,this.removedTargetIds=e,this.key=n,this.$=s}}class on{constructor(t,e){this.targetId=t,this.O=e}}class an{constructor(t,e,n=K.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class cn{constructor(){this.F=0,this.M=ln(),this.L=K.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return 0!==this.F}get K(){return this.U}j(t){t.approximateByteSize()>0&&(this.U=!0,this.L=t)}W(){let t=Ze(),e=Ze(),n=Ze();return this.M.forEach((s,r)=>{switch(r){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:y()}}),new sn(this.L,this.B,t,e,n)}G(){this.U=!1,this.M=ln()}H(t,e){this.U=!0,this.M=this.M.insert(t,e)}J(t){this.U=!0,this.M=this.M.remove(t)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class un{constructor(t){this.tt=t,this.et=new Map,this.nt=ze(),this.st=hn(),this.it=new Ge(R)}rt(t){for(const e of t.k)t.$&&t.$.isFoundDocument()?this.ot(e,t.$):this.at(e,t.key,t.$);for(const e of t.removedTargetIds)this.at(e,t.key,t.$)}ct(t){this.forEachTarget(t,e=>{const n=this.ut(e);switch(t.state){case 0:this.ht(e)&&n.j(t.resumeToken);break;case 1:n.X(),n.q||n.G(),n.j(t.resumeToken);break;case 2:n.X(),n.q||this.removeTarget(e);break;case 3:this.ht(e)&&(n.Z(),n.j(t.resumeToken));break;case 4:this.ht(e)&&(this.lt(e),n.j(t.resumeToken));break;default:y()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.et.forEach((t,n)=>{this.ht(n)&&e(n)})}ft(t){const e=t.targetId,n=t.O.count,s=this.dt(e);if(s){const t=s.target;if(It(t))if(0===n){const n=new tt(t.path);this.at(e,n,yt.newNoDocument(n,M.min()))}else w(1===n);else this.wt(e)!==n&&(this.lt(e),this.it=this.it.add(e))}}_t(t){const e=new Map;this.et.forEach((n,s)=>{const r=this.dt(s);if(r){if(n.current&&It(r.target)){const e=new tt(r.target.path);null!==this.nt.get(e)||this.gt(s,e)||this.at(s,e,yt.newNoDocument(e,t))}n.K&&(e.set(s,n.W()),n.G())}});let n=Ze();this.st.forEach((t,e)=>{let s=!0;e.forEachWhile(t=>{const e=this.dt(t);return!e||2===e.purpose||(s=!1,!1)}),s&&(n=n.add(t))});const s=new nn(t,e,this.it,this.nt,n);return this.nt=ze(),this.st=hn(),this.it=new Ge(R),s}ot(t,e){if(!this.ht(t))return;const n=this.gt(t,e.key)?2:0;this.ut(t).H(e.key,n),this.nt=this.nt.insert(e.key,e),this.st=this.st.insert(e.key,this.yt(e.key).add(t))}at(t,e,n){if(!this.ht(t))return;const s=this.ut(t);this.gt(t,e)?s.H(e,1):s.J(e),this.st=this.st.insert(e,this.yt(e).delete(t)),n&&(this.nt=this.nt.insert(e,n))}removeTarget(t){this.et.delete(t)}wt(t){const e=this.ut(t).W();return this.tt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Y(t){this.ut(t).Y()}ut(t){let e=this.et.get(t);return e||(e=new cn,this.et.set(t,e)),e}yt(t){let e=this.st.get(t);return e||(e=new Ge(R),this.st=this.st.insert(t,e)),e}ht(t){const e=null!==this.dt(t);return e||f("WatchChangeAggregator","Detected inactive target",t),e}dt(t){const e=this.et.get(t);return e&&e.q?null:this.tt.Tt(t)}lt(t){this.et.set(t,new cn),this.tt.getRemoteKeysForTarget(t).forEach(e=>{this.at(t,e,null)})}gt(t,e){return this.tt.getRemoteKeysForTarget(t).has(e)}}function hn(){return new je(tt.comparator)}function ln(){return new je(tt.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),fn=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class gn{constructor(t,e){this.databaseId=t,this.D=e}}function pn(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function mn(t,e){return t.D?e.toBase64():e.toUint8Array()}function yn(t,e){return pn(t,e.toTimestamp())}function wn(t){return w(!!t),M.fromTimestamp(function(t){const e=H(t);return new x(e.seconds,e.nanos)}(t))}function vn(t,e){return function(t){return new U(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function En(t){const e=U.fromString(t);return w($n(e)),e}function Tn(t,e){return vn(t.databaseId,e.path)}function bn(t,e){const n=En(e);if(n.get(1)!==t.databaseId.projectId)throw new T(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new T(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new tt(Nn(n))}function In(t,e){return vn(t.databaseId,e)}function Sn(t){const e=En(t);return 4===e.length?U.emptyPath():Nn(e)}function An(t){return new U(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Nn(t){return w(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function _n(t,e,n){return{name:Tn(t,e),fields:n.value.mapValue.fields}}function Dn(t,e){return"found"in e?function(t,e){w(!!e.found),e.found.name,e.found.updateTime;const n=bn(t,e.found.name),s=wn(e.found.updateTime),r=new pt({mapValue:{fields:e.found.fields}});return yt.newFoundDocument(n,s,r)}(t,e):"missing"in e?function(t,e){w(!!e.missing),w(!!e.readTime);const n=bn(t,e.missing),s=wn(e.readTime);return yt.newNoDocument(n,s)}(t,e):y()}function Cn(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:y()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(t,e){return t.D?(w(void 0===e||"string"==typeof e),K.fromBase64String(e||"")):(w(void 0===e||e instanceof Uint8Array),K.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?E.UNKNOWN:qe(t.code);return new T(e,t.message||"")}(o);n=new an(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=bn(t,s.document.name),i=wn(s.document.updateTime),o=new pt({mapValue:{fields:s.document.fields}}),a=yt.newFoundDocument(r,i,o),c=s.targetIds||[],u=s.removedTargetIds||[];n=new rn(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=bn(t,s.document),i=s.readTime?wn(s.readTime):M.min(),o=yt.newNoDocument(r,i),a=s.removedTargetIds||[];n=new rn([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=bn(t,s.document),i=s.removedTargetIds||[];n=new rn([],i,r,null)}else{if(!("filter"in e))return y();{e.filter;const t=e.filter;t.targetId;const s=t.count||0,r=new Ve(s),i=t.targetId;n=new on(i,r)}}return n}function kn(t,e){let n;if(e instanceof Ce)n={update:_n(t,e.key,e.value)};else if(e instanceof Me)n={delete:Tn(t,e.key)};else if(e instanceof ke)n={update:_n(t,e.key,e.data),updateMask:Hn(e.fieldMask)};else{if(!(e instanceof Oe))return y();n={verify:Tn(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(t=>function(t,e){const n=e.transform;if(n instanceof he)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof le)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof fe)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof pe)return{fieldPath:e.field.canonicalString(),increment:n.C};throw y()}(0,t))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:yn(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:y()}(t,e.precondition)),n}function Rn(t,e){return t&&t.length>0?(w(void 0!==e),t.map(t=>function(t,e){let n=t.updateTime?wn(t.updateTime):wn(e);return n.isEqual(M.min())&&(n=wn(e)),new Ee(n,t.transformResults||[])}(t,e))):[]}function Ln(t,e){return{documents:[In(t,e.path)]}}function xn(t,e){const n={structuredQuery:{}},s=e.path;null!==e.collectionGroup?(n.parent=In(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=In(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(t){if(0===t.length)return;const e=t.map(t=>function(t){if("=="===t.op){if(dt(t.value))return{unaryFilter:{field:jn(t.field),op:"IS_NAN"}};if(lt(t.value))return{unaryFilter:{field:jn(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(dt(t.value))return{unaryFilter:{field:jn(t.field),op:"IS_NOT_NAN"}};if(lt(t.value))return{unaryFilter:{field:jn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:jn(t.field),op:qn(t.op),value:t.value}}}(t));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(t){if(0!==t.length)return t.map(t=>function(t){return{field:jn(t.field),direction:Un(t.dir)}}(t))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(t,e){return t.D||Y(e)?e:{value:e}}(t,e.limit);return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=Fn(e.startAt)),e.endAt&&(n.structuredQuery.endAt=Fn(e.endAt)),n}function Mn(t){let e=Sn(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){w(1===s);const t=n.from[0];t.allDescendants?r=t.collectionId:e=e.child(t.collectionId)}let i=[];n.where&&(i=Vn(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(t=>function(t){return new Vt(Bn(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Y(e)?null:e}(n.limit));let c=null;n.startAt&&(c=Pn(n.startAt));let u=null;return n.endAt&&(u=Pn(n.endAt)),jt(e,r,o,i,a,"F",c,u)}function On(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return y()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function Vn(t){return t?void 0!==t.unaryFilter?[Gn(t)]:void 0!==t.fieldFilter?[Kn(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map(t=>Vn(t)).reduce((t,e)=>t.concat(e)):y():[]}function Fn(t){return{before:t.before,values:t.position}}function Pn(t){const e=!!t.before,n=t.values||[];return new Mt(n,e)}function Un(t){return dn[t]}function qn(t){return fn[t]}function jn(t){return{fieldPath:t.canonicalString()}}function Bn(t){return j.fromServerFormat(t.fieldPath)}function Kn(t){return St.create(Bn(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return y()}}(t.fieldFilter.op),t.fieldFilter.value)}function Gn(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Bn(t.unaryFilter.field);return St.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Bn(t.unaryFilter.field);return St.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Bn(t.unaryFilter.field);return St.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Bn(t.unaryFilter.field);return St.create(r,"!=",{nullValue:"NULL_VALUE"});default:return y()}}function Hn(t){const e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function $n(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Wn(e)),e=Qn(t.get(n),e);return Wn(e)}function Qn(t,e){let n=e;const s=t.length;for(let r=0;r<s;r++){const e=t.charAt(r);switch(e){case"\0":n+="";break;case"":n+="";break;default:n+=e}}return n}function Wn(t){return t+""}class Xn{constructor(t,e,n){this.ownerId=t,this.allowTabSynchronization=e,this.leaseTimestampMs=n}}Xn.store="owner",Xn.key="owner";class Yn{constructor(t,e,n){this.userId=t,this.lastAcknowledgedBatchId=e,this.lastStreamToken=n}}Yn.store="mutationQueues",Yn.keyPath="userId";class Jn{constructor(t,e,n,s,r){this.userId=t,this.batchId=e,this.localWriteTimeMs=n,this.baseMutations=s,this.mutations=r}}Jn.store="mutations",Jn.keyPath="batchId",Jn.userMutationsIndex="userMutationsIndex",Jn.userMutationsKeyPath=["userId","batchId"];class Zn{constructor(){}static prefixForUser(t){return[t]}static prefixForPath(t,e){return[t,zn(e)]}static key(t,e,n){return[t,zn(e),n]}}Zn.store="documentMutations",Zn.PLACEHOLDER=new Zn;class ts{constructor(t,e,n,s,r,i){this.unknownDocument=t,this.noDocument=e,this.document=n,this.hasCommittedMutations=s,this.readTime=r,this.parentPath=i}}ts.store="remoteDocuments",ts.readTimeIndex="readTimeIndex",ts.readTimeIndexPath="readTime",ts.collectionReadTimeIndex="collectionReadTimeIndex",ts.collectionReadTimeIndexPath=["parentPath","readTime"];class es{constructor(t){this.byteSize=t}}es.store="remoteDocumentGlobal",es.key="remoteDocumentGlobalKey";class ns{constructor(t,e,n,s,r,i,o){this.targetId=t,this.canonicalId=e,this.readTime=n,this.resumeToken=s,this.lastListenSequenceNumber=r,this.lastLimboFreeSnapshotVersion=i,this.query=o}}ns.store="targets",ns.keyPath="targetId",ns.queryTargetsIndexName="queryTargetsIndex",ns.queryTargetsKeyPath=["canonicalId","targetId"];class ss{constructor(t,e,n){this.targetId=t,this.path=e,this.sequenceNumber=n}}ss.store="targetDocuments",ss.keyPath=["targetId","path"],ss.documentTargetsIndex="documentTargetsIndex",ss.documentTargetsKeyPath=["path","targetId"];class rs{constructor(t,e,n,s){this.highestTargetId=t,this.highestListenSequenceNumber=e,this.lastRemoteSnapshotVersion=n,this.targetCount=s}}rs.key="targetGlobalKey",rs.store="targetGlobal";class is{constructor(t,e){this.collectionId=t,this.parent=e}}is.store="collectionParents",is.keyPath=["collectionId","parent"];class os{constructor(t,e,n,s){this.clientId=t,this.updateTimeMs=e,this.networkEnabled=n,this.inForeground=s}}os.store="clientMetadata",os.keyPath="clientId";class as{constructor(t,e,n){this.bundleId=t,this.createTime=e,this.version=n}}as.store="bundles",as.keyPath="bundleId";class cs{constructor(t,e,n){this.name=t,this.readTime=e,this.bundledQuery=n}}cs.store="namedQueries",cs.keyPath="name";Yn.store,Jn.store,Zn.store,ts.store,ns.store,Xn.store,rs.store,ss.store,os.store,es.store,is.store,as.store,cs.store;const us="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hs{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new ls((n,s)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,s)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof ls?e:ls.resolve(e)}catch(t){return ls.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):ls.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):ls.reject(e)}static resolve(t){return new ls((e,n)=>{e(t)})}static reject(t){return new ls((e,n)=>{n(t)})}static waitFor(t){return new ls((e,n)=>{let s=0,r=0,i=!1;t.forEach(t=>{++s,t.next(()=>{++r,i&&r===s&&e()},t=>n(t))}),i=!0,r===s&&e()})}static or(t){let e=ls.resolve(!1);for(const n of t)e=e.next(t=>t?ls.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,s)=>{n.push(e.call(this,t,s))}),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fs{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const e=this.mutations[s];e.key.isEqual(t.key)&&Se(e,t,n[s])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&Ae(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&Ae(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(e=>{const n=t.get(e.key),s=n;this.applyToLocalView(s),n.isValidDocument()||s.convertToNoDocument(M.min())})}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),Ze())}isEqual(t){return this.batchId===t.batchId&&L(this.mutations,t.mutations,(t,e)=>_e(t,e))&&L(this.baseMutations,t.baseMutations,(t,e)=>_e(t,e))}}class gs{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){w(t.mutations.length===n.length);let s=Ye();const r=t.mutations;for(let i=0;i<r.length;i++)s=s.insert(r[i].key,n[i].version);return new gs(t,e,n,s)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(t,e,n,s,r=M.min(),i=M.min(),o=K.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o}withSequenceNumber(t){return new ps(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new ps(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new ps(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(t){this.Wt=t}}function ys(t){const e=Mn({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Xt(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ws{constructor(){this.Gt=new vs}addToCollectionParentIndex(t,e){return this.Gt.add(e),ls.resolve()}getCollectionParents(t,e){return ls.resolve(this.Gt.getEntries(e))}}class vs{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new Ge(U.comparator),r=!s.has(n);return this.index[e]=s.add(n),r}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new Ge(U.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Es(t,Es.DEFAULT_COLLECTION_PERCENTILE,Es.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Es.DEFAULT_COLLECTION_PERCENTILE=10,Es.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Es.DEFAULT=new Es(41943040,Es.DEFAULT_COLLECTION_PERCENTILE,Es.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Es.DISABLED=new Es(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ts{constructor(t){this.ne=t}next(){return this.ne+=2,this.ne}static se(){return new Ts(0)}static ie(){return new Ts(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function bs(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==us)throw t;f("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Is{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[s,r]of n)if(this.equalsFn(s,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(void 0!==s){for(let n=0;n<s.length;n++)if(this.equalsFn(s[n][0],t))return void(s[n]=[t,e]);s.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return 1===n.length?delete this.inner[e]:n.splice(s,1),!0;return!1}forEach(t){V(this.inner,(e,n)=>{for(const[s,r]of n)t(s,r)})}isEmpty(){return F(this.inner)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(){this.changes=new Is(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}getReadTime(t){const e=this.changes.get(t);return e?e.readTime:M.min()}addEntry(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})}removeEntry(t,e=null){this.assertNotApplied(),this.changes.set(t,{document:yt.newInvalidDocument(t),readTime:e})}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?ls.resolve(n.document):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class As{constructor(t,e,n){this.He=t,this.In=e,this.Ht=n}An(t,e){return this.In.getAllMutationBatchesAffectingDocumentKey(t,e).next(n=>this.Rn(t,e,n))}Rn(t,e,n){return this.He.getEntry(t,e).next(t=>{for(const e of n)e.applyToLocalView(t);return t})}bn(t,e){t.forEach((t,n)=>{for(const s of e)s.applyToLocalView(n)})}Pn(t,e){return this.He.getEntries(t,e).next(e=>this.vn(t,e).next(()=>e))}vn(t,e){return this.In.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>this.bn(e,t))}getDocumentsMatchingQuery(t,e,n){return function(t){return tt.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Vn(t,e.path):zt(e)?this.Sn(t,e,n):this.Dn(t,e,n)}Vn(t,e){return this.An(t,new tt(e)).next(t=>{let e=We();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}Sn(t,e,n){const s=e.collectionGroup;let r=We();return this.Ht.getCollectionParents(t,s).next(i=>ls.forEach(i,i=>{const o=function(t,e){return new qt(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,i.child(s));return this.Dn(t,o,n).next(t=>{t.forEach((t,e)=>{r=r.insert(t,e)})})}).next(()=>r))}Dn(t,e,n){let s,r;return this.He.getDocumentsMatchingQuery(t,e,n).next(n=>(s=n,this.In.getAllMutationBatchesAffectingQuery(t,e))).next(e=>(r=e,this.Cn(t,r,s).next(t=>{s=t;for(const e of r)for(const t of e.mutations){const n=t.key;let r=s.get(n);null==r&&(r=yt.newInvalidDocument(n),s=s.insert(n,r)),Ae(t,r,e.localWriteTime),r.isFoundDocument()||(s=s.remove(n))}}))).next(()=>(s.forEach((t,n)=>{te(e,n)||(s=s.remove(t))}),s))}Cn(t,e,n){let s=Ze();for(const i of e)for(const t of i.mutations)t instanceof ke&&null===n.get(t.key)&&(s=s.add(t.key));let r=n;return this.He.getEntries(t,s).next(t=>(t.forEach((t,e)=>{e.isFoundDocument()&&(r=r.insert(t,e))}),r))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Nn=n,this.xn=s}static kn(t,e){let n=Ze(),s=Ze();for(const r of e.docChanges)switch(r.type){case 0:n=n.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Ns(t,e.fromCache,n,s)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{$n(t){this.On=t}getDocumentsMatchingQuery(t,e,n,s){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(M.min())?this.Fn(t,e):this.On.Pn(t,s).next(r=>{const o=this.Mn(e,r);return(Kt(e)||Gt(e))&&this.Ln(e.limitType,o,s,n)?this.Fn(t,e):(d()<=i["a"].DEBUG&&f("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Zt(e)),this.On.getDocumentsMatchingQuery(t,e,n).next(t=>(o.forEach(e=>{t=t.insert(e.key,e)}),t)))})}Mn(t,e){let n=new Ge(ee(t));return e.forEach((e,s)=>{te(t,s)&&(n=n.add(s))}),n}Ln(t,e,n,s){if(n.size!==e.size)return!0;const r="F"===t?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Fn(t,e){return d()<=i["a"].DEBUG&&f("QueryEngine","Using full collection scan to execute query:",Zt(e)),this.On.getDocumentsMatchingQuery(t,e,M.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(t,e,n,s){this.persistence=t,this.Bn=e,this.N=s,this.Un=new je(R),this.qn=new Is(t=>Et(t),bt),this.Kn=M.min(),this.In=t.getMutationQueue(n),this.jn=t.getRemoteDocumentCache(),this.ze=t.getTargetCache(),this.Qn=new As(this.jn,this.In,this.persistence.getIndexManager()),this.Je=t.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Un))}}function Cs(t,e,n,s){return new Ds(t,e,n,s)}async function ks(t,e){const n=v(t);let s=n.In,r=n.Qn;const i=await n.persistence.runTransaction("Handle user change","readonly",t=>{let i;return n.In.getAllMutationBatches(t).next(o=>(i=o,s=n.persistence.getMutationQueue(e),r=new As(n.jn,s,n.persistence.getIndexManager()),s.getAllMutationBatches(t))).next(e=>{const n=[],s=[];let o=Ze();for(const t of i){n.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return r.Pn(t,o).next(t=>({Wn:t,removedBatchIds:n,addedBatchIds:s}))})});return n.In=s,n.Qn=r,n.Bn.$n(n.Qn),i}function Rs(t,e){const n=v(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{const s=e.batch.keys(),r=n.jn.newChangeBuffer({trackRemovals:!0});return function(t,e,n,s){const r=n.batch,i=r.keys();let o=ls.resolve();return i.forEach(t=>{o=o.next(()=>s.getEntry(e,t)).next(e=>{const i=n.docVersions.get(t);w(null!==i),e.version.compareTo(i)<0&&(r.applyToRemoteDocument(e,n),e.isValidDocument()&&s.addEntry(e,n.commitVersion))})}),o.next(()=>t.In.removeMutationBatch(e,r))}(n,t,e,r).next(()=>r.apply(t)).next(()=>n.In.performConsistencyCheck(t)).next(()=>n.Qn.Pn(t,s))})}function Ls(t){const e=v(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.ze.getLastRemoteSnapshotVersion(t))}function xs(t,e){const n=v(t),s=e.snapshotVersion;let r=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const i=n.jn.newChangeBuffer({trackRemovals:!0});r=n.Un;const o=[];e.targetChanges.forEach((e,i)=>{const a=r.get(i);if(!a)return;o.push(n.ze.removeMatchingKeys(t,e.removedDocuments,i).next(()=>n.ze.addMatchingKeys(t,e.addedDocuments,i)));const c=e.resumeToken;if(c.approximateByteSize()>0){const u=a.withResumeToken(c,s).withSequenceNumber(t.currentSequenceNumber);r=r.insert(i,u),function(t,e,n){return w(e.resumeToken.approximateByteSize()>0),0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(a,u,e)&&o.push(n.ze.updateTargetData(t,u))}});let a=ze();if(e.documentUpdates.forEach((s,r)=>{e.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,s))}),o.push(Ms(t,i,e.documentUpdates,s,void 0).next(t=>{a=t})),!s.isEqual(M.min())){const e=n.ze.getLastRemoteSnapshotVersion(t).next(e=>n.ze.setTargetsMetadata(t,t.currentSequenceNumber,s));o.push(e)}return ls.waitFor(o).next(()=>i.apply(t)).next(()=>n.Qn.vn(t,a)).next(()=>a)}).then(t=>(n.Un=r,t))}function Ms(t,e,n,s,r){let i=Ze();return n.forEach(t=>i=i.add(t)),e.getEntries(t,i).next(t=>{let i=ze();return n.forEach((n,o)=>{const a=t.get(n),c=(null==r?void 0:r.get(n))||s;o.isNoDocument()&&o.version.isEqual(M.min())?(e.removeEntry(n,c),i=i.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(e.addEntry(o,c),i=i.insert(n,o)):f("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)}),i})}function Os(t,e){const n=v(t);return n.persistence.runTransaction("Get next mutation batch","readonly",t=>(void 0===e&&(e=-1),n.In.getNextMutationBatchAfterBatchId(t,e)))}function Vs(t,e){const n=v(t);return n.persistence.runTransaction("Allocate target","readwrite",t=>{let s;return n.ze.getTargetData(t,e).next(r=>r?(s=r,ls.resolve(s)):n.ze.allocateTargetId(t).next(r=>(s=new ps(e,r,0,t.currentSequenceNumber),n.ze.addTargetData(t,s).next(()=>s))))}).then(t=>{const s=n.Un.get(t.targetId);return(null===s||t.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Un=n.Un.insert(t.targetId,t),n.qn.set(e,t.targetId)),t})}async function Fs(t,e,n){const s=v(t),r=s.Un.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,t=>s.persistence.referenceDelegate.removeTarget(t,r))}catch(t){if(!ds(t))throw t;f("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}s.Un=s.Un.remove(e),s.qn.delete(r.target)}function Ps(t,e,n){const s=v(t);let r=M.min(),i=Ze();return s.persistence.runTransaction("Execute query","readonly",t=>function(t,e,n){const s=v(t),r=s.qn.get(n);return void 0!==r?ls.resolve(s.Un.get(r)):s.ze.getTargetData(e,n)}(s,t,Wt(e)).next(e=>{if(e)return r=e.lastLimboFreeSnapshotVersion,s.ze.getMatchingKeysForTargetId(t,e.targetId).next(t=>{i=t})}).next(()=>s.Bn.getDocumentsMatchingQuery(t,e,n?r:M.min(),n?i:Ze())).next(t=>({documents:t,Gn:i})))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Us{constructor(t){this.N=t,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(t,e){return ls.resolve(this.Yn.get(e))}saveBundleMetadata(t,e){var n;return this.Yn.set(e.id,{id:(n=e).id,version:n.version,createTime:wn(n.createTime)}),ls.resolve()}getNamedQuery(t,e){return ls.resolve(this.Xn.get(e))}saveNamedQuery(t,e){return this.Xn.set(e.name,function(t){return{name:t.name,query:ys(t.bundledQuery),readTime:wn(t.readTime)}}(e)),ls.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(){this.Zn=new Ge(js.ts),this.es=new Ge(js.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const n=new js(t,e);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.rs(new js(t,e))}os(t,e){t.forEach(t=>this.removeReference(t,e))}cs(t){const e=new tt(new U([])),n=new js(e,t),s=new js(e,t+1),r=[];return this.es.forEachInRange([n,s],t=>{this.rs(t),r.push(t.key)}),r}us(){this.Zn.forEach(t=>this.rs(t))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new tt(new U([])),n=new js(e,t),s=new js(e,t+1);let r=Ze();return this.es.forEachInRange([n,s],t=>{r=r.add(t.key)}),r}containsKey(t){const e=new js(t,0),n=this.Zn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class js{constructor(t,e){this.key=t,this.ls=e}static ts(t,e){return tt.comparator(t.key,e.key)||R(t.ls,e.ls)}static ns(t,e){return R(t.ls,e.ls)||tt.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(t,e){this.Ht=t,this.referenceDelegate=e,this.In=[],this.fs=1,this.ds=new Ge(js.ts)}checkEmpty(t){return ls.resolve(0===this.In.length)}addMutationBatch(t,e,n,s){const r=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const i=new fs(r,e,n,s);this.In.push(i);for(const o of s)this.ds=this.ds.add(new js(o.key,r)),this.Ht.addToCollectionParentIndex(t,o.key.path.popLast());return ls.resolve(i)}lookupMutationBatch(t,e){return ls.resolve(this.ws(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this._s(n),r=s<0?0:s;return ls.resolve(this.In.length>r?this.In[r]:null)}getHighestUnacknowledgedBatchId(){return ls.resolve(0===this.In.length?-1:this.fs-1)}getAllMutationBatches(t){return ls.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new js(e,0),s=new js(e,Number.POSITIVE_INFINITY),r=[];return this.ds.forEachInRange([n,s],t=>{const e=this.ws(t.ls);r.push(e)}),ls.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Ge(R);return e.forEach(t=>{const e=new js(t,0),s=new js(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,s],t=>{n=n.add(t.ls)})}),ls.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let r=n;tt.isDocumentKey(r)||(r=r.child(""));const i=new js(new tt(r),0);let o=new Ge(R);return this.ds.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===s&&(o=o.add(t.ls)),!0)},i),ls.resolve(this.gs(o))}gs(t){const e=[];return t.forEach(t=>{const n=this.ws(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){w(0===this.ys(e.batchId,"removed")),this.In.shift();let n=this.ds;return ls.forEach(e.mutations,s=>{const r=new js(s.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.ds=n})}te(t){}containsKey(t,e){const n=new js(e,0),s=this.ds.firstAfterOrEqual(n);return ls.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.In.length,ls.resolve()}ys(t,e){return this._s(t)}_s(t){return 0===this.In.length?0:t-this.In[0].batchId}ws(t){const e=this._s(t);return e<0||e>=this.In.length?null:this.In[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(t,e){this.Ht=t,this.ps=e,this.docs=new je(tt.comparator),this.size=0}addEntry(t,e,n){const s=e.key,r=this.docs.get(s),i=r?r.size:0,o=this.ps(e);return this.docs=this.docs.insert(s,{document:e.clone(),size:o,readTime:n}),this.size+=o-i,this.Ht.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return ls.resolve(n?n.document.clone():yt.newInvalidDocument(e))}getEntries(t,e){let n=ze();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.clone():yt.newInvalidDocument(t))}),ls.resolve(n)}getDocumentsMatchingQuery(t,e,n){let s=ze();const r=new tt(e.path.child("")),i=this.docs.getIteratorFrom(r);for(;i.hasNext();){const{key:t,value:{document:r,readTime:o}}=i.getNext();if(!e.path.isPrefixOf(t.path))break;o.compareTo(n)<=0||te(e,r)&&(s=s.insert(r.key,r.clone()))}return ls.resolve(s)}Ts(t,e){return ls.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new Gs(this)}getSize(t){return ls.resolve(this.size)}}class Gs extends Ss{constructor(t){super(),this.Se=t}applyChanges(t){const e=[];return this.changes.forEach((n,s)=>{s.document.isValidDocument()?e.push(this.Se.addEntry(t,s.document,this.getReadTime(n))):this.Se.removeEntry(n)}),ls.waitFor(e)}getFromCache(t,e){return this.Se.getEntry(t,e)}getAllFromCache(t,e){return this.Se.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(t){this.persistence=t,this.Es=new Is(t=>Et(t),bt),this.lastRemoteSnapshotVersion=M.min(),this.highestTargetId=0,this.Is=0,this.As=new qs,this.targetCount=0,this.Rs=Ts.se()}forEachTarget(t,e){return this.Es.forEach((t,n)=>e(n)),ls.resolve()}getLastRemoteSnapshotVersion(t){return ls.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return ls.resolve(this.Is)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),ls.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Is&&(this.Is=e),ls.resolve()}ae(t){this.Es.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new Ts(e),this.highestTargetId=e),t.sequenceNumber>this.Is&&(this.Is=t.sequenceNumber)}addTargetData(t,e){return this.ae(e),this.targetCount+=1,ls.resolve()}updateTargetData(t,e){return this.ae(e),ls.resolve()}removeTargetData(t,e){return this.Es.delete(e.target),this.As.cs(e.targetId),this.targetCount-=1,ls.resolve()}removeTargets(t,e,n){let s=0;const r=[];return this.Es.forEach((i,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Es.delete(i),r.push(this.removeMatchingKeysForTargetId(t,o.targetId)),s++)}),ls.waitFor(r).next(()=>s)}getTargetCount(t){return ls.resolve(this.targetCount)}getTargetData(t,e){const n=this.Es.get(e)||null;return ls.resolve(n)}addMatchingKeys(t,e,n){return this.As.ss(e,n),ls.resolve()}removeMatchingKeys(t,e,n){this.As.os(e,n);const s=this.persistence.referenceDelegate,r=[];return s&&e.forEach(e=>{r.push(s.markPotentiallyOrphaned(t,e))}),ls.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.As.cs(e),ls.resolve()}getMatchingKeysForTargetId(t,e){const n=this.As.hs(e);return ls.resolve(n)}containsKey(t,e){return ls.resolve(this.As.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(t,e){this.bs={},this.Le=new D(0),this.Be=!1,this.Be=!0,this.referenceDelegate=t(this),this.ze=new Hs(this),this.Ht=new ws,this.He=function(t,e){return new Ks(t,e)}(this.Ht,t=>this.referenceDelegate.Ps(t)),this.N=new ms(e),this.Je=new Us(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(t){let e=this.bs[t.toKey()];return e||(e=new Bs(this.Ht,this.referenceDelegate),this.bs[t.toKey()]=e),e}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(t,e,n){f("MemoryPersistence","Starting transaction:",t);const s=new zs(this.Le.next());return this.referenceDelegate.vs(),n(s).next(t=>this.referenceDelegate.Vs(s).next(()=>t)).toPromise().then(t=>(s.raiseOnCommittedEvent(),t))}Ss(t,e){return ls.or(Object.values(this.bs).map(n=>()=>n.containsKey(t,e)))}}class zs extends hs{constructor(t){super(),this.currentSequenceNumber=t}}class Qs{constructor(t){this.persistence=t,this.Ds=new qs,this.Cs=null}static Ns(t){return new Qs(t)}get xs(){if(this.Cs)return this.Cs;throw y()}addReference(t,e,n){return this.Ds.addReference(n,e),this.xs.delete(n.toString()),ls.resolve()}removeReference(t,e,n){return this.Ds.removeReference(n,e),this.xs.add(n.toString()),ls.resolve()}markPotentiallyOrphaned(t,e){return this.xs.add(e.toString()),ls.resolve()}removeTarget(t,e){this.Ds.cs(e.targetId).forEach(t=>this.xs.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.xs.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}vs(){this.Cs=new Set}Vs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ls.forEach(this.xs,n=>{const s=tt.fromPath(n);return this.ks(t,s).next(t=>{t||e.removeEntry(s)})}).next(()=>(this.Cs=null,e.apply(t)))}updateLimboDocument(t,e){return this.ks(t,e).next(t=>{t?this.xs.delete(e.toString()):this.xs.add(e.toString())})}Ps(t){return 0}ks(t,e){return ls.or([()=>ls.resolve(this.Ds.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ss(t,e)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(){this.activeTargetIds=en()}Fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ms(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Os(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Xs{constructor(){this.yi=new Ws,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.yi.Fs(t),this.pi[t]||"not-current"}updateQueryState(t,e,n){this.pi[t]=e}removeLocalQueryTarget(t){this.yi.Ms(t)}isLocalQueryTarget(t){return this.yi.activeTargetIds.has(t)}clearQueryState(t){delete this.pi[t]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(t){return this.yi.activeTargetIds.has(t)}start(){return this.yi=new Ws,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{Ti(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(){this.Ei=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ti(t){this.bi.push(t)}shutdown(){window.removeEventListener("online",this.Ei),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ei),window.addEventListener("offline",this.Ai)}Ii(){f("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.bi)t(0)}Ri(){f("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.bi)t(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(t){this.vi=t.vi,this.Vi=t.Vi}Si(t){this.Di=t}Ci(t){this.Ni=t}onMessage(t){this.xi=t}close(){this.Vi()}send(t){this.vi(t)}ki(){this.Di()}$i(t){this.Ni(t)}Oi(t){this.xi(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.Fi=e+"://"+t.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(t,e,n,s){const r=this.Bi(t,e);f("RestConnection","Sending: ",r,n);const i={};return this.Ui(i,s),this.qi(t,r,i,n).then(t=>(f("RestConnection","Received: ",t),t),e=>{throw p("RestConnection",t+" failed with error: ",e,"url: ",r,"request:",n),e})}Ki(t,e,n,s){return this.Li(t,e,n,s)}Ui(t,e){if(t["X-Goog-Api-Client"]="gl-js/ fire/"+h,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e)for(const n in e.authHeaders)e.authHeaders.hasOwnProperty(n)&&(t[n]=e.authHeaders[n])}Bi(t,e){const n=Zs[t];return`${this.Fi}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}qi(t,e,n,s){return new Promise((r,i)=>{const o=new a["g"];o.listenOnce(a["c"].COMPLETE,()=>{try{switch(o.getLastErrorCode()){case a["a"].NO_ERROR:const e=o.getResponseJson();f("Connection","XHR received:",JSON.stringify(e)),r(e);break;case a["a"].TIMEOUT:f("Connection",'RPC "'+t+'" timed out'),i(new T(E.DEADLINE_EXCEEDED,"Request time out"));break;case a["a"].HTTP_ERROR:const n=o.getStatus();if(f("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(e)>=0?e:E.UNKNOWN}(t.status);i(new T(e,t.message))}else i(new T(E.UNKNOWN,"Server responded with status "+o.getStatus()))}else i(new T(E.UNAVAILABLE,"Connection failed."));break;default:y()}}finally{f("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(s);o.send(e,"POST",c,n,15)})}ji(t,e){const n=[this.Fi,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=Object(a["h"])(),r=Object(a["i"])(),i={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(i.xmlHttpFactory=new a["d"]({})),this.Ui(i.initMessageHeaders,e),Object(o["p"])()||Object(o["q"])()||Object(o["l"])()||Object(o["n"])()||Object(o["s"])()||Object(o["k"])()||(i.httpHeadersOverwriteParam="$httpHeaders");const c=n.join("");f("Connection","Creating WebChannel: "+c,i);const u=s.createWebChannel(c,i);let h=!1,l=!1;const d=new tr({vi:t=>{l?f("Connection","Not sending because WebChannel is closed:",t):(h||(f("Connection","Opening WebChannel transport."),u.open(),h=!0),f("Connection","WebChannel sending:",t),u.send(t))},Vi:()=>u.close()}),g=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};return g(u,a["f"].EventType.OPEN,()=>{l||f("Connection","WebChannel transport opened.")}),g(u,a["f"].EventType.CLOSE,()=>{l||(l=!0,f("Connection","WebChannel transport closed"),d.$i())}),g(u,a["f"].EventType.ERROR,t=>{l||(l=!0,p("Connection","WebChannel transport errored:",t),d.$i(new T(E.UNAVAILABLE,"The operation could not be completed")))}),g(u,a["f"].EventType.MESSAGE,t=>{var e;if(!l){const n=t.data[0];w(!!n);const s=n,r=s.error||(null===(e=s[0])||void 0===e?void 0:e.error);if(r){f("Connection","WebChannel received error:",r);const t=r.status;let e=function(t){const e=Fe[t];if(void 0!==e)return qe(e)}(t),n=r.message;void 0===e&&(e=E.INTERNAL,n="Unknown error status: "+t+" with message "+r.message),l=!0,d.$i(new T(e,n)),u.close()}else f("Connection","WebChannel received:",n),d.Oi(n)}}),g(r,a["b"].STAT_EVENT,t=>{t.stat===a["e"].PROXY?f("Connection","Detected buffering proxy"):t.stat===a["e"].NOPROXY&&f("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.ki()},0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(t){return new gn(t,!0)}class rr{constructor(t,e,n=1e3,s=1.5,r=6e4){this.Oe=t,this.timerId=e,this.Qi=n,this.Wi=s,this.Gi=r,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(t){this.cancel();const e=Math.floor(this.zi+this.Zi()),n=Math.max(0,Date.now()-this.Ji),s=Math.max(0,e-n);s>0&&f("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.zi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,s,()=>(this.Ji=Date.now(),t())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){null!==this.Hi&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){null!==this.Hi&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(t,e,n,s,r,i){this.Oe=t,this.er=n,this.nr=s,this.credentialsProvider=r,this.listener=i,this.state=0,this.sr=0,this.ir=null,this.stream=null,this.rr=new rr(t,e)}ar(){return 1===this.state||2===this.state||4===this.state}cr(){return 2===this.state}start(){3!==this.state?this.auth():this.ur()}async stop(){this.ar()&&await this.close(0)}hr(){this.state=0,this.rr.reset()}lr(){this.cr()&&null===this.ir&&(this.ir=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this.dr()))}wr(t){this._r(),this.stream.send(t)}async dr(){if(this.cr())return this.close(0)}_r(){this.ir&&(this.ir.cancel(),this.ir=null)}async close(t,e){this._r(),this.rr.cancel(),this.sr++,3!==t?this.rr.reset():e&&e.code===E.RESOURCE_EXHAUSTED?(g(e.toString()),g("Using maximum backoff delay to prevent overloading the backend."),this.rr.Yi()):e&&e.code===E.UNAUTHENTICATED&&this.credentialsProvider.invalidateToken(),null!==this.stream&&(this.mr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ci(e)}mr(){}auth(){this.state=1;const t=this.gr(this.sr),e=this.sr;this.credentialsProvider.getToken().then(t=>{this.sr===e&&this.yr(t)},e=>{t(()=>{const t=new T(E.UNKNOWN,"Fetching auth token failed: "+e.message);return this.pr(t)})})}yr(t){const e=this.gr(this.sr);this.stream=this.Tr(t),this.stream.Si(()=>{e(()=>(this.state=2,this.listener.Si()))}),this.stream.Ci(t=>{e(()=>this.pr(t))}),this.stream.onMessage(t=>{e(()=>this.onMessage(t))})}ur(){this.state=4,this.rr.Xi(async()=>{this.state=0,this.start()})}pr(t){return f("PersistentStream","close with error: "+t),this.stream=null,this.close(3,t)}gr(t){return e=>{this.Oe.enqueueAndForget(()=>this.sr===t?e():(f("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class or extends ir{constructor(t,e,n,s,r){super(t,"listen_stream_connection_backoff","listen_stream_idle",e,n,r),this.N=s}Tr(t){return this.nr.ji("Listen",t)}onMessage(t){this.rr.reset();const e=Cn(this.N,t),n=function(t){if(!("targetChange"in t))return M.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?M.min():e.readTime?wn(e.readTime):M.min()}(t);return this.listener.Er(e,n)}Ir(t){const e={};e.database=An(this.N),e.addTarget=function(t,e){let n;const s=e.target;return n=It(s)?{documents:Ln(t,s)}:{query:xn(t,s)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=mn(t,e.resumeToken):e.snapshotVersion.compareTo(M.min())>0&&(n.readTime=pn(t,e.snapshotVersion.toTimestamp())),n}(this.N,t);const n=On(this.N,t);n&&(e.labels=n),this.wr(e)}Ar(t){const e={};e.database=An(this.N),e.removeTarget=t,this.wr(e)}}class ar extends ir{constructor(t,e,n,s,r){super(t,"write_stream_connection_backoff","write_stream_idle",e,n,r),this.N=s,this.Rr=!1}get br(){return this.Rr}start(){this.Rr=!1,this.lastStreamToken=void 0,super.start()}mr(){this.Rr&&this.Pr([])}Tr(t){return this.nr.ji("Write",t)}onMessage(t){if(w(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Rr){this.rr.reset();const e=Rn(t.writeResults,t.commitTime),n=wn(t.commitTime);return this.listener.vr(n,e)}return w(!t.writeResults||0===t.writeResults.length),this.Rr=!0,this.listener.Vr()}Sr(){const t={};t.database=An(this.N),this.wr(t)}Pr(t){const e={streamToken:this.lastStreamToken,writes:t.map(t=>kn(this.N,t))};this.wr(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends class{}{constructor(t,e,n){super(),this.credentials=t,this.nr=e,this.N=n,this.Dr=!1}Cr(){if(this.Dr)throw new T(E.FAILED_PRECONDITION,"The client has already been terminated.")}Li(t,e,n){return this.Cr(),this.credentials.getToken().then(s=>this.nr.Li(t,e,n,s)).catch(t=>{throw"FirebaseError"===t.name?(t.code===E.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new T(E.UNKNOWN,t.toString())})}Ki(t,e,n){return this.Cr(),this.credentials.getToken().then(s=>this.nr.Ki(t,e,n,s)).catch(t=>{throw"FirebaseError"===t.name?(t.code===E.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new T(E.UNKNOWN,t.toString())})}terminate(){this.Dr=!0}}class ur{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Nr=0,this.kr=null,this.$r=!0}Or(){0===this.Nr&&(this.Fr("Unknown"),this.kr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.kr=null,this.Mr("Backend didn't respond within 10 seconds."),this.Fr("Offline"),Promise.resolve())))}Lr(t){"Online"===this.state?this.Fr("Unknown"):(this.Nr++,this.Nr>=1&&(this.Br(),this.Mr("Connection failed 1 times. Most recent error: "+t.toString()),this.Fr("Offline")))}set(t){this.Br(),this.Nr=0,"Online"===t&&(this.$r=!1),this.Fr(t)}Fr(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}Mr(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.$r?(g(e),this.$r=!1):f("OnlineStateTracker",e)}Br(){null!==this.kr&&(this.kr.cancel(),this.kr=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(t,e,n,s,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ur=[],this.qr=new Map,this.Kr=new Set,this.jr=[],this.Qr=r,this.Qr.Ti(t=>{n.enqueueAndForget(async()=>{vr(this)&&(f("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=v(t);e.Kr.add(4),await dr(e),e.Wr.set("Unknown"),e.Kr.delete(4),await lr(e)}(this))})}),this.Wr=new ur(n,s)}}async function lr(t){if(vr(t))for(const e of t.jr)await e(!0)}async function dr(t){for(const e of t.jr)await e(!1)}function fr(t,e){const n=v(t);n.qr.has(e.targetId)||(n.qr.set(e.targetId,e),wr(n)?yr(n):Vr(n).cr()&&pr(n,e))}function gr(t,e){const n=v(t),s=Vr(n);n.qr.delete(e),s.cr()&&mr(n,e),0===n.qr.size&&(s.cr()?s.lr():vr(n)&&n.Wr.set("Unknown"))}function pr(t,e){t.Gr.Y(e.targetId),Vr(t).Ir(e)}function mr(t,e){t.Gr.Y(e),Vr(t).Ar(e)}function yr(t){t.Gr=new un({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>t.qr.get(e)||null}),Vr(t).start(),t.Wr.Or()}function wr(t){return vr(t)&&!Vr(t).ar()&&t.qr.size>0}function vr(t){return 0===v(t).Kr.size}function Er(t){t.Gr=void 0}async function Tr(t){t.qr.forEach((e,n)=>{pr(t,e)})}async function br(t,e){Er(t),wr(t)?(t.Wr.Lr(e),yr(t)):t.Wr.set("Unknown")}async function Ir(t,e,n){if(t.Wr.set("Online"),e instanceof an&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const s of e.targetIds)t.qr.has(s)&&(await t.remoteSyncer.rejectListen(s,n),t.qr.delete(s),t.Gr.removeTarget(s))}(t,e)}catch(n){f("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Sr(t,n)}else if(e instanceof rn?t.Gr.rt(e):e instanceof on?t.Gr.ft(e):t.Gr.ct(e),!n.isEqual(M.min()))try{const e=await Ls(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Gr._t(e);return n.targetChanges.forEach((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const r=t.qr.get(s);r&&t.qr.set(s,r.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach(e=>{const n=t.qr.get(e);if(!n)return;t.qr.set(e,n.withResumeToken(K.EMPTY_BYTE_STRING,n.snapshotVersion)),mr(t,e);const s=new ps(n.target,e,1,n.sequenceNumber);pr(t,s)}),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){f("RemoteStore","Failed to raise snapshot:",e),await Sr(t,e)}}async function Sr(t,e,n){if(!ds(e))throw e;t.Kr.add(1),await dr(t),t.Wr.set("Offline"),n||(n=()=>Ls(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{f("RemoteStore","Retrying IndexedDB access"),await n(),t.Kr.delete(1),await lr(t)})}function Ar(t,e){return e().catch(n=>Sr(t,n,e))}async function Nr(t){const e=v(t),n=Fr(e);let s=e.Ur.length>0?e.Ur[e.Ur.length-1].batchId:-1;for(;_r(e);)try{const t=await Os(e.localStore,s);if(null===t){0===e.Ur.length&&n.lr();break}s=t.batchId,Dr(e,t)}catch(t){await Sr(e,t)}Cr(e)&&kr(e)}function _r(t){return vr(t)&&t.Ur.length<10}function Dr(t,e){t.Ur.push(e);const n=Fr(t);n.cr()&&n.br&&n.Pr(e.mutations)}function Cr(t){return vr(t)&&!Fr(t).ar()&&t.Ur.length>0}function kr(t){Fr(t).start()}async function Rr(t){Fr(t).Sr()}async function Lr(t){const e=Fr(t);for(const n of t.Ur)e.Pr(n.mutations)}async function xr(t,e,n){const s=t.Ur.shift(),r=gs.from(s,e,n);await Ar(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Nr(t)}async function Mr(t,e){e&&Fr(t).br&&await async function(t,e){if(n=e.code,Ue(n)&&n!==E.ABORTED){const n=t.Ur.shift();Fr(t).hr(),await Ar(t,()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e)),await Nr(t)}var n}(t,e),Cr(t)&&kr(t)}async function Or(t,e){const n=v(t);e?(n.Kr.delete(2),await lr(n)):e||(n.Kr.add(2),await dr(n),n.Wr.set("Unknown"))}function Vr(t){return t.zr||(t.zr=function(t,e,n){const s=v(t);return s.Cr(),new or(e,s.nr,s.credentials,s.N,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Si:Tr.bind(null,t),Ci:br.bind(null,t),Er:Ir.bind(null,t)}),t.jr.push(async e=>{e?(t.zr.hr(),wr(t)?yr(t):t.Wr.set("Unknown")):(await t.zr.stop(),Er(t))})),t.zr}function Fr(t){return t.Hr||(t.Hr=function(t,e,n){const s=v(t);return s.Cr(),new ar(e,s.nr,s.credentials,s.N,n)}(t.datastore,t.asyncQueue,{Si:Rr.bind(null,t),Ci:Mr.bind(null,t),Vr:Lr.bind(null,t),vr:xr.bind(null,t)}),t.jr.push(async e=>{e?(t.Hr.hr(),await Nr(t)):(await t.Hr.stop(),t.Ur.length>0&&(f("RemoteStore",`Stopping write stream with ${t.Ur.length} pending writes`),t.Ur=[]))})),t.Hr
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Pr{constructor(t,e,n,s,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=r,this.deferred=new b,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}static createAndSchedule(t,e,n,s,r){const i=Date.now()+n,o=new Pr(t,e,i,s,r);return o.start(n),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new T(E.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ur(t,e){if(g("AsyncQueue",`${e}: ${t}`),ds(t))return new T(E.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(t){this.comparator=t?(e,n)=>t(e,n)||tt.comparator(e.key,n.key):(t,e)=>tt.comparator(t.key,e.key),this.keyedMap=We(),this.sortedSet=new je(this.comparator)}static emptySet(t){return new qr(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof qr))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(!t.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new qr;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(){this.Jr=new je(tt.comparator)}track(t){const e=t.doc.key,n=this.Jr.get(e);n?0!==t.type&&3===n.type?this.Jr=this.Jr.insert(e,t):3===t.type&&1!==n.type?this.Jr=this.Jr.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Jr=this.Jr.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Jr=this.Jr.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Jr=this.Jr.remove(e):1===t.type&&2===n.type?this.Jr=this.Jr.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Jr=this.Jr.insert(e,{type:2,doc:t.doc}):y():this.Jr=this.Jr.insert(e,t)}Yr(){const t=[];return this.Jr.inorderTraversal((e,n)=>{t.push(n)}),t}}class Br{constructor(t,e,n,s,r,i,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=r,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,s){const r=[];return e.forEach(t=>{r.push({type:0,doc:t})}),new Br(t,e,qr.emptySet(e),r,n,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Yt(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(){this.Xr=void 0,this.listeners=[]}}class Gr{constructor(){this.queries=new Is(t=>Jt(t),Yt),this.onlineState="Unknown",this.Zr=new Set}}async function Hr(t,e){const n=v(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new Kr),r)try{i.Xr=await n.onListen(s)}catch(t){const n=Ur(t,`Initialization of query '${Zt(e.query)}' failed`);return void e.onError(n)}n.queries.set(s,i),i.listeners.push(e),e.eo(n.onlineState),i.Xr&&e.no(i.Xr)&&Wr(n)}async function $r(t,e){const n=v(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const t=i.listeners.indexOf(e);t>=0&&(i.listeners.splice(t,1),r=0===i.listeners.length)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function zr(t,e){const n=v(t);let s=!1;for(const r of e){const t=r.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.no(r)&&(s=!0);e.Xr=r}}s&&Wr(n)}function Qr(t,e,n){const s=v(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Wr(t){t.Zr.forEach(t=>{t.next()})}class Xr{constructor(t,e,n){this.query=t,this.so=e,this.io=!1,this.ro=null,this.onlineState="Unknown",this.options=n||{}}no(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Br(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.io?this.oo(t)&&(this.so.next(t),e=!0):this.ao(t,this.onlineState)&&(this.co(t),e=!0),this.ro=t,e}onError(t){this.so.error(t)}eo(t){this.onlineState=t;let e=!1;return this.ro&&!this.io&&this.ao(this.ro,t)&&(this.co(this.ro),e=!0),e}ao(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.uo||!n)&&(!t.docs.isEmpty()||"Offline"===e)}oo(t){if(t.docChanges.length>0)return!0;const e=this.ro&&this.ro.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}co(t){t=Br.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.io=!0,this.so.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yr{constructor(t){this.key=t}}class Jr{constructor(t){this.key=t}}class Zr{constructor(t,e){this.query=t,this._o=e,this.mo=null,this.current=!1,this.yo=Ze(),this.mutatedKeys=Ze(),this.po=ee(t),this.To=new qr(this.po)}get Eo(){return this._o}Io(t,e){const n=e?e.Ao:new jr,s=e?e.To:this.To;let r=e?e.mutatedKeys:this.mutatedKeys,i=s,o=!1;const a=Kt(this.query)&&s.size===this.query.limit?s.last():null,c=Gt(this.query)&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((t,e)=>{const u=s.get(t),h=te(this.query,e)?e:null,l=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;u&&h?u.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.Ro(u,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.po(h,a)>0||c&&this.po(h,c)<0)&&(o=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(h?(i=i.add(h),r=d?r.add(t):r.delete(t)):(i=i.delete(t),r=r.delete(t)))}),Kt(this.query)||Gt(this.query))for(;i.size>this.query.limit;){const t=Kt(this.query)?i.last():i.first();i=i.delete(t.key),r=r.delete(t.key),n.track({type:1,doc:t})}return{To:i,Ao:n,Ln:o,mutatedKeys:r}}Ro(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const s=this.To;this.To=t.To,this.mutatedKeys=t.mutatedKeys;const r=t.Ao.Yr();r.sort((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return y()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.po(t.doc,e.doc)),this.bo(n);const i=e?this.Po():[],o=0===this.yo.size&&this.current?1:0,a=o!==this.mo;return this.mo=o,0!==r.length||a?{snapshot:new Br(this.query,t.To,s,r,t.mutatedKeys,0===o,a,!1),vo:i}:{vo:i}}eo(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({To:this.To,Ao:new jr,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{vo:[]}}Vo(t){return!this._o.has(t)&&!!this.To.has(t)&&!this.To.get(t).hasLocalMutations}bo(t){t&&(t.addedDocuments.forEach(t=>this._o=this._o.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this._o=this._o.delete(t)),this.current=t.current)}Po(){if(!this.current)return[];const t=this.yo;this.yo=Ze(),this.To.forEach(t=>{this.Vo(t.key)&&(this.yo=this.yo.add(t.key))});const e=[];return t.forEach(t=>{this.yo.has(t)||e.push(new Jr(t))}),this.yo.forEach(n=>{t.has(n)||e.push(new Yr(n))}),e}So(t){this._o=t.Gn,this.yo=Ze();const e=this.Io(t.documents);return this.applyChanges(e,!0)}Do(){return Br.fromInitialDocuments(this.query,this.To,this.mutatedKeys,0===this.mo)}}class ti{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class ei{constructor(t){this.key=t,this.Co=!1}}class ni{constructor(t,e,n,s,r,i){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=i,this.No={},this.xo=new Is(t=>Jt(t),Yt),this.ko=new Map,this.$o=new Set,this.Oo=new je(tt.comparator),this.Fo=new Map,this.Mo=new qs,this.Lo={},this.Bo=new Map,this.Uo=Ts.ie(),this.onlineState="Unknown",this.qo=void 0}get isPrimaryClient(){return!0===this.qo}}async function si(t,e){const n=bi(t);let s,r;const i=n.xo.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.Do();else{const t=await Vs(n.localStore,Wt(e)),i=n.sharedClientState.addLocalQueryTarget(t.targetId);s=t.targetId,r=await ri(n,e,s,"current"===i),n.isPrimaryClient&&fr(n.remoteStore,t)}return r}async function ri(t,e,n,s){t.Ko=(e,n,s)=>async function(t,e,n,s){let r=e.view.Io(n);r.Ln&&(r=await Ps(t.localStore,e.query,!1).then(({documents:t})=>e.view.Io(t,r)));const i=s&&s.targetChanges.get(e.targetId),o=e.view.applyChanges(r,t.isPrimaryClient,i);return mi(t,e.targetId,o.vo),o.snapshot}(t,e,n,s);const r=await Ps(t.localStore,e,!0),i=new Zr(e,r.Gn),o=i.Io(r.documents),a=sn.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==t.onlineState),c=i.applyChanges(o,t.isPrimaryClient,a);mi(t,n,c.vo);const u=new ti(e,n,i);return t.xo.set(e,u),t.ko.has(n)?t.ko.get(n).push(e):t.ko.set(n,[e]),c.snapshot}async function ii(t,e){const n=v(t),s=n.xo.get(e),r=n.ko.get(s.targetId);if(r.length>1)return n.ko.set(s.targetId,r.filter(t=>!Yt(t,e))),void n.xo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Fs(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),gr(n.remoteStore,s.targetId),gi(n,s.targetId)}).catch(bs)):(gi(n,s.targetId),await Fs(n.localStore,s.targetId,!0))}async function oi(t,e,n){const s=Ii(t);try{const t=await function(t,e){const n=v(t),s=x.now(),r=e.reduce((t,e)=>t.add(e.key),Ze());let i;return n.persistence.runTransaction("Locally write mutations","readwrite",t=>n.Qn.Pn(t,r).next(r=>{i=r;const o=[];for(const t of e){const e=Ne(t,i.get(t.key));null!=e&&o.push(new ke(t.key,e,mt(e.value.mapValue),Te.exists(!0)))}return n.In.addMutationBatch(t,s,o,e)})).then(t=>(t.applyToLocalDocumentSet(i),{batchId:t.batchId,changes:i}))}(s.localStore,e);s.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let s=t.Lo[t.currentUser.toKey()];s||(s=new je(R)),s=s.insert(e,n),t.Lo[t.currentUser.toKey()]=s}(s,t.batchId,n),await vi(s,t.changes),await Nr(s.remoteStore)}catch(t){const e=Ur(t,"Failed to persist write");n.reject(e)}}async function ai(t,e){const n=v(t);try{const t=await xs(n.localStore,e);e.targetChanges.forEach((t,e)=>{const s=n.Fo.get(e);s&&(w(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?s.Co=!0:t.modifiedDocuments.size>0?w(s.Co):t.removedDocuments.size>0&&(w(s.Co),s.Co=!1))}),await vi(n,t,e)}catch(t){await bs(t)}}function ci(t,e,n){const s=v(t);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const t=[];s.xo.forEach((n,s)=>{const r=s.view.eo(e);r.snapshot&&t.push(r.snapshot)}),function(t,e){const n=v(t);n.onlineState=e;let s=!1;n.queries.forEach((t,n)=>{for(const r of n.listeners)r.eo(e)&&(s=!0)}),s&&Wr(n)}(s.eventManager,e),t.length&&s.No.Er(t),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function ui(t,e,n){const s=v(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.Fo.get(e),i=r&&r.key;if(i){let t=new je(tt.comparator);t=t.insert(i,yt.newNoDocument(i,M.min()));const n=Ze().add(i),r=new nn(M.min(),new Map,new Ge(R),t,n);await ai(s,r),s.Oo=s.Oo.remove(i),s.Fo.delete(e),wi(s)}else await Fs(s.localStore,e,!1).then(()=>gi(s,e,n)).catch(bs)}async function hi(t,e){const n=v(t),s=e.batch.batchId;try{const t=await Rs(n.localStore,e);fi(n,s,null),di(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await vi(n,t)}catch(t){await bs(t)}}async function li(t,e,n){const s=v(t);try{const t=await function(t,e){const n=v(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",t=>{let s;return n.In.lookupMutationBatch(t,e).next(e=>(w(null!==e),s=e.keys(),n.In.removeMutationBatch(t,e))).next(()=>n.In.performConsistencyCheck(t)).next(()=>n.Qn.Pn(t,s))})}(s.localStore,e);fi(s,e,n),di(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await vi(s,t)}catch(n){await bs(n)}}function di(t,e){(t.Bo.get(e)||[]).forEach(t=>{t.resolve()}),t.Bo.delete(e)}function fi(t,e,n){const s=v(t);let r=s.Lo[s.currentUser.toKey()];if(r){const t=r.get(e);t&&(n?t.reject(n):t.resolve(),r=r.remove(e)),s.Lo[s.currentUser.toKey()]=r}}function gi(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ko.get(e))t.xo.delete(s),n&&t.No.jo(s,n);t.ko.delete(e),t.isPrimaryClient&&t.Mo.cs(e).forEach(e=>{t.Mo.containsKey(e)||pi(t,e)})}function pi(t,e){t.$o.delete(e.path.canonicalString());const n=t.Oo.get(e);null!==n&&(gr(t.remoteStore,n),t.Oo=t.Oo.remove(e),t.Fo.delete(n),wi(t))}function mi(t,e,n){for(const s of n)s instanceof Yr?(t.Mo.addReference(s.key,e),yi(t,s)):s instanceof Jr?(f("SyncEngine","Document no longer in limbo: "+s.key),t.Mo.removeReference(s.key,e),t.Mo.containsKey(s.key)||pi(t,s.key)):y()}function yi(t,e){const n=e.key,s=n.path.canonicalString();t.Oo.get(n)||t.$o.has(s)||(f("SyncEngine","New document in limbo: "+n),t.$o.add(s),wi(t))}function wi(t){for(;t.$o.size>0&&t.Oo.size<t.maxConcurrentLimboResolutions;){const e=t.$o.values().next().value;t.$o.delete(e);const n=new tt(U.fromString(e)),s=t.Uo.next();t.Fo.set(s,new ei(n)),t.Oo=t.Oo.insert(n,s),fr(t.remoteStore,new ps(Wt(Bt(n.path)),s,2,D.T))}}async function vi(t,e,n){const s=v(t),r=[],i=[],o=[];s.xo.isEmpty()||(s.xo.forEach((t,a)=>{o.push(s.Ko(a,e,n).then(t=>{if(t){s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),r.push(t);const e=Ns.kn(a.targetId,t);i.push(e)}}))}),await Promise.all(o),s.No.Er(r),await async function(t,e){const n=v(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>ls.forEach(e,e=>ls.forEach(e.Nn,s=>n.persistence.referenceDelegate.addReference(t,e.targetId,s)).next(()=>ls.forEach(e.xn,s=>n.persistence.referenceDelegate.removeReference(t,e.targetId,s)))))}catch(t){if(!ds(t))throw t;f("LocalStore","Failed to update sequence numbers: "+t)}for(const s of e){const t=s.targetId;if(!s.fromCache){const e=n.Un.get(t),s=e.snapshotVersion,r=e.withLastLimboFreeSnapshotVersion(s);n.Un=n.Un.insert(t,r)}}}(s.localStore,i))}async function Ei(t,e){const n=v(t);if(!n.currentUser.isEqual(e)){f("SyncEngine","User change. New user:",e.toKey());const t=await ks(n.localStore,e);n.currentUser=e,function(t,e){t.Bo.forEach(t=>{t.forEach(t=>{t.reject(new T(E.CANCELLED,e))})}),t.Bo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await vi(n,t.Wn)}}function Ti(t,e){const n=v(t),s=n.Fo.get(e);if(s&&s.Co)return Ze().add(s.key);{let t=Ze();const s=n.ko.get(e);if(!s)return t;for(const e of s){const s=n.xo.get(e);t=t.unionWith(s.view.Eo)}return t}}function bi(t){const e=v(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ai.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ti.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ui.bind(null,e),e.No.Er=zr.bind(null,e.eventManager),e.No.jo=Qr.bind(null,e.eventManager),e}function Ii(t){const e=v(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=hi.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=li.bind(null,e),e}class Si{constructor(){this.synchronizeTabs=!1}async initialize(t){this.N=sr(t.databaseInfo.databaseId),this.sharedClientState=this.Wo(t),this.persistence=this.Go(t),await this.persistence.start(),this.gcScheduler=this.zo(t),this.localStore=this.Ho(t)}zo(t){return null}Ho(t){return Cs(this.persistence,new _s,t.initialUser,this.N)}Go(t){return new $s(Qs.Ns,this.N)}Wo(t){return new Xs}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ai{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>ci(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ei.bind(null,this.syncEngine),await Or(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Gr}createDatastore(t){const e=sr(t.databaseInfo.databaseId),n=(s=t.databaseInfo,new er(s));var s;return function(t,e,n){return new cr(t,e,n)}(t.credentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,s=t.asyncQueue,r=t=>ci(this.syncEngine,t,0),i=Js.bt()?new Js:new Ys,new hr(e,n,s,r,i);var e,n,s,r,i}createSyncEngine(t,e){return function(t,e,n,s,r,i,o){const a=new ni(t,e,n,s,r,i);return o&&(a.qo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=v(t);f("RemoteStore","RemoteStore shutting down."),e.Kr.add(5),await dr(e),e.Qr.shutdown(),e.Wr.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ni{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Yo(this.observer.next,t)}error(t){this.observer.error?this.Yo(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Xo(){this.muted=!0}Yo(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _i{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new T(E.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const e=await async function(t,e){const n=v(t),s=An(n.N)+"/documents",r={documents:e.map(t=>Tn(n.N,t))},i=await n.Ki("BatchGetDocuments",s,r),o=new Map;i.forEach(t=>{const e=Dn(n.N,t);o.set(e.key.toString(),e)});const a=[];return e.forEach(t=>{const e=o.get(t.toString());w(!!e),a.push(e)}),a}(this.datastore,t);return e.forEach(t=>this.recordVersion(t)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(t){this.lastWriteError=t}this.writtenDocs.add(t.toString())}delete(t){this.write(new Me(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((t,e)=>{const n=tt.fromPath(e);this.mutations.push(new Oe(n,this.precondition(n)))}),await async function(t,e){const n=v(t),s=An(n.N)+"/documents",r={writes:e.map(t=>kn(n.N,t))};await n.Li("Commit",s,r)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw y();e=M.min()}const n=this.readVersions.get(t.key.toString());if(n){if(!e.isEqual(n))throw new T(E.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?Te.updateTime(e):Te.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(M.min()))throw new T(E.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Te.updateTime(e)}return Te.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(t,e,n,s){this.asyncQueue=t,this.datastore=e,this.updateFunction=n,this.deferred=s,this.aa=5,this.rr=new rr(this.asyncQueue,"transaction_retry")}run(){this.aa-=1,this.ca()}ca(){this.rr.Xi(async()=>{const t=new _i(this.datastore),e=this.ua(t);e&&e.then(e=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(e)}).catch(t=>{this.ha(t)}))}).catch(t=>{this.ha(t)})})}ua(t){try{const e=this.updateFunction(t);return!Y(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}ha(t){this.aa>0&&this.la(t)?(this.aa-=1,this.asyncQueue.enqueueAndForget(()=>(this.ca(),Promise.resolve()))):this.deferred.reject(t)}la(t){if("FirebaseError"===t.name){const e=t.code;return"aborted"===e||"failed-precondition"===e||!Ue(e)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(t,e,n){this.credentials=t,this.asyncQueue=e,this.databaseInfo=n,this.user=u.UNAUTHENTICATED,this.clientId=k.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(e,async t=>{f("FirestoreClient","Received user=",t.uid),await this.credentialListener(t),this.user=t})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.credentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new b;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),t.resolve()}catch(e){const n=Ur(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function ki(t,e){t.asyncQueue.verifyOperationInProgress(),f("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async t=>{s.isEqual(t)||(await ks(e.localStore,t),s=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Ri(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Li(t);f("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(t=>async function(t,e){const n=v(t);n.asyncQueue.verifyOperationInProgress(),f("RemoteStore","RemoteStore received new credentials");const s=vr(n);n.Kr.add(3),await dr(n),s&&n.Wr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Kr.delete(3),await lr(n)}(e.remoteStore,t)),t.onlineComponents=e}async function Li(t){return t.offlineComponents||(f("FirestoreClient","Using default OfflineComponentProvider"),await ki(t,new Si)),t.offlineComponents}async function xi(t){return t.onlineComponents||(f("FirestoreClient","Using default OnlineComponentProvider"),await Ri(t,new Ai)),t.onlineComponents}function Mi(t){return xi(t).then(t=>t.syncEngine)}async function Oi(t){const e=await xi(t),n=e.eventManager;return n.onListen=si.bind(null,e.syncEngine),n.onUnlisten=ii.bind(null,e.syncEngine),n}function Vi(t,e,n={}){const s=new b;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,s,r){const i=new Ni({next:i=>{e.enqueueAndForget(()=>$r(t,o));const a=i.docs.has(n);!a&&i.fromCache?r.reject(new T(E.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&i.fromCache&&s&&"server"===s.source?r.reject(new T(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):r.resolve(i)},error:t=>r.reject(t)}),o=new Xr(Bt(n.path),i,{includeMetadataChanges:!0,uo:!0});return Hr(t,o)}(await Oi(t),t.asyncQueue,e,n,s)),s.promise}function Fi(t,e,n={}){const s=new b;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,s,r){const i=new Ni({next:n=>{e.enqueueAndForget(()=>$r(t,o)),n.fromCache&&"server"===s.source?r.reject(new T(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):r.resolve(n)},error:t=>r.reject(t)}),o=new Xr(n,i,{includeMetadataChanges:!0,uo:!0});return Hr(t,o)}(await Oi(t),t.asyncQueue,e,n,s)),s.promise}function Pi(t,e){const n=new b;return t.asyncQueue.enqueueAndForget(async()=>{const s=await function(t){return xi(t).then(t=>t.datastore)}(t);new Di(t.asyncQueue,s,e,n).run()}),n.promise}class Ui{constructor(t,e,n,s,r,i,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=r,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class qi{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof qi&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(t,e,n){if(!n)throw new T(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Ki(t,e,n,s){if(!0===e&&!0===s)throw new T(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Gi(t){if(!tt.isDocumentKey(t))throw new T(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Hi(t){if(tt.isDocumentKey(t))throw new T(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function $i(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=t.substring(0,20)+"..."),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":y()}function zi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new T(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=$i(t);throw new T(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function Qi(t,e){if(e<=0)throw new T(E.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new T(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new T(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Ki("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(t,e){this._credentials=e,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wi({}),this._settingsFrozen=!1,t instanceof qi?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new T(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qi(t.options.projectId)}(t))}get app(){if(!this._app)throw new T(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new T(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wi(t),void 0!==t.credentials&&(this._credentials=function(t){if(!t)return new S;switch(t.type){case"gapi":const e=t.client;return w(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new _(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new T(E.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=ji.get(t);e&&(f("ComponentProvider","Removing Datastore"),ji.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yi{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zi(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Yi(this.firestore,t,this._key)}}class Ji{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Ji(this.firestore,t,this._query)}}class Zi extends Ji{constructor(t,e,n){super(t,e,Bt(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Yi(this.firestore,null,new tt(t))}withConverter(t){return new Zi(this.firestore,t,this._path)}}function to(t,e,...n){if(t=Object(o["i"])(t),Bi("collection","path",e),t instanceof Xi){const s=U.fromString(e,...n);return Hi(s),new Zi(t,null,s)}{if(!(t instanceof Yi||t instanceof Zi))throw new T(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(U.fromString(e,...n));return Hi(s),new Zi(t.firestore,null,s)}}function eo(t,e,...n){if(t=Object(o["i"])(t),1===arguments.length&&(e=k.I()),Bi("doc","path",e),t instanceof Xi){const s=U.fromString(e,...n);return Gi(s),new Yi(t,null,new tt(s))}{if(!(t instanceof Yi||t instanceof Zi))throw new T(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(U.fromString(e,...n));return Gi(s),new Yi(t.firestore,t instanceof Zi?t.converter:null,new tt(s))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class no{constructor(){this.fa=Promise.resolve(),this.da=[],this.wa=!1,this._a=[],this.ma=null,this.ga=!1,this.ya=!1,this.pa=[],this.rr=new rr(this,"async_queue_retry"),this.Ta=()=>{const t=nr();t&&f("AsyncQueue","Visibility state changed to "+t.visibilityState),this.rr.tr()};const t=nr();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Ta)}get isShuttingDown(){return this.wa}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Ea(),this.Ia(t)}enterRestrictedMode(t){if(!this.wa){this.wa=!0,this.ya=t||!1;const e=nr();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Ta)}}enqueue(t){if(this.Ea(),this.wa)return new Promise(()=>{});const e=new b;return this.Ia(()=>this.wa&&this.ya?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.da.push(t),this.Aa()))}async Aa(){if(0!==this.da.length){try{await this.da[0](),this.da.shift(),this.rr.reset()}catch(t){if(!ds(t))throw t;f("AsyncQueue","Operation failed with retryable error: "+t)}this.da.length>0&&this.rr.Xi(()=>this.Aa())}}Ia(t){const e=this.fa.then(()=>(this.ga=!0,t().catch(t=>{this.ma=t,this.ga=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw g("INTERNAL UNHANDLED ERROR: ",e),t}).then(t=>(this.ga=!1,t))));return this.fa=e,e}enqueueAfterDelay(t,e,n){this.Ea(),this.pa.indexOf(t)>-1&&(e=0);const s=Pr.createAndSchedule(this,t,e,n,t=>this.Ra(t));return this._a.push(s),s}Ea(){this.ma&&y()}verifyOperationInProgress(){}async ba(){let t;do{t=this.fa,await t}while(t!==this.fa)}Pa(t){for(const e of this._a)if(e.timerId===t)return!0;return!1}va(t){return this.ba().then(()=>{this._a.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this._a)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.ba()})}Va(t){this.pa.push(t)}Ra(t){const e=this._a.indexOf(t);this._a.splice(e,1)}}function so(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const s of e)if(s in n&&"function"==typeof n[s])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,["next","error","complete"])}class ro extends Xi{constructor(t,e){super(t,e),this.type="firestore",this._queue=new no,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||ao(this),this._firestoreClient.terminate()}}function io(t=Object(s["e"])()){return Object(s["b"])(t,"firestore").getImmediate()}function oo(t){return t._firestoreClient||ao(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ao(t){var e;const n=t._freezeSettings(),s=function(t,e,n,s){return new Ui(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Ci(t._credentials,t._queue,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class co{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new T(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new j(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class uo{constructor(t){this._byteString=t}static fromBase64String(t){try{return new uo(K.fromBase64String(t))}catch(t){throw new T(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new uo(K.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new T(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new T(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return R(this._lat,t._lat)||R(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo=/^__.*__$/;class go{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new ke(t,this.data,this.fieldMask,e,this.fieldTransforms):new Ce(t,this.data,e,this.fieldTransforms)}}class po{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new ke(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function mo(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw y()}}class yo{constructor(t,e,n,s,r,i){this.settings=t,this.databaseId=e,this.N=n,this.ignoreUndefinedProperties=s,void 0===r&&this.Sa(),this.fieldTransforms=r||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Da(){return this.settings.Da}Ca(t){return new yo(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Na(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.Ca({path:n,xa:!1});return s.ka(t),s}$a(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.Ca({path:n,xa:!1});return s.Sa(),s}Oa(t){return this.Ca({path:void 0,xa:!0})}Fa(t){return Mo(t,this.settings.methodName,this.settings.Ma||!1,this.path,this.settings.La)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}Sa(){if(this.path)for(let t=0;t<this.path.length;t++)this.ka(this.path.get(t))}ka(t){if(0===t.length)throw this.Fa("Document fields must not be empty");if(mo(this.Da)&&fo.test(t))throw this.Fa('Document fields cannot begin and end with "__"')}}class wo{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.N=n||sr(t)}Ba(t,e,n,s=!1){return new yo({Da:t,methodName:e,La:n,path:j.emptyPath(),xa:!1,Ma:s},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function vo(t){const e=t._freezeSettings(),n=sr(t._databaseId);return new wo(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Eo(t,e,n,s,r,i={}){const o=t.Ba(i.merge||i.mergeFields?2:0,e,n,r);ko("Data must be an object, but it was:",o,s);const a=Do(s,o);let c,u;if(i.merge)c=new B(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const t=[];for(const s of i.mergeFields){const r=Ro(e,s,n);if(!o.contains(r))throw new T(E.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);Oo(t,r)||t.push(r)}c=new B(t),u=o.fieldTransforms.filter(t=>c.covers(t.field))}else c=null,u=o.fieldTransforms;return new go(new pt(a),c,u)}class To extends ho{_toFieldTransform(t){if(2!==t.Da)throw 1===t.Da?t.Fa(this._methodName+"() can only appear at the top level of your update data"):t.Fa(this._methodName+"() cannot be used with set() unless you pass {merge:true}");return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof To}}function bo(t,e,n){return new yo({Da:3,La:e.settings.La,methodName:t._methodName,xa:n},e.databaseId,e.N,e.ignoreUndefinedProperties)}class Io extends ho{constructor(t,e){super(t),this.Ua=e}_toFieldTransform(t){const e=bo(this,t,!0),n=this.Ua.map(t=>_o(t,e)),s=new le(n);return new we(t.path,s)}isEqual(t){return this===t}}function So(t,e,n,s){const r=t.Ba(1,e,n);ko("Data must be an object, but it was:",r,s);const i=[],a=pt.empty();V(s,(t,s)=>{const c=xo(e,t,n);s=Object(o["i"])(s);const u=r.$a(c);if(s instanceof To)i.push(c);else{const t=_o(s,u);null!=t&&(i.push(c),a.set(c,t))}});const c=new B(i);return new po(a,c,r.fieldTransforms)}function Ao(t,e,n,s,r,i){const a=t.Ba(1,e,n),c=[Ro(e,s,n)],u=[r];if(i.length%2!=0)throw new T(E.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let o=0;o<i.length;o+=2)c.push(Ro(e,i[o])),u.push(i[o+1]);const h=[],l=pt.empty();for(let f=c.length-1;f>=0;--f)if(!Oo(h,c[f])){const t=c[f];let e=u[f];e=Object(o["i"])(e);const n=a.$a(t);if(e instanceof To)h.push(t);else{const s=_o(e,n);null!=s&&(h.push(t),l.set(t,s))}}const d=new B(h);return new po(l,d,a.fieldTransforms)}function No(t,e,n,s=!1){return _o(n,t.Ba(s?4:3,e))}function _o(t,e){if(Co(t=Object(o["i"])(t)))return ko("Unsupported field value:",e,t),Do(t,e);if(t instanceof ho)return function(t,e){if(!mo(e.Da))throw e.Fa(t._methodName+"() can only be used with update() and set()");if(!e.path)throw e.Fa(t._methodName+"() is not currently supported inside arrays");const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xa&&4!==e.Da)throw e.Fa("Nested arrays are not supported");return function(t,e){const n=[];let s=0;for(const r of t){let t=_o(r,e.Oa(s));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),s++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Object(o["i"])(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return ie(e.N,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=x.fromDate(t);return{timestampValue:pn(e.N,n)}}if(t instanceof x){const n=new x(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:pn(e.N,n)}}if(t instanceof lo)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof uo)return{bytesValue:mn(e.N,t._byteString)};if(t instanceof Yi){const n=e.databaseId,s=t.firestore._databaseId;if(!s.isEqual(n))throw e.Fa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:vn(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.Fa("Unsupported field value: "+$i(t))}(t,e)}function Do(t,e){const n={};return F(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):V(t,(t,s)=>{const r=_o(s,e.Na(t));null!=r&&(n[t]=r)}),{mapValue:{fields:n}}}function Co(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof x||t instanceof lo||t instanceof uo||t instanceof Yi||t instanceof ho)}function ko(t,e,n){if(!Co(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const s=$i(n);throw"an object"===s?e.Fa(t+" a custom object"):e.Fa(t+" "+s)}}function Ro(t,e,n){if((e=Object(o["i"])(e))instanceof co)return e._internalPath;if("string"==typeof e)return xo(t,e);throw Mo("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const Lo=new RegExp("[~\\*/\\[\\]]");function xo(t,e,n){if(e.search(Lo)>=0)throw Mo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new co(...e.split("."))._internalPath}catch(s){throw Mo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Mo(t,e,n,s,r){const i=s&&!s.isEmpty(),o=void 0!==r;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=" in field "+s),o&&(c+=" in document "+r),c+=")"),new T(E.INVALID_ARGUMENT,a+t+c)}function Oo(t,e){return t.some(t=>t.isEqual(e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(t,e,n,s,r){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Yi(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Fo(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Po("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Fo extends Vo{data(){return super.data()}}function Po(t,e){return"string"==typeof e?xo(t,e):e instanceof co?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class qo extends Vo{constructor(t,e,n,s,r,i){super(t,e,n,s,i),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new jo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Po("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class jo extends qo{data(t={}){return super.data(t)}}class Bo{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Uo(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new jo(this._firestore,this._userDataWriter,n.key,n,new Uo(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new T(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(n=>({type:"added",doc:new jo(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Uo(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const s=new jo(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Uo(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let r=-1,i=-1;return 0!==e.type&&(r=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),i=n.indexOf(e.doc.key)),{type:Ko(e.type),doc:s,oldIndex:r,newIndex:i}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Ko(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return y()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Go(t){if(Gt(t)&&0===t.explicitOrderBy.length)throw new T(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ho{}function $o(t,...e){for(const n of e)t=n._apply(t);return t}class zo extends Ho{constructor(t,e,n){super(),this.Ka=t,this.ja=e,this.Qa=n,this.type="where"}_apply(t){const e=vo(t.firestore),n=function(t,e,n,s,r,i,o){let a;if(r.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new T(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${i}' queries on FieldPath.documentId().`);if("in"===i||"not-in"===i){ta(o,i);const e=[];for(const n of o)e.push(Zo(s,t,n));a={arrayValue:{values:e}}}else a=Zo(s,t,o)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||ta(o,i),a=No(n,e,o,"in"===i||"not-in"===i);const c=St.create(r,i,a);return function(t,e){if(e.v()){const n=$t(t);if(null!==n&&!n.isEqual(e.field))throw new T(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);const s=Ht(t);null!==s&&ea(t,e.field,s)}const n=function(t,e){for(const n of t.filters)if(e.indexOf(n.op)>=0)return n.op;return null}(t,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new T(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new T(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}(t,c),c}(t._query,"where",e,t.firestore._databaseId,this.Ka,this.ja,this.Qa);return new Ji(t.firestore,t.converter,function(t,e){const n=t.filters.concat([e]);return new qt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}}function Qo(t,e,n){const s=e,r=Po("where",t);return new zo(r,s,n)}class Wo extends Ho{constructor(t,e){super(),this.Ka=t,this.Wa=e,this.type="orderBy"}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new T(E.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new T(E.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const s=new Vt(e,n);return function(t,e){if(null===Ht(t)){const n=$t(t);null!==n&&ea(t,n,e.field)}}(t,s),s}(t._query,this.Ka,this.Wa);return new Ji(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new qt(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function Xo(t,e="asc"){const n=e,s=Po("orderBy",t);return new Wo(s,n)}class Yo extends Ho{constructor(t,e,n){super(),this.type=t,this.Ga=e,this.za=n}_apply(t){return new Ji(t.firestore,t.converter,Xt(t._query,this.Ga,this.za))}}function Jo(t){return Qi("limit",t),new Yo("limit",t,"F")}function Zo(t,e,n){if("string"==typeof(n=Object(o["i"])(n))){if(""===n)throw new T(E.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!zt(e)&&-1!==n.indexOf("/"))throw new T(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(U.fromString(n));if(!tt.isDocumentKey(s))throw new T(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return ct(t,new tt(s))}if(n instanceof Yi)return ct(t,n._key);throw new T(E.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${$i(n)}.`)}function ta(t,e){if(!Array.isArray(t)||0===t.length)throw new T(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new T(E.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function ea(t,e,n){if(!n.isEqual(e))throw new T(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{convertValue(t,e="none"){switch(et(t)){case 0:return null;case 1:return t.booleanValue;case 2:return $(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(z(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw y()}}convertObject(t,e){const n={};return V(t.fields,(t,s)=>{n[t]=this.convertValue(s,e)}),n}convertGeoPoint(t){return new lo($(t.latitude),$(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=W(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(X(t));default:return null}}convertTimestamp(t){const e=H(t);return new x(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=U.fromString(t);w($n(n));const s=new qi(n.get(1),n.get(3)),r=new tt(n.popFirst(5));return s.isEqual(e)||g(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class ra extends na{constructor(t){super(),this.firestore=t}convertBytes(t){return new uo(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Yi(this.firestore,null,e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(t,e){if((t=Object(o["i"])(t)).firestore!==e)throw new T(E.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(t){t=zi(t,Yi);const e=zi(t.firestore,ro);return Vi(oo(e),t._key).then(n=>pa(e,t,n))}class aa extends na{constructor(t){super(),this.firestore=t}convertBytes(t){return new uo(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Yi(this.firestore,null,e)}}function ca(t){t=zi(t,Ji);const e=zi(t.firestore,ro),n=oo(e),s=new aa(e);return Go(t._query),Fi(n,t._query).then(n=>new Bo(e,s,t,n))}function ua(t,e,n){t=zi(t,Yi);const s=zi(t.firestore,ro),r=sa(t.converter,e,n);return ga(s,[Eo(vo(s),"setDoc",t._key,r,null!==t.converter,n).toMutation(t._key,Te.none())])}function ha(t,e,n,...s){t=zi(t,Yi);const r=zi(t.firestore,ro),i=vo(r);let a;return a="string"==typeof(e=Object(o["i"])(e))||e instanceof co?Ao(i,"updateDoc",t._key,e,n,s):So(i,"updateDoc",t._key,e),ga(r,[a.toMutation(t._key,Te.exists(!0))])}function la(t){return ga(zi(t.firestore,ro),[new Me(t._key,Te.none())])}function da(t,e){const n=zi(t.firestore,ro),s=eo(t),r=sa(t.converter,e);return ga(n,[Eo(vo(t.firestore),"addDoc",s._key,r,null!==t.converter,{}).toMutation(s._key,Te.exists(!1))]).then(()=>s)}function fa(t,...e){var n,s,r;t=Object(o["i"])(t);let i={includeMetadataChanges:!1},a=0;"object"!=typeof e[a]||so(e[a])||(i=e[a],a++);const c={includeMetadataChanges:i.includeMetadataChanges};if(so(e[a])){const t=e[a];e[a]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[a+1]=null===(s=t.error)||void 0===s?void 0:s.bind(t),e[a+2]=null===(r=t.complete)||void 0===r?void 0:r.bind(t)}let u,h,l;if(t instanceof Yi)h=zi(t.firestore,ro),l=Bt(t._key.path),u={next:n=>{e[a]&&e[a](pa(h,t,n))},error:e[a+1],complete:e[a+2]};else{const n=zi(t,Ji);h=zi(n.firestore,ro),l=n._query;const s=new aa(h);u={next:t=>{e[a]&&e[a](new Bo(h,s,n,t))},error:e[a+1],complete:e[a+2]},Go(t._query)}return function(t,e,n,s){const r=new Ni(s),i=new Xr(e,r,n);return t.asyncQueue.enqueueAndForget(async()=>Hr(await Oi(t),i)),()=>{r.Xo(),t.asyncQueue.enqueueAndForget(async()=>$r(await Oi(t),i))}}(oo(h),l,c,u)}function ga(t,e){return function(t,e){const n=new b;return t.asyncQueue.enqueueAndForget(async()=>oi(await Mi(t),e,n)),n.promise}(oo(t),e)}function pa(t,e,n){const s=n.docs.get(e._key),r=new aa(t);return new qo(t,r,e._key,s,new Uo(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma extends class{constructor(t,e){this._firestore=t,this._transaction=e,this._dataReader=vo(t)}get(t){const e=ia(t,this._firestore),n=new ra(this._firestore);return this._transaction.lookup([e._key]).then(t=>{if(!t||1!==t.length)return y();const s=t[0];if(s.isFoundDocument())return new Vo(this._firestore,n,s.key,s,e.converter);if(s.isNoDocument())return new Vo(this._firestore,n,e._key,null,e.converter);throw y()})}set(t,e,n){const s=ia(t,this._firestore),r=sa(s.converter,e,n),i=Eo(this._dataReader,"Transaction.set",s._key,r,null!==s.converter,n);return this._transaction.set(s._key,i),this}update(t,e,n,...s){const r=ia(t,this._firestore);let i;return i="string"==typeof(e=Object(o["i"])(e))||e instanceof co?Ao(this._dataReader,"Transaction.update",r._key,e,n,s):So(this._dataReader,"Transaction.update",r._key,e),this._transaction.update(r._key,i),this}delete(t){const e=ia(t,this._firestore);return this._transaction.delete(e._key),this}}{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=ia(t,this._firestore),n=new aa(this._firestore);return super.get(t).then(t=>new qo(this._firestore,n,e._key,t._document,new Uo(!1,!1),e.converter))}}function ya(t,e){return Pi(oo(t),n=>e(new ma(t,n)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(...t){return new Io("arrayUnion",t)}var va;!function(t){h=t}(s["a"]),Object(s["c"])(new r["a"]("firestore",(t,{options:e})=>{const n=t.getProvider("app").getImmediate(),s=new ro(n,new A(t.getProvider("auth-internal")));return e=Object.assign({useFetchStreams:!0},e),s._setSettings(e),s},"PUBLIC")),Object(s["g"])(c,"3.1.1",va),Object(s["g"])(c,"3.1.1","esm2017")}).call(this,n("4362"))},"1da1":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("d3b7");function s(t,e,n,s,r,i,o){try{var a=t[i](o),c=a.value}catch(u){return void n(u)}a.done?e(c):Promise.resolve(c).then(s,r)}function r(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function a(t){s(o,r,i,a,c,"next",t)}function c(t){s(o,r,i,a,c,"throw",t)}a(void 0)}))}}},"8f6b":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return Ds})),n.d(e,"b",(function(){return ks})),n.d(e,"c",(function(){return Cs})),n.d(e,"d",(function(){return Ls})),n.d(e,"e",(function(){return Rs})),n.d(e,"f",(function(){return xs})),n.d(e,"g",(function(){return Ms})),n.d(e,"h",(function(){return Ns})),n.d(e,"i",(function(){return _s}));var s,r="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t?t:"undefined"!==typeof self?self:{},i={},o=o||{},a=r||self;function c(){}function u(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function h(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function l(t){return Object.prototype.hasOwnProperty.call(t,d)&&t[d]||(t[d]=++f)}var d="closure_uid_"+(1e9*Math.random()>>>0),f=0;function g(t,e,n){return t.call.apply(t.bind,arguments)}function p(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function m(t,e,n){return m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g:p,m.apply(null,arguments)}function y(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function w(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,s){for(var r=Array(arguments.length-2),i=2;i<arguments.length;i++)r[i-2]=arguments[i];return e.prototype[n].apply(t,r)}}function v(){this.s=this.s,this.o=this.o}var E=0,T={};v.prototype.s=!1,v.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=E)){var t=l(this);delete T[t]}},v.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const b=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},I=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,r="string"===typeof t?t.split(""):t;for(let i=0;i<s;i++)i in r&&e.call(n,r[i],i,t)};function S(t){t:{var e=Bn;const n=t.length,s="string"===typeof t?t.split(""):t;for(let r=0;r<n;r++)if(r in s&&e.call(void 0,s[r],r,t)){e=r;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function A(t){return Array.prototype.concat.apply([],arguments)}function N(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function _(t){return/^[\s\xa0]*$/.test(t)}var D,C=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function k(t,e){return-1!=t.indexOf(e)}function R(t,e){return t<e?-1:t>e?1:0}t:{var L=a.navigator;if(L){var x=L.userAgent;if(x){D=x;break t}}D=""}function M(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function O(t){const e={};for(const n in t)e[n]=t[n];return e}var V="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function F(t,e){let n,s;for(let r=1;r<arguments.length;r++){for(n in s=arguments[r],s)t[n]=s[n];for(let e=0;e<V.length;e++)n=V[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function P(t){return P[" "](t),t}function U(t){var e=J;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}P[" "]=c;var q,j=k(D,"Opera"),B=k(D,"Trident")||k(D,"MSIE"),K=k(D,"Edge"),G=K||B,H=k(D,"Gecko")&&!(k(D.toLowerCase(),"webkit")&&!k(D,"Edge"))&&!(k(D,"Trident")||k(D,"MSIE"))&&!k(D,"Edge"),$=k(D.toLowerCase(),"webkit")&&!k(D,"Edge");function z(){var t=a.document;return t?t.documentMode:void 0}t:{var Q="",W=function(){var t=D;return H?/rv:([^\);]+)(\)|;)/.exec(t):K?/Edge\/([\d\.]+)/.exec(t):B?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):$?/WebKit\/(\S+)/.exec(t):j?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(W&&(Q=W?W[1]:""),B){var X=z();if(null!=X&&X>parseFloat(Q)){q=String(X);break t}}q=Q}var Y,J={};function Z(){return U((function(){let t=0;const e=C(String(q)).split("."),n=C("9").split("."),s=Math.max(e.length,n.length);for(let o=0;0==t&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],0==r[0].length&&0==i[0].length)break;t=R(0==r[1].length?0:parseInt(r[1],10),0==i[1].length?0:parseInt(i[1],10))||R(0==r[2].length,0==i[2].length)||R(r[2],i[2]),r=r[3],i=i[3]}while(0==t)}return 0<=t}))}if(a.document&&B){var tt=z();Y=tt||(parseInt(q,10)||void 0)}else Y=void 0;var et=Y,nt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{a.addEventListener("test",c,e),a.removeEventListener("test",c,e)}catch(n){}return t}();function st(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function rt(t,e){if(st.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(H){t:{try{P(e.nodeName);var r=!0;break t}catch(i){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:it[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&rt.Z.h.call(this)}}st.prototype.h=function(){this.defaultPrevented=!0},w(rt,st);var it={2:"touch",3:"pen",4:"mouse"};rt.prototype.h=function(){rt.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ot="closure_listenable_"+(1e6*Math.random()|0),at=0;function ct(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=r,this.key=++at,this.ca=this.fa=!1}function ut(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function ht(t){this.src=t,this.g={},this.h=0}function lt(t,e){var n=e.type;if(n in t.g){var s,r=t.g[n],i=b(r,e);(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(ut(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function dt(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==s)return r}return-1}ht.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=dt(t,e,s,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new ct(e,this.src,i,!!s,r),e.fa=n,t.push(e)),e};var ft="closure_lm_"+(1e6*Math.random()|0),gt={};function pt(t,e,n,s,r){if(s&&s.once)return wt(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)pt(t,e[i],n,s,r);return null}return n=At(n),t&&t[ot]?t.N(e,n,h(s)?!!s.capture:!!s,r):mt(t,e,n,!1,s,r)}function mt(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=h(r)?!!r.capture:!!r,a=It(t);if(a||(t[ft]=a=new ht(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=yt(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)nt||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Tt(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}function yt(){function t(n){return e.call(t.src,t.listener,n)}var e=bt;return t}function wt(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)wt(t,e[i],n,s,r);return null}return n=At(n),t&&t[ot]?t.O(e,n,h(s)?!!s.capture:!!s,r):mt(t,e,n,!0,s,r)}function vt(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)vt(t,e[i],n,s,r);else s=h(s)?!!s.capture:!!s,n=At(n),t&&t[ot]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=dt(i,n,s,r),-1<n&&(ut(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete t.g[e],t.h--)))):t&&(t=It(t))&&(e=t.g[e.toString()],t=-1,e&&(t=dt(e,n,s,r)),(n=-1<t?e[t]:null)&&Et(n))}function Et(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[ot])lt(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Tt(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=It(e))?(lt(n,t),0==n.h&&(n.src=null,e[ft]=null)):ut(t)}}}function Tt(t){return t in gt?gt[t]:gt[t]="on"+t}function bt(t,e){if(t.ca)t=!0;else{e=new rt(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&Et(t),t=n.call(s,e)}return t}function It(t){return t=t[ft],t instanceof ht?t:null}var St="__closure_events_fn_"+(1e9*Math.random()>>>0);function At(t){return"function"===typeof t?t:(t[St]||(t[St]=function(e){return t.handleEvent(e)}),t[St])}function Nt(){v.call(this),this.i=new ht(this),this.P=this,this.I=null}function _t(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,"string"===typeof e)e=new st(e,t);else if(e instanceof st)e.target=e.target||t;else{var r=e;e=new st(s,t),F(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Dt(o,s,!0,e)&&r}if(o=e.g=t,r=Dt(o,s,!0,e)&&r,r=Dt(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Dt(o,s,!1,e)&&r}function Dt(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&lt(t.i,o),r=!1!==a.call(c,s)&&r}}return r&&!s.defaultPrevented}w(Nt,v),Nt.prototype[ot]=!0,Nt.prototype.removeEventListener=function(t,e,n,s){vt(this,t,e,n,s)},Nt.prototype.M=function(){if(Nt.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)ut(n[s]);delete e.g[t],e.h--}}this.I=null},Nt.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},Nt.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};var Ct=a.JSON.stringify;function kt(){var t=Ut;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Rt{constructor(){this.h=this.g=null}add(t,e){const n=xt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Lt,xt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Mt,t=>t.reset());class Mt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Ot(t){a.setTimeout(()=>{throw t},0)}function Vt(t,e){Lt||Ft(),Pt||(Lt(),Pt=!0),Ut.add(t,e)}function Ft(){var t=a.Promise.resolve(void 0);Lt=function(){t.then(qt)}}var Pt=!1,Ut=new Rt;function qt(){for(var t;t=kt();){try{t.h.call(t.g)}catch(n){Ot(n)}var e=xt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Pt=!1}function jt(t,e){Nt.call(this),this.h=t||1,this.g=e||a,this.j=m(this.kb,this),this.l=Date.now()}function Bt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Kt(t,e,n){if("function"===typeof t)n&&(t=m(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=m(t.handleEvent,t)}return 2147483647<Number(e)?-1:a.setTimeout(t,e||0)}function Gt(t){t.g=Kt(()=>{t.g=null,t.i&&(t.i=!1,Gt(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}w(jt,Nt),s=jt.prototype,s.da=!1,s.S=null,s.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),_t(this,"tick"),this.da&&(Bt(this),this.start()))}},s.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},s.M=function(){jt.Z.M.call(this),Bt(this),delete this.g};class Ht extends v{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Gt(this)}M(){super.M(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $t(t){v.call(this),this.h=t,this.g={}}w($t,v);var zt=[];function Qt(t,e,n,s){Array.isArray(n)||(n&&(zt[0]=n.toString()),n=zt);for(var r=0;r<n.length;r++){var i=pt(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Wt(t){M(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Et(t)}),t),t.g={}}function Xt(){this.g=!0}function Yt(t,e,n,s,r,i){t.info((function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&"type"==l[1]?o+(h+"=")+u+"&":o+(h+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}function Jt(t,e,n,s,r,i,o){t.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+i+" "+o}))}function Zt(t,e,n,s){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+ee(t,n)+(s?" "+s:"")}))}function te(t,e){t.info((function(){return"TIMEOUT: "+e}))}function ee(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<r.length;o++)r[o]=""}}}return Ct(n)}catch(a){return e}}$t.prototype.M=function(){$t.Z.M.call(this),Wt(this)},$t.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Xt.prototype.Aa=function(){this.g=!1},Xt.prototype.info=function(){};var ne={},se=null;function re(){return se=se||new Nt}function ie(t){st.call(this,ne.Ma,t)}function oe(t){const e=re();_t(e,new ie(e,t))}function ae(t,e){st.call(this,ne.STAT_EVENT,t),this.stat=e}function ce(t){const e=re();_t(e,new ae(e,t))}function ue(t,e){st.call(this,ne.Na,t),this.size=e}function he(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){t()}),e)}ne.Ma="serverreachability",w(ie,st),ne.STAT_EVENT="statevent",w(ae,st),ne.Na="timingevent",w(ue,st);var le={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},de={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function fe(){}function ge(t){return t.h||(t.h=t.i())}function pe(){}fe.prototype.h=null;var me,ye={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function we(){st.call(this,"d")}function ve(){st.call(this,"c")}function Ee(){}function Te(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new $t(this),this.P=Ie,t=G?125:void 0,this.W=new jt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new be}function be(){this.i=null,this.g="",this.h=!1}w(we,st),w(ve,st),w(Ee,fe),Ee.prototype.g=function(){return new XMLHttpRequest},Ee.prototype.i=function(){return{}},me=new Ee;var Ie=45e3,Se={},Ae={};function Ne(t,e,n){t.K=1,t.v=Ye(He(e)),t.s=n,t.U=!0,_e(t,null)}function _e(t,e){t.F=Date.now(),Re(t),t.A=He(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),fn(n.h,"t",s),t.C=0,n=t.l.H,t.h=new be,t.g=vs(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Ht(m(t.Ia,t,t.g),t.O)),Qt(t.V,t.g,"readystatechange",t.gb),e=t.H?O(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),oe(1),Yt(t.j,t.u,t.A,t.m,t.X,t.s)}function De(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Ce(t,e,n){let s,r=!0;for(;!t.I&&t.C<n.length;){if(s=ke(t,n),s==Ae){4==e&&(t.o=4,ce(14),r=!1),Zt(t.j,t.m,null,"[Incomplete Response]");break}if(s==Se){t.o=4,ce(15),Zt(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}Zt(t.j,t.m,s,null),Ve(t,s)}De(t)&&s!=Ae&&s!=Se&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ce(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),ls(e),e.L=!0,ce(11))):(Zt(t.j,t.m,n,"[Invalid Chunked Response]"),Oe(t),Me(t))}function ke(t,e){var n=t.C,s=e.indexOf("\n",n);return-1==s?Ae:(n=Number(e.substring(n,s)),isNaN(n)?Se:(s+=1,s+n>e.length?Ae:(e=e.substr(s,n),t.C=s+n,e)))}function Re(t){t.Y=Date.now()+t.P,Le(t,t.P)}function Le(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=he(m(t.eb,t),e)}function xe(t){t.B&&(a.clearTimeout(t.B),t.B=null)}function Me(t){0==t.l.G||t.I||gs(t.l,t)}function Oe(t){xe(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Bt(t.W),Wt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ve(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Tn(n.i,t)))if(n.I=t.N,!t.J&&Tn(n.i,t)&&3==n.G){try{var s=n.Ca.g.parse(e)}catch(u){s=null}if(Array.isArray(s)&&3==s.length){var r=s;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;fs(n),es(n)}hs(n),ce(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&0==n.A&&!n.v&&(n.v=he(m(n.ab,n),6e3));if(1>=En(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else ms(n,11)}else if((t.J||n.g==t)&&fs(n),!_(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const e=u[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const r=u[4];null!=r&&(n.za=r,n.h.info("SVER="+n.za));const h=u[5];null!=h&&"number"===typeof h&&0<h&&(s=1.5*h,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var i=s.i;!i.g&&(k(t,"spdy")||k(t,"quic")||k(t,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(bn(i,i.h),i.h=null))}if(s.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.sa=t,Xe(s.F,s.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=ws(s,s.H?s.la:null,s.W),o.J){In(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(xe(a),Re(a)),s.g=o}else us(s);0<n.l.length&&rs(n)}else"stop"!=u[0]&&"close"!=u[0]||ms(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?ms(n,7):ts(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}oe(4)}catch(u){}}function Fe(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(u(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}for(s in e=[],n=0,t)e[n++]=t[s];return e}function Pe(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(u(t)||"string"===typeof t)I(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(u(t)||"string"===typeof t){n=[];for(var s=t.length,r=0;r<s;r++)n.push(r)}else for(r in n=[],s=0,t)n[s++]=r;s=Fe(t),r=s.length;for(var i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}}function Ue(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof Ue)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}function qe(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];je(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)s=t.g[e],je(r,s)||(t.g[n++]=s,r[s]=1),e++;t.g.length=n}}function je(t,e){return Object.prototype.hasOwnProperty.call(t,e)}s=Te.prototype,s.setTimeout=function(t){this.P=t},s.gb=function(t){t=t.target;const e=this.L;e&&3==Qn(t)?e.l():this.Ia(t)},s.Ia=function(t){try{if(t==this.g)t:{const l=Qn(this.g);var e=this.g.Da();const d=this.g.ba();if(!(3>l)&&(3!=l||G||this.g&&(this.h.h||this.g.ga()||Wn(this.g)))){this.I||4!=l||7==e||oe(8==e||0>=d?3:2),xe(this);var n=this.g.ba();this.N=n;e:if(De(this)){var s=Wn(this.g);t="";var r=s.length,i=4==Qn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Oe(this),Me(this);var o="";break e}this.h.i=new a.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,Jt(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){e:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(c)){var h=c;break e}}h=null}if(!(n=h)){this.i=!1,this.o=3,ce(12),Oe(this),Me(this);break t}Zt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ve(this,n)}this.U?(Ce(this,l,o),G&&this.i&&3==l&&(Qt(this.V,this.W,"tick",this.fb),this.W.start())):(Zt(this.j,this.m,o,null),Ve(this,o)),4==l&&Oe(this),this.i&&!this.I&&(4==l?gs(this.l,this):(this.i=!1,Re(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ce(12)):(this.o=0,ce(13)),Oe(this),Me(this)}}}catch(l){}},s.fb=function(){if(this.g){var t=Qn(this.g),e=this.g.ga();this.C<e.length&&(xe(this),Ce(this,t,e),this.i&&4!=t&&Re(this))}},s.cancel=function(){this.I=!0,Oe(this)},s.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(te(this.j,this.A),2!=this.K&&(oe(3),ce(17)),Oe(this),this.o=2,Me(this)):Le(this,this.Y-t)},s=Ue.prototype,s.R=function(){qe(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},s.T=function(){return qe(this),this.g.concat()},s.get=function(t,e){return je(this.h,t)?this.h[t]:e},s.set=function(t,e){je(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},s.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var r=n[s],i=this.get(r);t.call(e,i,r,this)}};var Be=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ke(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Ge(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Ge){this.g=void 0!==e?e:t.g,$e(this,t.j),this.s=t.s,ze(this,t.i),Qe(this,t.m),this.l=t.l,e=t.h;var n=new un;n.i=e.i,e.g&&(n.g=new Ue(e.g),n.h=e.h),We(this,n),this.o=t.o}else t&&(n=String(t).match(Be))?(this.g=!!e,$e(this,n[1]||"",!0),this.s=tn(n[2]||""),ze(this,n[3]||"",!0),Qe(this,n[4]),this.l=tn(n[5]||"",!0),We(this,n[6]||"",!0),this.o=tn(n[7]||"")):(this.g=!!e,this.h=new un(null,this.g))}function He(t){return new Ge(t)}function $e(t,e,n){t.j=n?tn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ze(t,e,n){t.i=n?tn(e,!0):e}function Qe(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function We(t,e,n){e instanceof un?(t.h=e,pn(t.h,t.g)):(n||(e=en(e,an)),t.h=new un(e,t.g))}function Xe(t,e,n){t.h.set(e,n)}function Ye(t){return Xe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Je(t){return t instanceof Ge?He(t):new Ge(t,void 0)}function Ze(t,e,n,s){var r=new Ge(null,void 0);return t&&$e(r,t),e&&ze(r,e),n&&Qe(r,n),s&&(r.l=s),r}function tn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function en(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,nn),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function nn(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Ge.prototype.toString=function(){var t=[],e=this.j;e&&t.push(en(e,sn,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(en(e,sn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(en(n,"/"==n.charAt(0)?on:rn,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",en(n,cn)),t.join("")};var sn=/[#\/\?@]/g,rn=/[#\?:]/g,on=/[#\?]/g,an=/[#\?@]/g,cn=/#/g;function un(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function hn(t){t.g||(t.g=new Ue,t.h=0,t.i&&Ke(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function ln(t,e){hn(t),e=gn(t,e),je(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,je(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&qe(t)))}function dn(t,e){return hn(t),e=gn(t,e),je(t.g.h,e)}function fn(t,e,n){ln(t,e),0<n.length&&(t.i=null,t.g.set(gn(t,e),N(n)),t.h+=n.length)}function gn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function pn(t,e){e&&!t.j&&(hn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(ln(this,e),fn(this,n,t))}),t)),t.j=e}s=un.prototype,s.add=function(t,e){hn(this),this.i=null,t=gn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},s.forEach=function(t,e){hn(this),this.g.forEach((function(n,s){I(n,(function(n){t.call(e,n,s,this)}),this)}),this)},s.T=function(){hn(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var r=t[s],i=0;i<r.length;i++)n.push(e[s]);return n},s.R=function(t){hn(this);var e=[];if("string"===typeof t)dn(this,t)&&(e=A(e,this.g.get(gn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=A(e,t[n])}return e},s.set=function(t,e){return hn(this),this.i=null,t=gn(this,t),dn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},s.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},s.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;""!==s[i]&&(o+="="+encodeURIComponent(String(s[i]))),t.push(o)}}return this.i=t.join("&")};var mn=class{constructor(t,e){this.h=t,this.g=e}};function yn(t){this.l=t||wn,a.PerformanceNavigationTiming?(t=a.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(a.g&&a.g.Ea&&a.g.Ea()&&a.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var wn=10;function vn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function En(t){return t.h?1:t.g?t.g.size:0}function Tn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function bn(t,e){t.g?t.g.add(e):t.h=e}function In(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Sn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return N(t.i)}function An(){}function Nn(){this.g=new An}function _n(t,e,n){const s=n||"";try{Pe(t,(function(t,n){let r=t;h(t)&&(r=Ct(t)),e.push(s+n+"="+encodeURIComponent(r))}))}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function Dn(t,e){const n=new Xt;if(a.Image){const s=new Image;s.onload=y(Cn,n,s,"TestLoadImage: loaded",!0,e),s.onerror=y(Cn,n,s,"TestLoadImage: error",!1,e),s.onabort=y(Cn,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=y(Cn,n,s,"TestLoadImage: timeout",!1,e),a.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=t}else e(!1)}function Cn(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch(i){}}function kn(t){this.l=t.$b||null,this.j=t.ib||!1}function Rn(t,e){Nt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Ln,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}yn.prototype.cancel=function(){if(this.i=Sn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},An.prototype.stringify=function(t){return a.JSON.stringify(t,void 0)},An.prototype.parse=function(t){return a.JSON.parse(t,void 0)},w(kn,fe),kn.prototype.g=function(){return new Rn(this.l,this.j)},kn.prototype.i=function(t){return function(){return t}}({}),w(Rn,Nt);var Ln=0;function xn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Mn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,On(t)}function On(t){t.onreadystatechange&&t.onreadystatechange.call(t)}s=Rn.prototype,s.open=function(t,e){if(this.readyState!=Ln)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,On(this)},s.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||a).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},s.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Mn(this)),this.readyState=Ln},s.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,On(this)),this.g&&(this.readyState=3,On(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;xn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},s.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Mn(this):On(this),3==this.readyState&&xn(this)}},s.Ua=function(t){this.g&&(this.response=this.responseText=t,Mn(this))},s.Ta=function(t){this.g&&(this.response=t,Mn(this))},s.ha=function(){this.g&&Mn(this)},s.setRequestHeader=function(t,e){this.v.append(t,e)},s.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Rn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Vn=a.JSON.parse;function Fn(t){Nt.call(this),this.headers=new Ue,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Pn,this.K=this.L=!1}w(Fn,Nt);var Pn="",Un=/^https?$/i,qn=["POST","PUT"];function jn(t){return B&&Z()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Bn(t){return"content-type"==t.toLowerCase()}function Kn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Gn(t),$n(t)}function Gn(t){t.D||(t.D=!0,_t(t,"complete"),_t(t,"error"))}function Hn(t){if(t.h&&"undefined"!=typeof o&&(!t.C[1]||4!=Qn(t)||2!=t.ba()))if(t.v&&4==Qn(t))Kt(t.Fa,0,t);else if(_t(t,"readystatechange"),4==Qn(t)){t.h=!1;try{const o=t.ba();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===o){var r=String(t.H).match(Be)[1]||null;if(!r&&a.self&&a.self.location){var i=a.self.location.protocol;r=i.substr(0,i.length-1)}s=!Un.test(r?r.toLowerCase():"")}n=s}if(n)_t(t,"complete"),_t(t,"success");else{t.m=6;try{var c=2<Qn(t)?t.g.statusText:""}catch(u){c=""}t.j=c+" ["+t.ba()+"]",Gn(t)}}finally{$n(t)}}}function $n(t,e){if(t.g){zn(t);const s=t.g,r=t.C[0]?c:null;t.g=null,t.C=null,e||_t(t,"ready");try{s.onreadystatechange=r}catch(n){}}}function zn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(a.clearTimeout(t.A),t.A=null)}function Qn(t){return t.g?t.g.readyState:0}function Wn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Pn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Xn(t){let e="";return M(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Yn(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Xn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Xe(t,e,n))}function Jn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Zn(t){this.za=0,this.l=[],this.h=new Xt,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Jn("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Jn("baseRetryDelayMs",5e3,t),this.$a=Jn("retryDelaySeedMs",1e4,t),this.Ya=Jn("forwardChannelMaxRetries",2,t),this.ra=Jn("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new yn(t&&t.concurrentRequestLimit),this.Ca=new Nn,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function ts(t){if(ns(t),3==t.G){var e=t.V++,n=He(t.F);Xe(n,"SID",t.J),Xe(n,"RID",e),Xe(n,"TYPE","terminate"),as(t,n),e=new Te(t,t.h,e,void 0),e.K=2,e.v=Ye(He(n)),n=!1,a.navigator&&a.navigator.sendBeacon&&(n=a.navigator.sendBeacon(e.v.toString(),"")),!n&&a.Image&&((new Image).src=e.v,n=!0),n||(e.g=vs(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Re(e)}ys(t)}function es(t){t.g&&(ls(t),t.g.cancel(),t.g=null)}function ns(t){es(t),t.u&&(a.clearTimeout(t.u),t.u=null),fs(t),t.i.cancel(),t.m&&("number"===typeof t.m&&a.clearTimeout(t.m),t.m=null)}function ss(t,e){t.l.push(new mn(t.Za++,e)),3==t.G&&rs(t)}function rs(t){vn(t.i)||t.m||(t.m=!0,Vt(t.Ha,t),t.C=0)}function is(t,e){return!(En(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=he(m(t.Ha,t,e),ps(t,t.C)),t.C++,!0))}function os(t,e){var n;n=e?e.m:t.V++;const s=He(t.F);Xe(s,"SID",t.J),Xe(s,"RID",n),Xe(s,"AID",t.U),as(t,s),t.o&&t.s&&Yn(s,t.o,t.s),n=new Te(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=cs(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),bn(t.i,n),Ne(n,s,e)}function as(t,e){t.j&&Pe({},(function(t,n){Xe(e,n,t)}))}function cs(t,e,n){n=Math.min(t.l.length,n);var s=t.j?m(t.j.Oa,t.j,t):null;t:{var r=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=r[a].h;const c=r[a].g;if(n-=e,0>n)e=Math.max(0,r[a].h-100),o=!1;else try{_n(c,t,"req"+n+"_")}catch(i){s&&s(c)}}if(o){s=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,s}function us(t){t.g||t.u||(t.Y=1,Vt(t.Ga,t),t.A=0)}function hs(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=he(m(t.Ga,t),ps(t,t.A)),t.A++,!0)}function ls(t){null!=t.B&&(a.clearTimeout(t.B),t.B=null)}function ds(t){t.g=new Te(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=He(t.oa);Xe(e,"RID","rpc"),Xe(e,"SID",t.J),Xe(e,"CI",t.N?"0":"1"),Xe(e,"AID",t.U),as(t,e),Xe(e,"TYPE","xmlhttp"),t.o&&t.s&&Yn(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Ye(He(e)),n.s=null,n.U=!0,_e(n,t)}function fs(t){null!=t.v&&(a.clearTimeout(t.v),t.v=null)}function gs(t,e){var n=null;if(t.g==e){fs(t),ls(t),t.g=null;var s=2}else{if(!Tn(t.i,e))return;n=e.D,In(t.i,e),s=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==s){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=re(),_t(s,new ue(s,n,e,r)),rs(t)}else us(t);else if(r=e.o,3==r||0==r&&0<t.I||!(1==s&&is(t,e)||2==s&&hs(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:ms(t,5);break;case 4:ms(t,10);break;case 3:ms(t,6);break;default:ms(t,2)}}function ps(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function ms(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var s=m(t.jb,t);n||(n=new Ge("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||$e(n,"https"),Ye(n)),Dn(n.toString(),s)}else ce(2);t.G=0,t.j&&t.j.va(e),ys(t),ns(t)}function ys(t){t.G=0,t.I=-1,t.j&&(0==Sn(t.i).length&&0==t.l.length||(t.i.i.length=0,N(t.l),t.l.length=0),t.j.ua())}function ws(t,e,n){let s=Je(n);if(""!=s.i)e&&ze(s,e+"."+s.i),Qe(s,s.m);else{const t=a.location;s=Ze(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&M(t.aa,(function(t,e){Xe(s,e,t)})),e=t.D,n=t.sa,e&&n&&Xe(s,e,n),Xe(s,"VER",t.ma),as(t,s),s}function vs(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Fn(new kn({ib:!0})):new Fn(t.qa),e.L=t.H,e}function Es(){}function Ts(){if(B&&!(10<=Number(et)))throw Error("Environmental error: no available transport.")}function bs(t,e){Nt.call(this),this.g=new Zn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!_(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!_(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new As(this)}function Is(t){we.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Ss(){ve.call(this),this.status=1}function As(t){this.g=t}s=Fn.prototype,s.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():me.g(),this.C=this.u?ge(this.u):ge(me),this.g.onreadystatechange=m(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){return void Kn(this,i)}t=n||"";const r=new Ue(this.headers);s&&Pe(s,(function(t,e){r.set(e,t)})),s=S(r.T()),n=a.FormData&&t instanceof a.FormData,!(0<=b(qn,e))||s||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{zn(this),0<this.B&&((this.K=jn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=m(this.pa,this)):this.A=Kt(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Kn(this,i)}},s.pa=function(){"undefined"!=typeof o&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,_t(this,"timeout"),this.abort(8))},s.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,_t(this,"complete"),_t(this,"abort"),$n(this))},s.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),$n(this,!0)),Fn.Z.M.call(this)},s.Fa=function(){this.s||(this.F||this.v||this.l?Hn(this):this.cb())},s.cb=function(){Hn(this)},s.ba=function(){try{return 2<Qn(this)?this.g.status:-1}catch(t){return-1}},s.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},s.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Vn(e)}},s.Da=function(){return this.m},s.La=function(){return"string"===typeof this.j?this.j:String(this.j)},s=Zn.prototype,s.ma=8,s.G=1,s.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},s.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new Te(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=O(i),F(i,this.P)):i=this.P),null===this.o&&(r.H=i),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var s=this.l[n];if(s="__data__"in s.g&&(s=s.g.__data__,"string"===typeof s)?s.length:void 0,void 0===s)break;if(e+=s,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=cs(this,r,e),n=He(this.F),Xe(n,"RID",t),Xe(n,"CVER",22),this.D&&Xe(n,"X-HTTP-Session-Id",this.D),as(this,n),this.o&&i&&Yn(n,this.o,i),bn(this.i,r),this.Ra&&Xe(n,"TYPE","init"),this.ja?(Xe(n,"$req",e),Xe(n,"SID","null"),r.$=!0,Ne(r,n,null)):Ne(r,n,e),this.G=2}}else 3==this.G&&(t?os(this,t):0==this.l.length||vn(this.i)||os(this))},s.Ga=function(){if(this.u=null,ds(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=he(m(this.bb,this),t)}},s.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ce(10),es(this),ds(this))},s.ab=function(){null!=this.v&&(this.v=null,es(this),hs(this),ce(19))},s.jb=function(t){t?(this.h.info("Successfully pinged google.com"),ce(2)):(this.h.info("Failed to ping google.com"),ce(1))},s=Es.prototype,s.xa=function(){},s.wa=function(){},s.va=function(){},s.ua=function(){},s.Oa=function(){},Ts.prototype.g=function(t,e){return new bs(t,e)},w(bs,Nt),bs.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Vt(m(t.hb,t,e))),ce(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=ws(t,null,t.W),rs(t)},bs.prototype.close=function(){ts(this.g)},bs.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,ss(this.g,e)}else this.v?(e={},e.__data__=Ct(t),ss(this.g,e)):ss(this.g,t)},bs.prototype.M=function(){this.g.j=null,delete this.j,ts(this.g),delete this.g,bs.Z.M.call(this)},w(Is,we),w(Ss,ve),w(As,Es),As.prototype.xa=function(){_t(this.g,"a")},As.prototype.wa=function(t){_t(this.g,new Is(t))},As.prototype.va=function(t){_t(this.g,new Ss(t))},As.prototype.ua=function(){_t(this.g,"b")},Ts.prototype.createWebChannel=Ts.prototype.g,bs.prototype.send=bs.prototype.u,bs.prototype.open=bs.prototype.m,bs.prototype.close=bs.prototype.close,le.NO_ERROR=0,le.TIMEOUT=8,le.HTTP_ERROR=6,de.COMPLETE="complete",pe.EventType=ye,ye.OPEN="a",ye.CLOSE="b",ye.ERROR="c",ye.MESSAGE="d",Nt.prototype.listen=Nt.prototype.N,Fn.prototype.listenOnce=Fn.prototype.O,Fn.prototype.getLastError=Fn.prototype.La,Fn.prototype.getLastErrorCode=Fn.prototype.Da,Fn.prototype.getStatus=Fn.prototype.ba,Fn.prototype.getResponseJson=Fn.prototype.Qa,Fn.prototype.getResponseText=Fn.prototype.ga,Fn.prototype.send=Fn.prototype.ea;var Ns=i.createWebChannelTransport=function(){return new Ts},_s=i.getStatEventTarget=function(){return re()},Ds=i.ErrorCode=le,Cs=i.EventType=de,ks=i.Event=ne,Rs=i.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Ls=i.FetchXmlHttpFactory=kn,xs=i.WebChannel=pe,Ms=i.XhrIo=Fn}).call(this,n("c8ba"))},e71f:function(t,e,n){"use strict";var s=n("0829");n.d(e,"a",(function(){return s["a"]})),n.d(e,"b",(function(){return s["b"]})),n.d(e,"c",(function(){return s["c"]})),n.d(e,"d",(function(){return s["d"]})),n.d(e,"e",(function(){return s["e"]})),n.d(e,"f",(function(){return s["f"]})),n.d(e,"g",(function(){return s["g"]})),n.d(e,"h",(function(){return s["h"]})),n.d(e,"i",(function(){return s["i"]})),n.d(e,"j",(function(){return s["j"]})),n.d(e,"k",(function(){return s["k"]})),n.d(e,"l",(function(){return s["l"]})),n.d(e,"m",(function(){return s["m"]})),n.d(e,"n",(function(){return s["n"]})),n.d(e,"o",(function(){return s["o"]})),n.d(e,"p",(function(){return s["p"]}))}}]);
//# sourceMappingURL=customer-list~export-note-add~export-note-detail~export-note-list~import-note-add~import-note-list~p~e4c9c281.b5871abf.js.map