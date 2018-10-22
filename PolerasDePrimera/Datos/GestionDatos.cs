using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AccesoDatos
{
    public class GestionDatos
    {
        private DB ConectorDB = new DB();

        public DataTable TraerUsuarios()
        {
            System.Data.SqlClient.SqlCommand comando = new System.Data.SqlClient.SqlCommand();
            DataTable tablaUsuarios = ConectorDB.executeQuery(comando, "dbo.PA_SEL_USUARIOS");

            if (tablaUsuarios == null)
                return new DataTable();
            if (tablaUsuarios.Rows.Count == 0)
                return new DataTable();

            return tablaUsuarios;
        }

        public void UsuariosCambioEstado(string id_usuario, string activo)
        {
            System.Data.SqlClient.SqlCommand comando = new System.Data.SqlClient.SqlCommand();
            comando.Parameters.Add("@ID_USUARIO", SqlDbType.Int).Value = id_usuario;
            comando.Parameters.Add("@estado", SqlDbType.Int).Value = activo;

            ConectorDB.executeQuery(comando, "dbo.PA_UPD_USUARIO_ACTIVO");


        }

        public DataTable TraerUsuariosPorId(int id_usuario)
        {
            System.Data.SqlClient.SqlCommand comando = new System.Data.SqlClient.SqlCommand();
            comando.Parameters.Add("@ID_USUARIO", SqlDbType.Int).Value = id_usuario;
            DataTable tablaUsuarios = ConectorDB.executeQuery(comando, "dbo.PA_SEL_USUARIO");

            if (tablaUsuarios == null)
                return new DataTable();
            if (tablaUsuarios.Rows.Count == 0)
                return new DataTable();

            return tablaUsuarios;
        }
    }
}
