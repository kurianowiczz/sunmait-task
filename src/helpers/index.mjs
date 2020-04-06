export default {
    withToken: (url, req) => {
        let token = req.header('token') || req.query['token'];
        return `${url}?token=${token}`;

    },
};
