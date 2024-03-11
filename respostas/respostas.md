```
Pegunta 1) Observe o trecho de código abaixo: 
 	int INDICE = 13, SOMA = 0, K = 0; 
 	enquanto K < INDICE faça 
	{ 
		K = K + 1; 
		SOMA = SOMA + K; 
	} 
 	imprimir(SOMA); 
Ao final do processamento, qual será o valor da variável SOMA? 
```
**Resposta**: 91 ; Script copiado no arquivo pergunta1.js 
```
Pegunta 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência. 
```
**Resposta**: o teste tradicional para checar se um número é Fibonacci é checar se o número é quadrado perfeito ; porém, esse método não foi usado nesse script pois a pergunta pede para gerar a sequência de fibonacci.  

Como estou usando javascript pois é o que tem instalado nessa máquina que estou usando (não é minha principal, pois estou de férias), optei por usar valores dummy para testar a função ao invés de passar o valor a partir do CLI com a interface readline do Node.JS pois acredito que isso foge da complexidade esperada.


Script encontrado no arquivo "pergunta2.js".

```
Pegunta 3) Descubra a lógica e complete o próximo elemento:  

a) 1, 3, 5, 7, ___  
b) 2, 4, 8, 16, 32, 64, ____  
c) 0, 1, 4, 9, 16, 25, 36, ____  
d) 4, 16, 36, 64, ____  
e) 1, 1, 2, 3, 5, 8, ____  
f) 2,10, 12, 16, 17, 18, 19, ____  
```
**Resposta**:
a) 9 (progressão aritmética)

b) 128 (progressão geométrica)

c) 49 (sequência dos quadrados dos números naturais)

d) 100 (sequência dos quadrados dos números naturais pares excluindo 0)

e) 13 (sequência de fibonacci)

f) 

```
Pegunta 4) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.

Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?  
```
**Resposta**:
Ligar o interruptor 1 e ir a sala determina uma lâmpada.
Deslgiar o interruptor 1, ligar o interruptor 2 e ir a sala determina a segunda lâmpada e, por eliminação, a terceira lâmpada.

```
Pegunta 5) Escreva um programa que inverta os caracteres de um string. 

```
**Resposta**: Script no arquivo perguntas5.js