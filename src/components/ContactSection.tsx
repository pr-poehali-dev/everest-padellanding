import { useState } from "react";
import Icon from "@/components/ui/icon";
import { AnimatedSection, LOGO } from "@/components/shared";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", company: "", phone: "", type: "", comment: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
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
    </>
  );
}
