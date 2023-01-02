function memoize(fn){
    const caches =  new Map()
    return function (... args){
    const key = args.toString();
    if (caches.has(key)){
        return caches.get(key);
    }
    caches.set(key , fn(...args))
    return caches.get(key);
    }
}

function add(...args) {

  let sum = 0;
  for (let arg of args) {
    sum += arg;
  }
  return sum;
}

function time(fn){
  console.time()
  fn();
  console.log(fn())
  console.timeEnd()
 }

const memoizeAdd = memoize(add)

time(()=> memoizeAdd(100,100))
time(()=> memoizeAdd(100))
time(()=> memoizeAdd(100,200))
time(()=> memoizeAdd(100,100))

