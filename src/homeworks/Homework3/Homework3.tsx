import { TitleHomework } from "@/components/fonts/Fonts";
import { Greeting, Person, person, hobbiesList, RenderList, UserStatus, CardProductLaptop } from "@/components/Test/Test";
import { product, GREEN_APPLE_PRODUCT } from "@/constants/products/Test";
import { CardProduct } from "@/components/Test";

export default function Homework3() {
  return (
    <div className="homework-container">
      <TitleHomework number={3} />

      <div className="homework-preview-area">
        <Greeting name='Val' />
        <Person data={person} />
        <UserStatus isOnline={true} />
        <RenderList hobbies={hobbiesList} />
        <CardProductLaptop {...product} />
        <CardProduct data={GREEN_APPLE_PRODUCT} />
      </div>
    </div>
  );
}