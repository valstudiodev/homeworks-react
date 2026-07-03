import './card.scss';

interface CardProps {
  title: string;
  text: string;
}
export function Card({ data }: { data: CardProps }) {
  const { title, text } = data
  return (
    <div className='card bg-bg-card p-24'>
      <h1 className='card__title text-2xl mb-4'>{title}</h1>
      <p className='card__text text-#fff'>{text}</p>
    </div>
  )
}