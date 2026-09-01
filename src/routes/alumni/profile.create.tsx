import { createFileRoute } from '@tanstack/react-router'

import AlumniForm from '@/features/alumni/AlumniForm'

export const Route = createFileRoute('/alumni/profile/create')({
  component: AlumniForm,
})
