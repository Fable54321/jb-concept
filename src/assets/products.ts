import produit1 from '../assets/produits --1.png'
import produit2 from '../assets/produits--2.png'
import produit3 from '../assets/produits--3.jpg'
import produit4 from '../assets/produits--4.jpg'
import produit5 from '../assets/produits--5.jpg' 
 
export const productsList = [
    {
        id: 1,
        name: 'Des Vêtements',
        description: "Tous types de vêtements allant du t-shirt au manteau d'hiver en passant par les pantalons propres et les chemises",    
        image: produit1,
        //catalogues: ['Catalogue test 1', 'Catalogue test 2', 'Catalogue test 3']
    },
    {
        id: 2,
        name: 'Des Accessoires',
        description: "Des casquettes, des tuques, des foulards et bien plus !",    
        image: produit2  
    },
    {
        id: 3,
        name: 'Des Produits Éco-responsables',
        description: "Pour acheter des produits de qualité en toute conscience",    
        image: produit3
    },
    {
        id: 4,
        name: 'Des Produits locaux',
        description: "Il n'a jamais été aussi important d'encourager l'économie locale.",    
        image: produit4
    },
    {
        id: 5,
        name: 'Et bien plus encore !',
        description: "Des sacs, des glacières ou même des verres et des tasses !",    
        image: produit5
    }
]
