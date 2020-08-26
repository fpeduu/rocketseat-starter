//1.1
import ClasseUsuario from './functions'

ClasseUsuario.info()

//1.2
import { idade } from './functions'

console.log(idade)

//1.3
import ClasseUsuario, { idade as IdadeUsuario } from './functions'

console.log(IdadeUsuario)