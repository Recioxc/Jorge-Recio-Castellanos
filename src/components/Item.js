import dmoon from "../data/dmon.png";
import mpup from "../data/mpuppets.jpg";
import nmind from "../data/nmind.jpg";
import paranoid from "../data/paranoid.jpg";
import mhotel from "../data/mhotel.jpg";
import softp from "../data/softp.jpg";

export const Item = [
    {id: 1, name:'Dark Side Of The Moon', Artista:'Pink Floyd',price:'$1,599',pictureurl:<img src={dmoon}/>},
    {id: 2, name:'Master of puppets', Artista:'Metallica', price:'$2,599',pictureurl:<img src={mpup}/>},
    {id: 3, name:'Morrison Hotel', Artista:'The Doors', price:'$3,499',pictureurl:<img src={mhotel}/>},
    {id: 4, name:'Soft Parade', Artista:'The Doors', price:'$2,799',pictureurl:<img src={softp}/>},
    {id: 5, name:'Nevermind', Artista:'Nirvana',price:'$4,599',pictureurl:<img src={nmind}/>},
    {id: 6, name:'Paranoid', Artista:'Black Sabbath', price:'$7,299',pictureurl:<img src={paranoid}/>},
]