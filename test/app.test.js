const request = require("supertest");
const app = require("../app");

describe("Aplicación Hola Mundo", () => {

    test("Debe responder Hola Mundo en la ruta principal", async () => {

        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200);

        expect(response.text).toBe("Hola Mundo desde DevOps CI/CD");
    });

});