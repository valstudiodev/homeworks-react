import { CardProduct } from "@/components/CardProduct";
import { TitleHomework } from "@/components/fonts/Fonts";
import { GREEN_APPLE_PRODUCT } from "@/constants/products/products";

export default function Homework1() {
  return (
    <div className="homework-container">
      <TitleHomework number={1} />

      <div className="homework-preview-area">
        <CardProduct data={GREEN_APPLE_PRODUCT} />
      </div>
    </div >
  );
}

