import Faq from "react-faq-component";

const FaqComponent = () => {
  const data = {
    title: "FAQ (Cara Pesan)",
    rows: [
      {
        title: "Mengapa Pesan Dengan Kita?",
        content: `Kami menawarkan produk-produk oleh-oleh haji berkualitas tinggi yang dipilih dengan cermat, 
                  sehingga Anda dapat memberikan yang terbaik kepada keluarga dan teman-teman Anda, dengan harga yang kompetitif,
                  dan juga Kami menjamin keaslian produk dan keamanannya. Kami bekerja sama dengan pemasok tepercaya untuk memastikan 
                  Anda mendapatkan produk yang aman `,
      },
      {
        title: "Bagaimana Cara Memesannya?",
        content:
          "Pilih Produk --> Tambahkan Keranjang --> Proses Pembayaran --> Konfirmasi Pembayaran.",
      },
      {
        title: "Berapa Lama Pengiriman?",
        content: `Pengiriman tergantung dengan lokasi customer jika dipulau jawa sekitar 3-4 hari, jika diluar 
                  pulau jawa estimasi sekitar seminggu (termasuk hari libur). `,
      },
      {
        title: "Apakah ada platform lain untuk memesan?",
        content: <p>Shopee, Tokopedia, Instagram, Whatsapp -- CahayaElhamidi</p>,
      },
    ],
  };

  const styles = {
    // bgColor: 'white',
    titleTextColor: "green",
    rowTitleColor: "black",
    rowContentColor: 'grey',
    arrowColor: "green",
  };

  const config = {
    animate: true,
    // arrowIcon: "V",
    tabFocus: true
  };

  return (
    <div className="mx-auto w-[200px] md:w-[1100px] mb-28">
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
};

export default FaqComponent;
