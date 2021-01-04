export default function templateFactory(CustomTemplate, DefaultTemplate) {
  if (CustomTemplate) {
    return CustomTemplate;
  }
  return DefaultTemplate;
}

