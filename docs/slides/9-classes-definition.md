##  #9 Classes definition

```javascript
class Animal {
    construtor(scientificName) {
        this.scientificName = scientificName;
    }
}
```

```javascript
class Dog extends Animal {
    constructor(name) {
        super('Canis familiaris');
        this.name = name;
    }

    bark() {
        console.log('Woof');
    }
}
```

note:
    Put your speaker notes here.
    You can see them pressing 's'.
