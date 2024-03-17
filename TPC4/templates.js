exports.compositorListPage = function(slist, d){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <link rel="icon" href="favicon.png"/>
            <link rel="stylesheet" href="w3.css"/>
            <title>Gestão de Compositores</title>
        </head>
        <body>
            <div class="w3-card-4">

                <header class="w3-container w3-teal">
                    <h1>Lista de compositores
                    <a class="w3-btn w3-round w3-grey" href="/compositores/registo">+</a>
                    </h1>
                    
                </header>
        
                <div class="w3-container">
                    <table class="w3-table-all">
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>bio</th>
                            <th>dataNasc</th>
                            <th>dataObit</th>
                            <th>periodo</th>
                        </tr>
                `
    for(let i=0; i < slist.length ; i++){
        pagHTML += `
                <tr>
                    <td>${slist[i].id}</td>
                    <td>
                        <a href="/compositores/${slist[i].id}">${slist[i].nome}</a>
                    </td>
                    <td>${slist[i].bio}</td>
                    <td>${slist[i].dataNasc}</td>
                    <td>${slist[i].dataObito}</td>
                    <td>${slist[i].periodo}</td>
                    <td>
                        [<a href="/compositores/edit/${slist[i].id}">Edit</a>][<a href="/compositores/delete/${slist[i].id}">Delete</a>]
                    </td>
                </tr>
        `
    }

    pagHTML += `
            </table>
            </div>
                <footer class="w3-container w3-blue">
                    <h5>Generated by EngWeb2024 in ${d}</h5>
                </footer>
            </div>
        </body>
    </html>
    `
    return pagHTML
}

exports.periodoListPage = function(slist, d){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <link rel="icon" href="favicon.png"/>
            <link rel="stylesheet" href="w3.css"/>
            <title>Gestão de Periodos</title>
        </head>
        <body>
            <div class="w3-card-4">

                <header class="w3-container w3-teal">
                    <h1>Lista de periodos
                    <a class="w3-btn w3-round w3-grey" href="/periodos/registo">+</a>
                    </h1>
                    
                </header>
        
                <div class="w3-container">
                    <table class="w3-table-all">
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                        </tr>
                `
    for(let i=0; i < slist.length ; i++){
        pagHTML += `
                <tr>
                    <td>${slist[i].id}</td>
                    <td>${slist[i].nome}</td>
                    <td>
                        [<a href="/periodos/edit/${slist[i].id}">Edit</a>][<a href="/periodos/delete/${slist[i].id}">Delete</a>]
                    </td>
                </tr>
        `
    }

    pagHTML += `
            </table>
            </div>
                <footer class="w3-container w3-blue">
                    <h5>Generated by EngWeb2024 in ${d}</h5>
                </footer>
            </div>
        </body>
    </html>
    `
    return pagHTML
}


exports.compositorFormPage = function(d){
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <link rel="icon" href="favicon.png"/>
            <link rel="stylesheet" href="w3.css"/>
            <title>Formulario do compositor</title>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-purple">
                    <h2>Formulario do compositor</h2>
                </header>
            
                <form class="w3-container" method="POST">
                    <fieldset>
                        <legend>Metadata</legend>
                        <label>Id</label>
                        <input class="w3-input w3-round" type="text" name="id"/>
                        <label>Nome</label>
                        <input class="w3-input w3-round" type="text" name="nome"/>
                        <label>Bio</label>
                        <input class="w3-input w3-round" type="text" name="bio"/>
                        <label>Data Nascimento</label>
                        <input class="w3-input w3-round" type="text" name="dataNasc"/>
                        <label>Data Obito</label>
                        <input class="w3-input w3-round" type="text" name="dataObito"/>
                        <label>Periodo</label>
                        <input class="w3-input w3-round" type="text" name="periodo"/>
                    </fieldset> 
                    <button class="w3-btn w3-purple w3-mb-2" type="submit">Registar</button>
                </form>

                <footer class="w3-container w3-purple">
                    <h5>Generated by EngWeb2024 in ${d} - [<a href="/compositores">Return</a>]</h5>
                </footer>
            
            </div>
    `
}

exports.periodoFormPage = function(d){
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <link rel="icon" href="favicon.png"/>
            <link rel="stylesheet" href="w3.css"/>
            <title>Formulario do periodo</title>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-purple">
                    <h2>Formulario do periodo</h2>
                </header>
            
                <form class="w3-container" method="POST">
                    <fieldset>
                        <legend>Metadata</legend>
                        <label>Id</label>
                        <input class="w3-input w3-round" type="text" name="id"/>
                        <label>Nome</label>
                        <input class="w3-input w3-round" type="text" name="nome"/>
                    </fieldset> 
                    <button class="w3-btn w3-purple w3-mb-2" type="submit">Registar</button>
                </form>

                <footer class="w3-container w3-purple">
                    <h5>Generated by EngWeb2024 in ${d} - [<a href="/periodos">Return</a>]</h5>
                </footer>
            
            </div>
    `
}

