<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="css/container.css">
        <link rel="stylesheet" href="css/navbar.css">
        <script src="https://unpkg.com/scrollreveal"></script>
    <title>Fizz A3</title>
</head>
<body>
    <ul>
        <li><a href="#">apresentação</a></li>
        <li><a href="#sobre-mim">sobre mim</a></li>
        <li><a href="#languages">hard-skill</a></li>
        <li><a href="#projetos">projetos</a></li>
    </ul>

    <div class="container apresentacao" id="apresentacao">
        <h1 class="title">apresentação</h1>
        <p class="text digitacao">
            Seja bem-vindo ao meu portfólio, eu criei este portfílio com o intuito
            de usar um pouco de tudo o que eu aprendi de front-end, e adicionarei link para minhas redes, como o LinkedIn e GITHUB.
            E mais pro final do site, você poderá ver alguns dos projetinhos que eu já criei.
            Espero que goste.
        </p>
    </div>
    
    <div class="container sobre-mim" id="sobre-mim">
        <h1 class="title">sobre mim</h1>
    </div>
    
    <div class="container languages" id="languages">
        <h1 class="title">Hard-skill</h1>
        <div class="area-lang">
            <div class="lang">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                <p class="name-lang">python</p>
            </div>
            <div class="lang">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                <p class="name-lang">javascript</p>
            </div>
            <div class="lang">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                <p class="name-lang">html</p>
            </div>
            <div class="lang">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                <p class="name-lang">css</p>
            </div>
            <div class="lang">             
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />  
                <p class="name-lang">java</p>
            </div>
            <div class="lang">             
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" />
                <p class="name-lang">arduino</p>
            </div>
        </div>
    </div>

    <div class="container projetos" id="projetos">
        <h1 class="title">projetos</h1>
    </div>
</body>
<script src="js/ScrollReveal.js"></script>
<script src="js/BlinkText.js"></script>
</html>
DERIVADA E INTEGRAL OPP
import java.util.Scanner;

public class Funcao {
    private int a;
    private int b;

    public Funcao(int a, int b) {
        this.a = a;
        this.b = b;
    }

    public int[] calcularIntegral() {
        int[] resultado = new int[6];
        int ax = a;
        int bx = b;
        int cont = 1;
        int index = 0;

        while (cont <= 3) {
            ax = ax * bx;
            bx = bx - 1;
            resultado[index] = ax;
            index++;
            resultado[index] = bx;
            index++;
            cont++;
        }
        return resultado;
    }

    public int[] calcularDerivada() {
        int[] resultado = new int[6];
        int ax = a;
        int bx = b;
        int cont = 1;
        int index = 0;

        while (cont <= 3) {
            ax = ax / bx;
            bx = bx + 1;
            resultado[index] = ax;
            index++;
            resultado[index] = bx;
            index++;
            cont++;
        }
        return resultado;
    }

    public static void main(String[] args) {
        Scanner leitor = new Scanner(System.in);
        System.out.print("Digite o valor de A: ");
        int valorA = leitor.nextInt();
        System.out.print("Digite o valor de B: ");
        int valorB = leitor.nextInt();

        Funcao funcao = new Funcao(valorA, valorB);

        int[] integral = funcao.calcularIntegral();
        int[] derivada = funcao.calcularDerivada();

        System.out.println("Integral:");
        imprimirArray(integral);

        System.out.println("Derivada:");
        imprimirArray(derivada);

        leitor.close();
    }

    private static void imprimirArray(int[] array) {
        for (int i = 0; i < array.length; i++) {
            System.out.print(array[i] + " ");
        }
        System.out.println();
    }
}