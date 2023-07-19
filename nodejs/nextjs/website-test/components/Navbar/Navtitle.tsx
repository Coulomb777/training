
interface Props {
  title: string;
}

export default function Navtitle({ title }: Props) {
  return (
    <div className="nav-title shrink-0 font-semibold text-xl tracking-tight text-white mr-6">
      <a href="/"> {title} </a>
    </div>
  )
}
