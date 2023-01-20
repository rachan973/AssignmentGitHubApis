const { generateOptions } = require('../util');
const https = require('https');

export const getAllRepos = async (
    { parent, args, context, info }: { parent: any; args: any; context: any; info: any },
    next: Function,
) => {
    try {
            const user = args.userName;
            const options = generateOptions('/users/' + user + 'repos')
            https.get(options, function (apiResponse: any) {
                console.log(apiResponse)
                return 3
            }).on('error', (e: any) => {
                console.log(e);
                return e
            })
    } catch (error) {
        console.log('Error in getting repos', error);
        return error;
    }
};
export const getReposDetial = async (
    { parent, args, context, info }: { parent: any; args: any; context: any; info: any },
    next: Function,
) => {
    try {
        
        const user = args.userName;
        const repoName = args.repoName;
            const options = generateOptions('/repos/' + user + repoName)
            https.get(options, function (apiResponse: any) {
                var details = repoName
                return details
            }).on('error', (e: any) => {
                console.log(e);
                return e
            })
        return 3;
    } catch (error) {
        console.log('Error in getting repos', error);
        return error;
    }
};
