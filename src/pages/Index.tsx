import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const LOGO = "https://cdn.poehali.dev/projects/79947095-a3f7-499f-ba89-ef8d40f187be/bucket/5ca6fc9c-45e8-43e3-abab-612549b7de80.png";
const IMG_COURT_1 = "https://cdn.poehali.dev/projects/79947095-a3f7-499f-ba89-ef8d40f187be/files/87a1973d-b204-4163-ad60-e70633657fe6.jpg";
const IMG_COURT_2 = "https://cdn.poehali.dev/projects/79947095-a3f7-499f-ba89-ef8d40f187be/files/0e09a9c9-8080-4f67-9b6e-f48f4b77bf96.jpg";
const IMG_COURT_3 = "https://cdn.poehali.dev/projects/79947095-a3f7-499f-ba89-ef8d40f187be/files/765722af-5f3d-4aad-95d1-39acd34ac746.jpg";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </div>
  );
}

const specs = [
  { label: "Длина корта", value: "20 м", icon: "Ruler" },
  { label: "Ширина корта", value: "10 м", icon: "Ruler" },
  { label: "Высота ограждения", value: "4 м", icon: "ArrowUp" },
  { label: "Стекло", value: "Закалённое 10–12 мм", icon: "Layers" },
  { label: "Металлокаркас", value: "Оцинкованная сталь", icon: "Settings" },
  { label: "Покрытие", value: "Искусственная трава / бетон", icon: "Grid3X3" },
  { label: "Освещение", value: "LED 400 лм/м²", icon: "Zap" },
  { label: "Срок монтажа", value: "от 5 дней", icon: "Clock" },
];

