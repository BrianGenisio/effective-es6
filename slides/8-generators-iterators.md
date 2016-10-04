##  Iterators

```javascript
function makeIterator(array){
    let nextIndex = 0;
    
    return {
       next: function(){
           return nextIndex < array.length ?
               {value: array[nextIndex++], done: false} :
               {done: true};
       }
    }
}
```

```javascript
const it = makeIterator(['yo', 'ya']);
console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done);  // true
```

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)

note:
    Put your speaker notes here.
    You can see them pressing 's'.
