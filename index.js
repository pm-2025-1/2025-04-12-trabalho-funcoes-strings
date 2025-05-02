import { substring, leftTrim, rightTrim, trim, half, group } from './trabalho.js'

//       0123456789
var p1 = 'tecnologia'
var r1 = substring(p1, 5, 10) // deve ler apenas o tamanho possível
console.log(r1) // logia
console.log(r1 == 'logia') // true

var p2 = '   ta ds  '
var r2 = leftTrim(p2) // deve remover os espaços à esquerda
console.log(r2) // 'ta ds  '
console.log(r2 == 'ta ds  ') // true
var r3 = rightTrim(p2) // deve remover os espaços à direita
console.log(r3) // '   ta ds'
console.log(r3 == '   ta ds') // true
var r4 = trim(p2) // deve remover os espaços à esquerda e direita
console.log(r4) // 'ta ds'
console.log(r4 == 'ta ds') // true

try {
    leftTrim(32423) // só deve aceitar strings
} catch (e) {
    console.error(e)
}

try {
    rightTrim(32423) // só deve aceitar strings
} catch (e) {
    console.error(e)
}

try {
    trim(32423) // só deve aceitar strings
} catch (e) {
    console.error(e)
}

console.log(half('tads', 1)) // primeira metade: 'ta'
console.log(half('tads', 2)) // segunda metade: 'ds'
console.log(half('tads', 3)) // terceira metade: ''

// REGRA GERAL, numa divisão desbalanceada, a primeria metade deve ser sempre menor que a segunda

console.log(half('tecno', 1)) // 'te'
console.log(half('tecno', 2)) // 'cno'

console.log(half('tecno')) // 'te'
console.log(half()) // ''

// half deve aceitar números, sempre tratando como inteiros
console.log(half(24)) // 12
console.log(half(25)) // 12
console.log(half(25, 1)) // 12
console.log(half(25, 2)) // 13
// se sobrarem decimais, ficam na segunda parte
console.log(half(25.5, 1)) // 12
console.log(half(25.5, 2)) // 13.5
console.log(half(25.9, 2)) // 13.9

// group é semelhante a half
console.log(group('tecnologia', 3, 1)) // tec
// dividir em três partes (tec nol ogia) e retornar apenas a primeira "tec"
console.log(group('tecnologia', 3, 1) == 'tec')
console.log(group('tecnologia', 3, 2) == 'nol')
console.log(group('tecnologia', 3, 3) == 'ogia')
// parâmetros inválidos devolvem string vazia
console.log(group('tecnologia', 3, 4) == '')
console.log(group('tecnologia', 3, -1) == '')
console.log(group('tecnologia', -3, 1) == '')
console.log(group('tecnologia', -3, 1) == '')
// group não deve aceitar outro tipos além de string
try {
    console.log(group(234234, 3, 1))
} catch (e) {
    console.error(e)
}

// em 10 partes
console.log(group('tecnologia', 10, 1) == 't')
console.log(group('tecnologia', 10, 2) == 'e')
console.log(group('tecnologia', 10, 10) == 'a')