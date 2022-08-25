const initialState = [
    {
        id: 'b0001',
        category: 'Article',
        image: 'https://www.valentinog.com/blog/static/1118135577dbd254f45b9260cd3eb6a0/ee604/redux-tutorial-for-beginners-the-complete-guide.png',
        title: 'Learn Redux',
        date: '25 August 2022',
        duration: '10 min',
        author: {
            name: 'Md. Rashedul Islam',
            imageUrl: 'https://scontent.fdac116-1.fna.fbcdn.net/v/t39.30808-6/262581591_3034979576762096_7998781254201121124_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeELuaA1yLhurrbr7NNEnUxi7rNMUZnT8Y3us0xRmdPxjQz9Pve-B-CEZG8ED43gOCT85Vp6KfhiDrmocYJm8Lss&_nc_ohc=YvY_8cWxyywAX-oStPB&_nc_ht=scontent.fdac116-1.fna&oh=00_AT_EHf1llCUV9K3KqthFT71G6cwNwJt3skPXpNvccdbdiQ&oe=630C9171'
        }
    },
    {
        id: 'b0002',
        category: 'Article',
        image: 'https://miro.medium.com/max/1400/1*sxYawlynIm9kXwRaTsBxEA.jpeg',
        title: 'JavaScript Essentials',
        date: '20 August 2022',
        duration: '15 min',
        author: {
            name: 'Md. Rashedul Islam',
            imageUrl: 'https://scontent.fdac116-1.fna.fbcdn.net/v/t39.30808-6/262581591_3034979576762096_7998781254201121124_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeELuaA1yLhurrbr7NNEnUxi7rNMUZnT8Y3us0xRmdPxjQz9Pve-B-CEZG8ED43gOCT85Vp6KfhiDrmocYJm8Lss&_nc_ohc=YvY_8cWxyywAX-oStPB&_nc_ht=scontent.fdac116-1.fna&oh=00_AT_EHf1llCUV9K3KqthFT71G6cwNwJt3skPXpNvccdbdiQ&oe=630C9171'
        }
    },
    {
        id: 'b0003',
        category: 'Article',
        image: 'https://imgs.developpaper.com/imgs/2899688687-5d07315980597_articlex.png',
        title: 'API Integration',
        date: '15 August 2022',
        duration: '11 min',
        author: {
            name: 'Md. Rashedul Islam',
            imageUrl: 'https://scontent.fdac116-1.fna.fbcdn.net/v/t39.30808-6/262581591_3034979576762096_7998781254201121124_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeELuaA1yLhurrbr7NNEnUxi7rNMUZnT8Y3us0xRmdPxjQz9Pve-B-CEZG8ED43gOCT85Vp6KfhiDrmocYJm8Lss&_nc_ohc=YvY_8cWxyywAX-oStPB&_nc_ht=scontent.fdac116-1.fna&oh=00_AT_EHf1llCUV9K3KqthFT71G6cwNwJt3skPXpNvccdbdiQ&oe=630C9171'
        }
    },
    {
        id: 'b0004',
        category: 'Tutorial',
        image: 'https://community-cdn-digitalocean-com.global.ssl.fastly.net/Le4zHQ5fUg2D5CqyHVBK2Spd',
        title: 'How to setup a react project',
        date: '5 August 2022',
        duration: '7 min',
        author: {
            name: 'Emon',
            imageUrl: 'https://avatars.githubusercontent.com/u/68527347?s=96&v=4'
        }
    },
    {
        id: 'b0005',
        category: 'Tutorial',
        image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--t-P9YAGr--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://techstream.org/images/img/Final-steps-with-React-JS-App.jpg',
        title: 'How to deploy React Application',
        date: '1 August 2022',
        duration: '10 min',
        author: {
            name: 'Emon',
            imageUrl: 'https://avatars.githubusercontent.com/u/68527347?s=96&v=4'
        }
    },
    {
        id: 'b0006',
        category: 'Tips & Tricks',
        image: 'https://i.ytimg.com/vi/eDUPsQMldHw/maxresdefault.jpg',
        title: '10 javascripts tricks',
        date: '25 July 2022',
        duration: '5 min',
        author: {
            name: 'Emon',
            imageUrl: 'https://avatars.githubusercontent.com/u/68527347?s=96&v=4'
        }
    },
]

export default initialState;