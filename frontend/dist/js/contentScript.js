/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!******************************!*\
  !*** ./src/content/index.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sendMessageToBackground: () => (/* binding */ sendMessageToBackground)
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Website = /*#__PURE__*/function (Website) {
  Website["SKYSCANNER"] = "skyscanner";
  Website["KAYAK"] = "kayak";
  return Website;
}(Website || {});
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
    sendMessageToBackground(Website.SKYSCANNER, origin_code, destination_code, departure, arrival);
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
    sendMessageToBackground(Website.KAYAK, _origin_code, _destination_code, _departure, _arrival);
  }
  window.hasRun = true;
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUFBQyxzQkFBQSxHQUFBSCxjQUFBLENBQUFDLHFCQUFBO01BQTlEekIsVUFBUyxHQUFBMkIsc0JBQUE7TUFBRTFCLFFBQU8sR0FBQTBCLHNCQUFBO0lBRXpCL0IsdUJBQXVCLENBQUNELE9BQU8sQ0FBQ2lDLEtBQUssRUFBRTlCLFlBQVcsRUFBRUMsaUJBQWdCLEVBQUVDLFVBQVMsRUFBRUMsUUFBTyxDQUFDO0VBQzNGO0VBRUNPLE1BQU0sQ0FBWUMsTUFBTSxHQUFHLElBQUk7QUFDbEMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4dGVuc2lvbi1jaGFsbGVuZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXh0ZW5zaW9uLWNoYWxsZW5nZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXh0ZW5zaW9uLWNoYWxsZW5nZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4dGVuc2lvbi1jaGFsbGVuZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leHRlbnNpb24tY2hhbGxlbmdlLy4vc3JjL2NvbnRlbnQvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbnRlcmZhY2UgV2luZG93IHtcbiAgaGFzUnVuPzogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIEZsaWdodERhdGEge1xuICB3ZWJzaXRlOiBXZWJzaXRlO1xuICBvcmlnaW5fY29kZTogc3RyaW5nO1xuICBkZXN0aW5hdGlvbl9jb2RlOiBzdHJpbmc7XG4gIGRlcGFydHVyZTogc3RyaW5nO1xuICBhcnJpdmFsOiBzdHJpbmc7XG59XG5cbmVudW0gV2Vic2l0ZSB7XG4gIFNLWVNDQU5ORVIgPSAnc2t5c2Nhbm5lcicsXG4gIEtBWUFLID0gJ2theWFrJyxcbn1cblxuZXhwb3J0IGNvbnN0IHNlbmRNZXNzYWdlVG9CYWNrZ3JvdW5kID0gKFxuICB3ZWJzaXRlOiBXZWJzaXRlLFxuICBvcmlnaW5fY29kZTogc3RyaW5nLFxuICBkZXN0aW5hdGlvbl9jb2RlOiBzdHJpbmcsXG4gIGRlcGFydHVyZTogc3RyaW5nLFxuICBhcnJpdmFsOiBzdHJpbmcsXG4pID0+IHtcbiAgY29uc3QgZmxpZ2h0RGF0YTogRmxpZ2h0RGF0YSA9IHtcbiAgICB3ZWJzaXRlLFxuICAgIG9yaWdpbl9jb2RlLFxuICAgIGRlc3RpbmF0aW9uX2NvZGUsXG4gICAgZGVwYXJ0dXJlLFxuICAgIGFycml2YWwsXG4gIH07XG5cbiAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgIGFjdGlvbjogJ3NlbmRMb2NhbFN0b3JhZ2UnLFxuICAgIGRhdGE6IGZsaWdodERhdGEsXG4gIH0pO1xufTtcblxuaWYgKCEod2luZG93IGFzIFdpbmRvdykuaGFzUnVuKSB7XG4gIGNvbnN0IGN1cnJlbnRVcmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblxuICBpZiAoY3VycmVudFVybC5ob3N0LmluY2x1ZGVzKCdza3lzY2FubmVyJykpIHtcbiAgICBjb25zdCBvcmlnaW5fY29kZSA9IGN1cnJlbnRVcmwucGF0aG5hbWUuc3BsaXQoJy8nKVszXS5zdWJzdHJpbmcoMCwgMykudG9VcHBlckNhc2UoKTtcbiAgICBjb25zdCBkZXN0aW5hdGlvbl9jb2RlID0gY3VycmVudFVybC5wYXRobmFtZS5zcGxpdCgnLycpWzRdLnN1YnN0cmluZygwLCAzKS50b1VwcGVyQ2FzZSgpO1xuICAgIGNvbnN0IGRlcGFydHVyZSA9IGN1cnJlbnRVcmwucGF0aG5hbWUuc3BsaXQoJy8nKVs1XTtcbiAgICBjb25zdCBhcnJpdmFsID0gY3VycmVudFVybC5wYXRobmFtZS5zcGxpdCgnLycpWzZdLnNwbGl0KCc/JylbMF07XG5cbiAgICBzZW5kTWVzc2FnZVRvQmFja2dyb3VuZChXZWJzaXRlLlNLWVNDQU5ORVIsIG9yaWdpbl9jb2RlLCBkZXN0aW5hdGlvbl9jb2RlLCBkZXBhcnR1cmUsIGFycml2YWwpO1xuICB9IGVsc2UgaWYgKGN1cnJlbnRVcmwuaG9zdC5pbmNsdWRlcygna2F5YWsnKSAmJiBjdXJyZW50VXJsLnBhdGhuYW1lLmluY2x1ZGVzKCcvZmxpZ2h0cycpKSB7XG4gICAgY29uc3QgZmxpZ2h0RGV0YWlscyA9IGN1cnJlbnRVcmwucGF0aG5hbWUuc3BsaXQoJy8nKVsyXTtcbiAgICBjb25zdCBbb3JpZ2luX2NvZGUsIGRlc3RpbmF0aW9uX2NvZGVdID0gZmxpZ2h0RGV0YWlscy5zcGxpdCgnLScpO1xuICAgIGNvbnN0IFtkZXBhcnR1cmUsIGFycml2YWxdID0gY3VycmVudFVybC5wYXRobmFtZS5zcGxpdCgnLycpLnNsaWNlKC0yKTtcblxuICAgIHNlbmRNZXNzYWdlVG9CYWNrZ3JvdW5kKFdlYnNpdGUuS0FZQUssIG9yaWdpbl9jb2RlLCBkZXN0aW5hdGlvbl9jb2RlLCBkZXBhcnR1cmUsIGFycml2YWwpO1xuICB9XG5cbiAgKHdpbmRvdyBhcyBXaW5kb3cpLmhhc1J1biA9IHRydWU7XG59XG4iXSwibmFtZXMiOlsiV2Vic2l0ZSIsInNlbmRNZXNzYWdlVG9CYWNrZ3JvdW5kIiwid2Vic2l0ZSIsIm9yaWdpbl9jb2RlIiwiZGVzdGluYXRpb25fY29kZSIsImRlcGFydHVyZSIsImFycml2YWwiLCJmbGlnaHREYXRhIiwiY2hyb21lIiwicnVudGltZSIsInNlbmRNZXNzYWdlIiwiYWN0aW9uIiwiZGF0YSIsIndpbmRvdyIsImhhc1J1biIsImN1cnJlbnRVcmwiLCJVUkwiLCJsb2NhdGlvbiIsImhyZWYiLCJob3N0IiwiaW5jbHVkZXMiLCJwYXRobmFtZSIsInNwbGl0Iiwic3Vic3RyaW5nIiwidG9VcHBlckNhc2UiLCJTS1lTQ0FOTkVSIiwiZmxpZ2h0RGV0YWlscyIsIl9mbGlnaHREZXRhaWxzJHNwbGl0IiwiX2ZsaWdodERldGFpbHMkc3BsaXQyIiwiX3NsaWNlZFRvQXJyYXkiLCJfY3VycmVudFVybCRwYXRobmFtZSQiLCJzbGljZSIsIl9jdXJyZW50VXJsJHBhdGhuYW1lJDIiLCJLQVlBSyJdLCJzb3VyY2VSb290IjoiIn0=