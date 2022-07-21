
import { GiNightSleep, GiBrainstorm, GiNailedHead} from "react-icons/gi";
const CardsData = [
    {
        id: 1,
        title: "Anxiety",
        paragraph:"Quiet your mind and calm the storm.",
        image:"/assets/images/balanced/person1.jpg",
        icon: <GiNailedHead size={40}/>

    },{
        id: 2,
        title: "Focus",
        paragraph:"Keep your focus and stay on track.",
        image:"/assets/images/balanced/person2.jpg",
        icon:<GiBrainstorm size={40}/>

    },{
        id: 2,
        title: "Sleep",
        paragraph:"Sleep tight and wake up refreshed.",
        image:"/assets/images/balanced/person3.jpg",
        icon:<GiNightSleep size={40}/>

    },
]
export default CardsData;