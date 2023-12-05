import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";


function formatToRupiah(price) {
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
  return formatter.format(price);
}

export function CardProduct({ product }) {
  return (
    <Card className="w-64 mb-12 cursor-pointer">
      <CardHeader shadow={true} floated={false} className="h-36">
        <img
          src={product.img}
          alt="card-image"
          className="h-full w-full object-contain"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium font-poppins">
            {product.name}
          </Typography>
          <Typography color="blue-gray" className="font-medium font-poppins">
            {formatToRupiah(product.price)}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-light opacity-75 font-poppins"
        >
          {product.description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <a href="https://wa.me/6282299859139" target="_blank"><Button
          ripple={false}
          fullWidth={true}
          className="bg-green-400 text-blue-gray-50 shadow-none font-poppins font-semibold hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Beli
        </Button></a>
      </CardFooter>
    </Card>
  );
}