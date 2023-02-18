// create audio objs


const key01 = new Audio('./sounds/key01.mp3');
const key02 = new Audio('./sounds/key02.mp3');
const key03 = new Audio('./sounds/key03.mp3');
const key04 = new Audio('./sounds/key04.mp3');
const key05 = new Audio('./sounds/key05.mp3');
const key06 = new Audio('./sounds/key06.mp3');
const key07 = new Audio('./sounds/key07.mp3');
const key08 = new Audio('./sounds/key08.mp3');
const key09 = new Audio('./sounds/key09.mp3');
const key10 = new Audio('./sounds/key10.mp3');
const key11 = new Audio('./sounds/key11.mp3');
const key12 = new Audio('./sounds/key12.mp3');
const key13 = new Audio('./sounds/key13.mp3');
const key14 = new Audio('./sounds/key14.mp3');
const key15 = new Audio('./sounds/key15.mp3');
const key16 = new Audio('./sounds/key16.mp3');
const key17 = new Audio('./sounds/key17.mp3');
const key18 = new Audio('./sounds/key18.mp3');
const key19 = new Audio('./sounds/key19.mp3');
const key20 = new Audio('./sounds/key20.mp3');
const key21 = new Audio('./sounds/key21.mp3');
const key22 = new Audio('./sounds/key22.mp3');
const key23 = new Audio('./sounds/key23.mp3');
const key24 = new Audio('./sounds/key24.mp3');

let octave = 0;

document.querySelector("#keyboard").addEventListener("mousedown", (event) => {
    if (event.target.matches(".key-btn")) {
        const id = event.target.getAttribute("id");
        console.log("keyboard keydown", id);
        switch (id) {
            case "C-3":
                if (octave === 0) {
                    key13.play();
                } else if (octave === 1) {
                    key01.play();
                }
                break;
            case "C#-3":
                if (octave === 0) {
                    key14.play();
                } else if (octave === 1) {
                    key02.play();
                }
                break;
            case "D-3":
                if (octave === 0) {
                    key15.play();
                } else if (octave === 1) {
                    key03.play();
                }
                break;
            case "D#-3":
                if (octave === 0) {
                    key16.play();
                } else if (octave === 1) {
                    key04.play();
                }
                break;
            case "E-3":
                if (octave === 0) {
                    key17.play();
                } else if (octave === 1) {
                    key05.play();
                }
                break;
            case "F-3":
                if (octave === 0) {
                    key18.play();
                } else if (octave === 1) {
                    key06.play();
                }
                break;
            case "F#-3":
                if (octave === 0) {
                    key19.play();
                } else if (octave === 1) {
                    key07.play();
                }
                break;
            case "G-3":
                if (octave === 0) {
                    key20.play();
                } else if (octave === 1) {
                    key08.play();
                }
                break;
            case "G#-3":
                if (octave === 0) {
                    key21.play();
                } else if (octave === 1) {
                    key09.play();
                }
                break;
            case "A-3":
                if (octave === 0) {
                    key22.play();
                } else if (octave === 1) {
                    key10.play();
                }
                break;
            case "A#-3":
                if (octave === 0) {
                    key23.play();
                } else if (octave === 1) {
                    key11.play();
                }

                break;
            case "B-3":
                if (octave === 0) {
                    key24.play();
                } else if (octave === 1) {
                    key12.play();
                }
                break;

            default:
                break;
        }
    }
});

document.querySelector("#keyboard").addEventListener("mouseup", (event) => {
    if (event.target.matches(".key-btn")) {
        const id = event.target.getAttribute("id");
        console.log("keyboard keyup", id);
        switch (id) {
            case "C-3":
                if (octave === 0) {
                    key13.pause();
                    key13.currentTime = 0;
                } else if (octave === 1) {
                    key01.pause();
                    key01.currentTime = 0;
                }
                break;
            case "C#-3":
                if (octave === 0) {
                    key14.pause();
                    key14.currentTime = 0;
                } else if (octave === 1) {
                    key02.pause();
                    key02.currentTime = 0;
                }
                break;
            case "D-3":
                if (octave === 0) {
                    key15.pause();
                    key15.currentTime = 0;
                } else if (octave === 1) {
                    key03.pause();
                    key03.currentTime = 0;
                }
                break;
            case "D#-3":
                if (octave === 0) {
                    key16.pause();
                    key16.currentTime = 0;
                } else if (octave === 1) {
                    key04.pause();
                    key04.currentTime = 0; key04.play();
                }
                break;
            case "E-3":
                if (octave === 0) {
                    key17.pause();
                    key17.currentTime = 0;
                } else if (octave === 1) {
                    key05.pause();
                    key05.currentTime = 0;
                }
                break;
            case "F-3":
                if (octave === 0) {
                    key18.pause();
                    key18.currentTime = 0;
                } else if (octave === 1) {
                    key06.pause();
                    key06.currentTime = 0;
                }
                break;
            case "F#-3":
                if (octave === 0) {
                    key19.pause();
                    key19.currentTime = 0;
                } else if (octave === 1) {
                    key07.pause();
                    key07.currentTime = 0;
                }
                break;
            case "G-3":
                if (octave === 0) {
                    key20.pause();
                    key20.currentTime = 0;
                } else if (octave === 1) {
                    key08.pause();
                    key08.currentTime = 0;
                }
                break;
            case "G#-3":
                if (octave === 0) {
                    key21.pause();
                    key21.currentTime = 0;
                } else if (octave === 1) {
                    key09.pause();
                    key09.currentTime = 0;
                }
                break;
            case "A-3":
                if (octave === 0) {
                    key22.pause();
                    key22.currentTime = 0;
                } else if (octave === 1) {
                    key10.pause();
                    key10.currentTime = 0;
                }
                break;
            case "A#-3":
                if (octave === 0) {
                    key23.pause();
                    key23.currentTime = 0;
                } else if (octave === 1) {
                    key11.pause();
                    key11.currentTime = 0;
                }

                break;
            case "B-3":
                if (octave === 0) {
                    key24.pause();
                    key24.currentTime = 0;
                } else if (octave === 1) {
                    key12.pause();
                    key12.currentTime = 0;
                }
                break;

            default:
                break;
        }
    }
});

