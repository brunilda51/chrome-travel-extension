/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./src/content/index.ts ***!
  \******************************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// Check if the content script has already run
if (!window.hasRun) {
  // Your content script logic here

  // Access local storage data
  var localStorageData = _objectSpread({}, localStorage); // Access local storage of the active tab

  // Send the data back to the background script
  chrome.runtime.sendMessage({
    action: 'sendLocalStorage',
    data: localStorageData
  });

  // Set window.hasRun to true to indicate that the content script has run
  window.hasRun = true;
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudFNjcmlwdC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUdBO0FBQ0EsSUFBSSxDQUFDQSxNQUFNLENBQUNDLE1BQU0sRUFBRTtFQUNsQjs7RUFFQTtFQUNBLElBQU1DLGdCQUFnQixHQUFBQyxhQUFBLEtBQVFDLFlBQVksQ0FBRSxDQUFDLENBQUM7O0VBRTlDO0VBQ0FDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDQyxXQUFXLENBQUM7SUFBRUMsTUFBTSxFQUFFLGtCQUFrQjtJQUFFQyxJQUFJLEVBQUVQO0VBQWlCLENBQUMsQ0FBQzs7RUFFbEY7RUFDQUYsTUFBTSxDQUFDQyxNQUFNLEdBQUcsSUFBSTtBQUN0QixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXh0ZW5zaW9uLWNoYWxsZW5nZS8uL3NyYy9jb250ZW50L2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBXaW5kb3cge1xuICBoYXNSdW4/OiBib29sZWFuO1xufVxuLy8gQ2hlY2sgaWYgdGhlIGNvbnRlbnQgc2NyaXB0IGhhcyBhbHJlYWR5IHJ1blxuaWYgKCF3aW5kb3cuaGFzUnVuKSB7XG4gIC8vIFlvdXIgY29udGVudCBzY3JpcHQgbG9naWMgaGVyZVxuXG4gIC8vIEFjY2VzcyBsb2NhbCBzdG9yYWdlIGRhdGFcbiAgY29uc3QgbG9jYWxTdG9yYWdlRGF0YSA9IHsgLi4ubG9jYWxTdG9yYWdlIH07IC8vIEFjY2VzcyBsb2NhbCBzdG9yYWdlIG9mIHRoZSBhY3RpdmUgdGFiXG5cbiAgLy8gU2VuZCB0aGUgZGF0YSBiYWNrIHRvIHRoZSBiYWNrZ3JvdW5kIHNjcmlwdFxuICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IGFjdGlvbjogJ3NlbmRMb2NhbFN0b3JhZ2UnLCBkYXRhOiBsb2NhbFN0b3JhZ2VEYXRhIH0pO1xuXG4gIC8vIFNldCB3aW5kb3cuaGFzUnVuIHRvIHRydWUgdG8gaW5kaWNhdGUgdGhhdCB0aGUgY29udGVudCBzY3JpcHQgaGFzIHJ1blxuICB3aW5kb3cuaGFzUnVuID0gdHJ1ZTtcbn1cbiJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJoYXNSdW4iLCJsb2NhbFN0b3JhZ2VEYXRhIiwiX29iamVjdFNwcmVhZCIsImxvY2FsU3RvcmFnZSIsImNocm9tZSIsInJ1bnRpbWUiLCJzZW5kTWVzc2FnZSIsImFjdGlvbiIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9