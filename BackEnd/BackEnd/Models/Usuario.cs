using System.ComponentModel.DataAnnotations;

namespace BackEnd.Models
{
    public class Usuario
    {
        public int Id {get; set; }

        [StringLength(50)]
        public string UserName { get; set; }

        [StringLength(50)]
        public string Contraseña { get; set; }

        [StringLength(50)]
        public string Nombre { get; set; }

        [StringLength(50)]
        public string ApellidoPaterno { get; set; }
        
        [StringLength(50)]
        public string ApellidoMaterno { get; set; }

        public DateTime FechaNacimiento { get; set; }

        public DateTime FechaInicioSesion { get; set; }
    }
}
