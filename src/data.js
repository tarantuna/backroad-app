import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'

export const pageLinks =[
    {id:1, href: '#home', text: 'home'},
    {id:2, href: '#about', text: 'about'},
    {id:3, href: '#services', text: 'services'},
    {id:4, href: '#tours', text: 'tours'},
];

export const socialLinks = [
    {id:1, href:"https://www.twitter.com", icon:'fab fa-facebook' },
    {id:2, href:"https://www.facebook.com", icon:'fab fa-twitter' },
    {id:3, href:"https://www.shazam.com", icon:'fab fa-squarespace' },
];

export const services = [
    {id:1, icon:"fas fa-wallet fa-fw", title:'saving money', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'},
    {id:2, icon:"fas fa-tree fa-fw", title:'endless hiking', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'},
    {id:3, icon:"fas fa-socks fa-fw", title:'amazing comfort', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'},
]


export const tours = [
    {
        id:1, 
        image: tour1 ,
        date:'november 26th, 2023', 
        title:'Tibet Adventure', 
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        country:'china',
        length:'6 days',
        price:'From $2100',
    },

    {
        id:2, 
        image: tour2 ,
        date:'October 1th, 2023', 
        title:'Best of java', 
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        country:'ındonesia',
        length:'11 days',
        price:'From $1400',
    },

    {
        id:3, 
        image: tour3,
        date:'September 15th, 2023', 
        title:'explore hong kong', 
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        country:'hong kong',
        length:'8 days',
        price:'From $5000',
    },

    {
        id:4, 
        image: tour4 ,
        date:'december 5th, 2023', 
        title:'kenya highlights', 
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        country:'kenya',
        length:'20 days',
        price:'From $3300',
    },
]