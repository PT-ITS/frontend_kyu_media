// utils/assetLoader.js
export function loadCSS(href) {
    if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
    }
}

export function unloadCSS(href) {
    const link = document.querySelector(`link[href="${href}"]`);
    if (link) link.remove();
}

export function loadScript(src) {
    if (!document.querySelector(`script[src="${src}"]`)) {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        document.body.appendChild(script);
    }
}

export function unloadScript(src) {
    const script = document.querySelector(`script[src="${src}"]`);
    if (script) script.remove();
}
