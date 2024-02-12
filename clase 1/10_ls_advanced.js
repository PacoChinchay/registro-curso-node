const fs = require('node:fs/promises')
const path = require('node:path')
const picocolors = require('picocolors')

const folder = process.argv[2] ?? '.'

async function ls (directory) {
  let files
  try {
    files = await fs.readdir(folder)
  } catch {
    console.log(picocolors.red(`no se puro leer el directorio: ${folder}`))
    process.exit(1)
  }

  const filesPromises = files.map(async (file) => {
    const filePath = path.join(folder, file)
    let stats
    try {
      stats = await fs.stat(filePath)
    } catch {
      console.log(`no se puro leer el directorio: ${folder}`)
      process.exit(1)
    }

    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'd' : '-'
    const fileSize = stats.size
    const fileModified = stats.mtime.toLocaleString()

    return `${picocolors.bgCyan(fileType)} ${picocolors.blue(
      file.padEnd(20)
    )} ${picocolors.green(
      fileSize.toString().padStart(10)
    )} ${picocolors.yellow(fileModified)}`
  })

  const filesInfo = await Promise.all(filesPromises)
  filesInfo.forEach((fileinfo) => console.log(fileinfo))
}

ls(folder)
