var { buildSchema } = require("graphql");
/** */
var schema = buildSchema(`
    type Empresa {
        id: Int
        name: String
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
    }
`);
/**/
//Example
/*
var schema = buildSchema(`
    type Cliente {
        id: Int
        nombre: String
        telefono: String
    }

    type Query {
        clientes: [Cliente]
        cliente(id: Int): Cliente
    }

    type Mutation {
        addCliente(nombre: String, telefono: String): Cliente
    }

`);
/**/
module.exports = schema;
