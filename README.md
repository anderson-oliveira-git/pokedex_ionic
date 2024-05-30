![capa_repositorio](https://github.com/anderson-oliveira-git/pokedex_ionic/assets/6682086/46ef3d10-a72e-4c81-b0cc-c3ae1aa47bb5)


Este projeto é uma Pokedex construída utilizando Ionic e Angular. O objetivo é fornecer uma interface intuitiva e responsiva para que os usuários possam explorar informações sobre diversos Pokémon. A aplicação se conecta a uma API pública para obter os dados dos Pokémon e os exibe de forma organizada e acessível.

## Abordagem

1. **Configuração do Ambiente**: Iniciar o projeto configurando o ambiente de desenvolvimento com o Ionic CLI e criando uma nova aplicação Angular com suporte a Ionic.
2. **Estrutura do Projeto**: Organizar a estrutura do projeto seguindo boas práticas, com diretórios separados para componentes, serviços, e modelos.
3. **Design Responsivo**: Utilizar os componentes nativos do Ionic para garantir que a aplicação seja responsiva e funcione bem em diferentes dispositivos e tamanhos de tela.
4. **Consumo de API**: Implementar um serviço para consumir dados da API pública de Pokémon, utilizando HttpClient de Angular.
5. **Componentização**: Dividir a aplicação em componentes reutilizáveis para melhorar a manutenibilidade e facilitar testes unitários.
6. **Interface de Usuário**: Focar na criação de uma interface de usuário limpa e intuitiva, usando os componentes visuais do Ionic e práticas de design modernas.
7. **Documentação**: Manter a documentação atualizada, explicando a estrutura do projeto, como configurar o ambiente, rodar a aplicação e executar testes.

## Observação
Limitei a quantidade de Pokémons em 806, pois a biblioteca de imagens com melhor resolução que encontrei só tinha 806 Pokémons. Mas, da forma que fiz, é fácil expandir, basta adicionar uma nova imagem do novo Pokémon na pasta assets/images/pokemons e incrementar o valor do limite no serviço em app/services/pokemons.service.ts.

## Funcionalidades Principais

### Listagem de pokemons
- Lista todos os pokemons da PokeAPI

### Mostra os detalhes de cada pokemon especifico
- Ao clicar em qualquer pokemon que foi listado, o app mostra uma tela com todas as informações sobre aquele pokemon.

### Salva pokemons como favoritos
- A tela de detalhe oferece um botão com icone de coração, clicando nele, é possível salvar o pokemon nos favoritos.
- Um pokemon só pode ser salvo uma vez, um alerta será emetido quando o pokemon já está na lista de favoritos.

### Remove todos os favoritos
- A tela de favoritos contém um botão para remover todos da lista.
- Um alerta será emetido caso esse botão seja pressionado, se confirmado a exclusão, todos serão removidos e você será redirecionado para a tela que lista os pokemons.

### Remove um por vez dos favoritos
- Remove apenas o pokemon que for clicado na tela de favoritos.
- Ao clicar em um podemon, um alerta será emitido, perguntando se deseja remover esse pokemon especifico dos favoritos.

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


