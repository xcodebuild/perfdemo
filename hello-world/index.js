fetch('https://cdn.jsdelivr.net/gh/xcodebuild/perfdemo/hello-world/api.json').then(res => {
    return res.json();
}).then(data => {
    const {
        title,
        url,
    } = data;

    document.body.innerHTML = `<h1>${title}</h1><img src="${url}"></img>`;
});
