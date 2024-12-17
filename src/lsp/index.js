import * as runServer from './server-runner.js'
import log from 'electron-log/main'
import { fileURLToPath } from 'url'
import path from 'path'
import { app } from 'electron'
import * as settings from '../settings.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const init = async () => {
    const lspPath = app.isPackaged
        ? path.join(process.resourcesPath, 'phpactor.phar')
        : path.join(__dirname, '/../../assets/phpactor.phar')

    console.log('Initiating PHP language server')

    try {
        await runServer.runLanguageServer({
            serverName: 'PHP',
            pathName: '/',
            serverPort: 54331,
            runCommand: settings.getSettings().php,
            runCommandArgs: [lspPath, 'language-server'],
            spawnOptions: {
                env: {
                    ...process.env,
                },
                shell: true,
            },
            wsServerOptions: {
                noServer: true,
                perMessageDeflate: false,
            },
        })
    } catch (error) {
        log.error('Error starting PHP language server', error)
    }
}

export const shutdown = async () => {
    console.log('Shutting down PHP language server')
    await runServer.shutdown()
}
