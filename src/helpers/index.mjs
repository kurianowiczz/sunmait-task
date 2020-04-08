export default {
    withToken: (url, req) => {
        const token = req.header('token') || req.query['token'];
        return `${url}?token=${token}`;
    },
    withParamToken: (page, req, otherParams = {}) => {
        const token = req.header('token') || req.query['token'];
        return [page, { token, ...otherParams }];
    }
};
