import type { Ref } from 'vue-demi'
import type { UITheme } from '~/types'

export const useTheme = (theme?: UITheme): Ref<string[]> => {
  switch (theme) {
    case 'primary':
      return ref(['ui--primary'])
    case 'default':
      return ref(['ui--default'])
    default:
      return ref([])
  }
}
