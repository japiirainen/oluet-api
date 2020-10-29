import Downloader from 'nodejs-file-downloader'
import fs from 'fs'

const delFile = async (fileToDel: string) => {
   try {
      await fs.unlink(fileToDel, () => console.log('success deleting file'))
   } catch (e) {
      console.error(e)
   }
}

export const getNewData = async (
   uri: string,
   destination: string,
   fileToDel: string
): Promise<void> => {
   await delFile(fileToDel)
   const downloader = new Downloader({
      url: uri,
      directory: destination,
      onProgress: function (percentage: string) {
         console.log('% ', percentage)
      },
   })

   await downloader.download()
}
