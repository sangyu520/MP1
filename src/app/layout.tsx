import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/layout/Layout'
import { LightPullThemeSwitcher } from '@/components/ui/light-pull-theme-switcher' // ✅ 导入 LightPullThemeSwitcher 组件
import { name, headline, introduction } from '@/config/infoConfig'
import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: `%s - ${name}`,
    default:
      `${name} - ${headline}`,
  },
  description:
    `${introduction}`,
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full">
        <Providers>
          {/* 将 LightPullThemeSwitcher 放在右上角 */}
          <div className="fixed top-4 right-4 z-50">
            <LightPullThemeSwitcher /> {/* 让组件在每个页面的右上角显示 */}
          </div>

          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
