const mongoose=require("mongoose");

const RestaurantSchema=new mongoose.Schema({
  nombre:String,
  menu:[
    {
      postres: [
        {
            nombre:String,
            url:String,
            precio:Number,
            descripción:String,
            CalificaciónTotal:Number,
            comentarios:[
              {
                calificación:Number,
                comentario:String
              }
            ]
        }
      ],
      bebidas: [
        {
            nombre:String,
            url:String,
            precio:Number,
            descripción:String,
            CalificaciónTotal:Number,
            comentarios:[
              {
                calificación:Number,
                comentario:String
              }
            ]
        }
      ],
      almuerzo_cena: [
        {
            nombre:String,
            url:String,
            precio:Number,
            descripción:String,
            tipo:String,
            CalificaciónTotal:Number,
            comentarios:[
              {
                calificación:Number,
                comentario:String
              }
            ]
        }
      ],
      desayuno: [
        {
            nombre:String,
            url:String,
            precio:Number,
            descripción:String,
            CalificaciónTotal:Number,
            comentarios:[
              {
                calificación:Number,
                comentario:String
              }
            ]
        }
      ]
    }
  ],
  sucursales:[
    {
      dirección:String,
      localidad:String,
      horario:String,
      telefono:Number,
      url:String,
      nombre:String
    }
  ]

});

module.exports=mongoose.model("restaurant",RestaurantSchema);
