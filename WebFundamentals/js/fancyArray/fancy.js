

var static = ['James', 'Jill', 'Jane', 'Jack']

var c = (v) => console.log(v)

var fancy = (sep,arr) => arr.map((e,i) => i+" "+sep+" "+e).reduce((acc,item) => acc + item + "\n", "")

c(fancy('->', static))


