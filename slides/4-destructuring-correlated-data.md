##  #4 Correlated data

```javascript
function filterTeam(teams=[], {start, end}, teamName) {
  return teams
    .filter(t => t.start >= start && t.end <= end)
    .filter(t => t.name.includes(teamName);
}
```
```javascript
function handleClick() {
  const {start, end, teams, teamName} = this.props;
  const filtered = filterTeam(teams, {start, end}, teamName);

  // ...
}
```

note:
    Put your speaker notes here.
    You can see them pressing 's'.
