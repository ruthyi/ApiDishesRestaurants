const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
// Metadata
const option1 = {
  definition: {

  }
}
const option = {
  definition: {
    openapi: "3.0.0",
    info: { title: "DishesRestaurants Api", version: "1.0.0" },
    servers: [{
      url: "http://localhost:3000"
    }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
        },
      },
      schemas: {
        delete: {
          type: "object",
          properties: {
            id: { type: "string" },
          }
        },
        login: {
          type: "object",
          properties: {
            name: {
              type: "string"
            },
            password: {
              type: "string"
            }
          }
        },
        user: {
          type: "object",
          properties: {
            name: {
              type: "string"
            },
            password: {
              type: "string"
            },
            role: {
              type: "string"
            }
          }
        },
        restaurant: {
          type: "object",
          properties: {
            nombre: { type: "string" },
            menu: {
              type: "object",
              properties: {
                postres: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      nombre: { type: "string" },
                      url: { type: "string" },
                      precio: { type: "number" },
                      descripción: { type: "string" },
                      CalificaciónTotal: { type: "integer" },
                      comentarios: {
                        type: "array",
                        items: {
                          type: "object",
                          properties: {
                            calificación: { type: "integer" },
                            comentario: { type: "string" }
                          }
                        }
                      }
                    }
                  }
                },
                bebidas: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      nombre: { type: "string" },
                      url: { type: "string" },
                      precio: { type: "string" },
                      descripción: { type: "string" },
                      CalificaciónTotal: { type: "integer" },
                      comentarios: {
                        type: "array",
                        items: {
                          type: "object",
                          properties: {
                            calificación: { type: "integer" },
                            comentario: { type: "string" }
                          }
                        }
                      }
                    }
                  }
                },
                almuerzo_cena: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      nombre: { type: "string" },
                      url: { type: "string" },
                      precio: { type: "integer" },
                      descripción: { type: "string" },
                      tipo: { type: "string" },
                      CalificaciónTotal: { type: "integer" },
                      comentarios: {
                        type: "array",
                        items: {
                          type: "object",
                          properties: {
                            calificación: { type: "integer" },
                            comentario: { type: "string" }
                          }
                        }
                      }
                    }
                  }
                },
                desayuno: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      nombre: { type: "string" },
                      url: { type: "string" },
                      precio: { type: "integer" },
                      descripción: { type: "string" },
                      CalificaciónTotal: { type: "integer" },
                      comentarios: {
                        type: "array",
                        items: {
                          type: "object",
                          properties: {
                            calificación: { type: "integer" },
                            comentario: { type: "string" }
                          }
                        }
                      }
                    }
                  }
                },

              },
            },
            sucursales: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  dirección: { type: "string" },
                  localidad: { type: "string" },
                  horario: { type: "string" },
                  telefono: { type: "integer" },
                  url: { type: "string" },
                  nombre: { type: "string" }
                }
              }
            }
          },
        },
      },
    },
  },
  apis: ["./src/routes/*.js"]
};


// formatJson
const swaggerSpec = swaggerJsDoc(option);

// function to doc

const swaggerDoc = (app, port) => {
  app.use('/Api/v1/swagger/docs/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get('/Api/v1/swagger/docs.json', (req, res) => {
    res.setHeader('Comtent-Type', 'application/json');
    res.send(swaggerSpec);
  })
  console.log(`Versión 1 Docs are available at http://localhost:${port}/Api/v1/swagger/docs/`)
}



module.exports = { swaggerDoc }
