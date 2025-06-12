const App = require('./src/app')

App.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`);
})