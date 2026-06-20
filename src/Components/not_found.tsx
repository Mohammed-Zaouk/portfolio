import { Link } from "react-router-dom";
import "../Styles/not_found.css";
import { useLanguage } from "../Context/language";

const notFoundText = {
  en: {
    title: "Page not found",
    text: "The page you're looking for doesn't exist or has been moved.",
    btn: "Back to Home",
  },
  fr: {
    title: "Page introuvable",
    text: "Cette page n'existe pas ou a été déplacée.",
    btn: "Retour à l'accueil",
  },
  ar: {
    title: "الصفحة غير موجودة",
    text: "هذه الصفحة غير موجودة أو تم نقلها.",
    btn: "العودة للرئيسية",
  },
  ja: {
    title: "ページが見つかりません",
    text: "お探しのページは存在しないか、移動した可能性があります。",
    btn: "ホームに戻る",
  },
};

export default function NotFound() {
  const { language } = useLanguage();
  const t = notFoundText[language];

  return (
    <main className="notfound" dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="notfound__inner">
        <span className="notfound__code">404</span>
        <div className="notfound__divider" />
        <div className="notfound__content">
          <h1 className="notfound__title">{t.title}</h1>
          <p className="notfound__text">{t.text}</p>
          <Link to="/" className="notfound__btn">
            {t.btn}
          </Link>
        </div>
      </div>
    </main>
  );
}
