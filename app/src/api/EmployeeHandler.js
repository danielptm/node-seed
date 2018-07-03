const employeeHandler = (app) => {
    app.get('/create', (req, res) => {
        res.send({'greeting': 'hello world'});
    })
    app.get('/get', (req, res) => {
        res.send({'greeting': 'hello world2'});
    })
    app.get('/update', (req, res) => {
        res.send({'greeting': 'hello world2'});
    })
    app.get('/delete', (req, res) => {
        res.send({'greeting': 'hello world2'});
    })
}
module.exports = employeeHandler;
