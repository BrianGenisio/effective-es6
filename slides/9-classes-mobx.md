##  Mobx

```javascript
class TodoList {
    @observable todos = [];
    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }
}
```

[MobX Docs](https://github.com/mobxjs/mobx)

note:
    Put your speaker notes here.
    You can see them pressing 's'.
