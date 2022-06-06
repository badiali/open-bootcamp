public class Main {
    public static void main(String[] args) {
        // Estructura if
        int numeroIf = 0;
        if (numeroIf > 0) {
            System.out.println("El número es positivo");
        } else if (numeroIf < 0) {
            System.out.println("El número es negativo");
        } else {
            System.out.println("El número es 0");
        }
        // Estructura while
        int numeroWhile = 1;
        while (numeroWhile < 3) {
            System.out.println(numeroWhile);
            numeroWhile = numeroWhile + 1;
        }
        // Estructura do while
        int numeroDoWhile = 4;
        do {
            System.out.println(numeroWhile);
            numeroDoWhile = numeroDoWhile + 1;
        }
        while (numeroDoWhile < 3);
        // Estructura for
        for (int numeroFor = 0; numeroFor <= 3; numeroFor = numeroFor + 1) {
            System.out.println(numeroFor);
        }
        // Estructura switch
        var estacion = "verano";
        switch (estacion) {
            case ("primavera"):
                System.out.println("¡Es primavera!");
                break;
            case ("verano"):
                System.out.println("¡Es verano!");
                break;
            case ("otoño"):
                System.out.println("¡Es otoño!");
                break;
            case ("invierno"):
                System.out.println("¡Es invierno!");
                break;
            default :
                System.out.println("Lo siento, la variable no coincide con ninguna estación del año.");
        }
    }
}