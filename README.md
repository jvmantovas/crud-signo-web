<h1 align="center"> CRUD Fullstack - NodeJS - React</h1>

<p align="center">
O projeto consiste em um crud proposto no Teste Técnico da Signo Web, desenvolvido com NodeJS (back-end), ReactJS (front-end) e MySQL(banco de dados).   
</p>

<p align="center">
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-instru%C3%A7%C3%B5es">Instruções</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#%EF%B8%8F-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-features">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#%EF%B8%8F-ajuda">Ajuda</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>

<br>

## 💻 Projeto

O projeto consiste em um CRUD (NodeJS e React) de cadastro, exibição, edição e remoção de usuários vinculado a um banco de dados (MySQL).<br/> <br/> 
A tela inicial consiste no formulário de cadastro responsivo(HTML gerado através do React) contendo os inputs para preenchimento, radio inputs, checkbox e attachment, 
ao final do preenchimento ao clicar no botão Continuar, os campos obrigatórios são checados, é feita uma validação do e-mail e se as informações forem preenchidas
corretamente, os dados são inseridos no banco de dados e é disparado um e-mail de confirmação de cadastro para o usuário e para o e-mail indicado no teste(teste@signoweb.com.br) e é apresentada na tela uma mensagem de confirmação de envio do formulário e de envio do e-mail.<br /><br />
No topo direito da tela inicial esta disposto um botão "Ver cadastros" que direciona para a página de cadastros, contendo um grid com id, nome, email (apenas em telas grandes) e telefone
dos usuários cadastrados, buscando as informações diretamente do banco de dados e exibindo-as na tela. O grid contém dois botões com as opções editar e remover, a opção editar direciona para o formulário
de edição que após ser editado e confirmado através do botão "Continuar", atualiza as informações no banco de dados e recarrega a página para que o grid atualize. O botão deletar no grid, ao ser clidado, 
remove o usuário em questão do grid e do banco de dados.

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [MySQL Server & Workbench 8.0.31](https://dev.mysql.com/downloads/windows/installer/8.0.html)
- [NodeJS 18.12.1 e npm 8.19.2](https://nodejs.org/)
- [React 18.2.0](https://pt-br.reactjs.org/) 
- [Vite 3.2.3](https://vitejs.dev/)

```
Dependências NodeJS:
"express": "^4.18.2", - Gerenciar conexão entre database e app
"mysql": "^2.18.1", - Banco de dados
"nodemon": "^2.0.20" - Auto server restart
"cors": "^2.8.5", - Evitar problemas na comunicação localhost
```
```
Dependências React:
"@emailjs/browser": "^3.10.0", - Envio de email de confirmação
"axios": "^1.2.0", - Lidar com requisições http e promises
"react": "^18.2.0", - Frontend
"react-dom": "^18.2.0", - Frontend
"react-icons": "^4.7.1", - Icones
"react-input-mask": "^2.0.4", - Formatador para input mask
"react-router-dom": "^6.4.4", - Navegação entre páginas
"react-router-hash-link": "^2.4.3", - Navegação para seção (hashlink ao editar)
"react-toastify": "^9.1.1", - Alertas de sucesso, erro, etc
"styled-components": "^5.3.6" - Estilização CSS-in-JS
```

## 📝 Instruções

- Clonar o repositório

- Instalar e configurar MySQL Server e Workbench

Configurações MySQL Server:
```
Host: localhost
Port: 3306
User: root
```

Executar script "crud_usuarios.sql" para criação da database e table.

Editar arquivo “db.js” dentro da pasta “api” com o root password do MySQL:
```JavaScript
import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234", /* EDITAR PASSWORD */
  database: "crud",
});
```

Executar o comando “npm install” dentro das pastas “api” e “frontend”:
```Bash
joao.0805@UEPT01-11407-E MINGW64 ~/Desktop/Workstation/crud-teste-signo/api (main)
$ npm install

joao.0805@UEPT01-11407-E MINGW64 ~/Desktop/Workstation/crud-teste-signo/frontend (main)
$ npm install
```

Executar o comando “npm run start” dentro da pasta “api” e o comando “npm run dev” dentro da pasta “frontend”:
```Bash
joao.0805@UEPT01-11407-E MINGW64 ~/Desktop/Workstation/crud-teste-signo/api (main)
$ npm run start

joao.0805@UEPT01-11407-E MINGW64 ~/Desktop/Workstation/crud-teste-signo/frontend (main)
$ npm run dev
```

## 🖼️ Layout

<p align="center">
  <img alt="web-1" src="https://github.com/jvmantovas/crud-teste-signo/blob/main/frontend/public/web-1.png" width="45%">
  <img alt="web-2" src="https://github.com/jvmantovas/crud-teste-signo/blob/main/frontend/public/web-2.png" width="45%">
</p><br />
<p align="center">
  <img alt="mobile-1" src="https://github.com/jvmantovas/crud-teste-signo/blob/main/frontend/public/mobile-1.png" width="">
  <img alt="mobile-2" src="https://github.com/jvmantovas/crud-teste-signo/blob/main/frontend/public/mobile-2.png" width="">
</p>

## 📋 Features

- Integração com banco de dados MySQL através do Express (NodeJS)
```
Usado para estabelecer conexão entre o servidor, app e banco de dados, facilitando as requisições e alterações nos dados.
```

- EmailJS 
```
Utilizado para disparo de e-mail de confirmação, alternativa ao disparo feito pelo back-end (através do "nodemailer") pois,
neste caso a configuração pelo nodemailer iria expor informações sensíveis da conta de e-mail. O lado contrário a isto é que a conta gratuita do EmailJS não permite envio de anexos, deixando assim de enviar as imagens anexadas no formulário.
```

- Vite
```
Facilidade na criação e organização do projeto, criando um ambiente de desenvolvimento simples, moderno e super rápido.
```


## ⚠️ Ajuda

Caso enfrente problemas com autenticação com o MySQL ao executar a api:

- Verificar as configurações do SQLServer Authentication Method 
```
“Use Legacy Authentication Method”
```

- Executar comando abaixo no MySQL Workbench, alterando ‘password’ para a senha do usuário root:
```SQL
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
```


