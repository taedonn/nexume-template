import type { Metadata } from 'next'
import { Montserrat } from "next/font/google"
import nexumeConfig from '~/nexume.config'
import '@/css/tailwind.css'

const { meta } = nexumeConfig

export const metadata: Metadata = {
	metadataBase: new URL(meta.url),
	title: meta.title ? meta.title : '',
	description: meta.description ? meta.description : '',
	icons: { icon: meta.icon ? meta.icon: '' },
	openGraph: {
		title: meta.title ? meta.title : '',
		description: meta.description ? meta.description : '',
		images: meta.images ? meta.images : ''
	},
	twitter: {
		title: meta.title ? meta.title : '',
		description: meta.description ? meta.description : '',
		images: [meta.images ? meta.images : '']
	}
}

const montserrat = Montserrat({ subsets: ['latin'] })

export default function RootLayout({
	children,
}: {
	children: React.ReactNode,
}) {
	return (
		<html lang="en">
			<head>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
			</head>
			<body className={`${montserrat.className}`}>
				{children}
			</body>
		</html>
	)
}
