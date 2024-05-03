addEventListener("fetch", (event) => {
    event.respondWith(handleRequest(event.request))
})

const proxyList = [
    // "https://rss.shab.fun/",
    // "https://rsshub.rssforever.com/",
    "https://vercel.canihave.fun/",
    "https://rsshub.canihave.fun/",
    "https://rsshub.app/",
];

async function handleRequest(request: Request<unknown, CfProperties<unknown>>) {
    // 获取请求的 URL
    const reqUrl = request.url;
    // 获取 path
    const path = new URL(reqUrl).pathname;
    // 随机选择一个代理
    let proxyHost = proxyList[Math.floor(Math.random() * proxyList.length)];
    // 去除代理 URL 的最后一个 /
    proxyHost = proxyHost.replace(/\/$/, '');
    // 拼接代理 URL
    const proxyUrl = proxyHost + path;

    // // debug
    // return new Response(JSON.stringify({ reqUrl, path, proxyUrl }), {
    //     headers: { "Content-Type": "application/json" },
    // });

    // // 返回代理请求的结果
    // return fetch(proxyUrl);

    // 请求代理 URL
    const curRes = await fetch(proxyUrl);
    // 判断是否为失败
    if (curRes.status >= 400) {
        // 返回失败
        return new Response(JSON.stringify({ reqUrl, path, proxyUrl }), {
            headers: { "Content-Type": "application/json" },
        });
    } else {
        // 返回成功
        return curRes;
    }

}

// bilibili/user/video/44744006
