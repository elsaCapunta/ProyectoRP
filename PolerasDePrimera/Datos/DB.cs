using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AccesoDatos
{
    class DB
    {
        public DB()
        {

        }
        public DataTable getData(string queryString)
        {
            try
            {
                string connString;
                connString = ConfigurationManager.ConnectionStrings["connString"].ConnectionString;
                SqlConnection sqlConn = new SqlConnection(connString);
                SqlCommand comm = new SqlCommand(queryString, sqlConn);

                sqlConn.Open();

                SqlDataReader reader = comm.ExecuteReader();
                DataTable dt = new DataTable();
                dt.Load(reader);

                sqlConn.Close();

                return dt;
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
        }

        public int executeNonQuery(string queryString)
        {
            try
            {
                string connString;
                connString = ConfigurationManager.ConnectionStrings["connString"].ConnectionString;
                SqlConnection sqlConn = new SqlConnection(connString);
                SqlCommand comm = new SqlCommand(queryString, sqlConn);

                comm.Connection.Open();
                int resultado = comm.ExecuteNonQuery();
                comm.Connection.Close();

                return resultado;
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
        }

        public DataTable getData(string spName, string[] param)
        {
            try
            {
                string connString;
                connString = ConfigurationManager.ConnectionStrings["connString"].ConnectionString;
                SqlConnection sqlConn = new SqlConnection(connString);
                SqlCommand comm = new SqlCommand(spName, sqlConn);

                comm.CommandType = CommandType.StoredProcedure;

                foreach (string par in param)
                {
                    comm.Parameters.AddWithValue(par.Split('|')[0], par.Split('|')[1]);
                }

                sqlConn.Open();

                SqlDataReader reader = comm.ExecuteReader();
                DataTable dt = new DataTable();
                dt.Load(reader);

                sqlConn.Close();

                return dt;
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
        }

        public static int executeNonQuery(SqlCommand comando, string nombreProcedimiento)
        {
            SqlConnection sqlConn = null;
            try
            {
                string connString = ConfigurationManager.ConnectionStrings["connString"].ConnectionString;
                if (string.IsNullOrEmpty(connString))
                {
                    throw new Exception("String de conección vacío o no existe");
                }
                sqlConn = new SqlConnection(connString);
                comando.Connection = sqlConn;
                comando.CommandType = CommandType.StoredProcedure;
                comando.CommandText = nombreProcedimiento;

                int resultado = 0;
                sqlConn.Open();

                resultado = comando.ExecuteNonQuery();
                return resultado;
            }
            catch (Exception ex)
            {
                return -2;
                throw new Exception(ex.Message);
            }
            finally
            {
                if (sqlConn != null)
                {
                    sqlConn.Dispose();
                    sqlConn.Close();
                }
            }
        }

        public static int executeScalar(SqlCommand comando, string nombreProcedimiento)
        {
            SqlConnection sqlConn = null;
            try
            {
                string connString = ConfigurationManager.ConnectionStrings["connString"].ConnectionString;
                if (string.IsNullOrEmpty(connString))
                {
                    throw new Exception("String de conección vacío o no existe");
                }
                sqlConn = new SqlConnection(connString);
                comando.Connection = sqlConn;
                comando.CommandType = CommandType.StoredProcedure;
                comando.CommandText = nombreProcedimiento;

                sqlConn.Open();
                int resultado = 0;
                resultado = (int)comando.ExecuteScalar();

                return resultado;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
            finally
            {
                if (sqlConn != null)
                {
                    sqlConn.Dispose();
                    sqlConn.Close();
                }
            }
        }

        public DataTable executeQuery(SqlCommand comando, string nombreProcedimiento)
        {
            SqlConnection sqlConn = null;
            try
            {
                string connString = ConfigurationManager.ConnectionStrings["connString"].ConnectionString;
                if (string.IsNullOrEmpty(connString))
                {
                    throw new Exception("String de conección vacío o no existe");
                }
                sqlConn = new SqlConnection(connString);
                comando.Connection = sqlConn;
                comando.CommandType = CommandType.StoredProcedure;
                comando.CommandText = nombreProcedimiento;

                sqlConn.Open();
                SqlDataReader reader = comando.ExecuteReader();
                DataTable dt = new DataTable();
                dt.Load(reader);

                return dt;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
            finally
            {
                if (sqlConn != null)
                {
                    sqlConn.Dispose();
                    sqlConn.Close();
                }
            }
        }

        public static SqlDataReader executeQueryReader(SqlCommand comando, string nombreProcedimiento)
        {
            SqlConnection sqlConn = null;
            try
            {
                string connString = ConfigurationManager.ConnectionStrings["connString"].ConnectionString;
                if (string.IsNullOrEmpty(connString))
                {
                    throw new Exception("String de conección vacío o no existe");
                }
                sqlConn = new SqlConnection(connString);
                comando.Connection = sqlConn;
                comando.CommandType = CommandType.StoredProcedure;
                comando.CommandText = nombreProcedimiento;

                sqlConn.Open();
                SqlDataReader reader = comando.ExecuteReader();

                return reader;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
            finally
            {
                if (sqlConn != null)
                {
                    sqlConn.Close();
                }
            }
        }

        public static SqlConnection abrirConexion()
        {
            SqlConnection sqlConn = null;
            try
            {
                string connString = ConfigurationManager.ConnectionStrings["connString"].ConnectionString;
                if (string.IsNullOrEmpty(connString))
                {
                    throw new Exception("String de conexión vacío o no existe");
                }
                sqlConn = new SqlConnection(connString);
                sqlConn.Open();

                return sqlConn;
            }
            catch (Exception ex)
            {
                cerrarConexion(sqlConn);
                throw new Exception(ex.Message);
            }
        }

        public static void cerrarConexion(SqlConnection sqlConn)
        {
            if (sqlConn != null)
            {
                sqlConn.Dispose();
                sqlConn.Close();
            }
        }
    }
}
