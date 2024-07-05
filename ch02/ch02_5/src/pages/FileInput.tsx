import type { ChangeEvent } from 'react'

export default function FileInput() {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files: FileList | null = e.target.files

    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file: File = files.item(i) as File
        console.log(`file[${i}]`, file)
      }
    }
  }

  return (
    <div>
      <p>FileInput</p>
      <input type="file" onChange={onChange} multiple accept="image/*" />
    </div>
  )
}

/*
 웹브라우저가 제공하는 FileList타입

 interface FileList {
    readonly length: number;
    item(index: number): File | null;
    [index: number]: File;
 }
*/
