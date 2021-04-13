# AppPokemon

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/pokemonMnt`. The app will automatically reload if you change any of the source files.

## Running AppPokemon

- Ao executar a aplicação os pokemons serão apresentados na table;
- Os botões de detalhe e limpar favoritos estarão desabilitados;
- Se algum pokemon for selecionado na table, o botão detalhes será habilitado no topo da tela;
- Também é possível acessar a opção detalhar nas ações da tabela, as mesmas ficam disponíveis em cada linha, no lado direito onde se encontra o ícone (...);
- Além da opção detalhar, é possível favoritar um ou mais Pokemons. A opção esta presente em cada linha da tabela ou acessando a tela de detalhe, estará no canto superior direito da tela;
- Para visualizar somente os Pokemons escolhidos como favoritos, marque a opção que fica acima da tabela "Mostrar Favoritos", com isso aparecerão apenas os marcados;
- Caso queira limpar os favoritos, pode-se usar o botão "Limpar Favoritos" onde todos os selecionados serão zerados, ou se desejar manter os mesmos selecionados e voltar a ver todos os pokemons, basta desmarcar a opção "Mostra Favoritos";
- O filtro que existe na tela princiapl é para buscar por nome do pokemon contido na lista, como a API não disponibiliza uma query por nome, a busca é feita pelos Pokemons que já estão na listagem mostrada, ou seja, contidos na table.
- Caso esteja na tela de detalhe e queira voltar para a tela principal, basta usar o botão voltar;
- A table sempre é carregada de 20 em 20 registros, para trazer os próximos 20, basta usar a opção "carrega mais resultados" contida no rodapé da table;


