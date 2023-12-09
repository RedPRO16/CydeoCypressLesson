describe("Verify Responses of Spartan API Requests", () => {
  it('Verify all spartans with GET request', () => {
  cy.request({
  method: 'GET',
  url:'http://54.172.243.231:8000/api/spartans',
  failOnStatusCode: false
  }).then((response) => {
  cy.log(response);
  expect(response.status).to.equal(200);
  expect(response.body[0].name).to.equal('Rod');
  expect(response.headers['content-type']).to.equal('application/json');
  expect(response.headers.connection).to.equal('keep-alive');
  })
  })
  })