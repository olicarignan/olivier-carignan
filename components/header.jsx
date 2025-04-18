import LanguageSwitcher from "./languageSwitcher"

export default function Header({currentLanguage, locale}) {

    return (
        <section className="header">
            <div className="header__wrap">
                <div className="header__left">
                    <h1 className="header__title">Olivier Carignan</h1>
                    <LanguageSwitcher text={currentLanguage} />
                </div>
                <div className="header__right">
                    <a className="header__link" href="mailto:hey@olividercarignan.dev" target="_blank" rel="noopener noreferrer" aria-label={locale === "en" ? "contact me" : "contactez-moi"}>
                        <p>hey@oliviercarignan.dev</p>
                        <p>✉️</p>
                    </a>
                    <a href="https://github.com/olicarignan" className="header__link" target="_blank" rel="noopener noreferrer" aria-label="github">
                        <p>github.com/olicarignan</p>
                        <p>🌐</p>
                    </a>
                    <LanguageSwitcher text={currentLanguage} />
                </div>
            </div>
        </section>
    )
}