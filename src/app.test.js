const app = require("./app")
const supertest = require("supertest")
const request = supertest(app)

describe("/test endpoint", () => {
    it("should return a response", async () => {
        const repsonse = await request.get("/test")
        expect(response.status).tobe(200)
        expect(response.text).tobe("Hello world");
    })
})