import { createFileRoute } from '@tanstack/react-router'

import AlumniReports from '@/features/alumni/AlumniReports'

export const Route = createFileRoute('/alumni/reports')({
  component: AlumniReports,
})