import Footer from "../components/Footer/footer";
import { NavbarDefault } from "../components/Navbar";

const Gallery = () => {
  return (
    <>
      <NavbarDefault />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10 mb-10">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://images.unsplash.com/photo-1591004272853-1462c050dca8?auto=format&fit=crop&q=80&w=1475&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://images.unsplash.com/photo-1513072064285-240f87fa81e8?auto=format&fit=crop&q=80&w=1527&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://images.unsplash.com/photo-1648288725215-ece6cdaa32b2?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://images.unsplash.com/photo-1648288725923-da77b4d482fe?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://images.unsplash.com/photo-1650083731805-5d4c981c1c3e?auto=format&fit=crop&q=80&w=1373&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
            alt=""
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
