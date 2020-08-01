var { buildSchema } = require("graphql");
const { GraphQLScalarType, Kind } = require("graphql");

DateTime: new GraphQLScalarType({
  name: "DateTime",
  description: "DateTime scalar type",
  parseValue(value) {
    return new Date(value);
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return parseInt(ast.value, 10);
    }
    return null;
  },
  serialize(value) {
    const date = new Date(value);
    return date.toISOString();
  },
});

/** */
var schema = buildSchema(`
    scalar DateTime
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

    type Invitacion {
        id: Int
        name: String
        expiration: DateTime
        empresaId: Int
        Empresa:Empresa
        situation: String
        state: String
    }

    type TipoUsuario{
      id: Int
      name: String
      description: String
      badge: String
      situation: String
      state: String
    }

    type Usuario {
      id: Int
      name: String
      email: String
      password: String
      code: Int
      photo: String
      empresaId: Int
      Empresa: Empresa
      situacion:String
      state: String
  }

    type Query{
        empresas: [Empresa]
        invitaciones: [Invitacion]
        tipousuarios: [TipoUsuario]
        usuarios: [Usuario]
    }

    type Mutation{
        addEmpresa(name: String, description: String, logo: String, location: String, rfc: String, slogan: String, mail: String, telephone: String, website: String): Empresa
        updateEmpresa(id: Int, name: String, description: String, logo: String, location: String, rfc: String, slogan: String, mail: String, telephone: String, website: String): Empresa
        addInvitacion(name: String, expiration: DateTime, empresaId: Int) : Invitacion
        updateInvitacion(id: Int,name: String, expiration: DateTime, empresaId: Int) : Invitacion
        addTipoUsuario(name: String, description: String, badge: String ): TipoUsuario
        updateTipoUsuario(id: Int,name: String, description: String, badge: String ): TipoUsuario
    }

    

`);

module.exports = schema;
