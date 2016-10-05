##  Bonus Time!
### Async/Await

```javascript
async function getReadmeInHtml (repo) {
  const readme = await getReadme(repo)
  const html = await convertMdToHtml(readme)
  const filename = await saveHtml(html)
}
```

[coligo.io](https://coligo.io/javascript-async-await/)

note:
    Put your speaker notes here.
    You can see them pressing 's'.
