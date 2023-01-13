const mongoose = require('mongoose');

const Heroe = require('../api/models/heroes.model');


const heroes = [
  { 
    alias: 'Spider-Man',
    genero: 'Masculino',
    raza: 'Terrícola',
    poder: 'Sentido arácnido',
    nombre: 'Peter Benjamin',
    apellido: 'Parker',
    _id: ["63c17ba547855ce319bf7adf"]
  },

  { 
    alias: 'Dios del trueno',
    genero: 'Masculino',
    raza: 'Asgardiano',
    poder: 'Truenos',
    nombre: 'Thor',
    apellido: 'Odinson',
    _id: '63c17ba547855ce319bf7ae0'
  },

  { 
    alias: 'Iron-man',
    genero: 'Masculino',
    raza: 'Terrícola',
    poder: 'Tecnología',
    nombre: 'Tony',
    apellido: 'Stark',
  },

  { 
    alias: 'Hulk',
    genero: 'Masculino',
    raza: 'Terrícola',
    poder: 'Físico',
    nombre: 'Bruce',
    apellido: 'Banner',
  },

  { 
    alias: 'Capitan América',
    genero: 'Masculino',
    raza: 'Terrícola',
    poder: 'Físico',
    nombre: 'Steve',
    apellido: 'Rogers',
  },
  
  { 
    alias: 'Daredevil',
    genero: 'Masculino',
    raza: 'Terrícola',
    poder: 'Físico',
    nombre: 'Matt',
    apellido: 'Murdock',
  },
]


mongoose.set("strictQuery", false);
//Acordaos de cambiar la URL de la BBDD
mongoose.connect('mongodb+srv://root:root@cluster0.zi9i0n5.mongodb.net/ProyectoEquipo1?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(async () => {
    const allHeroes = await Heroe.find();
    if(allHeroes.length > 0) {
        await Heroe.collection.drop();
        console.log('Heroes borrados');
    }
}).catch((error) => console.log("error borrando Heroes", error))
.then(async () => {
    const heroesMap = heroes.map((heroe) => new Heroe(heroe));
    await Heroe.insertMany(heroesMap);
    console.log("Heroes insertados")
})
.catch((error) => console.log("error insertanto Heroes", error))
.finally(() => mongoose.disconnect());