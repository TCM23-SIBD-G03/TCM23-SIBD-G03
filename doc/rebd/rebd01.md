# C1 : Introdução


## Descrição do trabalho
* O objetivo do nosso trabalho é desenvolver um sistema de gestão para uma pequena cadeia de supermercados situados na área da Maia como o objetivo de melhorar a sua logística, e organização de dados.

* Cada supermercado emprega mais de que um  empregado e esse só pode trabalhar para apenas um dos supermercados. Dos empregados que trabalham para um supermercado ,um deles é responsável pela gerência do supermercado e é fundamental para o correto funcionamento do mesmo. 
Deve ser possível na Base de dados, armazenar o salario ,sexo , morada, data de nascimento e numero de telemóvel de cada empregado, e cada um tem deve ter um ID associado.
* Também e necessário ter acesso  aos produtos que cada supermercado vende, uma vez que cada supermercado pode vender uma maior variedade de produtos ou até mesmo vender produtos diferentes. O produto é caracterizados por um, nome ,código de produto ,produtor e o preço, e cada um deve pertencer a um tipo de produto ,para permitir uma melhor gestão dos diferentes produtos do mesmo tipo que os supermercados vendem e dos fornecedores dos diferentes tipos de produtos.

* Os fornecedores que fornecem produtos aos supermercados podem fornecer diferentes tipos de produtos, ou fornecer apenas um tipo de produto.

* Também e possível aos clientes ,tornarem-se afiliados ao aderirem ao cartão cliente para poderem beneficiar de acumulação de pontos na compra de uma certa quantidade de produtos,  caso apresentem o cartão no momento de compra  . Para criar o cartão os clientes tem de fornecer, morada , numero de telemóvel ,email, nome e será atribuído um id a cada cliente.
Logo é necessário armazenar a data de compra, quantidade e o produto comprado de cada cliente de forma a se poder consultar a compras feitas por um cliente afiliado.






## Modelação do problema

### **Entidades**:
  


SUPERMERDADO (supermercadoID, morada (rua, numeroDePorta, freguesia))
*	SupermercadoID: Número identificador exclusivo para cada supermercado (Chave Primária)
*	moradaSupermercado: morada do supermecado constituída por uma rua, número de porta e freguesia.


EMPREGADO (nome, empregadoID, sexo, morada, salario, cargo, dataNascimento; numeroTelemovel)
*	nome: nome completo de cada empregado.
*	empregadoID: Número identificador exclusivo para cada empregado. (Chave Primária)
*	sexo: Género de cada empregado.
*	morada: morada de cada empregado
*	salario: Salário de cada empregado
*	cargo: cargo de cada empregado
*   dataNascimento: data de nascimento de cada empregado
*   numeroTelemovel: número de telemóvel de cada empregado

CLIENTE (nome, morada, ,email,numeroTelemovel, nifCliente)
*   idCliente:numero identificador dos cliente(Chave Primária)
*	nome: nome de cada cliente
*	morada: morada de cada cliente
*	numeroTelemovel: número de telemóvel de cada cliente
*	email: E-mail de cada cliente.
*	nifCliente: Número identificador exclusivo para cada cliente (Chave Primária).

PRODUTO (codProduto, nome, preco) 
*	codPRODUTO: Número identificador exclusivo para cada produto (Chave Primária).
*	nome: nome de cada produto
*   precoSupermecado: Preço do supernmecado de cada produto 

FORNECEDOR (nome, email,iban, nifFornecedor)
*   idFornecedor: numero identificador dos fornecedores(Chave Primária)
*	nome: nome da distribuidora
*   email: E-mail de cada fornecedor
*   iban: iban de cada fornecedor
*   nifFornecedor: Número identificador exclusivo para cada fornecedor .

PEDIDO (dataPedido, numeroPedido)
*   dataPedido: data de cada pedido
*   numeroPedido: Número identificador exclusivo para cada pedido (Chave Primária).


COMPRA (dataCompra, NumeroCompra)
*   dataCompra: data de cada compra
*   NumeroCompra: Número identificador exclusivo para cada compra (Chave Primária).

### **Associações**:
* realiza(Supermercado,pedido)                 N:1 P|T
* fornece(Fornecedor,Produto)                  M:N T|T
* temStock(Supermercado,Produto)               M:N P|P
* trabalhaPara(Empregado,Supermercado)         1:N T|T
* gerencia(Empregado,Supermercado)             1:1 P|T
* enviadaPara(Pedido,Fornecedor)               M:N T|P
* listaPedido(Pedido,Produto)                  M:N T|P
* exerce(Cliente, Compra)                      1:N P|T
* listaCompra(Compra, Produto)                 M:N T|P
* exercidaEm(Comprea,Supermecado)              1:N T|P




---
[< Previous](rei00.md) | [^ Main](/../../) | [Next >](rei02.md)
:--- | :---: | ---: 
