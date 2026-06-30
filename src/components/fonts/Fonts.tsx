interface TitleHomeworkProps {
  number: number | string;
}

export function TitleHomework({ number }: TitleHomeworkProps) {
  return (
    <h2 className="title-homework text-3xl font-bold text-[clamp(1.7rem,2.5vw,2.5rem)]">📚 Homework №{number}</h2>
  )
}

interface SubtitleHomeworkTask {
  number: number | string;
}
export function SubtitleHomework({ number }: SubtitleHomeworkTask) {
  return (
    <h3 className="text-xl font-semibold text-gray-400 mb-3">
      Task {number}.
    </h3>
  )
}