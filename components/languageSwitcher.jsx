import Link from "next/link"

export default function LanguageSwitcher({locale}) {

    return (
        <Link href="/" locale={locale === "en" ? "fr" : "en"}>
            <a aria-label={locale === "en" ? "site en français" : "english site"}>
                <p className="text-2xl">
                    {locale === "en" ? "FR" : "EN"}
                </p>
            </a>
        </Link>
    )
}