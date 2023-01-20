import { gql } from 'apollo-server-express';

const typeDefs = gql`
    scalar GenericScalar 
    scalar BigInt 

    type repoDetail {
        name: String,
        size: Int,
        owner: String,
        private: Boolean,
        public: Boolean,
        numberOfFiles: Int,
        contentOfymlFile: String,
        ativeWebhooks: String
      }
    
      
      extend schema @link(url: "https://specs.apollo.dev/federation/v2.0",import: ["@key", "@shareable"])
      
    #Qureries

    type Query {  
        getAllRepos: Int
        getReposDetial: repoDetail
        
    }



`;

export default typeDefs;
