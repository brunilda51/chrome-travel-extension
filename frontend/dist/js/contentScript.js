/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./src/content/index.ts ***!
  \******************************/
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
if (!window.hasRun) {
  var currentUrl = new URL(window.location.href);
  if (currentUrl.host.includes('skyscanner')) {
    var origin_code = currentUrl.pathname.split('/')[3].substring(0, 3).toUpperCase(); // Extracting the first 3 characters
    var destination_code = currentUrl.pathname.split('/')[4].substring(0, 3).toUpperCase(); // Extracting the first 3 characters
    var departure = currentUrl.pathname.split('/')[5];
    var arrival = currentUrl.pathname.split('/')[6].split('?')[0]; // Extract arrival date

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
function sendMessageToBackground(website, origin_code, destination_code, departure, arrival) {
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
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxDQUFDQyxPQUFPLENBQUNDLFdBQVcsQ0FBQztJQUN6QkMsTUFBTSxFQUFFLGtCQUFrQjtJQUMxQkMsSUFBSSxFQUFFTDtFQUNSLENBQUMsQ0FBQztBQUNKLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRlbnNpb24tY2hhbGxlbmdlLy4vc3JjL2NvbnRlbnQvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIFdpbmRvdyB7XG4gIGhhc1J1bj86IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBGbGlnaHREYXRhIHtcbiAgd2Vic2l0ZTogV2Vic2l0ZTtcbiAgb3JpZ2luX2NvZGU6IHN0cmluZztcbiAgZGVzdGluYXRpb25fY29kZTogc3RyaW5nO1xuICBkZXBhcnR1cmU6IHN0cmluZztcbiAgYXJyaXZhbDogc3RyaW5nO1xufVxuXG5lbnVtIFdlYnNpdGUge1xuICBTS1lTQ0FOTkVSID0gJ3NreXNjYW5uZXInLFxuICBLQVlBSyA9ICdrYXlhaycsXG59XG5cbmlmICghd2luZG93Lmhhc1J1bikge1xuICBjb25zdCBjdXJyZW50VXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cbiAgaWYgKGN1cnJlbnRVcmwuaG9zdC5pbmNsdWRlcygnc2t5c2Nhbm5lcicpKSB7XG4gICAgY29uc3Qgb3JpZ2luX2NvZGUgPSBjdXJyZW50VXJsLnBhdGhuYW1lLnNwbGl0KCcvJylbM10uc3Vic3RyaW5nKDAsIDMpLnRvVXBwZXJDYXNlKCk7IC8vIEV4dHJhY3RpbmcgdGhlIGZpcnN0IDMgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGRlc3RpbmF0aW9uX2NvZGUgPSBjdXJyZW50VXJsLnBhdGhuYW1lLnNwbGl0KCcvJylbNF0uc3Vic3RyaW5nKDAsIDMpLnRvVXBwZXJDYXNlKCk7IC8vIEV4dHJhY3RpbmcgdGhlIGZpcnN0IDMgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGRlcGFydHVyZSA9IGN1cnJlbnRVcmwucGF0aG5hbWUuc3BsaXQoJy8nKVs1XTtcbiAgICBjb25zdCBhcnJpdmFsID0gY3VycmVudFVybC5wYXRobmFtZS5zcGxpdCgnLycpWzZdLnNwbGl0KCc/JylbMF07IC8vIEV4dHJhY3QgYXJyaXZhbCBkYXRlXG5cbiAgICBzZW5kTWVzc2FnZVRvQmFja2dyb3VuZChXZWJzaXRlLlNLWVNDQU5ORVIsIG9yaWdpbl9jb2RlLCBkZXN0aW5hdGlvbl9jb2RlLCBkZXBhcnR1cmUsIGFycml2YWwpO1xuICB9IGVsc2UgaWYgKGN1cnJlbnRVcmwuaG9zdC5pbmNsdWRlcygna2F5YWsnKSAmJiBjdXJyZW50VXJsLnBhdGhuYW1lLmluY2x1ZGVzKCcvZmxpZ2h0cycpKSB7XG4gICAgY29uc3QgZmxpZ2h0RGV0YWlscyA9IGN1cnJlbnRVcmwucGF0aG5hbWUuc3BsaXQoJy8nKVsyXTtcbiAgICBjb25zdCBbb3JpZ2luX2NvZGUsIGRlc3RpbmF0aW9uX2NvZGVdID0gZmxpZ2h0RGV0YWlscy5zcGxpdCgnLScpO1xuICAgIGNvbnN0IFtkZXBhcnR1cmUsIGFycml2YWxdID0gY3VycmVudFVybC5wYXRobmFtZS5zcGxpdCgnLycpLnNsaWNlKC0yKTtcblxuICAgIHNlbmRNZXNzYWdlVG9CYWNrZ3JvdW5kKFdlYnNpdGUuS0FZQUssIG9yaWdpbl9jb2RlLCBkZXN0aW5hdGlvbl9jb2RlLCBkZXBhcnR1cmUsIGFycml2YWwpO1xuICB9XG5cbiAgd2luZG93Lmhhc1J1biA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIHNlbmRNZXNzYWdlVG9CYWNrZ3JvdW5kKFxuICB3ZWJzaXRlOiBXZWJzaXRlLFxuICBvcmlnaW5fY29kZTogc3RyaW5nLFxuICBkZXN0aW5hdGlvbl9jb2RlOiBzdHJpbmcsXG4gIGRlcGFydHVyZTogc3RyaW5nLFxuICBhcnJpdmFsOiBzdHJpbmcsXG4pIHtcbiAgY29uc3QgZmxpZ2h0RGF0YTogRmxpZ2h0RGF0YSA9IHtcbiAgICB3ZWJzaXRlLFxuICAgIG9yaWdpbl9jb2RlLFxuICAgIGRlc3RpbmF0aW9uX2NvZGUsXG4gICAgZGVwYXJ0dXJlLFxuICAgIGFycml2YWwsXG4gIH07XG5cbiAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgIGFjdGlvbjogJ3NlbmRMb2NhbFN0b3JhZ2UnLFxuICAgIGRhdGE6IGZsaWdodERhdGEsXG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbIldlYnNpdGUiLCJ3aW5kb3ciLCJoYXNSdW4iLCJjdXJyZW50VXJsIiwiVVJMIiwibG9jYXRpb24iLCJocmVmIiwiaG9zdCIsImluY2x1ZGVzIiwib3JpZ2luX2NvZGUiLCJwYXRobmFtZSIsInNwbGl0Iiwic3Vic3RyaW5nIiwidG9VcHBlckNhc2UiLCJkZXN0aW5hdGlvbl9jb2RlIiwiZGVwYXJ0dXJlIiwiYXJyaXZhbCIsInNlbmRNZXNzYWdlVG9CYWNrZ3JvdW5kIiwiU0tZU0NBTk5FUiIsImZsaWdodERldGFpbHMiLCJfZmxpZ2h0RGV0YWlscyRzcGxpdCIsIl9mbGlnaHREZXRhaWxzJHNwbGl0MiIsIl9zbGljZWRUb0FycmF5IiwiX2N1cnJlbnRVcmwkcGF0aG5hbWUkIiwic2xpY2UiLCJfY3VycmVudFVybCRwYXRobmFtZSQyIiwiS0FZQUsiLCJ3ZWJzaXRlIiwiZmxpZ2h0RGF0YSIsImNocm9tZSIsInJ1bnRpbWUiLCJzZW5kTWVzc2FnZSIsImFjdGlvbiIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9