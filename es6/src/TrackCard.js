//TODO: implement and export a class named TrackCard
//that takes an iTunes API result track in the 
//constructor, and renders that track data as an
//element tree like this
//<figure>
//  <img/>
//  <figcaption></figcaption>
//</figure>

let previewAudio = new Audio();

export default class TrackCard {
    constructor(trackData) {
        this.trackData = trackData;
    }

    render() {
        let fig = document.createElement("figure");
        let img  = fig.appendChild(document.createElement("img"));
        img.src = this.trackData.artworkUrl100;
        img.alt = this.trackData.trackName;

        let figcap = fig.appendChild(document.createElement("figcaption"));
        figcap.textContent = this.trackData.trackName;
        fig.addEventListener("click", () => {
            previewAudio.src = this.trackData.previewUrl;
            previewAudio.play();
        })
        return fig;
    }
}