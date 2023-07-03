import { unsafeWindow } from '$'

let text: any

const body = document.querySelector('body')

body?.addEventListener('mouseup', e => {
  if ((e.target as HTMLElement)?.isContentEditable || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
    return
  }
  if (unsafeWindow.getSelection) {
    text = unsafeWindow.getSelection()
  } else if (document.getSelection) {
    text = document.getSelection()
  }
  const v = text?.toString()
  v && navigator.clipboard.writeText(v)
})
