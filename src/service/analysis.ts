import type { TAnalysis } from '@/model'

export const sendAnalysis = async (analysis: TAnalysis) => {
  navigator.sendBeacon('/analysis', JSON.stringify({ ...analysis }))
}
