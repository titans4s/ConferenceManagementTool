const { onSubmit } = require('./src/component/createworkshop/createworkshop');
const { onUpdate } = require('./src/component/getworkshop/workshopStatus');


test('should insert data', () => {
    const alert = onSubmit(e);
    expect(alert).toBe('Data inserted');
});

test('update status in database', () => {
    const text = onUpdate();
    expect(text).toBe('Aprove status changed');
});