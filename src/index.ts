export const resizeImage = async (blob: Blob, width: number, height: number) => new Promise(resolve => {
  const reader = new FileReader()
  reader.readAsDataURL(blob)
  reader.onload = () => {
    let image = new Image()
    image.src = typeof reader.result === 'string' ? reader.result : ''
    image.onload = function() {
      let canvas = document.createElement('canvas')
      canvas.width = width
      canvas.height = height
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, width, height)
        resolve(canvas.toDataURL(`image/base64`, 1))
      }

    }
  }
})