import { TitleHomework } from "@/components/fonts/Fonts";
import { CardProduct, Text } from "../../components/Test/Test";
import { GREEN_APPLE_PRODUCT } from "../../constants/products/Test";
// import styles from "./homework2.module.css";
import './Homework2.scss';

export default function Homework2() {

  return (
    <div className="homework-container flex flex-col items-center gap-10">
      <TitleHomework number={2} />

      <div className="homework-preview-area">
        {/* <CardProduct data={GREEN_APPLE_PRODUCT} />
        <CardProduct data={GREEN_APPLE_PRODUCT} />
        <CardProduct data={GREEN_APPLE_PRODUCT} /> */}

      </div>
    </div>
  );
}