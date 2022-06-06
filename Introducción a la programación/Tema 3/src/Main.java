public class Main {
    public static void main(String[] args) {
        // Primera parte del ejercicio
        int resultado;
        resultado = suma( 10, 20, 30 );
        System.out.println(resultado);
        // Segunda parte del ejercicio
        Coche miCoche = new Coche();
        miCoche.incrementaPuertas();
        System.out.println(miCoche.puertas);
    }
    public static int suma(int a, int b, int c) {
        return a + b + c;
    }
}

class Coche {
    public int puertas = 4;
    public void incrementaPuertas() {
        this.puertas++;
    }
}