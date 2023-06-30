let text: any

document.onclick = function () {
  if (unsafeWindow.getSelection) {
    text = unsafeWindow.getSelection()
  } else if (document.selection) {
    text = document.selection.createRange()
  }

  const v = text?.toString()
  // 放到粘贴板里，操作浏览器自身的API
  // console.log(text.toString());
  if (v) {
    navigator.clipboard.writeText(v)
  }
}
