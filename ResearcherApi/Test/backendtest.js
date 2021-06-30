const { ondelete} = require('../src/controller/researcherController');
const { disapproval } = require('../src/controller/researcherController');



test('Update the status of research paper as not approved ', () => {
    const text = disapproval;
    expect(text).toBe('user status is not approved');
});


test('Delete research paper in database', () => {
    const text = ondelete;
    expect(text).toBe('paper deleted')
});



