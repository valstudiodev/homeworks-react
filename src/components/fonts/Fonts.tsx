interface TitleHomeworkProps {
  number: number | string;
}
interface Subtitle {
  title: string;
}
interface SubtitleTask {
  number: number;
}

export function TitleHomework({ number }: TitleHomeworkProps) {
  return (
    <h2 className="title-homework text-3xl font-bold text-[clamp(1.7rem,2.5vw,2.5rem)]">📚 Homework №{number}</h2>
  )
}

export function Subtitle({ title }: Subtitle) {
  return (
    <h3 className="text-2xl mb-4 text-center font-semibold text-zinc-100">
      {title}
    </h3>
  )
}

export function SubtitleTask({ number }: SubtitleTask) {
  return (
    <h2 className="text-white text-3xl">Task №{number}</h2>
  )
}