class Get{
static async getPost() {
    try {
        const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
        return resp.json

    }catch(e) {
        console.error(e)

    }
}






static async getUsers() {
    try {
        const resp = await fetch("https://jsonplaceholder.typicode.com/users");
        return resp.json

    }catch(e) {
        console.error(e)

    }
}

}



export default Get