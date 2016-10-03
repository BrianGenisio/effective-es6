##  Tagged templates

```javascript
function uc(strings, ...values) {
    let result = '';
    for(let string of strings) {
        result += string;
        result += (values.shift() || '').toUpperCase();
    }

    return result;
}

let processed = uc`First: ${'abc'} Second: ${'def'}`;
console.log(processed);

// "First: ABC Second: DEF"
```

note:
    Put your speaker notes here.
    You can see them pressing 's'.