var checkbox = document.querySelector("#octave-switch");

checkbox.addEventListener('change', function () {
    if (this.checked) {
        console.log("Checkbox is checked..");
        octave = 1
    } else {
        console.log("Checkbox is not checked..");
        octave = 0
    }
});

document.querySelector("#keyboard").addEventListener("touchstart", (event) => {
    if (event.target.matches(".key-btn")) {
        const id = event.target.getAttribute("id");
        console.log("keyboard keydown", id);
        switch (id) {
            case "C-3":
                if (octave === 0) {
                    key13.play();
                } else if (octave === 1) {
                    key01.play();
                }
                break;
            case "C#-3":
                if (octave === 0) {
                    key14.play();
                } else if (octave === 1) {
                    key02.play();
                }
                break;
            case "D-3":
                if (octave === 0) {
                    key15.play();
                } else if (octave === 1) {
                    key03.play();
                }
                break;
            case "D#-3":
                if (octave === 0) {
                    key16.play();
                } else if (octave === 1) {
                    key04.play();
                }
                break;
            case "E-3":
                if (octave === 0) {
                    key17.play();
                } else if (octave === 1) {
                    key05.play();
                }
                break;
            case "F-3":
                if (octave === 0) {
                    key18.play();
                } else if (octave === 1) {
                    key06.play();
                }
                break;
            case "F#-3":
                if (octave === 0) {
                    key19.play();
                } else if (octave === 1) {
                    key07.play();
                }
                break;
            case "G-3":
                if (octave === 0) {
                    key20.play();
                } else if (octave === 1) {
                    key08.play();
                }
                break;
            case "G#-3":
                if (octave === 0) {
                    key21.play();
                } else if (octave === 1) {
                    key09.play();
                }
                break;
            case "A-3":
                if (octave === 0) {
                    key22.play();
                } else if (octave === 1) {
                    key10.play();
                }
                break;
            case "A#-3":
                if (octave === 0) {
                    key23.play();
                } else if (octave === 1) {
                    key11.play();
                }

                break;
            case "B-3":
                if (octave === 0) {
                    key24.play();
                } else if (octave === 1) {
                    key12.play();
                }
                break;

            default:
                break;
        }
    }
});

document.querySelector("#keyboard").addEventListener("touchend", (event) => {
    if (event.target.matches(".key-btn")) {
        const id = event.target.getAttribute("id");
        console.log("keyboard keyup", id);
        switch (id) {
            case "C-3":
                if (octave === 0) {
                    key13.pause();
                    key13.currentTime = 0;
                } else if (octave === 1) {
                    key01.pause();
                    key01.currentTime = 0;
                }
                break;
            case "C#-3":
                if (octave === 0) {
                    key14.pause();
                    key14.currentTime = 0;
                } else if (octave === 1) {
                    key02.pause();
                    key02.currentTime = 0;
                }
                break;
            case "D-3":
                if (octave === 0) {
                    key15.pause();
                    key15.currentTime = 0;
                } else if (octave === 1) {
                    key03.pause();
                    key03.currentTime = 0;
                }
                break;
            case "D#-3":
                if (octave === 0) {
                    key16.pause();
                    key16.currentTime = 0;
                } else if (octave === 1) {
                    key04.pause();
                    key04.currentTime = 0; key04.play();
                }
                break;
            case "E-3":
                if (octave === 0) {
                    key17.pause();
                    key17.currentTime = 0;
                } else if (octave === 1) {
                    key05.pause();
                    key05.currentTime = 0;
                }
                break;
            case "F-3":
                if (octave === 0) {
                    key18.pause();
                    key18.currentTime = 0;
                } else if (octave === 1) {
                    key06.pause();
                    key06.currentTime = 0;
                }
                break;
            case "F#-3":
                if (octave === 0) {
                    key19.pause();
                    key19.currentTime = 0;
                } else if (octave === 1) {
                    key07.pause();
                    key07.currentTime = 0;
                }
                break;
            case "G-3":
                if (octave === 0) {
                    key20.pause();
                    key20.currentTime = 0;
                } else if (octave === 1) {
                    key08.pause();
                    key08.currentTime = 0;
                }
                break;
            case "G#-3":
                if (octave === 0) {
                    key21.pause();
                    key21.currentTime = 0;
                } else if (octave === 1) {
                    key09.pause();
                    key09.currentTime = 0;
                }
                break;
            case "A-3":
                if (octave === 0) {
                    key22.pause();
                    key22.currentTime = 0;
                } else if (octave === 1) {
                    key10.pause();
                    key10.currentTime = 0;
                }
                break;
            case "A#-3":
                if (octave === 0) {
                    key23.pause();
                    key23.currentTime = 0;
                } else if (octave === 1) {
                    key11.pause();
                    key11.currentTime = 0;
                }

                break;
            case "B-3":
                if (octave === 0) {
                    key24.pause();
                    key24.currentTime = 0;
                } else if (octave === 1) {
                    key12.pause();
                    key12.currentTime = 0;
                }
                break;

            default:
                break;
        }
    }
});
