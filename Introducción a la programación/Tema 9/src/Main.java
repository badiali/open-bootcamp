public class Main {
    public static void main(String[] args) {
        // Instancia cliente
        Cliente cliente = new Cliente();
        cliente.nombre = "Badiali";
        cliente.edad = 40;
        cliente.telefono = 666999666;
        cliente.credito = 575.57;
        System.out.println("Soy " + cliente.nombre + " tengo " + cliente.edad + " años, mi teléfono es " + cliente.telefono + " y mi crédito es de " + cliente.credito);
        // Instancia trabajador
        Trabajador trabajador = new Trabajador();
        trabajador.nombre = "Victor";
        trabajador.edad = 35;
        trabajador.telefono = 999666999;
        trabajador.salario = 2565.83;
        System.out.println("Soy " + trabajador.nombre + " tengo " + trabajador.edad + " años, mi teléfono es " + trabajador.telefono + " y mi salario es de " + trabajador.salario);
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