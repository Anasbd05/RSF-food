import { assets } from '../../assets/assets'
import './AppDown.css'
export default function AppDown() {
    return(
        <div className='app-download'id='app-download'>
            <p>for better experience download <br/> tomato app</p>
            <div className="app-download-platforms">
                <img src={assets.play_store} alt="" />
                <img src={assets.app_store} alt="" />
            </div>
        </div>
    )
};
