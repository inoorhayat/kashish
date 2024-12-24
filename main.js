// Audio handling
let audio = document.getElementById("myAudio");
audio.pause(); // Initially pause the audio

function handleMusic(play) {
    const overlay = document.getElementById('musicOverlay');
    overlay.style.display = 'none';
    
    if (play) {
        audio.play();
        audio.loop = true;
    }
    
    // Start the website content and animations after user's choice
    document.querySelector('.container').style.display = 'block';
    fetchData(); // This will trigger the animations after loading the data
}

const fetchData = () => {
    fetch("customize.json")
      .then(data => data.json())
      .then(data => {
        dataArr = Object.keys(data);
        dataArr.map(customData => {
          if (data[customData] !== "") {
            if (customData === "imagePath") {
              document
                .querySelector(`[data-node-name*="${customData}"]`)
                .setAttribute("src", data[customData]);
            } else {
              document.querySelector(`[data-node-name*="${customData}"]`).innerText = data[customData];
            }
          }
  
          // Check if the iteration is over
          // Run amimation if so
          if ( dataArr.length === dataArr.indexOf(customData) + 1 ) {
            animationTimeline();
          } 
        });
      });
  };
  
  
  
  
  // Animation Timeline
  const animationTimeline = () => {
    // Spit chars that needs to be animated individually
    const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
    const hbd = document.getElementsByClassName("wish-hbd")[0];
  
    textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
        .split("")
        .join("</span><span>")}</span`;
  
    hbd.innerHTML = `<span>${hbd.innerHTML
        .split("")
        .join("</span><span>")}</span`;
  
    const ideaTextTrans = {
        opacity: 0,
        y: -20,
        rotationX: 5,
        skewX: "15deg"
    };
  
    const ideaTextTransLeave = {
        opacity: 0,
        y: 20,
        rotationY: 5,
        skewX: "-15deg"
    };
  
    const tl = new TimelineMax();
  
    tl
        .to(".container", 0.1, {
            visibility: "visible"
        })
        .from(".one", 1.5, {
            opacity: 0,
            y: 10,
            ease: Expo.easeOut
        })
        .from(".two", 3, {
            opacity: 0,
            y: 10,
            ease: Expo.easeOut
        }, "+=1")
        .to(".one", 1.5, {
            opacity: 0,
            y: 10,
            ease: Expo.easeOut
        }, "+=2")
        .to(".two", 1, {
            opacity: 0,
            y: 10,
            ease: Expo.easeOut
        }, "-=1")
        .from(".three", 1.5, {
            opacity: 0,
            y: 10,
            ease: Expo.easeOut
        })
        .to(".three", 1, {
            opacity: 0,
            y: 10,
            ease: Expo.easeOut
        }, "+=2")
        .from(".four", 0.7, {
            scale: 0.2,
            opacity: 0,
            ease: Expo.easeOut
        })
        .from(".fake-btn", 0.3, {
            scale: 0.2,
            opacity: 0,
            ease: Expo.easeOut
        })
        .staggerTo(
            ".hbd-chatbox span",
            0.5, {
                visibility: "visible",
                ease: Power4.easeOut
            },
            0.05
        )
        .to(".fake-btn", 0.1, {
            backgroundColor: "rgb(127, 206, 248)",
        })
        .to(".four", 0.5, {
            scale: 0.2,
            opacity: 0,
            y: -150,
            ease: Power3.easeOut
        }, "+=0.7")
        .from(".idea-1", 1, ideaTextTrans)
        .to(".idea-1", 1, ideaTextTransLeave, "+=1.5")
        .from(".idea-2", 1, ideaTextTrans)
        .to(".idea-2", 1, ideaTextTransLeave, "+=1.5")
        .from(".idea-3", 2, ideaTextTrans)
        .to(".idea-3 strong", 0.7, {
            scale: 1.1,
            x: 10,
            backgroundColor: "rgb(21, 161, 237)",
            color: "#fff",
            ease: Power3.easeOut
        })
        .to(".idea-3", 1, ideaTextTransLeave, "+=1.5")
        .from(".idea-4", 1, ideaTextTrans)
        .to(".idea-4", 1, ideaTextTransLeave, "+=1.5")
        .from(".idea-5", 1, {
            rotationX: 15,
            rotationZ: -10,
            skewY: "-5deg",
            y: 50,
            z: 10,
            opacity: 0,
            ease: Expo.easeOut
        }, "+=0.5")
        .to(".idea-5 .smiley", 0.7, {
            rotation: 90,
            x: 8,
            ease: Power3.easeOut
        }, "+=0.4")
        .to(".idea-5", 1, {
            opacity: 0,
            y: 30,
            ease: Power3.easeOut
        }, "+=2")
        .staggerFrom(
            ".idea-6 span",
            0.8, {
                scale: 3,
                opacity: 0,
                rotation: 15,
                ease: Expo.easeOut
            },
            0.2
        )
        .staggerTo(
            ".idea-6 span",
            0.8, {
                scale: 3,
                opacity: 0,
                rotation: -15,
                ease: Expo.easeOut
            },
            0.2,
            "+=1.5"
        )
        .staggerFromTo(
            ".baloons img",
            4, {
                opacity: 0.9,
                y: 1400
            }, {
                opacity: 1,
                y: -1000,
                ease: Power3.easeOut
            },
            0.1
        )
        .from(
            ".lydia-dp",
            0.5, {
                scale: 3.5,
                opacity: 0,
                x: 25,
                y: -25,
                rotationZ: -45,
                ease: Power3.easeOut
            },
            "-=2"
        )
        .from(".hat", 0.5, {
            x: -100,
            y: 350,
            rotation: -180,
            opacity: 0,
            ease: Power3.easeOut
        })
        .staggerFrom(
            ".wish-hbd span",
            0.3, {
                opacity: 0,
                y: -50,
                ease: Elastic.easeOut.config(1, 0.5)
            },
            0.1
        )
        .staggerFromTo(
            ".wish-hbd span",
            0.3, {
                scale: 1.4,
                rotationY: 150
            }, {
                scale: 1,
                rotationY: 0,
                color: "#ff69b4",
                ease: Power3.easeOut
            },
            0.1,
            "party"
        )
        .from(
            ".wish h5",
            0.5, {
                opacity: 0,
                y: 10,
                skewX: "-15deg",
                ease: Power3.easeOut
            },
            "party"
        )
        .staggerTo(
            ".eight svg",
            3, {
                visibility: "visible",
                opacity: 0,
                scale: 80,
                repeat: 2,
                repeatDelay: 1.4,
                ease: Power3.easeOut
            },
            0.7
        )
        .to(".six", 0.5, {
            opacity: 0,
            y: 30,
            zIndex: "-1",
            ease: Power3.easeOut
        })
        .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
        .to(".last-smile", 0.5, {
            rotation: 90,
            ease: Power3.easeOut
        }, "+=1");
  
    // Restart Animation on click
    const replyBtn = document.getElementById("replay");
    replyBtn.addEventListener("click", () => {
        tl.restart();
    });
  };
  
  // Run fetch and animation in sequence
  
  // Removing the automatic fetchData() call since we now call it after user's choice
  // fetchData();
