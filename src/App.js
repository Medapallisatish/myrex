const map=new Map([
  [101, "John Doe"],
  [102, "Jane Smith"],
  [103, "Peter Johnson"]
])

function App(inputMap){
  const sortedEntries=[...inputMap.entries()].sort((a,b)=>{
    return a[1].localeCompare(b[1])
  })

  return new Map(sortedEntries);

}

const sortedMap=App(map)

let output="Map:{ "
sortedMap.forEach((value, key) => {
  output+=` ${key}=${value}, `
  
});

output=output.slice(0, -2)+ " }"

console.log(output)
