public class Main {
    public static void main(String[] args) {
        // Instancia del objeto Persona
        Persona persona = new Persona();
        // Le damos valores a las propiedades
        persona.setNombre("Badiali");
        persona.setEdad(40);
        persona.setTelefono(666999666);
        // Mostramos los valores por consola
        System.out.println(persona.getNombre());
        System.out.println(persona.getEdad());
        System.out.println(persona.getTelefono());
    }
}

class Persona {
    private int edad;
    private String nombre;
    private int telefono;

    // Setter y Getter para edad
    public void setEdad(int edad) {
        this.edad = edad;
    }
    public int getEdad() {
        return this.edad;
    }

    // Setter y Getter para nombre
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public String getNombre() {
        return this.nombre;
    }

    // Setter y Getter para telefono
    public void setTelefono(int telefono) {
        this.telefono = telefono;
    }
    public int getTelefono() {
        return this.telefono;
    }
}