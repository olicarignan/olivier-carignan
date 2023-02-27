import Link from "next/link"

export default function LanguageSwitcher({text}) {

    return (
        <Link href="/" locale={text.locale}>
            <a aria-label={text.localeAria}>
                <p className="lang">
                    {text.localeCap}
                </p>
            </a>
        </Link>
    )
}