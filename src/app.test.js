const app = require("./app");
const superTest = require("supertest");

const req = superTest(app);

describe("/test endpoint", () => { 
	it("Aplikacja wykonała test", async () => {
		const response = await req.get("/test");
		expect(response.status).toBe(200);
		expect(response.text).toBe("Hello");
	})
})
