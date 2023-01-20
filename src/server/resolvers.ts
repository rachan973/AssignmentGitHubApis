import {
    getAllRepos, getReposDetial
} from './../client/api';
import {Router} from '../middleware/router';
const resolvsers = {
    Query: {
        getAllRepos: Router(getAllRepos),
        getReposDetial: Router(getReposDetial),
        
    },
    Mutation: {
    },
   
};

export default resolvsers;
