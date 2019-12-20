export default {
    async get() {
        return {
            data: [{
                id: 1,
                name: 'test',
                contact: '73309621702'
            }, {
                id: 2,
                name: 'test2',
                contact: "738451354353"
            }]
        }
    },
    async post(path: any, data: any) {
        return {
            data: {
                id: 3,
                name: data.name
            }
        }
    },
    async delete(path: any) { },
    async put(path: any, data: any) {
        return {
            data: {
                id: path[path.length - 1],
                name: data.name
            }
        }
    }
}
