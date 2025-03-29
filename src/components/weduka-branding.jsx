import { Building2 } from "lucide-react"

export function WedukaBranding() {
  return (
    <div className="flex flex-col items-center space-y-2">
      <a href="/" className="flex items-center space-x-2">
        <div className="bg-primary p-2 rounded-full">
          <img src="/logo.png" alt="weduca logo" className="w-[64px]" />
        </div>
        <span className="text-2xl font-bold">Weduka Apply</span>
      </a>
      <p className="text-sm text-muted-foreground">Your application management solution</p>
    </div>
  )
}

