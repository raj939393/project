import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { dancing_script } from "@/lib/fonts";

export default function Home() {
  const line1 = `"Roses are red, violets are blue, there is no better person than you🥰😘.
I am so glad that you are mine🥰.
when i tell you i love you,i don't say it out of habit,
i say it to remind that you&apos;re the best thing that ever happend to me😘😍.
Every time i see you👀,
i fall in love all over again😑💞.
Even If I meet more than a hundred people a day, 
my eyes 👀 still look the one whom I fall in love in a million times.
Genuinely You stole my heart💝, when i saw you first time🥰.
You better know that the single sentence can not express my love❤️
but still i want to say that,
Dishuu I really love❤️ you so much🥹😘🥰"`;

  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <div className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
          <TextGenerateEffect
            words={line1}
            className={`text-2xl md:text-3xl lg:text-8xl ${dancing_script.className}`}
          />
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}
