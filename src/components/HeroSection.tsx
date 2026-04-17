import Icon from "@/components/ui/icon";
import { AnimatedSection, LOGO, IMG_COURT_1 } from "@/components/shared";

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

export default function HeroSection() {
  return (
    <>
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
        <div className="absolute inset-0 grid-lines opacity-30" />

        <div className="absolute top-20 right-0 w-[600px] h-[600px] opacity-10">
          <div className="absolute inset-0 border-2 rotate-12 scale-75" style={{ borderColor: "var(--lime)" }} />
          <div className="absolute inset-0 border border-white rotate-6 scale-90" />
          <div className="absolute inset-8 border -rotate-3" style={{ borderColor: "var(--lime)" }} />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1" style={{ backgroundColor: "var(--lime)" }} />
        <div className="absolute bottom-8 left-0 right-0 h-px bg-white/10" />

        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
          <img src={IMG_COURT_1} alt="Падел-корт Эверест" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, var(--indigo-dark), rgba(15,26,94,0.6), transparent)" }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
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
            {specs.map((spec) => (
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
    </>
  );
}
