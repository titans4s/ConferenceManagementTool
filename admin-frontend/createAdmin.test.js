const { onSubmit } = require('./component/addAdministrators')

test('should insert data', () =>{
    const alert = onSubmit(e);
    expect(alert).toBe('Data inserted');
});