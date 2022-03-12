import MediaPlayer from "../../mediaPlayer";
import Ads from "./Ads"

class AdsPlugin{

    ads:Ads;
    player:MediaPlayer;
    media:HTMLMediaElement;

    constructor(){
        this.ads = Ads.getInstance();
        console.log(this.ads);
        this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
    }

    run(player:MediaPlayer){
        this.player = player;
        this.media = this.player.media;
        this.media.addEventListener('timeupdate',this.handleTimeUpdate);    
    } 


    private handleTimeUpdate(){
        const currentTime = Math.floor(this.media.currentTime);
        if(currentTime%30 === 0){
            this.renderAd();
        }
    }

    private  renderAd(){
        const ad = this.ads.getAd();
        console.log(ad);
    }
}

export default AdsPlugin;