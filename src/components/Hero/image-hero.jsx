import { Typography, Button } from "@material-tailwind/react";

const ImageHero = ({ url, title, paragraph }) => {
    return (
        <div className="relative h-full w-full">
        <img
          src={url}
          alt="image 1"
          className="h-[530px] w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-8 text-3xl md:text-4xl lg:text-5xl font-montserrat"
            >
              {title}
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 font-montserrat"
            >
              {paragraph}
            </Typography>
            <div className="flex justify-center gap-2">
              <Button className="font-poppins font-normal" size="lg" color="light-green">
                Explore
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ImageHero