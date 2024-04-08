/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/types.ts":
/*!**********************!*\
  !*** ./src/types.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Website: () => (/* binding */ Website)
/* harmony export */ });
// types.ts

var Website = /*#__PURE__*/function (Website) {
  Website["SKYSCANNER"] = "skyscanner";
  Website["KAYAK"] = "kayak";
  return Website;
}({});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/content/index.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sendMessageToBackground: () => (/* binding */ sendMessageToBackground)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./src/types.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var sendMessageToBackground = function sendMessageToBackground(website, origin_code, destination_code, departure, arrival) {
  var flightData = {
    website: website,
    origin_code: origin_code,
    destination_code: destination_code,
    departure: departure,
    arrival: arrival
  };
  chrome.runtime.sendMessage({
    action: 'sendLocalStorage',
    data: flightData
  });
};
if (!window.hasRun) {
  var currentUrl = new URL(window.location.href);
  if (currentUrl.host.includes('skyscanner')) {
    var origin_code = currentUrl.pathname.split('/')[3].substring(0, 3).toUpperCase();
    var destination_code = currentUrl.pathname.split('/')[4].substring(0, 3).toUpperCase();
    var departure = currentUrl.pathname.split('/')[5];
    var arrival = currentUrl.pathname.split('/')[6].split('?')[0];
    sendMessageToBackground(_types__WEBPACK_IMPORTED_MODULE_0__.Website.SKYSCANNER, origin_code, destination_code, departure, arrival);
  } else if (currentUrl.host.includes('kayak') && currentUrl.pathname.includes('/flights')) {
    var flightDetails = currentUrl.pathname.split('/')[2];
    var _flightDetails$split = flightDetails.split('-'),
      _flightDetails$split2 = _slicedToArray(_flightDetails$split, 2),
      _origin_code = _flightDetails$split2[0],
      _destination_code = _flightDetails$split2[1];
    var _currentUrl$pathname$ = currentUrl.pathname.split('/').slice(-2),
      _currentUrl$pathname$2 = _slicedToArray(_currentUrl$pathname$, 2),
      _departure = _currentUrl$pathname$2[0],
      _arrival = _currentUrl$pathname$2[1];
    sendMessageToBackground(_types__WEBPACK_IMPORTED_MODULE_0__.Website.KAYAK, _origin_code, _destination_code, _departure, _arrival);
  }
  window.hasRun = true;
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBekR4QixZQUFXLEdBQUF5QixxQkFBQTtNQUFFeEIsaUJBQWdCLEdBQUF3QixxQkFBQTtJQUNwQyxJQUFBRSxxQkFBQSxHQUE2QmYsVUFBVSxDQUFDTSxRQUFRLENBQUNDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQ1MsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQUFDLHNCQUFBLEdBQUFILGNBQUEsQ0FBQUMscUJBQUE7TUFBOUR6QixVQUFTLEdBQUEyQixzQkFBQTtNQUFFMUIsUUFBTyxHQUFBMEIsc0JBQUE7SUFFekIvQix1QkFBdUIsQ0FBQ0QsMkNBQU8sQ0FBQ2lDLEtBQUssRUFBRTlCLFlBQVcsRUFBRUMsaUJBQWdCLEVBQUVDLFVBQVMsRUFBRUMsUUFBTyxDQUFDO0VBQzNGO0VBRUNPLE1BQU0sQ0FBWUMsTUFBTSxHQUFHLElBQUk7QUFDbEMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4dGVuc2lvbi1jaGFsbGVuZ2UvLi9zcmMvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vZXh0ZW5zaW9uLWNoYWxsZW5nZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leHRlbnNpb24tY2hhbGxlbmdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leHRlbnNpb24tY2hhbGxlbmdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXh0ZW5zaW9uLWNoYWxsZW5nZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4dGVuc2lvbi1jaGFsbGVuZ2UvLi9zcmMvY29udGVudC9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0eXBlcy50c1xuXG5leHBvcnQgaW50ZXJmYWNlIFBsYWNlIHtcbiAgaWQ/OiBudW1iZXI7XG4gIGNpdHlfbmFtZTogc3RyaW5nO1xuICBjb3VudHJ5X25hbWU6IHN0cmluZztcbiAgY29kZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlYXJjaCB7XG4gIGlkPzogbnVtYmVyO1xuICBzdXN0YWluYWJpbGl0eV9zY29yZT86IG51bWJlcjtcbiAgZGVzdGluYXRpb25fY29kZTogc3RyaW5nO1xuICBvcmlnaW5fY29kZTogc3RyaW5nO1xuICBkZXBhcnR1cmU6IHN0cmluZztcbiAgYXJyaXZhbDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXIge1xuICBpZD86IG51bWJlcjtcbiAgZW1haWw6IHN0cmluZztcbiAgbGFzdF9uYW1lOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbiAgdXNlcm5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZXN0aW5hdGlvbkNvZGVzIHtcbiAgZGVzdGluYXRpb25fY29kZXM6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdpbmRvdyB7XG4gIGhhc1J1bj86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmxpZ2h0RGF0YSB7XG4gIHdlYnNpdGU6IFdlYnNpdGU7XG4gIG9yaWdpbl9jb2RlOiBzdHJpbmc7XG4gIGRlc3RpbmF0aW9uX2NvZGU6IHN0cmluZztcbiAgZGVwYXJ0dXJlOiBzdHJpbmc7XG4gIGFycml2YWw6IHN0cmluZztcbn1cblxuZXhwb3J0IGVudW0gV2Vic2l0ZSB7XG4gIFNLWVNDQU5ORVIgPSAnc2t5c2Nhbm5lcicsXG4gIEtBWUFLID0gJ2theWFrJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBUUlEYXRhIHtcbiAgc3RhdHVzOiBzdHJpbmc7XG4gIGRhdGE6IHtcbiAgICBjaXR5OiB7XG4gICAgICBuYW1lOiBzdHJpbmc7XG4gICAgfTtcbiAgICBmb3JlY2FzdDoge1xuICAgICAgZGFpbHk6IHtcbiAgICAgICAgW3BvbGx1dGFudDogc3RyaW5nXToge1xuICAgICAgICAgIGF2ZzogbnVtYmVyO1xuICAgICAgICAgIGRheTogc3RyaW5nO1xuICAgICAgICAgIG1heDogbnVtYmVyO1xuICAgICAgICAgIG1pbjogbnVtYmVyO1xuICAgICAgICB9W107XG4gICAgICB9O1xuICAgIH07XG4gIH07XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IEZsaWdodERhdGEsIFdlYnNpdGUsIFdpbmRvdyB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IHNlbmRNZXNzYWdlVG9CYWNrZ3JvdW5kID0gKFxuICB3ZWJzaXRlOiBXZWJzaXRlLFxuICBvcmlnaW5fY29kZTogc3RyaW5nLFxuICBkZXN0aW5hdGlvbl9jb2RlOiBzdHJpbmcsXG4gIGRlcGFydHVyZTogc3RyaW5nLFxuICBhcnJpdmFsOiBzdHJpbmcsXG4pID0+IHtcbiAgY29uc3QgZmxpZ2h0RGF0YTogRmxpZ2h0RGF0YSA9IHtcbiAgICB3ZWJzaXRlLFxuICAgIG9yaWdpbl9jb2RlLFxuICAgIGRlc3RpbmF0aW9uX2NvZGUsXG4gICAgZGVwYXJ0dXJlLFxuICAgIGFycml2YWwsXG4gIH07XG5cbiAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgIGFjdGlvbjogJ3NlbmRMb2NhbFN0b3JhZ2UnLFxuICAgIGRhdGE6IGZsaWdodERhdGEsXG4gIH0pO1xufTtcblxuaWYgKCEod2luZG93IGFzIFdpbmRvdykuaGFzUnVuKSB7XG4gIGNvbnN0IGN1cnJlbnRVcmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblxuICBpZiAoY3VycmVudFVybC5ob3N0LmluY2x1ZGVzKCdza3lzY2FubmVyJykpIHtcbiAgICBjb25zdCBvcmlnaW5fY29kZSA9IGN1cnJlbnRVcmwucGF0aG5hbWUuc3BsaXQoJy8nKVszXS5zdWJzdHJpbmcoMCwgMykudG9VcHBlckNhc2UoKTtcbiAgICBjb25zdCBkZXN0aW5hdGlvbl9jb2RlID0gY3VycmVudFVybC5wYXRobmFtZS5zcGxpdCgnLycpWzRdLnN1YnN0cmluZygwLCAzKS50b1VwcGVyQ2FzZSgpO1xuICAgIGNvbnN0IGRlcGFydHVyZSA9IGN1cnJlbnRVcmwucGF0aG5hbWUuc3BsaXQoJy8nKVs1XTtcbiAgICBjb25zdCBhcnJpdmFsID0gY3VycmVudFVybC5wYXRobmFtZS5zcGxpdCgnLycpWzZdLnNwbGl0KCc/JylbMF07XG5cbiAgICBzZW5kTWVzc2FnZVRvQmFja2dyb3VuZChXZWJzaXRlLlNLWVNDQU5ORVIsIG9yaWdpbl9jb2RlLCBkZXN0aW5hdGlvbl9jb2RlLCBkZXBhcnR1cmUsIGFycml2YWwpO1xuICB9IGVsc2UgaWYgKGN1cnJlbnRVcmwuaG9zdC5pbmNsdWRlcygna2F5YWsnKSAmJiBjdXJyZW50VXJsLnBhdGhuYW1lLmluY2x1ZGVzKCcvZmxpZ2h0cycpKSB7XG4gICAgY29uc3QgZmxpZ2h0RGV0YWlscyA9IGN1cnJlbnRVcmwucGF0aG5hbWUuc3BsaXQoJy8nKVsyXTtcbiAgICBjb25zdCBbb3JpZ2luX2NvZGUsIGRlc3RpbmF0aW9uX2NvZGVdID0gZmxpZ2h0RGV0YWlscy5zcGxpdCgnLScpO1xuICAgIGNvbnN0IFtkZXBhcnR1cmUsIGFycml2YWxdID0gY3VycmVudFVybC5wYXRobmFtZS5zcGxpdCgnLycpLnNsaWNlKC0yKTtcblxuICAgIHNlbmRNZXNzYWdlVG9CYWNrZ3JvdW5kKFdlYnNpdGUuS0FZQUssIG9yaWdpbl9jb2RlLCBkZXN0aW5hdGlvbl9jb2RlLCBkZXBhcnR1cmUsIGFycml2YWwpO1xuICB9XG5cbiAgKHdpbmRvdyBhcyBXaW5kb3cpLmhhc1J1biA9IHRydWU7XG59XG4iXSwibmFtZXMiOlsiV2Vic2l0ZSIsInNlbmRNZXNzYWdlVG9CYWNrZ3JvdW5kIiwid2Vic2l0ZSIsIm9yaWdpbl9jb2RlIiwiZGVzdGluYXRpb25fY29kZSIsImRlcGFydHVyZSIsImFycml2YWwiLCJmbGlnaHREYXRhIiwiY2hyb21lIiwicnVudGltZSIsInNlbmRNZXNzYWdlIiwiYWN0aW9uIiwiZGF0YSIsIndpbmRvdyIsImhhc1J1biIsImN1cnJlbnRVcmwiLCJVUkwiLCJsb2NhdGlvbiIsImhyZWYiLCJob3N0IiwiaW5jbHVkZXMiLCJwYXRobmFtZSIsInNwbGl0Iiwic3Vic3RyaW5nIiwidG9VcHBlckNhc2UiLCJTS1lTQ0FOTkVSIiwiZmxpZ2h0RGV0YWlscyIsIl9mbGlnaHREZXRhaWxzJHNwbGl0IiwiX2ZsaWdodERldGFpbHMkc3BsaXQyIiwiX3NsaWNlZFRvQXJyYXkiLCJfY3VycmVudFVybCRwYXRobmFtZSQiLCJzbGljZSIsIl9jdXJyZW50VXJsJHBhdGhuYW1lJDIiLCJLQVlBSyJdLCJzb3VyY2VSb290IjoiIn0=