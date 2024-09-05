import ProductsCard from "../productsCard/productsCard.jsx";
import "./styleProductsList.css"

function ProductsList() {
  const produtos = [
    {
      urlImg:
        "https://media.istockphoto.com/id/1323480815/pt/foto/navy-t-shirt.jpg?s=1024x1024&w=is&k=20&c=PAWDTtF_4ecrUX1CoOINcW9PrhaJ7GbE6CzlyRDyMyQ=",
      price: 320,
      title: "Camisa preta",
    },
    {
      urlImg:
        "https://media.istockphoto.com/id/1151955708/pt/foto/mens-white-blank-t-shirt-template-from-two-sides-natural-shape-on-invisible-mannequin-for-your.webp?s=1024x1024&w=is&k=20&c=ImIYT_OhV8-055KVPzTGUJ3B23ow93EWHqgczVL07Uw=",
      price: 220,
      title: "Camisa branca",
    },
    {
      urlImg:
        "https://media.istockphoto.com/id/831591150/pt/foto/yellow-t-shirts-front-and-back-used-as-design-template.webp?s=1024x1024&w=is&k=20&c=CVRLHhL-tAhIeqdFAb42J9etTej3cnKJzkvv31JFLgY=",
      price: 120,
      title: "Camisa amarela",
    },
  ];

  return (
    <ul className="listaProdutos">
      {
        produtos.map((value, index) => {
          return (
            <ProductsCard
              urlImg={value.urlImg}
              price={value.price}
              title={value.title}
            />
          )
        })
      }
      
    
    </ul>
  );
}

export default ProductsList;
