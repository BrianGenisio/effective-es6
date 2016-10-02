##  Functional Programming

```javascript
const managerSalaries = employees
  .filter(employee => employee.isManager)
  .map(manager => manager.salary)
  .reduce((sum, salary) => sum + salary, 0);
```

```javascript
const managerSalaries = employees
  .filter(function(employee) { return employee.isManager; })
  .map(function(manager) { return manager.salary; })
  .reduce(function(sum, salary) { return sum + salary; }, 0);
```
<!-- .element: class="fragment" -->

note:
    Put your speaker notes here.
    You can see them pressing 's'.
