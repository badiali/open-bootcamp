public class Main {
    public static void main(String[] args) {
        // Instancia cliente
        Cliente cliente = new Cliente();
        cliente.nombre = "Badiali";
        cliente.edad = 40;
        cliente.telefono = 666999666;
        cliente.credito = 575.57;
        System.out.println(cliente.nombre);
        System.out.println(cliente.edad);
        System.out.println(cliente.telefono);
        System.out.println(cliente.credito);
        // Instancia trabajador
        Trabajador trabajador = new Trabajador();
        trabajador.nombre = "Victor";
        trabajador.edad = 35;
        trabajador.telefono = 999666999;
        trabajador.salario = 2565.83;
        System.out.println(trabajador.nombre);
        System.out.println(trabajador.edad);
        System.out.println(trabajador.telefono);
        System.out.println(trabajador.salario);
    }
}

class Persona {
    String nombre;
    int edad;
    int telefono;
}

class Cliente extends Persona {
    double credito;
}

class Trabajador extends Persona {
    double salario;
}