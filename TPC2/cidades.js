const http = require('http');
const fs = require('fs');
const url = require('url');
const pathModule = require('path');

// Carregar o arquivo JSON
const bd = require('./mapa-virtual.json');

const server = http.createServer((req, res) => {
    // Analisar a URL
    const path = url.parse(req.url).pathname;

    if (path === '/') {
        // Página principal
        handleHomePage(req, res);
    } else {
        // Cidade específica
        handleCityPage(req, res, path);
    }
});

function handleHomePage(req, res) {
    // Ordenar as cidades alfabeticamente pelo nome
    const cidadesOrdenadas = bd.cidades.sort((a, b) => a.nome.localeCompare(b.nome));

    // Construir a lista de links para as cidades
    const linksCidades = cidadesOrdenadas.map(cidade => `
        <li>
            <a href="/${cidade.id}">${cidade.nome}</a>
        </li>
    `).join('');

    // Construir a página principal
    const paginaPrincipalHTML = `
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Página Principal</title>
            <style>
                body {
                    font-family: 'Arial', sans-serif;
                }
                h3 {
                    color: #607D8B;
                }
                ul {
                    list-style-type: none;
                    padding: 0;
                }
                li {
                    margin-bottom: 10px;
                }
                h5 {
                    color: #607D8B;
                }
            </style>
        </head>
        <body>
            <div>
                <h3>Cidades</h3>
                <ul>${linksCidades}</ul>
                <h5>Generated by CidadeApp::EngWeb2024::A100740</h5>
            </div>
        </body>
        </html>
    `;

    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.end(paginaPrincipalHTML);
}

function handleCityPage(req, res, path) {
    // Se a URL for para uma cidade específica
    const cidadeId = path.substring(1); // Remover a barra inicial
    const cidadeEncontrada = bd.cidades.find(cidade => cidade.id === cidadeId);

    if (cidadeEncontrada) {
        // Ler o conteúdo do arquivo HTML da cidade
        const caminhoArquivo = pathModule.join(__dirname, 'cidades', `${cidadeEncontrada.id}.html`);

        // Construir a lista de links para outras cidades
        const linksOutrasCidades = bd.cidades
            .filter(outraCidade => outraCidade.id !== cidadeId)
            .map(outraCidade => `<li><a href="/${outraCidade.id}">${outraCidade.nome}</a></li>`)
            .join('');

        fs.readFile(caminhoArquivo, 'utf8', (err, data) => {
            if (err) {
                console.error(`Erro ao ler o arquivo ${caminhoArquivo}: ${err}`);
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Erro interno ao processar a requisição.');
            } else {
                // Adicionar links para outras cidades ao conteúdo
                const conteudoModificado = data.replace('<!-- OUTRAS_CIDADES -->', linksOutrasCidades);

                // Enviar o conteúdo do arquivo HTML como resposta
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                res.end(conteudoModificado);
            }
        });
    } else {
        // Se a cidade não for encontrada, enviar uma mensagem de erro
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Cidade não encontrada');
    }
}

const PORT = 7777;
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}/`);
});
