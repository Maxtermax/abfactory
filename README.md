# AB Factory
Abstract factory implementation, featuring ui components across technologies such as: react js and vue
Generate ui components using as target: react or vue.

## Requeriments
- nodejs >= 14

## Usage

- Generate React components family

`npm run generate-react-ui`

- Generate React components family

output: 
 - React component base on jsx template or a custom template:

```
const Button = (props = {}) => {
  const { text = '', disabled = false } = props;
  return <button disabled={disabled}>{text}</button>
};
```

```
const Checkbox = (props = {}) => {
  return <input type='checkbox' />
};
```

`npm run generate-vue-ui`
 
 - Generate React components family


output: 
 - Vue component base on a default template or a custom template:

```
<button>{{text}}</button
```

```
<input type='checkbox' />
```








