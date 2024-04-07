# Pass.in API

Este projeto é uma API desenvolvida na trilha de Node durante o evento NLW Unite da Rocketseat. Durante o desenvolvimento, foram aplicadas boas práticas e construída uma API utilizando Node.js, Fastify, Prisma, TypeScript, Swagger e SwaggerUI para a documentação.

## Funcionalidades

O projeto conta com as seguintes funcionalidades:

- Criar um evento
- Registrar um participante no evento
- Fazer check-in de um participante em um evento específico
- Receber dados do evento
- Receber dados da badge de um participante específico em um evento
- Requisitar os participantes de um dado evento, paginados de 10 em 10

## Como rodar o projeto

Para executar o projeto localmente, siga os seguintes passos:

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/pass.in.git
```

2. Instale as dependências usando pnpm ou npm:

```bash
cd pass.in
pnpm install
# ou
npm install
```

3. Renomeie o arquivo `.example.env` para `.env` e preencha as variáveis de ambiente conforme necessário.

4. Execute as migrações do banco de dados usando Prisma:

```bash
pnpm db:migrate
# ou
npm run db:migrate
```

5. Realize o seed de um evento:

```bash
pnpm prisma db seed
# ou
npm run prisma db seed
```

6. Inicie o servidor de desenvolvimento:

```bash
pnpm dev
# ou
npm run dev
```

Após seguir esses passos, a API estará rodando localmente e você poderá realizar requisições utilizando o arquivo `api.http` disponível no projeto para testar as rotas.

## Documentação Swagger

A documentação Swagger da API pode ser acessada através da rota `/docs`. Esta rota exibe uma interface interativa onde é possível explorar todas as rotas disponíveis, seus parâmetros, exemplos de solicitações e respostas, entre outras informações úteis para entender e utilizar a API de forma eficiente.