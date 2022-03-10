import MediaPlayer from "../../mediaPlayer";
import Ads from "./Ads"

class AdsPlugin{

    constructor(){
        this.ads = Ads.getInstance();
    }

    run(player:MediaPlayer){
        this.player = player;
        this.media = this.player.media;
    } 
}