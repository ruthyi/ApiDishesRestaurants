const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
// Metadata
const option1={
  definition:{

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
          properties:{
            id: { type: "String"},
          }
        },
        login: {
          type: "object",
          properties: {
            name: {
              type: "String"
            },
            password: {
              type: "String"
            }
          }
        },
        user: {
          type: "object",
          properties: {
            name: {
              type: "String"
            },
            password: {
              type: "String"
            },
            role: {
              type: "String"
            }
          }
        },
        restaurant: {
          type: "object",
          properties: {
            nombre: {type:"string"},
            menu: [
              {
                postres:  {type: "array"}[

                  {
                    nombre: {type:"string"},
                    url: {type:"string"},
                    precio: Number,
                    descripción: {type:"string"},
                    CalificaciónTotal: Number,
                    comentarios: [
                      {
                        calificación: Number,
                        comentario: {type:"string"}
                      }
                    ]
                  }
                ],
                bebidas: [
                  {
                    nombre: {type:"string"},
                    url: {type:"string"},
                    precio: Number,
                    descripción: {type:"string"},
                    CalificaciónTotal: Number,
                    comentarios: [
                      {
                        calificación: Number,
                        comentario: {type:"string"}
                      }
                    ]
                  }
                ],
                almuerzo_cena: [
                  {
                    nombre: {type:"string"},
                    url: {type:"string"},
                    precio: Number,
                    descripción: {type:"string"},
                    tipo: {type:"string"},
                    CalificaciónTotal: Number,
                    comentarios: [
                      {
                        calificación: Number,
                        comentario: {type:"string"}
                      }
                    ]
                  }
                ],
                desayuno: [
                  {
                    nombre: {type:"string"},
                    url: {type:"string"},
                    precio: Number,
                    descripción: {type:"string"},
                    CalificaciónTotal: Number,
                    comentarios: [
                      {
                        calificación: Number,
                        comentario: {type:"string"}
                      }
                    ]
                  }
                ]
              }
            ],
            sucursales: [
              {
                dirección: String,
                localidad: String,
                horario: String,
                telefono: Number,
                url: String,
                nombre: String
              }
            ]
          }
        }
      }
    }
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
