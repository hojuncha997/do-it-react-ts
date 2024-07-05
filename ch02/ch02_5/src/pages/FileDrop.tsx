import type { DragEvent } from 'react'

export default function FileDrop() {
  const onDragOver = (e: DragEvent) => {
    e.preventDefault()
  }

  const onDrop = (e: DragEvent) => {
    e.preventDefault() // 새로운 창을 열어 보여주는 것을 방지
    const files = e.dataTransfer.files // 드롭한 파일 목록

    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file: File | null = files.item(i) //혹은 file = files[i]
        console.log(`file[${i}]:`, file)
      }
    }
  }

  return (
    <div>
      <p>FileDrop</p>
      <div onDrop={onDrop} onDragOver={onDragOver}>
        <h1>Drop image file over me</h1>
      </div>
    </div>
  )
}
