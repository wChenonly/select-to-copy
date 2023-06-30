import fs from 'node:fs/promises'

const { version } = JSON.parse(await fs.readFile('package.json', 'utf8'))
const path = 'dist/select-to-copy.user.js'
const content = await fs.readFile(path, 'utf8')
const newContent = content.replace(/\/\/ @version\s+.*$/m, `// @version      ${version}`)
await fs.writeFile(path, newContent, 'utf8')
