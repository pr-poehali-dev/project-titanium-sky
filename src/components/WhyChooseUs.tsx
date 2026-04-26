import Icon from "@/components/ui/icon"

const features = [
  {
    icon: "FileText",
    title: "Готовые PDF-схемы",
    description: "Скачайте описание сразу после оплаты — никаких ожиданий. Удобный формат для печати и просмотра на любом устройстве",
  },
  {
    icon: "GraduationCap",
    title: "Понятно для новичков",
    description: "Все материалы написаны простым языком с детальными фото и иллюстрациями — разберётся даже тот, кто держит спицы впервые",
  },
  {
    icon: "MessageCircle",
    title: "Поддержка мастера",
    description: "При возникновении вопросов по схеме — напишите нам. Всегда поможем разобраться с любым моментом",
  },
  {
    icon: "RefreshCw",
    title: "Гарантия качества",
    description: "Если описание не подошло — вернём деньги. Мы уверены в качестве каждого материала в нашем каталоге",
  },
]

export function WhyChooseUs() {
  return (
    <section id="about" className="py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            Почему выбирают <span className="font-semibold">Студию «Вязаный слон»</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Мы помогаем создавать красивые вещи руками — с удовольствием и без лишних сложностей
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-2">
                <Icon name={feature.icon} size={32} />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}