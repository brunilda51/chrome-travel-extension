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
var showNotification = function showNotification(message) {
  var notification = document.createElement('div');
  notification.className = 'extension-notification';
  notification.textContent = message;
  notification.style.position = 'fixed';
  notification.style.maxWidth = '200px';
  notification.style.bottom = '20px';
  notification.style.right = '20px';
  notification.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  notification.style.color = '#fff';
  notification.style.padding = '10px';
  notification.style.borderRadius = '5px';
  notification.style.zIndex = '9999';
  document.body.appendChild(notification);
  setTimeout(function () {
    notification.remove();
  }, 5000);
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
  showNotification('Click eco mio to see the sustainability info from your trip search!');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LG9CQUFBLEdBQXdDRCxhQUFhLENBQUNSLEtBQUssQ0FBQyxHQUFHLENBQUM7TUFBQVUscUJBQUEsR0FBQUMsY0FBQSxDQUFBRixvQkFBQTtNQUF6RFgsWUFBVyxHQUFBWSxxQkFBQTtNQUFFUCxpQkFBZ0IsR0FBQU8scUJBQUE7SUFDcEMsSUFBQUUscUJBQUEsR0FBNkJwQixVQUFVLENBQUNPLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDYSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFBQUMsc0JBQUEsR0FBQUgsY0FBQSxDQUFBQyxxQkFBQTtNQUE5RFIsVUFBUyxHQUFBVSxzQkFBQTtNQUFFVCxRQUFPLEdBQUFTLHNCQUFBO0lBRXpCUix1QkFBdUIsQ0FBQ3RDLE9BQU8sQ0FBQytDLEtBQUssRUFBRWpCLFlBQVcsRUFBRUssaUJBQWdCLEVBQUVDLFVBQVMsRUFBRUMsUUFBTyxDQUFDO0VBQzNGO0VBQ0FwQyxnQkFBZ0IsQ0FBQyxxRUFBcUUsQ0FBQztFQUN2RnFCLE1BQU0sQ0FBQ0MsTUFBTSxHQUFHLElBQUk7QUFDdEI7QUFFQSxTQUFTZSx1QkFBdUJBLENBQzlCVSxPQUFnQixFQUNoQmxCLFdBQW1CLEVBQ25CSyxnQkFBd0IsRUFDeEJDLFNBQWlCLEVBQ2pCQyxPQUFlLEVBQ2Y7RUFDQSxJQUFNWSxVQUFzQixHQUFHO0lBQzdCRCxPQUFPLEVBQVBBLE9BQU87SUFDUGxCLFdBQVcsRUFBWEEsV0FBVztJQUNYSyxnQkFBZ0IsRUFBaEJBLGdCQUFnQjtJQUNoQkMsU0FBUyxFQUFUQSxTQUFTO0lBQ1RDLE9BQU8sRUFBUEE7RUFDRixDQUFDO0VBRURhLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDQyxXQUFXLENBQUM7SUFDekJDLE1BQU0sRUFBRSxrQkFBa0I7SUFDMUJDLElBQUksRUFBRUw7RUFDUixDQUFDLENBQUM7QUFDSixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXh0ZW5zaW9uLWNoYWxsZW5nZS8uL3NyYy9jb250ZW50L2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBXaW5kb3cge1xuICBoYXNSdW4/OiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgRmxpZ2h0RGF0YSB7XG4gIHdlYnNpdGU6IFdlYnNpdGU7XG4gIG9yaWdpbl9jb2RlOiBzdHJpbmc7XG4gIGRlc3RpbmF0aW9uX2NvZGU6IHN0cmluZztcbiAgZGVwYXJ0dXJlOiBzdHJpbmc7XG4gIGFycml2YWw6IHN0cmluZztcbn1cblxuZW51bSBXZWJzaXRlIHtcbiAgU0tZU0NBTk5FUiA9ICdza3lzY2FubmVyJyxcbiAgS0FZQUsgPSAna2F5YWsnLFxufVxuXG5jb25zdCBzaG93Tm90aWZpY2F0aW9uID0gKG1lc3NhZ2U6IHN0cmluZykgPT4ge1xuICBjb25zdCBub3RpZmljYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbm90aWZpY2F0aW9uLmNsYXNzTmFtZSA9ICdleHRlbnNpb24tbm90aWZpY2F0aW9uJztcbiAgbm90aWZpY2F0aW9uLnRleHRDb250ZW50ID0gbWVzc2FnZTtcblxuICBub3RpZmljYXRpb24uc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICBub3RpZmljYXRpb24uc3R5bGUubWF4V2lkdGggPSAnMjAwcHgnO1xuICBub3RpZmljYXRpb24uc3R5bGUuYm90dG9tID0gJzIwcHgnO1xuICBub3RpZmljYXRpb24uc3R5bGUucmlnaHQgPSAnMjBweCc7XG4gIG5vdGlmaWNhdGlvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgwLCAwLCAwLCAwLjcpJztcbiAgbm90aWZpY2F0aW9uLnN0eWxlLmNvbG9yID0gJyNmZmYnO1xuICBub3RpZmljYXRpb24uc3R5bGUucGFkZGluZyA9ICcxMHB4JztcbiAgbm90aWZpY2F0aW9uLnN0eWxlLmJvcmRlclJhZGl1cyA9ICc1cHgnO1xuICBub3RpZmljYXRpb24uc3R5bGUuekluZGV4ID0gJzk5OTknO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobm90aWZpY2F0aW9uKTtcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBub3RpZmljYXRpb24ucmVtb3ZlKCk7XG4gIH0sIDUwMDApO1xufTtcblxuaWYgKCF3aW5kb3cuaGFzUnVuKSB7XG4gIGNvbnN0IGN1cnJlbnRVcmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblxuICBpZiAoY3VycmVudFVybC5ob3N0LmluY2x1ZGVzKCdza3lzY2FubmVyJykpIHtcbiAgICBjb25zdCBvcmlnaW5fY29kZSA9IGN1cnJlbnRVcmwucGF0aG5hbWUuc3BsaXQoJy8nKVszXS5zdWJzdHJpbmcoMCwgMykudG9VcHBlckNhc2UoKTtcbiAgICBjb25zdCBkZXN0aW5hdGlvbl9jb2RlID0gY3VycmVudFVybC5wYXRobmFtZS5zcGxpdCgnLycpWzRdLnN1YnN0cmluZygwLCAzKS50b1VwcGVyQ2FzZSgpO1xuICAgIGNvbnN0IGRlcGFydHVyZSA9IGN1cnJlbnRVcmwucGF0aG5hbWUuc3BsaXQoJy8nKVs1XTtcbiAgICBjb25zdCBhcnJpdmFsID0gY3VycmVudFVybC5wYXRobmFtZS5zcGxpdCgnLycpWzZdLnNwbGl0KCc/JylbMF07XG5cbiAgICBzZW5kTWVzc2FnZVRvQmFja2dyb3VuZChXZWJzaXRlLlNLWVNDQU5ORVIsIG9yaWdpbl9jb2RlLCBkZXN0aW5hdGlvbl9jb2RlLCBkZXBhcnR1cmUsIGFycml2YWwpO1xuICB9IGVsc2UgaWYgKGN1cnJlbnRVcmwuaG9zdC5pbmNsdWRlcygna2F5YWsnKSAmJiBjdXJyZW50VXJsLnBhdGhuYW1lLmluY2x1ZGVzKCcvZmxpZ2h0cycpKSB7XG4gICAgY29uc3QgZmxpZ2h0RGV0YWlscyA9IGN1cnJlbnRVcmwucGF0aG5hbWUuc3BsaXQoJy8nKVsyXTtcbiAgICBjb25zdCBbb3JpZ2luX2NvZGUsIGRlc3RpbmF0aW9uX2NvZGVdID0gZmxpZ2h0RGV0YWlscy5zcGxpdCgnLScpO1xuICAgIGNvbnN0IFtkZXBhcnR1cmUsIGFycml2YWxdID0gY3VycmVudFVybC5wYXRobmFtZS5zcGxpdCgnLycpLnNsaWNlKC0yKTtcblxuICAgIHNlbmRNZXNzYWdlVG9CYWNrZ3JvdW5kKFdlYnNpdGUuS0FZQUssIG9yaWdpbl9jb2RlLCBkZXN0aW5hdGlvbl9jb2RlLCBkZXBhcnR1cmUsIGFycml2YWwpO1xuICB9XG4gIHNob3dOb3RpZmljYXRpb24oJ0NsaWNrIGVjbyBtaW8gdG8gc2VlIHRoZSBzdXN0YWluYWJpbGl0eSBpbmZvIGZyb20geW91ciB0cmlwIHNlYXJjaCEnKTtcbiAgd2luZG93Lmhhc1J1biA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIHNlbmRNZXNzYWdlVG9CYWNrZ3JvdW5kKFxuICB3ZWJzaXRlOiBXZWJzaXRlLFxuICBvcmlnaW5fY29kZTogc3RyaW5nLFxuICBkZXN0aW5hdGlvbl9jb2RlOiBzdHJpbmcsXG4gIGRlcGFydHVyZTogc3RyaW5nLFxuICBhcnJpdmFsOiBzdHJpbmcsXG4pIHtcbiAgY29uc3QgZmxpZ2h0RGF0YTogRmxpZ2h0RGF0YSA9IHtcbiAgICB3ZWJzaXRlLFxuICAgIG9yaWdpbl9jb2RlLFxuICAgIGRlc3RpbmF0aW9uX2NvZGUsXG4gICAgZGVwYXJ0dXJlLFxuICAgIGFycml2YWwsXG4gIH07XG5cbiAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgIGFjdGlvbjogJ3NlbmRMb2NhbFN0b3JhZ2UnLFxuICAgIGRhdGE6IGZsaWdodERhdGEsXG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbIldlYnNpdGUiLCJzaG93Tm90aWZpY2F0aW9uIiwibWVzc2FnZSIsIm5vdGlmaWNhdGlvbiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInRleHRDb250ZW50Iiwic3R5bGUiLCJwb3NpdGlvbiIsIm1heFdpZHRoIiwiYm90dG9tIiwicmlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJ6SW5kZXgiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwid2luZG93IiwiaGFzUnVuIiwiY3VycmVudFVybCIsIlVSTCIsImxvY2F0aW9uIiwiaHJlZiIsImhvc3QiLCJpbmNsdWRlcyIsIm9yaWdpbl9jb2RlIiwicGF0aG5hbWUiLCJzcGxpdCIsInN1YnN0cmluZyIsInRvVXBwZXJDYXNlIiwiZGVzdGluYXRpb25fY29kZSIsImRlcGFydHVyZSIsImFycml2YWwiLCJzZW5kTWVzc2FnZVRvQmFja2dyb3VuZCIsIlNLWVNDQU5ORVIiLCJmbGlnaHREZXRhaWxzIiwiX2ZsaWdodERldGFpbHMkc3BsaXQiLCJfZmxpZ2h0RGV0YWlscyRzcGxpdDIiLCJfc2xpY2VkVG9BcnJheSIsIl9jdXJyZW50VXJsJHBhdGhuYW1lJCIsInNsaWNlIiwiX2N1cnJlbnRVcmwkcGF0aG5hbWUkMiIsIktBWUFLIiwid2Vic2l0ZSIsImZsaWdodERhdGEiLCJjaHJvbWUiLCJydW50aW1lIiwic2VuZE1lc3NhZ2UiLCJhY3Rpb24iLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==