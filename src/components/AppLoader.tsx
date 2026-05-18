type AppLoaderProps = {
  text?: string
}

export default function AppLoader({ text = "Loading..." }: AppLoaderProps) {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-4">
        <div
          className="w-8 h-8 rounded-full border-2 border-[#D2AF9C] border-t-transparent animate-spin"
          aria-hidden="true"
        />
        <p className="text-[#D2AF9C] text-sm font-medium opacity-70">{text}</p>
      </div>
    </div>
  )
}
