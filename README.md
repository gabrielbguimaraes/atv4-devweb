# Projeto de Registro de Histórico de Compras

Este projeto é uma aplicação full-stack que utiliza Node.js com Express e Sequelize para o backend, e React para o frontend. O objetivo é registrar e visualizar o histórico de compras.

## Estrutura do Projeto

- **Backend**: Construído com Node.js e Express, utilizando o Sequelize para gerenciar um banco de dados MySQL.
- **Frontend**: Criado com React, permitindo a interação do usuário para registrar e visualizar o histórico de compras.

## Pré-requisitos

Antes de começar, verifique se você tem os seguintes softwares instalados:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [MySQL](https://www.mysql.com/) ou [MariaDB](https://mariadb.org/)
- [Git](https://git-scm.com/)

## Instalação

### 1. Clone o repositório

```bash
git clone https://seu-repositorio-url.git
cd seu-repositorio
2. Configuração do Backend
2.1. Navegue até o diretório do backend
cd backend
2.2. Instale as dependências
npm install
2.3. Configure o banco de dados
Crie um banco de dados MySQL no seu servidor local (uso do mysql ou qualquer cliente de gerenciamento de banco de dados, como o MySQL Workbench).
CREATE DATABASE nome_do_banco_de_dados;
Configure as credenciais do banco de dados no arquivo config.json, localizado na pasta backend/config:
{
  "development": {
    "username": "seu_usuario",
    "password": "sua_senha",
    "database": "nome_do_banco_de_dados",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "seu_usuario",
    "password": "sua_senha",
    "database": "nome_do_banco_de_dados",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "seu_usuario",
    "password": "sua_senha",
    "database": "nome_do_banco_de_dados",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
2.4. Inicie o servidor
npm start
3. Configuração do Frontend
3.1. Navegue até o diretório do frontend
cd ../frontend
3.2. Instale as dependências
npm install
3.3. Inicie o cliente React
npm start
O aplicativo frontend deve estar disponível em http://localhost:3000.

Funcionalidades
Registrar Histórico de Compras: O usuário pode adicionar registros de compras, incluindo ID do produto, ID do fornecedor, quantidade e data.
Visualizar Histórico de Compras: Todos os registros de compras são exibidos em uma lista, atualizando em tempo real ao adicionar novos itens.
Estrutura dos Arquivos
backend/
app.js: Configuração principal do Express.
models/: Modelos Sequelize para gerenciar o banco de dados.
routes/: Rotas de API para gerenciar as requisições.
frontend/
src/App.js: Componente principal da aplicação React.
components/: Componentes React para o formulário de registro e a lista de histórico de compras.
