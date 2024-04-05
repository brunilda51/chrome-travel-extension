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
// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === 'getLocalStorage') {
    // Retrieve local storage data
    var localStorageData = _objectSpread({}, localStorage); // Access local storage of the active tab
    // Send the data back to the background script
    chrome.runtime.sendMessage({
      action: 'sendLocalStorage',
      data: localStorageData
    });
  }
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudFNjcmlwdC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0FBLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDQyxTQUFTLENBQUNDLFdBQVcsQ0FBQyxVQUFDQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsWUFBWSxFQUFLO0VBQ3RFLElBQUlGLE9BQU8sQ0FBQ0csTUFBTSxLQUFLLGlCQUFpQixFQUFFO0lBQ3hDO0lBQ0EsSUFBTUMsZ0JBQWdCLEdBQUFDLGFBQUEsS0FBUUMsWUFBWSxDQUFFLENBQUMsQ0FBQztJQUM5QztJQUNBVixNQUFNLENBQUNDLE9BQU8sQ0FBQ1UsV0FBVyxDQUFDO01BQUVKLE1BQU0sRUFBRSxrQkFBa0I7TUFBRUssSUFBSSxFQUFFSjtJQUFpQixDQUFDLENBQUM7RUFDcEY7QUFDRixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4dGVuc2lvbi1jaGFsbGVuZ2UvLi9zcmMvY29udGVudC9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMaXN0ZW4gZm9yIG1lc3NhZ2VzIGZyb20gdGhlIGJhY2tncm91bmQgc2NyaXB0XG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ2dldExvY2FsU3RvcmFnZScpIHtcbiAgICAvLyBSZXRyaWV2ZSBsb2NhbCBzdG9yYWdlIGRhdGFcbiAgICBjb25zdCBsb2NhbFN0b3JhZ2VEYXRhID0geyAuLi5sb2NhbFN0b3JhZ2UgfTsgLy8gQWNjZXNzIGxvY2FsIHN0b3JhZ2Ugb2YgdGhlIGFjdGl2ZSB0YWJcbiAgICAvLyBTZW5kIHRoZSBkYXRhIGJhY2sgdG8gdGhlIGJhY2tncm91bmQgc2NyaXB0XG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyBhY3Rpb246ICdzZW5kTG9jYWxTdG9yYWdlJywgZGF0YTogbG9jYWxTdG9yYWdlRGF0YSB9KTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiY2hyb21lIiwicnVudGltZSIsIm9uTWVzc2FnZSIsImFkZExpc3RlbmVyIiwibWVzc2FnZSIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsImFjdGlvbiIsImxvY2FsU3RvcmFnZURhdGEiLCJfb2JqZWN0U3ByZWFkIiwibG9jYWxTdG9yYWdlIiwic2VuZE1lc3NhZ2UiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==