const request = require('supertest');
const express = require('express');
const horaRouter = require('./hora');

describe('GET /hora', () => {
  let app;

  beforeAll(() => {
    app = express();
    app.use(horaRouter);
  });

  it('debe devolver la hora, día, mes y año', async () => {
    const res = await request(app).get('/hora');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('hora');
    expect(res.body).toHaveProperty('dia');
    expect(res.body).toHaveProperty('mes');
    expect(res.body).toHaveProperty('anio');
    // Validar tipos
    expect(typeof res.body.hora).toBe('string');
    expect(typeof res.body.dia).toBe('number');
    expect(typeof res.body.mes).toBe('number');
    expect(typeof res.body.anio).toBe('number');
  });
});
