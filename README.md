# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)
node index.js --action="list"
https://monosnap.com/file/KzuQ8cgMhFRRcjw55PkBDcQEG7PtVM

# Отримуємо контакт по id
node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6
https://monosnap.com/file/KzuQ8cgMhFRRcjw55PkBDcQEG7PtVM

# Додаємо контакт
node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22
https://monosnap.com/file/KzuQ8cgMhFRRcjw55PkBDcQEG7PtVM

# Видаляємо контакт
node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH
https://monosnap.com/file/C5BLtiNIvibePetO9Ykb4AMZAtMDcl