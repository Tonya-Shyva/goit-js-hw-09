function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i);var u=i("eWCmQ");const r={inputDelay:document.querySelector('input[name="delay"]'),inputStep:document.querySelector('input[name="step"]'),inputAmount:document.querySelector('input[name="amount"]'),btnSubmitPromise:document.querySelector('button[type="submit"]')};function l(e,t){return new Promise(((n,o)=>{const i=Math.random()>.3;setTimeout((()=>{i?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}console.dir(r),r.btnSubmitPromise.addEventListener("click",(t=>{t.preventDefault();let n=Number(r.inputDelay.value),o=Number(r.inputStep.value);for(let t=0;t<r.inputAmount.value;t+=1)l(1+t,n+t*o).then((({position:t,delay:n})=>{e(u).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(u).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)}))}));
//# sourceMappingURL=03-promises.3f537b4c.js.map
