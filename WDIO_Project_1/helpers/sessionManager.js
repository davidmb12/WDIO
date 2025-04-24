const fs = require('fs')
const path = require('path')

const SESSION_PATH = path.resolve(__dirname, '../session.json');

module.exports ={
    async saveSession(){
        const cookies = await browser.getCookies();
        const localStorage = await browser.execute(()=>{
            let data = {};
            for (let i =0; i< localStorage.length; i++){
                const key = localStorage.key(i);
                data[key]=localStorage.getItem(key);
            }
            return data;
        });

        fs.writeFileSync(SESSION_PATH,JSON.stringify({cookies,localStorage},null,2));
    },
    // async loadSession(_url,{ featureFlags = [] } = {}) {
    //     if (!fs.existsSync(SESSION_PATH)) return;
    
    //     const { cookies, localStorage } = JSON.parse(fs.readFileSync(SESSION_PATH));
    
    //     // ⚠️ Visita una página con acceso a localStorage
    //     await browser.url(_url);
    
    //     // ✅ Establecer cookies
    //     for (const cookie of cookies) {
    //         if (cookie.expiry) {
    //             cookie.expiry = Math.floor(cookie.expiry);
    //         }
    //         await browser.setCookies(cookie);
    //     }
    
    //     // ✅ Recargar para aplicar cookies
    //     await browser.refresh();
    
    //     // ✅ Esperar a que se cargue el documento completamente
    //     await browser.waitUntil(
    //         async () => (await browser.execute(() => document.readyState)) === 'complete',
    //         {
    //             timeout: 10000,
    //             timeoutMsg: 'La página no cargó completamente',
    //         }
    //     );
    
    //     // ✅ Establecer localStorage si es posible
    //     await browser.execute((data) => {
    //         try {
    //             for (let key in data) {
    //                 localStorage.setItem(key, data[key]);
    //             }
    //         } catch (e) {
    //             console.warn('No se pudo acceder a localStorage', e.message);
    //         }
    //     }, localStorage);

    //     if (featureFlags.length > 0) {
    //         await browser.execute((flags) => {
    //             localStorage.setItem('featureFlags', flags.join(','));
    //         }, featureFlags);
    
    //         await browser.setCookies({
    //             name: 'featureFlags',
    //             value: featureFlags.join(','),
    //             domain: 'stage.acrobat.adobe.com',
    //             path: '/',
    //         });
    //     }
    //     // ⚠️ Recargar otra vez si es necesario que `localStorage` se aplique antes de continuar
    //     await browser.refresh();
    // }
    async loadSession({ featureFlags = {} } = {}) {
        if (!fs.existsSync(SESSION_PATH)) return;
    
        const { cookies, localStorage } = JSON.parse(fs.readFileSync(SESSION_PATH));
    
        await browser.url('https://stage.acrobat.adobe.com/us/en/?app%21versions=latest');
    
        for (const cookie of cookies) {
            if (cookie.expiry) cookie.expiry = Math.floor(cookie.expiry);
            await browser.setCookies(cookie);
        }
    
    
        await browser.waitUntil(
            async () => (await browser.execute(() => document.readyState)) === 'complete',
            { timeout: 10000 }
        );
    
        await browser.execute((local) => {
            for (let key in local) localStorage.setItem(key, local[key]);
        }, localStorage);
    
        if (featureFlags.sessionStorage) {
            await browser.execute((flags) => {
                for (let key in flags) sessionStorage.setItem(key, flags[key]);
                window.location.reload();
            }, featureFlags.sessionStorage);
        } else {
            await browser.refresh();
        }
    }
}