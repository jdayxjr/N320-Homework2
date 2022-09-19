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


playNext() {
    console.log(this.type + " " + this.play + " at " + this.loudness);
}












