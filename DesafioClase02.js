// Con clases
class ProductManager {
    constructor() {
        this.products = [];
        this.productId = 1;
    }

    //Metodo addProduct
    addProduct (title, description, price, thumbnail, code, stock) {
        const newProduct = {
            id: this.productId,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };

        this.products.push(newProduct);
        this.productId++;
    }

    //Metodo getProduct

    getProduct() {
        console.log("Los productos son:", this.products);
    }

    //Metodo getProductByID

    getProductById(id) {
        const product = this.products.find(product => product.id === id)

        if (product) {
            console.log ("Producto encontrado:", product)
        } else {
            console.error ("No se encontró ningun producto")
        }
    }
}
const productos = new ProductManager()

//Usando addProduct
productos.addProduct("Manzana","Fruta","10","manzanafoto.com","M123","60");
productos.addProduct("Banana","Fruta","5","banana.com","B456","10");

//Usando getProduct
console.log("-------GetProduct------")
productos.getProduct();

//Usando getProductById
console.log("-------GetProductById------")
productos.getProductById(1)
productos.getProductById(7)




//---------METODO DEL PROFESOR-----------
/*

let products = [];

const addProduct = (title, description, price, thumbnail, code, stock) => {
    const newProduct = {
      id: products.length + 1,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };
  
    if (Object.values(newProduct).includes(undefined)) {
      console.log("Todos los campos son obligatorios");
      return;
    }
  
    const productExists = products.find((product) => product.code === code);
    if (productExists) {
      console.log(`El producto ${title} con el código ${code} ya existe`);
      return;
    }
  
    products.push(newProduct);
  };
  
  const getProducts = () => {
    console.log(products);
    return products;
  };
  
  const getProductById = (id) => {
    const product = products.find( product => product.id === id);
    if(!product) {
      console.log(`No se encontró el producto con el id ${id}`);
      return;
    }
  
    console.log(product);
    return product;
  };
  
  // Test
  addProduct("Producto 5", "el quinto producto", 899, "http://www.google.com", "ADF126");
  addProduct("Producto 1", "el primer producto", 299, "http://www.google.com", "ADF123", 10);
  addProduct("Producto 2", "el segundo producto", 899, "http://www.google.com", "ADF124", 10);
  addProduct("Producto 3", "el tercer producto", 899, "http://www.google.com", "ADF124", 10);
  addProduct("Producto 4", "el cuarto producto", 899, "http://www.google.com", "ADF125", 10);
  
  getProducts();

  getProductById(4);

  */




