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

    type Privilegio{
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
      TipoUsuario: TipoUsuario
      situacion:String
      state: String
  }

  type Perfil{
    id: Int
    description: String
    usuarioId: Int
    Usuario: Usuario
    situation: String
    state: String
  }

    type Query{
        empresas: [Empresa]
        invitaciones: [Invitacion]
        tipousuarios: [TipoUsuario]
        privilegios: [Privilegio]
        usuarios: [Usuario]
        perfiles:[Perfil]
    }

    type Mutation{
        addEmpresa(name: String, description: String, logo: String, location: String, rfc: String, slogan: String, mail: String, telephone: String, website: String): Empresa
        updateEmpresa(id: Int, name: String, description: String, logo: String, location: String, rfc: String, slogan: String, mail: String, telephone: String, website: String, situation: String, state: String): Empresa
        addInvitacion(name: String, expiration: DateTime, empresaId: Int) : Invitacion
        updateInvitacion(id: Int,name: String, expiration: DateTime, empresaId: Int, situation: String, state: String) : Invitacion
        addTipoUsuario(name: String, description: String, badge: String ): TipoUsuario
        updateTipoUsuario(id: Int,name: String, description: String, badge: String,situation: String, state: String ): TipoUsuario
        addPrivilegio(name: String, description: String, badge: String ): Privilegio
        updatePrivilegio(id: Int, name: String, description: String, badge: String,situation: String, state: String  ): Privilegio
        addUsuario(name: String, email: String, password: String, code: Int, photo: String, empresaId: Int, tipoUsuarioId: Int): Usuario
        updateUsuario(id: Int,name: String, email: String, password: String, code: Int, photo: String, empresaId: Int, tipoUsuarioId: Int,situation: String, state: String ): Usuario
        addPerfil(description: String,usuarioId: Int): Perfil
    }

    

`);

module.exports = schema;
