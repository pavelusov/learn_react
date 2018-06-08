const getFakeMembers = count => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    const url = `https://api.randomuser.me/?nat=US&results=${count}`;
    request.open("GET", url);
    request.onload = () => {
        (request.status === 200) ?
            resolve(JSON.parse(request.response).results):
            reject(Error(request.statusText))
    };
    request.onerror = (err) => reject(err);
    request.send();
});

export default getFakeMembers;
