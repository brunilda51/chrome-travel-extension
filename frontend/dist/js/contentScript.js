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
  showNotification('Click here to see the sustainability info from your most recent trip search!');
  window.hasRun = true;
}
function showNotification(message) {
  // Create a div element for the notification
  var notification = document.createElement('div');
  notification.className = 'extension-notification';
  notification.textContent = message;

  // Style the notification (you can adjust styles as needed)
  notification.style.position = 'fixed';
  notification.style.bottom = '20px';
  notification.style.right = '20px';
  notification.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  notification.style.color = '#fff';
  notification.style.padding = '10px';
  notification.style.borderRadius = '5px';
  notification.style.zIndex = '9999';

  // Append the notification to the body of the page
  document.body.appendChild(notification);

  // Automatically remove the notification after a certain time (e.g., 5 seconds)
  setTimeout(function () {
    notification.remove();
  }, 5000); // Adjust the time as needed
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTSxHQUFHLE1BQU07RUFDbENQLFlBQVksQ0FBQ0ssS0FBSyxDQUFDRyxLQUFLLEdBQUcsTUFBTTtFQUNqQ1IsWUFBWSxDQUFDSyxLQUFLLENBQUNJLGVBQWUsR0FBRyxvQkFBb0I7RUFDekRULFlBQVksQ0FBQ0ssS0FBSyxDQUFDSyxLQUFLLEdBQUcsTUFBTTtFQUNqQ1YsWUFBWSxDQUFDSyxLQUFLLENBQUNNLE9BQU8sR0FBRyxNQUFNO0VBQ25DWCxZQUFZLENBQUNLLEtBQUssQ0FBQ08sWUFBWSxHQUFHLEtBQUs7RUFDdkNaLFlBQVksQ0FBQ0ssS0FBSyxDQUFDUSxNQUFNLEdBQUcsTUFBTTs7RUFFbEM7RUFDQVosUUFBUSxDQUFDYSxJQUFJLENBQUNDLFdBQVcsQ0FBQ2YsWUFBWSxDQUFDOztFQUV2QztFQUNBZ0IsVUFBVSxDQUFDLFlBQU07SUFDZmhCLFlBQVksQ0FBQ2lCLE1BQU0sQ0FBQyxDQUFDO0VBQ3ZCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ1o7QUFDQSxTQUFTN0IsdUJBQXVCQSxDQUM5QjhCLE9BQWdCLEVBQ2hCdEMsV0FBbUIsRUFDbkJLLGdCQUF3QixFQUN4QkMsU0FBaUIsRUFDakJDLE9BQWUsRUFDZjtFQUNBLElBQU1nQyxVQUFzQixHQUFHO0lBQzdCRCxPQUFPLEVBQVBBLE9BQU87SUFDUHRDLFdBQVcsRUFBWEEsV0FBVztJQUNYSyxnQkFBZ0IsRUFBaEJBLGdCQUFnQjtJQUNoQkMsU0FBUyxFQUFUQSxTQUFTO0lBQ1RDLE9BQU8sRUFBUEE7RUFDRixDQUFDO0VBRURpQyxNQUFNLENBQUNDLE9BQU8sQ0FBQ0MsV0FBVyxDQUFDO0lBQ3pCQyxNQUFNLEVBQUUsa0JBQWtCO0lBQzFCQyxJQUFJLEVBQUVMO0VBQ1IsQ0FBQyxDQUFDO0FBQ0osQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4dGVuc2lvbi1jaGFsbGVuZ2UvLi9zcmMvY29udGVudC9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgV2luZG93IHtcbiAgaGFzUnVuPzogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIEZsaWdodERhdGEge1xuICB3ZWJzaXRlOiBXZWJzaXRlO1xuICBvcmlnaW5fY29kZTogc3RyaW5nO1xuICBkZXN0aW5hdGlvbl9jb2RlOiBzdHJpbmc7XG4gIGRlcGFydHVyZTogc3RyaW5nO1xuICBhcnJpdmFsOiBzdHJpbmc7XG59XG5cbmVudW0gV2Vic2l0ZSB7XG4gIFNLWVNDQU5ORVIgPSAnc2t5c2Nhbm5lcicsXG4gIEtBWUFLID0gJ2theWFrJyxcbn1cblxuaWYgKCF3aW5kb3cuaGFzUnVuKSB7XG4gIGNvbnN0IGN1cnJlbnRVcmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblxuICBpZiAoY3VycmVudFVybC5ob3N0LmluY2x1ZGVzKCdza3lzY2FubmVyJykpIHtcbiAgICBjb25zdCBvcmlnaW5fY29kZSA9IGN1cnJlbnRVcmwucGF0aG5hbWUuc3BsaXQoJy8nKVszXS5zdWJzdHJpbmcoMCwgMykudG9VcHBlckNhc2UoKTtcbiAgICBjb25zdCBkZXN0aW5hdGlvbl9jb2RlID0gY3VycmVudFVybC5wYXRobmFtZS5zcGxpdCgnLycpWzRdLnN1YnN0cmluZygwLCAzKS50b1VwcGVyQ2FzZSgpO1xuICAgIGNvbnN0IGRlcGFydHVyZSA9IGN1cnJlbnRVcmwucGF0aG5hbWUuc3BsaXQoJy8nKVs1XTtcbiAgICBjb25zdCBhcnJpdmFsID0gY3VycmVudFVybC5wYXRobmFtZS5zcGxpdCgnLycpWzZdLnNwbGl0KCc/JylbMF07XG5cbiAgICBzZW5kTWVzc2FnZVRvQmFja2dyb3VuZChXZWJzaXRlLlNLWVNDQU5ORVIsIG9yaWdpbl9jb2RlLCBkZXN0aW5hdGlvbl9jb2RlLCBkZXBhcnR1cmUsIGFycml2YWwpO1xuICB9IGVsc2UgaWYgKGN1cnJlbnRVcmwuaG9zdC5pbmNsdWRlcygna2F5YWsnKSAmJiBjdXJyZW50VXJsLnBhdGhuYW1lLmluY2x1ZGVzKCcvZmxpZ2h0cycpKSB7XG4gICAgY29uc3QgZmxpZ2h0RGV0YWlscyA9IGN1cnJlbnRVcmwucGF0aG5hbWUuc3BsaXQoJy8nKVsyXTtcbiAgICBjb25zdCBbb3JpZ2luX2NvZGUsIGRlc3RpbmF0aW9uX2NvZGVdID0gZmxpZ2h0RGV0YWlscy5zcGxpdCgnLScpO1xuICAgIGNvbnN0IFtkZXBhcnR1cmUsIGFycml2YWxdID0gY3VycmVudFVybC5wYXRobmFtZS5zcGxpdCgnLycpLnNsaWNlKC0yKTtcblxuICAgIHNlbmRNZXNzYWdlVG9CYWNrZ3JvdW5kKFdlYnNpdGUuS0FZQUssIG9yaWdpbl9jb2RlLCBkZXN0aW5hdGlvbl9jb2RlLCBkZXBhcnR1cmUsIGFycml2YWwpO1xuICB9XG4gIHNob3dOb3RpZmljYXRpb24oJ0NsaWNrIGhlcmUgdG8gc2VlIHRoZSBzdXN0YWluYWJpbGl0eSBpbmZvIGZyb20geW91ciBtb3N0IHJlY2VudCB0cmlwIHNlYXJjaCEnKTtcbiAgd2luZG93Lmhhc1J1biA9IHRydWU7XG59XG5mdW5jdGlvbiBzaG93Tm90aWZpY2F0aW9uKG1lc3NhZ2U6IHN0cmluZykge1xuICAvLyBDcmVhdGUgYSBkaXYgZWxlbWVudCBmb3IgdGhlIG5vdGlmaWNhdGlvblxuICBjb25zdCBub3RpZmljYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbm90aWZpY2F0aW9uLmNsYXNzTmFtZSA9ICdleHRlbnNpb24tbm90aWZpY2F0aW9uJztcbiAgbm90aWZpY2F0aW9uLnRleHRDb250ZW50ID0gbWVzc2FnZTtcblxuICAvLyBTdHlsZSB0aGUgbm90aWZpY2F0aW9uICh5b3UgY2FuIGFkanVzdCBzdHlsZXMgYXMgbmVlZGVkKVxuICBub3RpZmljYXRpb24uc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICBub3RpZmljYXRpb24uc3R5bGUuYm90dG9tID0gJzIwcHgnO1xuICBub3RpZmljYXRpb24uc3R5bGUucmlnaHQgPSAnMjBweCc7XG4gIG5vdGlmaWNhdGlvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgwLCAwLCAwLCAwLjcpJztcbiAgbm90aWZpY2F0aW9uLnN0eWxlLmNvbG9yID0gJyNmZmYnO1xuICBub3RpZmljYXRpb24uc3R5bGUucGFkZGluZyA9ICcxMHB4JztcbiAgbm90aWZpY2F0aW9uLnN0eWxlLmJvcmRlclJhZGl1cyA9ICc1cHgnO1xuICBub3RpZmljYXRpb24uc3R5bGUuekluZGV4ID0gJzk5OTknO1xuXG4gIC8vIEFwcGVuZCB0aGUgbm90aWZpY2F0aW9uIHRvIHRoZSBib2R5IG9mIHRoZSBwYWdlXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobm90aWZpY2F0aW9uKTtcblxuICAvLyBBdXRvbWF0aWNhbGx5IHJlbW92ZSB0aGUgbm90aWZpY2F0aW9uIGFmdGVyIGEgY2VydGFpbiB0aW1lIChlLmcuLCA1IHNlY29uZHMpXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIG5vdGlmaWNhdGlvbi5yZW1vdmUoKTtcbiAgfSwgNTAwMCk7IC8vIEFkanVzdCB0aGUgdGltZSBhcyBuZWVkZWRcbn1cbmZ1bmN0aW9uIHNlbmRNZXNzYWdlVG9CYWNrZ3JvdW5kKFxuICB3ZWJzaXRlOiBXZWJzaXRlLFxuICBvcmlnaW5fY29kZTogc3RyaW5nLFxuICBkZXN0aW5hdGlvbl9jb2RlOiBzdHJpbmcsXG4gIGRlcGFydHVyZTogc3RyaW5nLFxuICBhcnJpdmFsOiBzdHJpbmcsXG4pIHtcbiAgY29uc3QgZmxpZ2h0RGF0YTogRmxpZ2h0RGF0YSA9IHtcbiAgICB3ZWJzaXRlLFxuICAgIG9yaWdpbl9jb2RlLFxuICAgIGRlc3RpbmF0aW9uX2NvZGUsXG4gICAgZGVwYXJ0dXJlLFxuICAgIGFycml2YWwsXG4gIH07XG5cbiAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgIGFjdGlvbjogJ3NlbmRMb2NhbFN0b3JhZ2UnLFxuICAgIGRhdGE6IGZsaWdodERhdGEsXG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbIldlYnNpdGUiLCJ3aW5kb3ciLCJoYXNSdW4iLCJjdXJyZW50VXJsIiwiVVJMIiwibG9jYXRpb24iLCJocmVmIiwiaG9zdCIsImluY2x1ZGVzIiwib3JpZ2luX2NvZGUiLCJwYXRobmFtZSIsInNwbGl0Iiwic3Vic3RyaW5nIiwidG9VcHBlckNhc2UiLCJkZXN0aW5hdGlvbl9jb2RlIiwiZGVwYXJ0dXJlIiwiYXJyaXZhbCIsInNlbmRNZXNzYWdlVG9CYWNrZ3JvdW5kIiwiU0tZU0NBTk5FUiIsImZsaWdodERldGFpbHMiLCJfZmxpZ2h0RGV0YWlscyRzcGxpdCIsIl9mbGlnaHREZXRhaWxzJHNwbGl0MiIsIl9zbGljZWRUb0FycmF5IiwiX2N1cnJlbnRVcmwkcGF0aG5hbWUkIiwic2xpY2UiLCJfY3VycmVudFVybCRwYXRobmFtZSQyIiwiS0FZQUsiLCJzaG93Tm90aWZpY2F0aW9uIiwibWVzc2FnZSIsIm5vdGlmaWNhdGlvbiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInRleHRDb250ZW50Iiwic3R5bGUiLCJwb3NpdGlvbiIsImJvdHRvbSIsInJpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiekluZGV4IiwiYm9keSIsImFwcGVuZENoaWxkIiwic2V0VGltZW91dCIsInJlbW92ZSIsIndlYnNpdGUiLCJmbGlnaHREYXRhIiwiY2hyb21lIiwicnVudGltZSIsInNlbmRNZXNzYWdlIiwiYWN0aW9uIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=