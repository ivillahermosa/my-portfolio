import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Terms of Service | Ivan Villahermosa',
    description: 
        'Review the Terms of Service for ivanvillahermosa.com, outlining the rules, conditions, and limitations for using this website and its content.',
    keywords:
    [
        'Ivan Villahermosa',
        'Terms of Service',
        '.Net Developer',
        'Software Engineer',
        'Fullstack .Net Engineer',
        'Portfolio',
        'Developer'
    ],
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: `${process.env.PUBLIC_BASE_URL}/terms`,
    },
}

export default async function TermsOfServicePage() {
    return (
        <section>
            <h1>This is the terms.</h1>
        </section>
    )
}