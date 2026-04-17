import { useState } from "react";
import Icon from "@/components/ui/icon";
import { AnimatedSection, IMG_COURT_1, IMG_COURT_2, IMG_COURT_3 } from "@/components/shared";

const gallery = [
  { img: IMG_COURT_1, label: "Общий вид корта" },
  { img: IMG_COURT_2, label: "Детали конструкции" },
  { img: IMG_COURT_3, label: "Корт в ТРЦ" },
];

const cases = [
  {
    client: "ТРЦ «Мегаполис»",
    city: "Екатеринбург",
    type: "2 крытых корта",
    result: "Окупаемость за 14 месяцев",
    img: IMG_COURT_3,
  },
  {
    client: "Фитнес-клуб «Арена»",
    city: "Челябинск",
    type: "4 открытых корта",
    result: "+60% трафика в клубе",
    img: IMG_COURT_1,
  },
  {
    client: "ЖК «Парк Хаус»",
    city: "Тюмень",
    type: "1 крытый корт",
    result: "Рост продаж квартир на 12%",
    img: IMG_COURT_2,
  },
];

export default function GallerySection() {
  const [activeGallery, setActiveGallery] = useState(0);

  return (
    <>
      {/* GALLERY */}
      <section id="gallery" className="py-24" style={{ backgroundColor: "var(--surface-1)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="mb-12">
              <div className="font-display text-sm tracking-widest uppercase mb-3" style={{ color: "var(--lime-dark)" }}>/ Фотогалерея</div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900">ГАЛЕРЕЯ КОРТОВ</h2>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid lg:grid-cols-3 gap-1">
              {gallery.map((item, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden cursor-pointer group"
                  style={{ outline: activeGallery === i ? "2px solid var(--lime)" : "none" }}
                  onClick={() => setActiveGallery(i)}
                >
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 transition-colors duration-300" style={{ backgroundColor: "rgba(26,41,128,0.4)" }} />
                  <div className="absolute bottom-0 left-0 right-0 p-4" style={{ background: "linear-gradient(to top, rgba(15,26,94,0.8), transparent)" }}>
                    <span className="font-display text-white text-sm tracking-wide">{item.label}</span>
                  </div>
                  <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 opacity-0 group-hover:opacity-100 transition-opacity" style={{ borderColor: "var(--lime)" }} />
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 opacity-0 group-hover:opacity-100 transition-opacity" style={{ borderColor: "var(--lime)" }} />
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="mt-8 flex gap-4 flex-wrap items-center">
              <span className="text-gray-400 text-sm font-body">Материалы: </span>
              {["Металлокаркас из оцинкованной стали", "Закалённое стекло 10–12 мм", "Профессиональная сетка", "LED-освещение"].map((tag) => (
                <span key={tag} className="border border-gray-200 text-gray-600 text-xs px-3 py-1 font-body">
                  {tag}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CASES */}
      <section id="cases" className="py-24" style={{ backgroundColor: "var(--indigo-dark)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="mb-16">
              <div className="font-display text-sm tracking-widest uppercase mb-3" style={{ color: "var(--lime)" }}>/ Опыт</div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white">РЕАЛИЗОВАННЫЕ ПРОЕКТЫ</h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {cases.map((c) => (
              <AnimatedSection key={c.client}>
                <div className="group relative overflow-hidden border border-white/10 hover:border-lime-400 transition-colors duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img src={c.img} alt={c.client} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60" />
                    <div className="absolute inset-0" style={{ backgroundColor: "rgba(26,41,128,0.6)" }} />
                    <div className="absolute top-4 left-4 px-3 py-1" style={{ backgroundColor: "var(--lime)" }}>
                      <span className="font-display text-xs font-bold text-gray-900 tracking-wide">{c.type}</span>
                    </div>
                  </div>
                  <div className="p-6 bg-white/5">
                    <div className="font-display text-xl font-bold text-white mb-1">{c.client}</div>
                    <div className="text-white/40 text-sm mb-4 font-body flex items-center gap-1">
                      <Icon name="MapPin" size={12} />
                      {c.city}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--lime)" }} />
                      <span className="font-display text-sm font-medium" style={{ color: "var(--lime)" }}>{c.result}</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="mt-12 text-center">
              <p className="text-white/40 text-sm font-body">
                Более 50 реализованных объектов в Уральском и Западно-Сибирском регионах
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
