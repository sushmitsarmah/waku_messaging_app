import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import InteractContract from "../components/InteractContract";

const Home = () => {
    return (
        <div className="Home min-h-screen flex flex-col p-10">
            Home
            <FontAwesomeIcon icon={faCoffee} />
            <InteractContract />
        </div>
    )
};

export default Home;