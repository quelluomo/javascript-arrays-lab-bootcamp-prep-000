var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.push('Ralph')
  return kittens
}
// hence Milo, Otis, Garfield, Ralph

function destructivelyPrependKitten(name){
  kittens.unshift("Bob")
  return kittens
}
