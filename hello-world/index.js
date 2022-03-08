window.LOAD_DATA = (data) => {
    const {
        title,
        url,
    } = data;

    document.body.innerHTML = `<h1>${title}</h1><img width="100%" src="${url}"></img>`;
}
const tag = document.createElement('script');
tag.src = 'https://cdn.jsdelivr.net/gh/xcodebuild/perfdemo/hello-world/api.jsonp.js';
document.head.appendChild(tag);