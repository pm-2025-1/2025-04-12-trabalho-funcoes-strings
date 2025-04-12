export function substring(str, ini = 0, tam) {
    
    if (typeof (str) != 'string') throw 'O primeiro parâmetro deve ser uma string'
    if (ini < 0) throw 'Início não pode ser negativo: ' + ini
    if (tam == undefined) tam = str.length - ini

    var nova = ''
    for (var i = ini; i < ini + tam; i++)  nova += str[i]
    return nova
    
}
