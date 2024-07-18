export type ColorKey =
  | "primary"
  | "secondary"
  | "thirdary"
  | "game"
  | "text1"
  | "text2";
export type HeaderSize = "none" | "small";
export type HeaderText = "default";
export type ThemeName = "origin";
export type HeadingSize = "large" | "medium" | "small";
export type ButtonSize = "large" | "medium" | "small" | "long";
export type ButtonScheme = "abled" | "disabled" | "clicked";
export type BorderRadius = "default" | "editor" | "round";
export type TrashColor = "red" | "yellow" | "blue";
export type TrashState = "clear" | "unclear";

export interface Theme {
  name: ThemeName;
  headerSize: {
    [key in HeaderSize]: {
      height: string;
    };
  };
  headerText: {
    default: {
      color: string;
      fontSize: string;
      fontWeight: string;
      textShadow: string;
    };
  };
  color: Record<ColorKey, string>;
  heading: {
    [key in HeadingSize]: {
      fontSize: string;
    };
  };
  buttonSize: {
    [key in ButtonSize]: {
      fontSize: string;
      padding: string;

      width?: string;
      height?: string;
      display?: string;
      alignItems?: string;
      justifyContent?: string;
    };
  };
  buttonScheme: {
    [key in ButtonScheme]: {
      color: string;
      backgroundColor: string;
    };
  };
  borderRadius: {
    [key in BorderRadius]: string;
  };
}

const origin: Theme = {
  name: "origin",
  headerSize: {
    none: {
      height: "0px",
    },
    small: {
      height: "1.4",
    },
  },
  headerText: {
    default: {
      color: "white",
      fontSize: "2.5rem",
      fontWeight: "700",
      textShadow: "-2px 0px #bbb, 0px 2px #bbb, 2px 0px #bbb, 0px -2px #bbb",
    },
  },
  color: {
    primary: "rgb(94, 240, 249)",
    secondary: "rgb(218, 255, 234)",
    thirdary: "rgb(181, 255, 189)",
    game: "rgb(242, 242, 242)",
    text1: "rgb(174, 162, 138)",
    text2: "rgb(108, 102, 90)",
  },
  heading: {
    large: {
      fontSize: "2rem",
    },
    medium: {
      fontSize: "1.5rem",
    },
    small: {
      fontSize: "1rem",
    },
  },
  buttonSize: {
    large: {
      fontSize: "1.3rem",
      padding: "1rem 1rem",
    },
    medium: {
      fontSize: "1.2rem",
      padding: "0.5rem 1rem",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    small: {
      fontSize: "1rem",
      padding: "0.25rem 0.5rem",
    },
    long: {
      fontSize: "1.5rem",
      padding: "0rem",
      width: "300px",
      height: "60px",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  buttonScheme: {
    abled: {
      color: "rgba(0, 0, 0, 0.6)",
      backgroundColor: "#97cf9d",
      // color: "rgba(0, 0, 0, 0.5)",
      // backgroundColor: "rgb(94, 240, 249)",
    },
    disabled: {
      color: "white",
      backgroundColor: "gray",
    },
    clicked: {
      color: "white",
      backgroundColor: "#f0442e",
    },
  },
  borderRadius: {
    default: "8px",
    editor: "4px",
    round: "30px",
  },
};

export const getTheme = (): Theme => {
  return origin;
};
