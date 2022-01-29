/*
Tendo como entrada a altura e o sexo(codificadodaseguinteforma: 1:feminino2:masculino)

de uma pessoa,construa um programa que calcule e imprima seu peso ideal,utilizando as seguintes Fórmulas:-parahomens:(72.7*Altura)–58-paramulheres:(62.1*Altura)–44.7


 */


//Opção e validação do usuario
function enterUser(opcao){

	//enquanto verdadeiro execulte;
	while (true){

		alert("#SEJA BEM VINDO AO PESO IDEAL#")

			let sexo = prompt("Seu sexo (1-Masculino | 2 - Feminino | 0 - Sair): ");

			if(sexo == '1'){
				alert("\nMuito bem vamos consultar o melhor peso para voce que é do sexo masculino!!\n");
				console.log(calMasculino());
			}
			else if(sexo == "2"){
				alert("\nMuito bem vamos achar o peso ideal para voce que é do sexo feminino!!\n")
				console.log(calFeminino());
			}
			else if(sexo == "0"){
				alert("Obrigado por cuidar de sua saude!!")
			}
			//Barramento de acesso ao usuario que colocar algum caracter ou espaço.
			else if(sexo !== "1" || sexo !== "2"){
				console.log("acesso negado!!")
			}


		//opção de usuario para ver se vai cintinuar seguindo no programa;
		opcao = prompt("deseja continuar com o programa(Y/n)");

			if(opcao == "y"){

				let sexo = prompt("Seu sexo (1-Masculino | 2 - Feminino | 0 - Sair): ");

				if(sexo == '1'){
					alert("\nMuito bem vamos consultar o melhor peso para voce que é do sexo masculino!!\n");
					console.log(calMasculino());
				}
				else if(sexo == "2"){
					alert("\nMuito bem vamos achar o peso ideal para voce que é do sexo feminino!!\n")
					console.log(calFeminino());
				}
				else if(sexo == "0"){
					alert("\nObrigado por cuidar de sua saude!!\n")
				}
			}
			else if(opcao == "n"){
				console.log("Até a proxima!!")
				break
		}
	}
}

//funcão que calcula o peso masculino;
function calMasculino(){

		let altura =  prompt("Digite a sua altura: ");
		let peso = prompt("Digite o seu peso: ");

		calculo = (peso * altura) - 58

		console.log("O peso masculino ideal para voce seria:",calculo,"Kg")
}

//funcao que calcula o peso femino;
function calFeminino(){

	let altura =  prompt("Digite a sua altura: ");
	let peso = prompt("Digite o seu peso: ");

	calculo = (peso * altura) - 44.7

	console.log("O peso feminino ideal para voce seria:",calculo,"Kg")

}

enterUser();


