const { onSubmit } = require('../component/Researcher');
const { onDelete } = require('../component/paperDetails');
const { onUpdate } = require('../component/paperDetails');


test('should insert data', () => {
    const alert = onSubmit(e);
    expect(alert).toBe('Data inserted');
});


test('Delete research paper in database', () => {
    const text = onDelete();
    expect(text).toBe('Research paper is deleted');
});


test('update payment status in database', () => {
    const text = onUpdate();
    expect(text).toBe('Payment status changed');
});