const utp = [
  {
    icon: "MapPin",
    title: "Единственный на Урале",
    desc: "Мы единственный производитель падел-кортов на Урале — никаких посредников, прямые поставки с собственного производства.",
  },
  {
    icon: "Shield",
    title: "Гарантия 5 лет",
    desc: "Полная гарантия на металлоконструкцию и стекло. Постгарантийное обслуживание по всему региону.",
  },
  {
    icon: "Truck",
    title: "Производство и доставка",
    desc: "Собственный цех, полный цикл от металла до монтажа. Доставка по всей России.",
  },
  {
    icon: "ClipboardList",
    title: "Под ключ",
    desc: "Проектирование, изготовление, доставка, монтаж, пусконаладка. Вы принимаете готовый объект.",
  },
  {
    icon: "Building2",
    title: "Для бизнеса любого масштаба",
    desc: "От частного клуба до сети ТРЦ и муниципальных спорткомплексов. Индивидуальные условия для крупных заказчиков.",
  },
  {
    icon: "Wrench",
    title: "Сервис и запчасти",
    desc: "Склад запасных частей в Екатеринбурге. Выезд сервисной бригады в течение 48 часов.",
  },
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

const gallery = [
  { img: IMG_COURT_1, label: "Общий вид корта" },
  { img: IMG_COURT_2, label: "Детали конструкции" },
  { img: IMG_COURT_3, label: "Корт в ТРЦ" },
];

export default function Index() {
  const [form, setForm] = useState({ name: "", company: "", phone: "", type: "", comment: "" });
  const [sent, setSent] = useState(false);
  const [activeGallery, setActiveGallery] = useState(0);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="min-h-screen font-body overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src={LOGO} alt="Эверест" className="h-9 w-auto object-contain" />
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-body text-gray-600">
            <a href="#specs" className="hover:text-gray-900 transition-colors">Характеристики</a>
            <a href="#utp" className="hover:text-gray-900 transition-colors">Преимущества</a>
            <a href="#gallery" className="hover:text-gray-900 transition-colors">Галерея</a>
            <a href="#cases" className="hover:text-gray-900 transition-colors">Кейсы</a>
          </div>
          <a
            href="#form"
            className="font-display font-semibold text-sm px-5 py-2 tracking-wide text-gray-900 transition-colors"
            style={{ backgroundColor: "var(--lime)" }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--lime-dark)")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--lime)")}
          >
            ПОЛУЧИТЬ КП
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16" style={{ backgroundColor: "var(--indigo-dark)" }}>
        {/* Grid background */}
        <div className="absolute inset-0 grid-lines opacity-30" />

        {/* Geometric accents */}
        <div className="absolute top-20 right-0 w-[600px] h-[600px] opacity-10">
          <div className="absolute inset-0 border-2 rotate-12 scale-75" style={{ borderColor: "var(--lime)" }} />
          <div className="absolute inset-0 border border-white rotate-6 scale-90" />
          <div className="absolute inset-8 border -rotate-3" style={{ borderColor: "var(--lime)" }} />
        </div>

        {/* Bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-1" style={{ backgroundColor: "var(--lime)" }} />
        <div className="absolute bottom-8 left-0 right-0 h-px bg-white/10" />

        {/* Court image overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
          <img src={IMG_COURT_1} alt="Падел-корт Эверест" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, var(--indigo-dark), rgba(15,26,94,0.6), transparent)" }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 animate-fade-up"
              style={{ border: "1px solid rgba(132,204,22,0.4)", backgroundColor: "rgba(132,204,22,0.1)" }}
            >
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "var(--lime)" }} />
              <span className="text-xs font-display tracking-widest uppercase" style={{ color: "var(--lime)" }}>Производство · Урал</span>
            </div>

            <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-none mb-2 animate-fade-up">
              ЕДИНСТВЕННЫЙ
            </h1>
            <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold leading-none mb-6 animate-fade-up" style={{ color: "var(--lime)" }}>
              ПРОИЗВОДИТЕЛЬ
            </h1>
            <p className="text-white/60 font-display text-xl lg:text-2xl tracking-wide mb-2 animate-fade-up">
              падел-кортов на Урале
            </p>

            <div className="w-16 h-1 my-8 animate-fade-up" style={{ backgroundColor: "var(--lime)" }} />

            <p className="text-white/70 text-lg leading-relaxed max-w-lg mb-10 animate-fade-up">
              Изготавливаем и устанавливаем падел-корты для ТРЦ, фитнес-клубов,
              девелоперов и муниципалитетов. Полный цикл — от проекта до сдачи объекта.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up">
              <a
                href="#form"
                className="font-display font-bold text-base px-8 py-4 tracking-wider text-gray-900 transition-colors"
                style={{ backgroundColor: "var(--lime)" }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--lime-dark)")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--lime)")}
              >
                ПОЛУЧИТЬ КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ
              </a>
              <a
                href="#specs"
                className="border border-white/30 text-white font-display font-medium text-base px-8 py-4 transition-colors tracking-wider hover:border-white"
              >
                ХАРАКТЕРИСТИКИ
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-14 border-t border-white/10 pt-10 animate-fade-up">
              {[
                { num: "50+", label: "Кортов установлено" },
                { num: "5 лет", label: "Гарантия" },
                { num: "5 дней", label: "Срок монтажа" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl font-bold" style={{ color: "var(--lime)" }}>{s.num}</div>
                  <div className="text-white/50 text-xs mt-1 font-body">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* UNIQUE BANNER */}
      <section className="py-6" style={{ backgroundColor: "var(--lime)" }}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-center gap-4 flex-wrap">
          <Icon name="Award" size={24} className="text-gray-900 shrink-0" />
          <p className="font-display text-lg font-semibold text-gray-900 tracking-wide text-center">
            ООО «ЭВЕРЕСТ» — ЕДИНСТВЕННЫЙ ПРОИЗВОДИТЕЛЬ ПАДЕЛ-КОРТОВ НА УРАЛЕ.
            <span style={{ color: "var(--indigo)" }}> Прямые поставки без посредников.</span>
          </p>
        </div>
      </section>

      {/* SPECS */}
      <section id="specs" className="py-24" style={{ backgroundColor: "var(--surface-1)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="flex items-end justify-between mb-16">
              <div>
                <div className="font-display text-sm tracking-widest uppercase mb-3" style={{ color: "var(--lime-dark)" }}>/ Спецификации</div>
                <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900">
                  ТЕХНИЧЕСКИЕ<br />ХАРАКТЕРИСТИКИ
                </h2>
              </div>
              <div className="hidden md:block w-32 h-32 border-2 border-gray-200 relative">
                <div className="absolute inset-4 border border-gray-200" />
                <div className="absolute inset-8" style={{ backgroundColor: "rgba(132,204,22,0.2)" }} />
              </div>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
            {specs.map((spec, i) => (
              <AnimatedSection key={spec.label}>
                <div className="bg-white p-8 group hover:bg-[#0f1a5e] transition-all duration-300 cursor-default h-full">
                  <div className="mb-4" style={{ color: "var(--lime-dark)" }}>
                    <Icon name={spec.icon} size={22} fallback="Settings" />
                  </div>
                  <div className="font-display text-2xl font-bold text-gray-900 group-hover:text-white mb-2">
                    {spec.value}
                  </div>
                  <div className="text-gray-500 text-sm group-hover:text-white/60 font-body">
                    {spec.label}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="mt-8 p-6 flex items-start gap-4" style={{ backgroundColor: "var(--indigo)", borderLeft: "4px solid var(--lime)" }}>
              <Icon name="Info" size={20} className="shrink-0 mt-0.5" />
              <p className="text-white/80 text-sm font-body">
                Все корты изготавливаются по индивидуальным техническим заданиям. Возможны нестандартные размеры,
                брендирование конструкции, интеграция систем освещения и видеонаблюдения.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* UTP */}
      <section id="utp" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="mb-16">
              <div className="font-display text-sm tracking-widest uppercase mb-3" style={{ color: "var(--lime-dark)" }}>/ Почему Эверест</div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 max-w-xl">
                НАШИ ПРЕИМУЩЕСТВА
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {utp.map((item) => (
              <AnimatedSection key={item.title}>
                <div className="group border border-gray-100 p-8 hover:border-lime-500 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-12 h-12 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-[#84cc16]" style={{ backgroundColor: "rgba(26,41,128,0.05)" }}>
                    <Icon name={item.icon} size={22} className="text-[#1a2980] group-hover:text-gray-900" fallback="Star" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-body">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

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

      {/* FORM */}
      <section id="form" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          <AnimatedSection>
            <div>
              <div className="font-display text-sm tracking-widest uppercase mb-3" style={{ color: "var(--lime-dark)" }}>/ Заявка</div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                ПОЛУЧИТЬ<br />КОММЕРЧЕСКОЕ<br />ПРЕДЛОЖЕНИЕ
              </h2>
              <p className="text-gray-500 font-body leading-relaxed mb-10">
                Оставьте заявку — мы подготовим коммерческое предложение с учётом
                особенностей вашего объекта и ответим в течение рабочего дня.
              </p>

              <div className="space-y-6">
                {[
                  { icon: "Phone", text: "+7 (343) 000-00-00" },
                  { icon: "Mail", text: "sales@everest-padel.ru" },
                  { icon: "MapPin", text: "г. Екатеринбург, ул. Промышленная, 1" },
                ].map((c) => (
                  <div key={c.text} className="flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(26,41,128,0.05)" }}>
                      <Icon name={c.icon} size={18} className="text-[#1a2980]" />
                    </div>
                    <span className="text-gray-700 font-body">{c.text}</span>
                  </div>
                ))}
              </div>

              {/* Decorative court corner */}
              <div className="mt-16 hidden lg:block relative w-40 h-40">
                <div className="absolute inset-0 border-2 border-gray-100" />
                <div className="absolute top-4 left-4 bottom-4 right-4 border border-gray-100" />
                <div className="absolute top-8 left-8 w-8 h-8" style={{ backgroundColor: "var(--lime)" }} />
                <div className="absolute bottom-8 right-8 w-8 h-8" style={{ backgroundColor: "rgba(26,41,128,0.1)" }} />
                <div className="absolute top-4 left-0 right-0 h-px" style={{ backgroundColor: "rgba(132,204,22,0.3)" }} />
                <div className="absolute left-4 top-0 bottom-0 w-px" style={{ backgroundColor: "rgba(132,204,22,0.3)" }} />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            {sent ? (
              <div className="p-12 text-center" style={{ border: "1px solid var(--lime)" }}>
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: "rgba(132,204,22,0.1)" }}>
                  <Icon name="CheckCircle" size={32} className="text-green-500" />
                </div>
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-3">ЗАЯВКА ПРИНЯТА</h3>
                <p className="text-gray-500 font-body">
                  Мы свяжемся с вами в течение рабочего дня и подготовим индивидуальное коммерческое предложение.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-display text-xs tracking-widest uppercase text-gray-500 mb-2 block">ИМЯ *</label>
                    <input
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="Иван Петров"
                      className="w-full border border-gray-200 px-4 py-3 text-gray-900 font-body text-sm focus:outline-none transition-colors"
                      style={{ outline: "none" }}
                      onFocus={e => e.currentTarget.style.borderColor = "var(--indigo)"}
                      onBlur={e => e.currentTarget.style.borderColor = "#e5e7eb"}
                    />
                  </div>
                  <div>
                    <label className="font-display text-xs tracking-widest uppercase text-gray-500 mb-2 block">КОМПАНИЯ</label>
                    <input
                      value={form.company}
                      onChange={e => setForm({ ...form, company: e.target.value })}
                      placeholder="ООО «Ваша компания»"
                      className="w-full border border-gray-200 px-4 py-3 text-gray-900 font-body text-sm focus:outline-none transition-colors"
                      onFocus={e => e.currentTarget.style.borderColor = "var(--indigo)"}
                      onBlur={e => e.currentTarget.style.borderColor = "#e5e7eb"}
                    />
                  </div>
                </div>

                <div>
                  <label className="font-display text-xs tracking-widest uppercase text-gray-500 mb-2 block">ТЕЛЕФОН *</label>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    placeholder="+7 (___) ___-__-__"
                    className="w-full border border-gray-200 px-4 py-3 text-gray-900 font-body text-sm focus:outline-none transition-colors"
                    onFocus={e => e.currentTarget.style.borderColor = "var(--indigo)"}
                    onBlur={e => e.currentTarget.style.borderColor = "#e5e7eb"}
                  />
                </div>

                <div>
                  <label className="font-display text-xs tracking-widest uppercase text-gray-500 mb-2 block">ТИП ОБЪЕКТА</label>
                  <select
                    value={form.type}
                    onChange={e => setForm({ ...form, type: e.target.value })}
                    className="w-full border border-gray-200 px-4 py-3 text-gray-700 font-body text-sm bg-white focus:outline-none transition-colors"
                    onFocus={e => e.currentTarget.style.borderColor = "var(--indigo)"}
                    onBlur={e => e.currentTarget.style.borderColor = "#e5e7eb"}
                  >
                    <option value="">Выберите тип объекта</option>
                    <option>Торгово-развлекательный центр</option>
                    <option>Фитнес-клуб / спорткомплекс</option>
                    <option>Жилой комплекс / девелопмент</option>
                    <option>Муниципальный объект</option>
                    <option>Другое</option>
                  </select>
                </div>

                <div>
                  <label className="font-display text-xs tracking-widest uppercase text-gray-500 mb-2 block">КОММЕНТАРИЙ</label>
                  <textarea
                    rows={4}
                    value={form.comment}
                    onChange={e => setForm({ ...form, comment: e.target.value })}
                    placeholder="Количество кортов, площадь, пожелания..."
                    className="w-full border border-gray-200 px-4 py-3 text-gray-900 font-body text-sm focus:outline-none transition-colors resize-none"
                    onFocus={e => e.currentTarget.style.borderColor = "var(--indigo)"}
                    onBlur={e => e.currentTarget.style.borderColor = "#e5e7eb"}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full font-display font-bold text-base py-4 tracking-widest text-gray-900 transition-colors"
                  style={{ backgroundColor: "var(--lime)" }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--lime-dark)")}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--lime)")}
                >
                  ОТПРАВИТЬ ЗАЯВКУ
                </button>

                <p className="text-gray-400 text-xs font-body text-center">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                </p>
              </form>
            )}
          </AnimatedSection>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-white/5" style={{ backgroundColor: "var(--indigo-dark)" }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center md:items-start gap-1">
            <img src={LOGO} alt="Эверест" className="h-8 w-auto object-contain brightness-0 invert opacity-90" />
            <div className="text-white/40 text-xs font-body">Единственный производитель падел-кортов на Урале</div>
          </div>
          <div className="text-white/30 text-xs font-body text-center">
            © 2024 ООО «Эверест». Все права защищены.
          </div>
        </div>
      </footer>

    </div>
  );
}