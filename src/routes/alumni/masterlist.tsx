import { createFileRoute } from '@tanstack/react-router'

import AlumniMasterlist from '@/features/alumni/AlumniMasterlist'

export const Route = createFileRoute('/alumni/masterlist')({
  component: AlumniMasterlist,
})