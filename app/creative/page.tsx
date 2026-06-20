import CreativeClient from './_components/CreativeClient'
import { getPresenter } from './_data/presenters'

type Props = {
  searchParams: { as?: string }
}

export default function CreativePage({ searchParams }: Props) {
  const presenter = getPresenter(searchParams.as)
  return <CreativeClient presenter={presenter} />
}
