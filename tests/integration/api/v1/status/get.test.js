test("GET to api/v1/status should return 200, updated_at, postgres_version and connections", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const responseBody = await response.json();
  console.log(responseBody)

  expect(response.status).toBe(200);
  expect(responseBody.updated_at).toBeDefined()
  expect(new Date(responseBody.updated_at).toISOString()).toEqual(responseBody.updated_at)
  expect(responseBody.postgres_version).toEqual('16.0');
  expect(responseBody.max_connections).toEqual(100)
  expect(responseBody.used_connections).toEqual(1)
});
