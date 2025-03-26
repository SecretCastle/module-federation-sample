export async function loadRemoteComponent({remoteName, moduleName}) {
    try {
        // 1. 确保远程入口已加载
        await loadRemoteEntry(remoteName)

        // 2. 动态导入模块
        const container = window[remoteName]
        const factory = await container.get(moduleName)
        const module = factory()

        return module
    } catch (err) {
        throw new Error(`Failed to load remote component: ${err.message}`)
    }
}

function loadRemoteEntry(remoteName) {
    return new Promise((resolve, reject) => {
        if (window[remoteName]) {
            return resolve()
        }

        const script = document.createElement('script')
        script.src = getRemoteEntryUrl(remoteName)
        script.onload = resolve
        script.onerror = () => {
            reject(new Error(`Failed to load remote entry for ${remoteName}`))
            document.head.removeChild(script)
        }
        document.head.appendChild(script)
    })
}

function getRemoteEntryUrl(remoteName) {
    // 根据环境返回不同的URL
    if (process.env.NODE_ENV === 'development') {
        return `http://localhost:3001/remoteEntry.js`
    }
    return `http://localhost:8000/remoteEntry.js`
}