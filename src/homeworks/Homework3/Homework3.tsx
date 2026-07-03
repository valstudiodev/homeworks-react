import { TitleHomework } from "@/components/fonts/Fonts";
// import { Greeting, Person, person, hobbiesList, RenderList, UserStatus, CardProductLaptop, Counter, CounterProf, SimpleInput } from "@/components/Test/Test";
// import { product, GREEN_APPLE_PRODUCT } from "@/constants/products/Test";
// import { CardProduct } from "@/components/Test";
import { Card } from "../../components/card/Card";

export default function Homework3() {
  return (
    <div className="homework-container homework__container flex flex-col items-center gap-10">
      <TitleHomework number={3} />

      <div className="homework-preview-area">
        {/* <Greeting name='Val' />
        <Person data={person} />
        <UserStatus isOnline={true} />
        <RenderList hobbies={hobbiesList} />
        <CardProductLaptop {...product} />
        <CardProduct data={GREEN_APPLE_PRODUCT} /> */}
        {/* <Counter /> */}
        {/* <CounterProf /> */}
        {/* <SimpleInput /> */}
        <Card data={{ title: 'Card', text: 'Card text' }} />
      </div>
    </div>
  );
}