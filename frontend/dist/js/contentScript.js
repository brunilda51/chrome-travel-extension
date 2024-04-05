/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./src/content/index.ts ***!
  \******************************/
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  var dogImg = document.createElement('img');
  dogImg.src = msg;
  document.body.appendChild(dogImg);
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudFNjcmlwdC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBQSxNQUFNLENBQUNDLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDQyxXQUFXLENBQ2xDLFVBQVNDLEdBQUcsRUFBRUMsTUFBTSxFQUFFQyxZQUFZLEVBQUU7RUFDbEMsSUFBTUMsTUFBd0IsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQzlERixNQUFNLENBQUNHLEdBQUcsR0FBR04sR0FBRztFQUNoQkksUUFBUSxDQUFDRyxJQUFJLENBQUNDLFdBQVcsQ0FBQ0wsTUFBTSxDQUFDO0FBQ25DLENBQ0YsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXh0ZW5zaW9uLWNoYWxsZW5nZS8uL3NyYy9jb250ZW50L2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihcbiAgZnVuY3Rpb24obXNnLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xuICAgIGNvbnN0IGRvZ0ltZzogSFRNTEltYWdlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGRvZ0ltZy5zcmMgPSBtc2c7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb2dJbWcpO1xuICB9XG4pOyJdLCJuYW1lcyI6WyJjaHJvbWUiLCJydW50aW1lIiwib25NZXNzYWdlIiwiYWRkTGlzdGVuZXIiLCJtc2ciLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJkb2dJbWciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJib2R5IiwiYXBwZW5kQ2hpbGQiXSwic291cmNlUm9vdCI6IiJ9