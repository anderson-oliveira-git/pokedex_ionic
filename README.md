![capa_repositorio](https://github.com/anderson-oliveira-git/pokedex_ionic/assets/6682086/46ef3d10-a72e-4c81-b0cc-c3ae1aa47bb5)


Este projeto é uma Pokedex construída utilizando Ionic e Angular. O objetivo é fornecer uma interface intuitiva e responsiva para que os usuários possam explorar informações sobre diversos Pokémon. A aplicação se conecta a uma API pública para obter os dados dos Pokémon e os exibe de forma organizada e acessível.

## Telas do aplicativo
<img src="https://github.com/anderson-oliveira-git/pokedex_ionic/assets/6682086/eecee7f2-22fa-4b17-b29b-aaac9e918372" width="160">
<img src="https://github.com/anderson-oliveira-git/pokedex_ionic/assets/6682086/8a176ce2-892a-479a-abe1-c70128e2bd6f" width="160">
<img src="https://github.com/anderson-oliveira-git/pokedex_ionic/assets/6682086/3ad01c85-9f98-4b93-b08d-9c5203221f15" width="160">
<img src="https://github.com/anderson-oliveira-git/pokedex_ionic/assets/6682086/84442dac-4944-4f39-8a01-ebfaa0067612" width="160">
<img src="https://github.com/anderson-oliveira-git/pokedex_ionic/assets/6682086/7e71db7b-6ed2-44dd-ab81-67c962d4bb39" width="160">

## Abordagem

1. **Configuração do Ambiente**: Iniciar o projeto configurando o ambiente de desenvolvimento com o Ionic CLI e criando uma nova aplicação Angular com suporte a Ionic.
2. **Estrutura do Projeto**: Organizar a estrutura do projeto seguindo boas práticas, com diretórios separados para componentes, serviços, e modelos.
3. **Design Responsivo**: Utilizar os componentes nativos do Ionic para garantir que a aplicação seja responsiva e funcione bem em diferentes dispositivos e tamanhos de tela.
4. **Consumo de API**: Implementar um serviço para consumir dados da API pública de Pokémon, utilizando HttpClient de Angular.
5. **Componentização**: Dividir a aplicação em componentes reutilizáveis para melhorar a manutenibilidade e facilitar testes unitários.
6. **Interface de Usuário**: Focar na criação de uma interface de usuário limpa e intuitiva, usando os componentes visuais do Ionic e práticas de design modernas.
7. **Documentação**: Manter a documentação atualizada, explicando a estrutura do projeto, como configurar o ambiente, rodar a aplicação e executar testes.

## Observação
Limitei a quantidade de Pokémons em 806, pois a biblioteca de imagens com melhor resolução que encontrei só tinham 806 Pokémons. Mas, da forma que fiz, é fácil expandir, basta adicionar uma nova imagem do novo Pokémon na pasta assets/images/pokemons e incrementar o valor do limite no serviço em app/services/pokemons.service.ts.

## Como Executar o Projeto

1. **Clonar o Repositório**:
   ```bash
   git clone https://github.com/anderson-oliveira-git/pokedex_ionic.git
  
2. **Instalar as dependências**:
   ```bash
   npm install

3. **Executar a aplicação**:
   ```bash
   ionic serve

4. **Acessar a aplicação no navegador**:
   ```bash
   http://localhost:8100

5. **Assim que o projeto estiver rodando no navegador, realize os seguintes passos:**\
Clique com o botão direito do mouse na tela onde o projeto estiver rodando e seleciona e opção inspecionar.\
![inspecionar](https://github.com/anderson-oliveira-git/pokedex_ionic/assets/6682086/e45f51c7-fa66-4eb5-9ddf-597a9ac81704)\
E logo em seguida ative a visualização mobile clicando no segundo icone, representado por um notebook e um celular, na barra superior do inspecionar.\
![mobile](https://github.com/anderson-oliveira-git/pokedex_ionic/assets/6682086/ba5619e4-4583-4ccc-86b3-551a5e266be8)


