import { Carousel } from "@material-tailwind/react";
import ImageHero from "./image-hero";

export function CarouselProduct() {
  return (
    <Carousel
      className="rounded-none" autoplay={true} autoplayDelay={5000} loop={true}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-0 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <ImageHero
        url="https://images.unsplash.com/photo-1590108589108-3600131de843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1524&q=80"
        title="The Beauty of Kaaba"
        paragraph="Di tengah padang gurun, di antara pasir yang membakar, ibadah haji terjadi. Ini bukan semata-mata karena keagungan Kaaba bahwa jiwa-jiwa yang beriman menjalani perjalanan suci ini, tetapi juga karena koneksi yang mendalam, perasaan yang gaib dari kesatuan dengan Yang Ilahi, yang memperbarui dan membangkitkan semangat."
      />
      <ImageHero
        url="https://images.unsplash.com/photo-1648288725063-6b1b7981fa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
        title="Desert's Delight"
        paragraph="Dalam rimbunnya kebun kurma, kurma berkembang, menggambarkan esensi manis kehidupan. Bukan hanya rasa manisnya yang merebut hati, melainkan juga dekapan gizi mereka, yang mendukung baik tubuh maupun jiwa."
      />
      <ImageHero
        url="https://images.unsplash.com/photo-1515854444493-2c337cf5cfd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        title="Saat Haji Menyapa Hati"
        paragraph="Di pasar ramai Makkah, oleh-oleh berbisik kisah kesalehan. Kenang-kenangan ini membawa bukan hanya pernak-pernik, tetapi juga hangatnya iman dan perjalanan sang peziarah, meninggalkan sepotong hati mereka."
      />
    </Carousel>
  );
}
