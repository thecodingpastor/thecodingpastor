import { Rozha_One, Kumbh_Sans } from "next/font/google";

const kumbhfont = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["300", "500", "600", "800"],
  variable: "--font-kumbh",
});

const rozhafont = Rozha_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-rozha",
});

export const kumbh = kumbhfont.variable;
export const rozha = rozhafont.variable;
