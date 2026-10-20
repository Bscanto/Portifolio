# Portfólio — Bruno Canto

Portfólio pessoal de Bruno Canto, desenvolvedor full stack de Alegrete/RS. O site apresenta sua trajetória profissional, habilidades, projetos e formas de contato em uma página responsiva.

## Tecnologias do portfólio

- **HTML5:** conteúdo e estrutura da página.
- **CSS3:** layout com Grid e Flexbox, responsividade, temas e animações.
- **JavaScript:** módulos ES, navegação, filtros, validação e interações.
- **APIs do navegador:** `localStorage`, `IntersectionObserver` e `requestAnimationFrame`.
- **Google Fonts:** Inter, Unbounded e JetBrains Mono.

O portfólio é estático, sem framework, backend, banco de dados ou etapa de build. As tecnologias dos projetos apresentados são independentes das usadas neste site.

## Executar localmente

É necessário um navegador moderno e um servidor HTTP local. Com Python 3 instalado, execute na pasta do projeto:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Acesse [http://localhost:8000](http://localhost:8000). Para encerrar, pressione `Ctrl+C` no terminal.

Também é possível servir a pasta com a extensão Live Server do VS Code. Use um servidor HTTP em vez de abrir o HTML diretamente com `file://`, pois o JavaScript utiliza módulos ES.

Não é necessário executar `npm install`. O `package-lock.json` existente não contém dependências, e o projeto não possui `package.json` nem scripts npm.

## Estrutura de arquivos

```text
.
├── index.html           # Conteúdo, seções e cards de projetos
├── css/
│   ├── styles.css       # Entrada do CSS e importação das folhas
│   ├── reset.css        # Normalização dos estilos do navegador
│   ├── variables.css    # Cores, fontes e variáveis dos temas
│   ├── base.css         # Estilos globais
│   ├── layout.css       # Grids, navegação e estrutura responsiva
│   └── components.css   # Cards, botões, formulário e componentes
├── js/
│   ├── main.js          # Inicialização e interações gerais
│   ├── nav.js           # Menu, índice lateral e retorno ao topo
│   ├── theme.js         # Alternância e persistência do tema
│   ├── revel.js         # Animações de entrada e contadores
│   └── form.js          # Validação e contato por e-mail
├── assets/
│   ├── img/             # Retrato e imagens dos projetos
│   └── icons/           # Favicons e arquivos de ícones
└── README.md
```

## Seções e funcionalidades

| Seção | Conteúdo |
| --- | --- |
| Sobre | Apresentação, retrato, história e indicadores animados. |
| O que faço | Áreas de atuação e habilidades. |
| Trajetória | Etapas profissionais com painéis expansíveis. |
| Projetos | Cards com tecnologias, imagens, GitHub e deploy. |
| Contato | Formulário, e-mail e redes profissionais. |

O site inclui menu para celular, índice lateral com indicação da seção visível, botão de voltar ao topo e filtros de projetos por categoria. Também utiliza animações de entrada, efeitos nos botões e cursor personalizado em dispositivos com mouse.

### Temas

O tema escuro é o padrão. O botão no cabeçalho alterna a classe `light` do elemento `<html>`. A preferência é salva no `localStorage` com a chave `bruno-portfolio-theme` e recuperada nas próximas visitas.

As cores dos dois temas são definidas em `css/variables.css`.

### Formulário de contato

O formulário valida nome, e-mail e mensagem no navegador. Após a validação, abre o aplicativo de e-mail do visitante por meio de `mailto:`, preenchendo destinatário, assunto e mensagem.

O site não envia mensagens diretamente nem registra os dados em um servidor. O visitante precisa concluir o envio no aplicativo de e-mail.

## Projetos apresentados

| Projeto | Tecnologias | Código | Deploy |
| --- | --- | --- | --- |
| RJ Rastreadores | HTML, CSS, JavaScript, PHP | [GitHub](https://github.com/Bscanto/Projeto-RJ-Rastreadores) | [Acessar](https://rj-rastreadores.vercel.app/) |
| ForumDev | JavaScript, React, Next.js, Node.js, PostgreSQL, Docker, Jest | [GitHub](https://github.com/Bscanto/forumdev.com.br) | [Acessar](https://forumdev.com.br/) |
| Bikcraft | HTML, CSS, JavaScript | [GitHub](https://github.com/Bscanto/Projeto-Bikcraft) | [Acessar](https://projeto-bikcraft-omega.vercel.app/) |
| Meu Currículo | HTML, CSS | [GitHub](https://github.com/Bscanto/Curriculo-BrunoCanto) | [Acessar](https://curriculo-bruno-canto.vercel.app/) |
| Health Connect | HTML, CSS, JavaScript, Bootstrap 5, jQuery, PHP, MySQL, DataTables, DOMPDF | [GitHub](https://github.com/Bscanto/Project-TCC-Health-Connect) | Não informado |
| Calculadora | HTML, CSS, JavaScript | [GitHub](https://github.com/Bscanto/Calculadora-JS) | [Acessar](https://calculadora-js-ten-kappa.vercel.app/) |
| Jogo da Velha | HTML, CSS, JavaScript | [GitHub](https://github.com/Bscanto/Projeto-Jogo_Velha) | [Acessar](https://projeto-jogo-velha.vercel.app/) |
| Projeto Final — Compass UOL | JavaScript, Node.js, Express, OpenAI API, Multer | [GitHub](https://github.com/Bscanto/Projeto-Final-TimeA1_Bolsa-Compass) | Não informado |

Os botões de deploy sem endereço definido permanecem desativados. A categoria de cada card é usada pelo filtro; atualmente não há cards classificados exclusivamente como `backend`, portanto esse filtro exibe uma lista vazia.

## Manutenção do conteúdo

### Editar textos e imagens

Atualize textos, títulos, descrições e contatos no `index.html`. As imagens locais ficam em `assets/img/`; use o nome e a extensão exatos no atributo `src`, mantendo um texto alternativo descritivo em `alt`.

Alguns cards utilizam prévias externas do GitHub. As fontes do Google e essas prévias dependem de conexão com a internet.

### Adicionar ou atualizar um projeto

1. Localize a seção `#projetos` no `index.html`.
2. Duplique um `<article class="proj-card">` e escolha a categoria em `data-category`: `frontend`, `backend` ou `fullstack`.
3. Atualize número, título, descrição, imagem e a lista de tecnologias em `.tags`.
4. Configure os links de GitHub e Deploy. Para habilitar um deploy, substitua o botão desativado por um link com a classe `proj-btn proj-btn-deploy`.
5. Mantenha `target="_blank"`, `rel="noreferrer noopener"` e um `aria-label` descritivo nos links externos.
6. Ao mudar a quantidade de projetos, atualize o contador correspondente em `data-count` na seção Sobre.

A ordem dos cards no HTML determina a ordem de apresentação. Ao reorganizá-los, atualize também os números em `.proj-num`.

### Alterar aparência e comportamento

| Alteração | Arquivo principal |
| --- | --- |
| Paleta de cores e fontes | `css/variables.css` |
| Colunas, espaçamento estrutural e menu | `css/layout.css` |
| Foto, cards, botões e indicadores | `css/components.css` |
| Filtros de projetos e painéis expansíveis | `js/main.js` |
| Navegação e menu mobile | `js/nav.js` |
| Destinatário e validação do formulário | `js/form.js` |

Ao alterar o e-mail de contato, atualize tanto o destinatário em `js/form.js` quanto os links `mailto:` no `index.html`.

## Publicação

Publique a pasta como um site estático em uma hospedagem que sirva HTML, CSS, JavaScript e imagens. O arquivo de entrada é `index.html`; não existe comando de build ou necessidade de variáveis de ambiente.

Preserve a estrutura das pastas e confira os caminhos dos recursos após publicar. Os endereços de deploy da tabela acima pertencem aos projetos apresentados, não ao próprio portfólio.

## Verificação manual

O repositório não possui suíte de testes automatizados. Após alterações, confira:

- Layout em desktop e celular, incluindo imagens e disposição dos cards.
- Alternância de tema e persistência após recarregar a página.
- Abertura e fechamento do menu mobile, navegação por seções e retorno ao topo.
- Filtros de projetos, numeração e destinos dos botões GitHub e Deploy.
- Expansão dos painéis da trajetória e animação dos indicadores.
- Validação de campos vazios, e-mail inválido e abertura do aplicativo de e-mail com dados válidos.
- Navegação por teclado e ausência de erros de JavaScript ou recursos não encontrados no navegador.

## Autor

**Bruno Canto** — Alegrete, Rio Grande do Sul.

- [GitHub](https://github.com/Bscanto)
- [LinkedIn](https://www.linkedin.com/in/bruno-canto-63072bbb/)
- E-mail: [bruno_scanto@hotmail.com](mailto:bruno_scanto@hotmail.com)
