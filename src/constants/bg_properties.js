export const particleProperties = {
  fullScreen: { enable: false },
  autoPlay: true,
  background: {
    color: {
      value: "#181818",
    },
    image: "",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover",
    opacity: 1,
  },
  backgroundMask: {
    composite: "destination-out",
    cover: {
      color: {
        value: "#fff",
      },
      opacity: 1,
    },
    enable: false,
  },
  backgroundMode: {
    enable: true,
    zIndex: 0,
  },
  detectRetina: true,
  fpsLimit: 60,
  infection: {
    cure: false,
    delay: 0,
    enable: false,
    infections: 0,
    stages: [],
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onDiv: {
        selectors: [],
        enable: false,
        mode: [],
        type: "circle",
      },
      onHover: {
        enable: true,
        mode: "grab",
        parallax: {
          enable: false,
          force: 2,
          smooth: 10,
        },
      },
      resize: true,
    },
    modes: {
      attract: {
        distance: 200,
        duration: 0.4,
        speed: 1,
      },
      bounce: {
        distance: 200,
      },
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.92,
        size: 51,
      },
      connect: {
        distance: 100,
        links: {
          opacity: 0.5,
        },
        radius: 100,
      },
      grab: {
        distance: 400,
        links: {
          blink: true,
          consent: true,
          opacity: 1,
        },
      },
      light: {
        area: {
          gradient: {
            start: {
              value: "#ffffff",
            },
            stop: {
              value: "#000000",
            },
          },
          radius: 1000,
        },
        shadow: {
          color: {
            value: "#000000",
          },
          length: 2000,
        },
      },
      push: {
        quantity: 10,
      },
      remove: {
        quantity: 2,
      },
      repulse: {
        distance: 2000,
        duration: 0.4,
        speed: 10,
      },
      slow: {
        factor: 3,
        radius: 200,
      },
      trail: {
        delay: 1,
        quantity: 1,
        particles: {
          bounce: {
            horizontal: {
              random: {},
            },
            vertical: {
              random: {},
            },
          },
          collisions: {
            bounce: {
              horizontal: {
                random: {},
              },
              vertical: {
                random: {},
              },
            },
          },
          color: {
            animation: {},
          },
          life: {
            delay: {
              random: {},
            },
            duration: {
              random: {},
            },
          },
          links: {
            shadow: {},
            triangles: {},
          },
          move: {
            angle: {},
            attract: {
              rotate: {},
            },
            gravity: {},
            noise: {
              delay: {
                random: {},
              },
            },
            outModes: {},
            trail: {},
          },
          number: {
            density: {},
          },
          opacity: {
            animation: {},
            random: {},
          },
          rotate: {
            animation: {},
          },
          shadow: {
            offset: {},
          },
          shape: {},
          size: {
            animation: {},
            random: {},
          },
          stroke: {
            color: {
              value: "",
              animation: {
                enable: false,
                speed: 0,
                sync: false,
              },
            },
          },
          twinkle: {
            lines: {},
            particles: {},
          },
        },
      },
    },
  },
  manualParticles: [],
  motion: {
    disable: false,
    reduce: {
      factor: 1,
      value: false,
    },
  },
  particles: {
    bounce: {
      horizontal: {
        random: {
          enable: false,
          minimumValue: 0.1,
        },
        value: 1,
      },
      vertical: {
        random: {
          enable: false,
          minimumValue: 0.1,
        },
        value: 1,
      },
    },
    collisions: {
      bounce: {
        horizontal: {
          random: {
            enable: false,
            minimumValue: 0.1,
          },
          value: 1,
        },
        vertical: {
          random: {
            enable: false,
            minimumValue: 0.1,
          },
          value: 1,
        },
      },
      enable: true,
      mode: "bounce",
    },
    color: {
      value: "#ff0000",
      animation: {
        enable: true,
        speed: 200,
        sync: false,
      },
    },
    life: {
      count: 1000,
      delay: {
        random: {
          enable: false,
          minimumValue: 0,
        },
        value: 0,
        sync: false,
      },
      duration: {
        random: {
          enable: false,
          minimumValue: 0.0001,
        },
        value: 0,
        sync: false,
      },
    },
    links: {
      blink: false,
      color: {
        value: "#ffffff",
      },
      consent: false,
      distance: 200,
      enable: true,
      frequency: 10,
      opacity: 0.39,
      shadow: {
        blur: 5,
        color: {
          value: "#00ff00",
        },
        enable: false,
      },
      triangles: {
        enable: false,
        frequency: 1,
      },
      width: 1,
      warp: false,
    },
    move: {
      angle: {
        offset: 45,
        value: 90,
      },
      attract: {
        enable: false,
        rotate: {
          x: 600,
          y: 1200,
        },
      },
      direction: "none",
      distance: 0,
      enable: true,
      gravity: {
        acceleration: 9.81,
        enable: false,
        maxSpeed: 50,
      },
      noise: {
        delay: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 0,
        },
        enable: false,
      },
      outModes: {
        default: "out",
        bottom: "out",
        left: "out",
        right: "out",
        top: "out",
      },
      random: false,
      size: false,
      speed: 4,
      straight: false,
      trail: {
        enable: false,
        length: 10,
        fillColor: {
          value: "#000000",
        },
      },
      vibrate: false,
      warp: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
        factor: 1000,
      },
      limit: 0,
      value: 250,
    },
    opacity: {
      random: {
        enable: false,
        minimumValue: 0.1,
      },
      value: 1,
      animation: {
        enable: false,
        minimumValue: 0.1,
        speed: 3,
        sync: false,
      },
    },
    reduceDuplicates: false,
    rotate: {
      random: {
        enable: false,
        minimumValue: 0,
      },
      value: 0,
      animation: {
        enable: false,
        speed: 0,
        sync: false,
      },
      direction: "clockwise",
      path: false,
    },
    shadow: {
      blur: 0,
      color: {
        value: "#000000",
      },
      enable: false,
      offset: {
        x: 0,
        y: 0,
      },
    },
    shape: {
      options: {
        polygon: {
          sides: 5,
        },
        image: {
          src: "https://cdn.matteobruni.it/images/particles/github.svg",
          width: 100,
          height: 100,
        },
      },
      type: "circle",
    },
    size: {
      random: {
        enable: true,
        minimumValue: 1,
      },
      value: 3,
      animation: {
        destroy: "none",
        enable: true,
        minimumValue: 0.1,
        speed: 20,
        startValue: "max",
        sync: false,
      },
    },
    stroke: {
      width: 0,
      color: {
        value: "",
        animation: {
          enable: true,
          speed: 0,
          sync: false,
        },
      },
    },
    twinkle: {
      lines: {
        enable: true,
        frequency: 0.05,
        opacity: 1,
      },
      particles: {
        enable: false,
        frequency: 0.05,
        opacity: 1,
      },
    },
  },
  pauseOnBlur: true,
  themes: [],
};
