import useGetThemeMode from "@/src/hooks/useGetThemeMode"
import { Toaster } from "sonner"


export type ToastType = "success" | "info" | "warning" | "error"

export default function CustomToast () {

  const theme = useGetThemeMode()
  
    return (
        <Toaster
          position="top-right"
          richColors
          closeButton
          // theme={theme}
          toastOptions={{
            style: {borderRadius: 5, boxShadow: 'none', fontWeight: 300, fontSize: '12px'}
          }}
        />
    )
}