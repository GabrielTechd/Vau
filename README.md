# API Vau

Esta é uma API em construção, projetada para realizar cálculos avançados de Vau, com o objetivo de reduzir os impostos de INSS em obras. A API utiliza cálculos baseados em metodologias desenvolvidas por especialistas na área, garantindo precisão e eficiência.

## Funcionalidades

- **Gerenciamento de Tarefas**: Rotas para listar tarefas.
- **Consulta à Taxa Selic**: Integração com a API do Banco Central para obter a taxa Selic.
- **Cálculos de Vau**: Implementação de algoritmos especializados para otimizar os valores de impostos em projetos de construção.

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/GabrielTechd/Vau
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

   ```env
   PORT=3000
   API_SELIC=https://api.bcb.gov.br/dados/serie/bcdata.sgs.4189/dados?formato=json
   ```

4. Inicie o servidor:
   ```bash
   npm start
   ```

## Deploy na Vercel

1. Certifique-se de que o projeto está versionado no GitHub.
2. No painel da Vercel, importe o repositório.
3. Configure as variáveis de ambiente na aba "Environment Variables" da Vercel:
   - `PORT=3000`
   - `API_SELIC=https://api.bcb.gov.br/dados/serie/bcdata.sgs.4189/dados?formato=json`
4. Faça o deploy e acesse a URL gerada pela Vercel.

## Tecnologias Utilizadas

- Node.js
- Express
- Axios

## Licença

Este projeto está licenciado sob a licença MIT.
