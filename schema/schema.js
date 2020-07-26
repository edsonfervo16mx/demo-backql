var { buildSchema } = require("graphql");
/** */
var schema = buildSchema(`
    type Empresa {
        id: Int
        name: String
        description: String
        logo: String
        location: String
        rfc: String
        slogan: String
        mail: String
        telephone: String
        website: String
        situation: String
        state: String
    }

    type Query{
        empresas: [Empresa]
    }

    type Mutation{
        addEmpresa(name: String, description: String, logo: String, location: String, rfc: String, slogan: String, mail: String, telephone: String, website: String): Empresa
        updateEmpresa(id: Int, name: String, description: String, logo: String, location: String, rfc: String, slogan: String, mail: String, telephone: String, website: String): Empresa
    }
`);
module.exports = schema;
