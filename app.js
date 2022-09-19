class Instrument {

    constructor(loudness, family, play) {
        this.loudness = loudness;
        this.family = family;
        this.play = play;
    }
}

class Woodwind extends Instrument {
    constructor(loudness) {
        super(loudness, "clarinet", "toots");
    }
}


class string extends Instrument {
    constructor(loudness) {
        super(loudness, "guitar", "ring");
    }
}


class percussion extends Instrument {
    constructor(loudness) {
        super(loudness, "drums", "boom");
    }
}


play() {
    console.log(this.type.Woodwind + " " + this.play.Woodwind + " at " + this.loudness(3));
}


playNext() {
    console.log(this.type.string + " " + this.play.string + " at " + this.loudness(4));
}

playNext() {
    console.log(this.type.percussion + " " + this.play.percussion + " at " + this.loudness(5));
}










