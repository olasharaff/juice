import logo from '../assets/image/LOGO.svg'
import bg from '../assets/image/BG.svg'
import watermelow from '../assets/image/Watermelon.svg'
import pineapple from "../assets/image/Pineapple.svg";
import orange from "../assets/image/Orange.svg";
import dishes1 from "../assets/image/Best Dishes Gropup 1.svg"  
import dishes2 from "../assets/image/Best Dishes Gropup 2.svg"
import dishes3 from "../assets/image/Best Dishes Gropup 3.svg"
const navBar= [ 
    {
        _id: 1,
        title: 'Home',
        path: 'home'
    },
    {
        _id: 2,
        title: 'Feature',
        path: 'feature'
    },
    {
        _id: 3,
        title: 'Menu',
        path: 'menu'
    },
    {
        _id: 4,
        title: 'Contact',
        path: 'contact'
    }
]

const homeData = [
  {
    _id: 1,
    headers: "Revitalize Your Routine, Fresh, Fruity, Fantastic!",
    content: `"Savor the Symphony of Flavors, with Nature's Sweetness & deliciousness. Get the best variety of juices here!”`,
    btn1: "View Menu",
    btn2: "Discounts",
    orange: ''

  },
];
const featureData = [
  {
    _id: 1,
    title: "Why you should choose us?",
    content:
      "Our commitment to excellence in the realm of juices sets us apart from the competition.",
    watermelow: watermelow,
    pineapple: pineapple,
    orange: orange,
  },
];
const menuData = [
  {
    _id: 1,
    title: "Explore best menu selections",
    dishes1: dishes1,
    dishes2: dishes2,
    dishes3: dishes3,

  },
];

export { navBar, homeData, featureData, menuData, watermelow, pineapple, orange, dishes1, dishes2, dishes3, logo, bg};