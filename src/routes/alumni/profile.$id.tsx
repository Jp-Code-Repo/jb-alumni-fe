import { createFileRoute } from '@tanstack/react-router'

import AlumniForm from '@/features/alumni/AlumniForm'

export const Route = createFileRoute('/alumni/profile/$id')({
  component: AlumniUpdateForm,
})

function AlumniUpdateForm () 
{
  const {id} = Route.useParams();

  return <AlumniForm profileId={id} />
}