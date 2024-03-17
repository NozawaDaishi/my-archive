import { useRouter } from 'vue-router'

type FuncType = {
  navigateTo: (path: string) => void
  goBack: () => void
}

export function useNavigation(): FuncType {
  const router = useRouter()

  const navigateTo = (path: string): void => {
    router.push(path)
  }

  const goBack = (): void => {
    router.back()
  }

  return {
    navigateTo,
    goBack,
  }
}
