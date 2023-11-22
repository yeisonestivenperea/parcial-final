// Oculta el efecto de carga y muestra el contenido después de cargar los productos

var data = [
  {
    id: 10,
    name: "Fresa",
    price: 5000,
    img: "https://www.frutamare.com/wp-content/uploads/2021/02/Temporada-de-fresas-1.jpg",
    createdAt: 1691880680508,
  },
  {
    id: 11,
    name: "Piña",
    price: 2500,
    img: "https://img.lalr.co/cms/2020/02/11141130/AGOSTO-24-REMATAN-PI%C3%91A.jpg",
    createdAt: 1691956780244,
  },
  {
    id: 12,
    name: "Coco",
    price: 4000,
    img: "https://plazamercado.shop/wp-content/uploads/2020/07/Coco-1.jpg",
    createdAt: 1691958541415,
  },
  {
    id: 13,
    name: "Uva",
    price: 6000,
    img: "https://cdn.portalfruticola.com/2023/07/shutterstock_130380677-1024x683.jpg",
    createdAt: 1691958690011,
  },
  {
    id: 14,
    name: "Mango",
    price: 3500,
    img: "https://cdn2.cocinadelirante.com/sites/default/files/images/2021/02/beneficios-de-las-hojas-de-mango.jpg",
    createdAt: 1691958819050,
  },
  {
    id: 15,
    name: "Manzana",
    price: 1500,
    img: "https://www.lamansiondelasideas.com/wp-content/uploads/2021/11/Top-beneficios-de-la-manzana-1.jpg",
    createdAt: 1691958862910,
  },
  {
    id: 16,
    name: "Cereza",
    price: 2000,
    img: "https://www.goodfruit.com/es/wp-content/uploads/sites/2/2019/08/littleCherryDalles-3872tj-TOC.jpg",
    createdAt: 1691961609745,
  },
  {
    id: 18,
    name: "Sandía",
    price: 10000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWZ99RuXeG24DE9wUrEBS6EKWpoeeyXWpEZQ&usqp=CAU",
    createdAt: 1691961998296,
  },
  {
    id: 19,
    name: "Pera",
    price: 3000,
    img: "https://www.ecojardinmagico.com/wp-content/uploads/2021/08/14.jpg.webp",
    createdAt: 1693413306633,
  },
];

const productList = document.getElementById("product-list");
productList.innerHTML = "";

data.forEach((product) => {
  const card = `
            <div class="col-md-4 mb-4">
                <div class="card product-card">
                    <div>
                        <img src="${product.img}" class="card-img-top img-size" alt="${product.name}">
                        <center>
                        <div class="py-3"><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></div>
                    </div>
                    </center>
                    <div class="card-body">
                        <h5 class="card-title product-title">${product.name}</h5>
                        <p class="card-text product-price">Price: $${product.price}</p>
                        <div class="px-4">
                            <button class="btn btn-success"><i class="fa-solid fa-plus fa-sm"></i></button>
                            0   
                            <button class="btn btn-success"><i class="fa-solid fa-minus fa-sm"></i>
                        </button></div>
                    </div>
                    <a href="#" class="text-warning px-5" data-toggle="modal" data-target="#myModal">Ver detalles</a>
                    <button type="button" class="btn btn-warning"><i class="fa-solid fa-cart-plus"></i></button>
                </div>
            </div>
        `;
  productList.innerHTML += card;
});

objectFeeedBack = [
  {
    author: "Pedro Gómez",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.F7cHA9Doa5wYo9ay8hPLfgHaD4&pid=Api&P=0&h=180",
    feedback: "Este año la cosecha de tomates fue excelente gracias a las nuevas técnicas que aprendimos en el taller de agricultura. ¡Las plantas están más fuertes que nunca y los tomates son los mejores que he cultivado!",
  },
  {
    author: "María Castro",
    image:
      "https://image.freepik.com/foto-gratis/feliz-agricultor-en-las-zonas-rurales_1398-2024.jpg",
    feedback: "El sistema de riego automático ha hecho maravillas en mi huerto. Ahorro tiempo y agua, y mis verduras están más saludables que nunca. ¡Increíble inversión para cualquier agricultor!",
  },
  {
    author: "Carlos Mendoza",
    image:
      "https://portal.andina.pe/EDPfotografia3/Thumbnail/2019/10/03/000623761W.jpg",
    feedback: "Me encanta experimentar con variedades de cultivos. Este año probé con maíz de una especie diferente y los resultados fueron sorprendentes. ¡Mis vecinos están impresionados y ya me están pidiendo semillas!",
  },
  {
    author: "Isabel Ruiz",
    image:
      "https://image.freepik.com/foto-gratis/mujeres-agricultoras-que-cosechan-plantas-arroz-cestas-bambu-tejidas-despues-cosechar-juntas-campos_8595-18198.jpg",
    feedback: "El asesoramiento sobre el manejo de plagas fue clave para salvar mi plantación de manzanas. Gracias a las recomendaciones, ahora tengo manzanas hermosas y saludables listas para la cosecha.",
  },
  {
    author: "Maria Hernández",
    image:
      "https://dominicanrepublic.un.org/sites/default/files/styles/large/public/2020-08/agricultora_familiar.jpg?h=10d202d3&itok=pZIJYkut",
    feedback: "La implementación de energía solar en la granja ha sido un cambio total. Menos costos en electricidad y una huella ambiental más baja. ¡Un paso adelante hacia una agricultura más sostenible!",
  },
];

//variables
let cont = 0;
let lengthObject = 0;
lengthObject = objectFeeedBack.length - 1;

let image = document.getElementById("image");
let feedback = document.getElementById("feedback");
let author = document.getElementById("author");

image.src = objectFeeedBack[cont].image;
feedback.innerText = objectFeeedBack[cont].feedback;
author.innerText = objectFeeedBack[cont].author;

function previos() {
  cont > 0 ? cont-- : Swal.fire("👉🏽 No hay comentarios 👈🏽");
  image.src = objectFeeedBack[cont].image;
  feedback.innerHTML = objectFeeedBack[cont].feedback;
  author.innerText = objectFeeedBack[cont].author;
}

function next() {
  cont < lengthObject ? cont++ : Swal.fire("👉🏽 No hay comentarios 👈🏽");
  image.src = objectFeeedBack[cont].image;
  feedback.innerText = objectFeeedBack[cont].feedback;
  author.innerText = objectFeeedBack[cont].author;
}
