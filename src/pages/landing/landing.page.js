import Navigation from "../../components/navigation/navigation.component";
import Episodes from "../episodes/episodes.page";
// import {BookStars_Mock_Data} from '../../constants/mock_data/mock_data';
import {EpisodesData} from '../../constants/mock_data/mock_data';

const Landing = () => {
    return (
        <Navigation>
            <Episodes data={EpisodesData}/>
        </Navigation>
    )
};


export default Landing;



