import { watch } from 'vue'

export const useScopedDark = () => {

  const scopedDark = useState('scopedDark', () => false)

  if (process.client) {
    const saved = localStorage.getItem('scopedDark')
    if (saved !== null) scopedDark.value = saved === 'true'
    watch(scopedDark, v => localStorage.setItem('scopedDark', String(v)))
  }

  return scopedDark
}