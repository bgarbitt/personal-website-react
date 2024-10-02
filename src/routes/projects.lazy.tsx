import { createLazyFileRoute } from '@tanstack/react-router'
import { Projects } from '../pages/Projects/Projects'

export const Route = createLazyFileRoute('/projects')({
  component: Projects,
})
