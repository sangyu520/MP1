import { LightPullThemeSwitcher } from "@/components/ui/light-pull-theme-switcher"

export function Demo(){
    return(
        <div className="flex flex-col items-center">
            <LightPullThemeSwitcher/>
            <p className="text-sm text-neutral-500">Pull down to change theme</p>
        </div>
    )
}