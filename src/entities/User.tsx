export class User {
  cedula: string;
  nombres: string;
  email: string;
  apellidos: string;
  correo: string;
  fechaNacimiento: Date;
  direccion: string;
  telefono: string;
  estadoVacunacion: boolean;
  tipoVacuna: string;
  fechaVacuna: Date;
  numeroDosis: number;
  password: string;
  username: string;

  constructor(obj) {
    this.cedula = obj.cedula || "";
    this.nombres = obj.nombres || "";
    this.apellidos = obj.apellidos || "";
    this.correo = obj.correo || "";
    this.email = obj.correo || "";
    this.username = obj.correo || "";
    this.password = obj.nombres?.split(" ")[0]?.concat(obj.cedula) || "";
    this.fechaNacimiento = obj.fechaNacimiento || new Date();
    this.direccion = obj.direccion || "";
    this.telefono = obj.telefono || "";
    this.estadoVacunacion = obj.estadoVacunacion || false;
    this.tipoVacuna = obj.tipoVacuna || "";
    this.fechaVacuna = obj.fechaVacuna || "";
    this.numeroDosis = obj.numeroDosis || 0;
  }
}
