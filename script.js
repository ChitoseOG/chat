// メッセージ送信
function sendMessage() {
  var inputField = document.getElementById("message-input-field");
  var messageText = inputField.value;

  // テキストをエスケープしてメッセージリストに追加
  var messageElement = document.createElement("div");
  messageElement.className = "message-out";
  messageElement.innerText = escapeHtml(messageText);
  document.getElementById("message-list").appendChild(messageElement);

  // 入力欄をクリア
  inputField.value = "";
}

// メッセージ受信
function receiveMessage(messageText) {
  // テキストをエスケープしてメッセージリストに追加
  var messageElement = document.createElement("div");
  messageElement.className = "message-in";
  messageElement.innerText = escapeHtml(messageText);
  document.getElementById("message-list").appendChild(messageElement);
}

// テキストをエスケープする
function escapeHtml(text) {
  var map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, function(m