exports.compositorFormEditPage = function(a, d){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <link rel="icon" href="favicon.png"/>
            <link rel="stylesheet" href="w3.css"/>
            <title>Formulario do compositor</title>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-purple">
                    <h2>Formulario do compositor</h2>
                </header>
            
                <form class="w3-container" method="POST">
                    <fieldset>
                        <legend>Metadata</legend>
                        <label>Id</label>
                        <input class="w3-input w3-round" type="text" name="id" readonly value="${a.id}"/>
                        <label>Nome</label>
                        <input class="w3-input w3-round" type="text" name="nome" value="${a.nome}"/>
                        <label>Bio</label>
                        <input class="w3-input w3-round" type="text" name="gitlink" value="${a.bio}"/>
                        <label>Data Nascimento</label>
                        <input class="w3-input w3-round" type="text" name="dataNasc" value="${a.dataNasc}"/>
                        <label>Data Obito</label>
                        <input class="w3-input w3-round" type="text" name="dataObito"value="${a.dataObito}"/>
                        <label>Periodo</label>
                        <input class="w3-input w3-round" type="text" name="periodo"value="${a.periodo}"/>
                    </fieldset>
                    <button class="w3-btn w3-purple w3-mb-2" type="submit">Registar</button>
                </form>

                <footer class="w3-container w3-purple">
                    <h5>Generated by EngWeb2024 in ${d} - [<a href="/compositores">Return</a>]</h5>
                </footer>
            
            </div>
    `
    return pagHTML
}


exports.periodoFormEditPage = function(a, d){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <link rel="icon" href="favicon.png"/>
            <link rel="stylesheet" href="w3.css"/>
            <title>Formulario do periodo</title>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-purple">
                    <h2>Formulario do periodo</h2>
                </header>
            
                <form class="w3-container" method="POST">
                    <fieldset>
                        <legend>Metadata</legend>
                        <label>Id</label>
                        <input class="w3-input w3-round" type="text" name="id" readonly value="${a.id}"/>
                        <label>Nome</label>
                        <input class="w3-input w3-round" type="text" name="nome" value="${a.nome}"/>
                    </fieldset>
                    <button class="w3-btn w3-purple w3-mb-2" type="submit">Registar</button>
                </form>

                <footer class="w3-container w3-purple">
                    <h5>Generated by EngWeb2024 in ${d} - [<a href="/periodos">Return</a>]</h5>
                </footer>
            
            </div>
    `
    return pagHTML
}

// ---------------Student's Page--------------------------------
// Change and adapt to current dataset...
exports.compositorPage = function( compositor, d ){
    var pagHTML = `
    <html>
    <head>
        <title>Compositor: ${compositor.id}</title>
        <meta charset="utf-8"/>
        <link rel="icon" href="favicon.png"/>
        <link rel="stylesheet" href="w3.css"/>
    </head>
    <body>
        <div class="w3-card-4">
            <header class="w3-container w3-teal">
                <h1>Compositor ${compositor.id}</h1>
            </header>

            <div class="w3-container">
                <ul class="w3-ul w3-card-4" style="width:50%">
                    <li><b>Nome: </b> ${compositor.nome}</li>
                    <li><b>Número: </b> ${compositor.id}</li>
                </ul>
            </div>
            <footer class="w3-container w3-teal">
                <address>Generated by EngWeb2024 in ${d} - [<a href="/compositores">Return</a>]</address>
            </footer>
        </div>
    </body>
    </html>
    `
    return pagHTML
}

exports.periodoPage = function( periodo, d ){
    var pagHTML = `
    <html>
    <head>
        <title>Periodo: ${periodo.id}</title>
        <meta charset="utf-8"/>
        <link rel="icon" href="favicon.png"/>
        <link rel="stylesheet" href="w3.css"/>
    </head>
    <body>
        <div class="w3-card-4">
            <header class="w3-container w3-teal">
                <h1>Periodo ${periodo.id}</h1>
            </header>

            <div class="w3-container">
                <ul class="w3-ul w3-card-4" style="width:50%">
                    <li><b>Nome: </b> ${periodo.nome}</li>
                    <li><b>Número: </b> ${periodo.id}</li>
                </ul>
            </div>
            <footer class="w3-container w3-teal">
                <address>Generated by EngWeb2024 in ${d} - [<a href="/periodos">Return</a>]</address>
            </footer>
        </div>
    </body>
    </html>
    `
    return pagHTML
}
// -------------- Error Treatment ------------------------------
exports.errorPage = function(errorMessage, d){
    return `
    <html>
        <head>
            <title>Error page</title>
            <meta charset="utf-8"/>
            <link rel="icon" href="favicon.png"/>
            <link rel="stylesheet" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-teal">
                    <h1>Error page</h1>
                </header>

                <div class="w3-container">
                    <p>${d}: Error: ${errorMessage}</p>
                </div>
                <footer class="w3-container w3-teal">
                    <address>Generated by EngWeb2024 in ${d} - [<a href="/compositores">Return</a>]</address>
                </footer>
            </div>
        </body>
    </html>


    `
}